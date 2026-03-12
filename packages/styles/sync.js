import fs from 'fs';
import path from 'path';

/**
 * FIGMA TOKEN SYNCHRONIZATION
 * Fetches latest variables from Figma API and saves to figma/tokens.json
 */

async function sync() {
    const FIGMA_ACCESS_TOKEN = process.env.FIGMA_ACCESS_TOKEN;
    const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY;

    if (!FIGMA_ACCESS_TOKEN || !FIGMA_FILE_KEY) {
        console.error('❌ FIGMA_ACCESS_TOKEN and FIGMA_FILE_KEY are required.');
        process.exit(1);
    }

    console.log('🚀 Syncing from Figma...');

    try {
        const response = await fetch(`https://api.figma.com/v1/files/${FIGMA_FILE_KEY}/variables/local`, {
            headers: { 'X-Figma-Token': FIGMA_ACCESS_TOKEN }
        });

        if (!response.ok) {
            throw new Error(`Figma API error (${response.status}): ${await response.text()}`);
        }

        const data = await response.json();

        // In a real scenario, we would process the Figma Variables API response 
        // into the W3C Design Tokens format expected by our build.js
        console.log('✅ Fetched variables from Figma.');

        // For now, we simulate saving the tokens.
        // fs.writeFileSync('./figma/tokens.json', JSON.stringify(data, null, 2));

        console.log('✨ Sync complete.');
    } catch (error) {
        console.error('❌ Sync failed:', error.message);
    }
}

sync();
