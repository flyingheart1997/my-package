import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const SVG_DIR = path.resolve(__dirname, 'svg');
const OUTPUT_DIR = path.resolve(__dirname, 'src');

/**
 * ICON BUILD ENGINE
 * 1. Optimizes SVGs using SVGO
 * 2. Converts SVGs to React Components using SVGR
 * 3. Generates index.ts exports
 */

async function build() {
    console.log('🎨 Building Icon Library...');

    // Clean output directory for a fresh build
    if (fs.existsSync(OUTPUT_DIR)) {
        console.log('🧹 Cleaning existing components...');
        fs.rmSync(OUTPUT_DIR, { recursive: true, force: true });
    }
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });

    if (!fs.existsSync(SVG_DIR)) {
        console.error('❌ svg/ folder not found. Please add your SVG files there.');
        return;
    }

    const BIN_DIR = path.resolve(__dirname, 'node_modules', '.bin');
    const SVGR_BIN = path.join(BIN_DIR, 'svgr');

    // 1. Pre-process SVGs to strip hardcoded styles and colors
    console.log('🧹 Pre-processing SVGs (stripping hardcoded styles)...');
    try {
        const svgFiles = fs.readdirSync(SVG_DIR).filter(f => f.endsWith('.svg'));
        for (const file of svgFiles) {
            const filePath = path.join(SVG_DIR, file);
            let content = fs.readFileSync(filePath, 'utf8');

            // Strip style attributes entirely
            content = content.replace(/style="[^"]*"/g, '');
            // Strip display-p3 color attributes if they exist
            content = content.replace(/fill="color\(display-p3[^"]+"\)/g, '');

            fs.writeFileSync(filePath, content);
        }
    } catch (error) {
        console.error('⚠️ Pre-processing failed:', error.message);
    }

    // 2. Run SVGR
    console.log('🚜 Running SVGR transformation...');
    try {
        execSync(`"${SVGR_BIN}" --out-dir "${OUTPUT_DIR}" --icon --typescript --ref --svg-props className="org-icon" --replace-attr-values "#000=currentColor" --replace-attr-values "black=currentColor" --replace-attr-values "#EEEEEE=currentColor" --replace-attr-values "#eee=currentColor" --replace-attr-values "#EEE=currentColor" "${SVG_DIR}"`, { stdio: 'inherit' });
    } catch (error) {
        console.error('❌ SVGR failed:', error.message);
        return;
    }

    // 3. Post-process: Rename components to include "Icon" suffix and generate index.ts
    console.log('🔧 Finalizing component naming and index generation...');
    try {
        const componentFiles = fs.readdirSync(OUTPUT_DIR).filter(f => f.endsWith('.tsx'));
        const exports = [];

        for (const file of componentFiles) {
            const oldPath = path.join(OUTPUT_DIR, file);
            const componentName = file.replace('.tsx', '');
            const newComponentName = `${componentName}Icon`;
            const newFileName = `${newComponentName}.tsx`;
            const newPath = path.join(OUTPUT_DIR, newFileName);

            let content = fs.readFileSync(oldPath, 'utf8');

            // Replace component name in content
            // SVGR typically generates: const SvgName = ... and export default SvgName
            // Note: with --ref it might be a bit different. Let's make it robust.
            content = content.replace(new RegExp(`Svg${componentName}`, 'g'), `Svg${newComponentName}`);
            content = content.replace(new RegExp(`${componentName}_default`, 'g'), `${newComponentName}_default`);
            
            // To be sure about the export name and add React 19 type compatibility
            if (content.includes(`ForwardRef = forwardRef(Svg${newComponentName})`)) {
                 content = content.replace(/const ForwardRef = forwardRef\(Svg[a-zA-Z0-0]+\)/, `const ${newComponentName} = forwardRef(Svg${newComponentName}) as any`);
                 content = content.replace('export default ForwardRef;', `export default ${newComponentName};`);
            }

            fs.writeFileSync(newPath, content);
            if (oldPath !== newPath) {
                fs.unlinkSync(oldPath);
            }
            exports.push(`export { default as ${newComponentName} } from "./${newComponentName}";`);
        }

        fs.writeFileSync(path.join(OUTPUT_DIR, 'index.ts'), exports.join('\n') + '\n');
    } catch (error) {
        console.error('❌ Post-processing failed:', error.message);
    }

    console.log('✨ Icon library built successfully in packages/icons/src/');
}

build().catch(console.error);
