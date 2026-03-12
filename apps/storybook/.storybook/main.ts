import type { StorybookConfig } from "@storybook/experimental-nextjs-vite";
import { join, dirname } from "path";

function getAbsolutePath(value: string): any {
    return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
    stories: [
        "../src/**/*.mdx",
        "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    ],
    addons: [
        getAbsolutePath("@storybook/addon-essentials"),
        getAbsolutePath("@storybook/addon-onboarding"),
    ],
    framework: {
        name: getAbsolutePath("@storybook/experimental-nextjs-vite"),
        options: {},
    },
    async viteFinal(config) {
        const { mergeConfig } = await import('vite');
        return mergeConfig(config, {
            server: {
                fs: {
                    allow: [
                        join(__dirname, ".."),
                        join(__dirname, "../../../packages")
                    ]
                }
            },
            resolve: {
                alias: [
                    {
                        find: /^@org-design-system\/components\/index\.css$/,
                        replacement: join(__dirname, "../../../packages/ui/src/index.css")
                    },
                    {
                        find: /^@org-design-system\/components$/,
                        replacement: join(__dirname, "../../../packages/ui/src/index.ts")
                    },
                    {
                        find: /^@org-design-system\/components\/(.*)$/,
                        replacement: join(__dirname, "../../../packages/ui/src/$1")
                    },
                    {
                        find: /^@org-design-system\/tokens\/(.*)\.css$/,
                        replacement: join(__dirname, "../../../packages/tokens/src/$1.css")
                    },
                    // For tokens and icons, we let Vite resolve via package.json 
                    // or add more specific aliases if they fail.
                    // But we must NOT alias a package name strictly to a .ts file if CSS imports it.
                ]
            }
        });
    }
};
export default config;
