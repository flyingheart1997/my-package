import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  external: ["react", "react-dom", "tailwindcss"],
  noExternal: ["@org-design-system/styles", "tailwind-merge", "clsx", "class-variance-authority"],
  treeshake: true,
  minify: true,
  sourcemap: true,
  splitting: false,
});
