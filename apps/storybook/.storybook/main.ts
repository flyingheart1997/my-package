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
    typescript: {
        reactDocgen: 'react-docgen', // Using the faster version or false
        check: false,
    },
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
            build: {
                sourcemap: false,
                rollupOptions: {
                    cache: false,
                    onwarn(warning: any, warn: any) {
                        if (warning.code === 'MODULE_LEVEL_DIRECTIVE' || warning.message.includes('"use client"')) {
                            return;
                        }
                        warn(warning);
                    },
                },
                chunkSizeWarningLimit: 1000,
            },
            optimizeDeps: {
                include: ["react", "react-dom", "lucide-react", "@radix-ui/react-slot"],
            },
            resolve: {
                alias: [
                    {
                        find: /^org-design-system$/,
                        replacement: join(__dirname, "../../../packages/design-system/src/index.ts")
                    }
                ]
            }
        });
    }
};
export default config;
