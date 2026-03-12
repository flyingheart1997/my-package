# @org-design-system/components ⚡

The core UI component library for the Antaris Design System. Engineered with a focus on accessibility, customizability, and performance.

## 🏛️ Architecture

Our components are built on top of a modern technology stack designed for the next decade of web development:

- **Radix UI**: Provides the accessible, unstyled foundation for complex primitives (Dialogs, Selects, Popovers, etc.).
- **Tailwind CSS v4**: Utilizes the latest CSS-in-CSS features, high-performance compilation, and native CSS variable integration.
- **CVA (Class Variance Authority)**: Manages component variants, sizes, and intents in a type-safe manner.
- **Lucide React**: Integrated as the default iconography engine.

## 🎨 Styling System

This package leverages the `@org-design-system/styles` engine. Components are not utility-heavy; instead, they use semantic abstraction:

- **Semantic Tokens**: We don't use `bg-blue-500`. We use `bg-[var(--color-surface-focus)]`.
- **Theme Integration**: All colors are defined in the OKLCH color space for superior visual consistency.

## 📦 Usage

While this package can be used standalone, it is recommended to consume it via the `org-design-system` metapackage.

```tsx
import { Button, Badge, Toggle } from "@org-design-system/components";

function MyComponent() {
  return (
    <Button variant="solid" intent="primary">
      Professional Action
    </Button>
  );
}
```

## 🛠️ Internal Development

### Adding a New Component
1. Create the component in `src/components/[name].tsx`.
2. Export it from `src/index.ts`.
3. Add a story in `apps/storybook` for testing.
4. Run `npm run build` to generate the bundled CSS and JS.

### Build Process
- uses `tsup` for bundling JS/TS.
- uses a custom sync process to bundle component-specific CSS into `dist/index.css`.

---
*Built for the next generation of web applications.*
