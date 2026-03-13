# @org-design-system/core 💎

The official Antaris Design System metapackage. This package provides a unified, production-ready entry point for all components, icons, and styles.

## 🚀 Key Features

- **Simplified Consumption**: Access everything via a single package.
- **Subpath Exports**: Dedicated exports for `components`, `icons`, and `styles`.
- **Tree-Shakable**: Built with `tsup` for optimal performance.
- **Type-Safe**: Complete TypeScript support for all re-exported libraries.

## 📦 Installation

```bash
npm install @org-design-system/core
# or
pnpm add @org-design-system/core
# or
yarn add @org-design-system/core
```

## ⚙️ Setup

### 1. Global Styles
Import the consolidated design system styles into your root application file (e.g., `_app.tsx` or `layout.tsx`):

```css
@import "@org-design-system/core/styles.css";
```

### 2. Tailwind CSS v4 (Optional but Recommended)
If you are using Tailwind CSS v4, our styles will automatically integrate with your `@theme` if you import them after the `tailwindcss` directive.

## 🛠️ Usage

### Main Entry
Re-exports everything for simple usage.

```tsx
import { Button, RocketIcon, Badge } from "@org-design-system/core";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <Badge intent="success">Online</Badge>
      <Button variant="solid" intent="primary" leftIcon={<RocketIcon />}>
        Track Asset
      </Button>
    </div>
  );
}
```

### Subpath Entry
For more granular control or to avoid potential naming conflicts.

```tsx
import { Button } from "@org-design-system/core/components";
import { RocketIcon } from "@org-design-system/core/icons";
```

### Direct Package Usage (Recommended for complex apps)
Because `@org-design-system/core` provides these as peer dependencies, you can also import them directly without separate installation:

```tsx
import { Button } from "@org-design-system/components";
import { RocketIcon } from "@org-design-system/icons";
```

## 🏗️ Internal Structure

This package is a "metapackage" that depends on and re-exports the following internal libraries:
- `@org-design-system/components`: Core UI components.
- `@org-design-system/icons`: optimized SVG icon library.
- `@org-design-system/styles`: The design token and styling engine.

---
*Professional UI for High-Performance Teams.*
