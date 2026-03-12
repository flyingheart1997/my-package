import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/components.ts", "src/icons.ts", "src/styles.ts"],
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  external: ["react", "react-dom", "tailwindcss", "@org-design-system/components", "@org-design-system/icons"],
  noExternal: ["@org-design-system/styles"],
  treeshake: true,
  minify: true,
  splitting: false,
});
