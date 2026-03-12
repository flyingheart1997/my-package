import fs from 'fs';
import path from 'path';

const packagesDir = path.resolve('..');
const distDir = path.resolve('dist');

if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
}

// Order matters: base styles -> tokens -> component styles -> component definitions
const filesToBundle = [
    path.join(packagesDir, 'styles/dist/index.css'),
    path.join(packagesDir, 'styles/dist/component.css'),
    path.join(packagesDir, 'ui/dist/index.css')
];

let bundledContent = '/* Antaris Design System - Bundled CSS */\n';

for (const file of filesToBundle) {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        // Remove internal imports that we are now bundling manually
        content = content.replace(/@import\s+["']@org-design-system\/[^"']+["'];/g, '');
        // We keep @import "tailwindcss" if it's there, but usually it's at the top.
        // Actually, let's ensure @import "tailwindcss" is only at the very top.
        bundledContent += `\n/* Source: ${path.relative(packagesDir, file)} */\n`;
        bundledContent += content;
    } else {
        console.warn(`Warning: File not found for bundling: ${file}`);
    }
}

// Clean up: Ensure @import "tailwindcss" is at the top and unique
const tailwindImport = '@import "tailwindcss";';
bundledContent = bundledContent.replace(/@import\s+["']tailwindcss["'];/g, '');

// Process @source: For production, we point it to the installed component source
// We assume consumers have @org-design-system/components installed as a peer/transitive
const sourcePath = '@org-design-system/components/src/components/**/*.tsx';
bundledContent = bundledContent.replace(/@source\s+["'][^"']+["'];/g, '');

bundledContent = tailwindImport + '\n@source "' + sourcePath + '";\n' + bundledContent;

fs.writeFileSync(path.join(distDir, 'index.css'), bundledContent);
console.log('Successfully bundled CSS into dist/index.css');
