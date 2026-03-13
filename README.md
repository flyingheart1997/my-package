# Antaris Design System 🚀

A professional, high-performance monorepo-based design system library. Built for speed, consistency, and a premium developer experience using **Tailwind CSS 4**, **Turborepo**, and **TypeScript**.

## 🏗️ Architecture

The project is structured as a monorepo using **NPM Workspaces** and **Turborepo** for optimized builds and caching.

```text
.
├── apps
│   ├── storybook         # Component playground & documentation
│   └── web               # Internal internal-use demo application
├── packages
│   ├── design-system     # [@org-design-system/styles.css] Main entry point
│   ├── ui                # [@org-design-system/components] Core components
│   ├── icons             # [@org-design-system/icons] Shared SVG icon library
│   └── styles            # [@org-design-system/styles] Design token engine
```

## 📦 Core Packages

### 💎 [org-design-system](file:///Users/koushikmondal/WORLD-MONITOR/mock-project/packages/design-system)
The primary entry point for consumers. Re-exports everything from components and icons with a simplified setup.

### 🎨 [@org-design-system/styles](file:///Users/koushikmondal/WORLD-MONITOR/mock-project/packages/styles)
The styling engine. Contains semantic colors (OKLCH), typography, and layout tokens.
- **Sync**: Direct integration with Figma via custom automation.
- **Output**: Bundled CSS variables and type-safe TypeScript constants.

### ⚡ [@org-design-system/components](file:///Users/koushikmondal/WORLD-MONITOR/mock-project/packages/ui)
Modular React components built on **Radix UI** and **Tailwind 4**.
- **Features**: Highly customizable via CVA, `asChild` support, and enhanced prop documentation.

### 🛰️ [@org-design-system/icons](file:///Users/koushikmondal/WORLD-MONITOR/mock-project/packages/icons)
optimized SVG icons transformed into React components with an `Icon` suffix.

## 🚀 Quick Start

### 1. Installation
The recommended way to use the design system is via the metapackage:
```bash
npm install @org-design-system/core
```

### 2. Styling Integration
Add this single import to your global CSS (e.g., `globals.css`):
```css
@import "@org-design-system/core/styles.css";
```

### 3. Usage
You can import components and icons directly from `@org-design-system/core`:
```tsx
import { Button, RocketIcon } from "@org-design-system/core";
```

Or, thanks to peer dependencies, you can also import them from their respective packages without separate installation:
```tsx
import { RocketIcon } from "@org-design-system/icons";
import { Button } from "@org-design-system/components";
```

> [!NOTE]
> If you are using `pnpm`, you may need to enable [public-hoist-pattern](https://pnpm.io/npmrc#public-hoist-pattern) in your `.npmrc` to access these packages by name if they are not explicitly in your `package.json`.

## 🛠️ Internal Development

1. **Setup**: `npm install`
2. **Build**: `npm run build` (Builds all packages in topological order)
3. **Explore**: `npm run storybook`

---
*Maintained with ❤️ by Koushik Mondal & the Antaris Team*
