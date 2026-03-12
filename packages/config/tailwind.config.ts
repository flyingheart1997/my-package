import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "../../packages/ui/src/**/*.{ts,tsx}",
        "../../apps/storybook/**/*.{ts,tsx,mdx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};

export default config;
