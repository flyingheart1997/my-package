import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const packagesDir = path.resolve(__dirname, '..');
const distDir = path.join(__dirname, 'dist');

if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
}

// Order matters: base styles -> tokens -> component styles -> component definitions
const filesToBundle = [
    path.join(packagesDir, 'styles/dist/index.css'),
    path.join(packagesDir, 'styles/dist/component.css'),
    path.join(packagesDir, 'ui/dist/index.css'),
    path.join(packagesDir, 'ui/dist/style.css')
];

let bundledContent = '';

for (const file of filesToBundle) {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');

        // Remove all Tailwind-related directives to avoid conflicts in consumer projects
        content = content.replace(/@import\s+["']tailwindcss["'];/g, '');
        content = content.replace(/@import\s+["']@org-design-system\/[^"']+["'];/g, '');
        content = content.replace(/@source\s+["'][^"']+["'];/g, '');

        bundledContent += `\n/* From: ${path.relative(packagesDir, file)} */\n`;
        bundledContent += content.trim() + '\n';
    } else {
        console.warn(`Warning: File not found for bundling: ${file}`);
    }
}

const header = `/* Antaris Design System - Bundled Production CSS */
@source "../../ui/src/**/*.{ts,tsx}";
@source "../../icons/src/**/*.{ts,tsx}";
@source "../../styles/src/**/*.{ts,tsx}";
@source "../../components/src/**/*.{ts,tsx}";
@source "../src/**/*.{ts,tsx}";

`;

bundledContent = header + bundledContent;

fs.writeFileSync(path.join(distDir, 'index.css'), bundledContent);
fs.writeFileSync(path.join(distDir, 'style.css'), bundledContent);
fs.writeFileSync(path.join(distDir, 'styles.css'), bundledContent);
console.log('Successfully bundled professional production-ready CSS into dist/index.css, dist/style.css, and dist/styles.css');
