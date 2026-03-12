import fs from 'fs';
import path from 'path';

/**
 * PRODUCTION DESIGN TOKEN BUILD SYSTEM
 */

const INPUT_DIR = './figma';
const OUTPUT_DIR = './src';

// --- COLOR CONVERSION (OKLCH) ---
function srgbToLinear(c) {
    return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

function rgbToOklab(r, g, b) {
    const lR = srgbToLinear(r);
    const lG = srgbToLinear(g);
    const lB = srgbToLinear(b);
    const l = 0.4122214708 * lR + 0.5363325363 * lG + 0.0514459929 * lB;
    const m = 0.2119034982 * lR + 0.6748334002 * lG + 0.1132631016 * lB;
    const s = 0.0883024619 * lR + 0.2817188501 * lG + 0.6299787032 * lB;
    const l_ = Math.cbrt(l);
    const m_ = Math.cbrt(m);
    const s_ = Math.cbrt(s);
    return {
        L: 0.2104542553 * l_ + 0.7936177850 * m_ - 0.0040720403 * s_,
        a: 1.9779984951 * l_ - 2.4285922050 * m_ + 0.4505937099 * s_,
        b: 0.0259040371 * l_ + 0.7827717662 * m_ - 0.8086757660 * s_,
    };
}

function formatOklch(color) {
    if (!color || typeof color !== 'object' || !color.components) return color;
    const [r, g, b] = color.components;
    const { L, a: okA, b: okB } = rgbToOklab(r, g, b);
    const C = Math.sqrt(okA * okA + okB * okB);
    const H = (Math.atan2(okB, okA) * 180) / Math.PI;
    const L_pct = (L * 100).toFixed(3);
    const C_val = C.toFixed(5);
    const H_val = H < 0 ? (H + 360).toFixed(3) : H.toFixed(3);
    return color.alpha < 1
        ? `oklch(${L_pct}% ${C_val} ${H_val} / ${color.alpha})`
        : `oklch(${L_pct}% ${C_val} ${H_val})`;
}

// --- UNIT CONVERSION ---
const toRem = (px) => `${px / 16}rem`;

function isUnitless(path) {
    const unitlessKeywords = ['opacity', 'font-weight', 'zIndex', 'line-height'];
    return unitlessKeywords.some(keyword => path.toLowerCase().includes(keyword.toLowerCase()));
}

function sanitizeName(name) {
    return name.replace(/[\.\/,\s]/g, '-');
}

function resolveValue(token, path, allFlattened) {
    const val = token.$value;
    const type = token.$type;

    if (val === null || val === undefined) return null;

    // Handle Figma Ref Style: {color.blue.500}
    if (typeof val === 'string' && val.startsWith('{') && val.endsWith('}')) {
        const refPath = val.slice(1, -1).replace(/\./g, '-').replace(/,/g, '-');
        return allFlattened[refPath] || val;
    }

    if (type === 'color' && typeof val === 'object' && val.hex) {
        return formatOklch(val);
    }

    if (typeof val === 'number') {
        if (isUnitless(path)) return val;
        if (type === 'dimension' || type === 'number') {
            if (val > 1000) return '9999px';
            if (val === 0) return '0';
            return toRem(val);
        }
    }
    return val;
}

function flatten(obj, path = '', result = {}) {
    for (const key in obj) {
        if (key.startsWith('$')) continue;
        const currentPath = path ? `${path}-${key}` : key;
        const node = obj[key];
        if (node && typeof node === 'object' && ('$value' in node)) {
            result[sanitizeName(currentPath)] = node;
        } else if (node && typeof node === 'object') {
            flatten(node, currentPath, result);
        }
    }
    return result;
}

function setNested(obj, path, value) {
    if (!path) return;
    const parts = path.split('-');
    let current = obj;
    for (let i = 0; i < parts.length - 1; i++) {
        const part = parts[i];
        if (!current[part] || typeof current[part] !== 'object') {
            const oldValue = current[part];
            current[part] = oldValue ? { 'DEFAULT': oldValue } : {};
        }
        current = current[part];
    }
    const lastPart = parts[parts.length - 1];
    if (typeof current[lastPart] === 'object' && current[lastPart] !== null) {
        current[lastPart]['DEFAULT'] = value;
    } else {
        current[lastPart] = value;
    }
}

async function build() {
    console.log('🏗️  Building Design Tokens...');

    // 1. Load Source Files
    const globalRaw = JSON.parse(fs.readFileSync(path.join(INPUT_DIR, 'global.tokens.json'), 'utf8'));
    const semanticRaw = JSON.parse(fs.readFileSync(path.join(INPUT_DIR, 'semantic.tokens.json'), 'utf8'));

    // 2. Flatten for Resolution
    const globalFlat = flatten(globalRaw);
    const semanticFlat = flatten(semanticRaw);
    const allFlat = { ...globalFlat, ...semanticFlat };

    // 3. Resolve actual values
    const allResolvedFlat = {};
    for (const [name, token] of Object.entries(allFlat)) {
        allResolvedFlat[name] = resolveValue(token, name, allResolvedFlat);
    }
    // Deep resolution for aliases
    for (let i = 0; i < 2; i++) {
        for (const [name, token] of Object.entries(allFlat)) {
            allResolvedFlat[name] = resolveValue(token, name, allResolvedFlat);
        }
    }

    // 4. Generate CSS Variables
    let cssVars = ':root {\n';
    for (const [name, token] of Object.entries(allFlat)) {
        let val;
        // Maintain alias links in CSS for inspectability
        if (token.$extensions?.['com.figma.aliasData']?.targetVariableName) {
            const alias = sanitizeName(token.$extensions['com.figma.aliasData'].targetVariableName);
            val = `var(--${alias})`;
        } else {
            val = allResolvedFlat[name];
        }
        if (val !== null) cssVars += `  --${name}: ${val};\n`;
    }
    cssVars += '}\n';

    // 5. Build nested structure for tokens.generated.ts (Literal Values)
    const tokensExport = {};
    for (const [name, val] of Object.entries(allResolvedFlat)) {
        setNested(tokensExport, name, val);
    }

    // 6. Build nested structure for tailwind.tokens.ts (CSS Var Refs)
    const twConfig = {
        colors: {}, spacing: {}, borderRadius: {}, opacity: {},
        fontSize: {}, fontWeight: {}, lineHeight: {}, letterSpacing: {}
    };

    // Use ALL tokens for tailwind mapping, prioritized by semantic importance
    for (const name of Object.keys(allFlat)) {
        const cssVar = `var(--${name})`;
        const lower = name.toLowerCase();

        // Categorize into Tailwind buckets
        if (/font-size/i.test(name)) {
            setNested(twConfig.fontSize, name.replace(/.*font-size-/i, ''), cssVar);
        } else if (/font-weight/i.test(name)) {
            setNested(twConfig.fontWeight, name.replace(/.*font-weight-/i, ''), cssVar);
        } else if (/line-height/i.test(name)) {
            setNested(twConfig.lineHeight, name.replace(/.*line-height-/i, ''), cssVar);
        } else if (/letter-spacing/i.test(name)) {
            setNested(twConfig.letterSpacing, name.replace(/.*letter-spacing-/i, ''), cssVar);
        } else if (/color/i.test(name)) {
            setNested(twConfig.colors, name.replace(/^color-/i, ''), cssVar);
        } else if (/spacing/i.test(name) || /sizing/i.test(name)) {
            setNested(twConfig.spacing, name.replace(/^(spacing|sizing)-/i, ''), cssVar);
        } else if (/radius/i.test(name)) {
            setNested(twConfig.borderRadius, name.replace(/^radius-/i, ''), cssVar);
        } else if (/opacity/i.test(name)) {
            setNested(twConfig.opacity, name.replace(/.*opacity-/i, ''), cssVar);
        }
    }

    // Save Output
    if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

    fs.writeFileSync(path.join(OUTPUT_DIR, 'index.css'), cssVars);

    const twContent = `export const tokens = ${JSON.stringify(twConfig, null, 2).replace(/"/g, "'")};\n`;
    fs.writeFileSync(path.join(OUTPUT_DIR, 'tailwind.tokens.ts'), twContent);

    const genContent = `export const tokens = ${JSON.stringify(tokensExport, null, 2).replace(/"/g, "'")} as const;\n\nexport type DesignTokens = typeof tokens;\n`;
    fs.writeFileSync(path.join(OUTPUT_DIR, 'tokens.generated.ts'), genContent);

    console.log(`✨ Build Complete: ${path.join(process.cwd(), OUTPUT_DIR)}`);
}

build().catch(console.error);
