import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/components.ts", "src/icons.ts", "src/tokens.ts"],
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  external: ["react", "react-dom", "tailwindcss", "@org-design-system/components", "@org-design-system/icons", "@org-design-system/styles"],
  treeshake: true,
  minify: process.env.NODE_ENV === "production",
  splitting: false,
  onSuccess: "node bundle-css.mjs"
});
