# @org-design-system/styles 🎨

The design token engine and foundational styling layer for the Antaris Design System.

## 🧱 What's Inside?

- **Semantic Tokens**: Abstracted variables for colors, spacing, typography, and effects (e.g., `bg-surface`, `text-primary`).
- **OKLCH Color Engine**: Our color system uses the OKLCH color space for perceptually uniform lightness and vibrant, consistent colors across displays.
- **CSS Variable Injection**: Automatically injects standard CSS variables into the `:root` pseudo-class.
- **Type-Safe Constants**: JavaScript and TypeScript exports for use in logical conditions or CSS-in-JS.

## ⚙️ Token Architecture

We utilize a **multi-layer** variable system:
1. **Pimitives**: Raw values (e.g., `green-500`, `radius-4`).
2. **Semantic**: Contextual variables mapping to primitives (e.g., `surface-success` -> `green-alpha-4`).
3. **Component-Specific**: Targeted overrides when necessary.

## 🛠️ Figma Integration

This package is designed to stay in sync with our Figma workspace.
```bash
# Sync tokens from Figma Variables API
npm run sync
```
*Note: Requires `FIGMA_ACCESS_TOKEN` and `FIGMA_FILE_KEY` environment variables.*

## 📦 Consumption

This package is marked as **private** and is intended to be consumed internally by the `@org-design-system/components` package or via the main `@org-design-system/core` metapackage.

### Direct Import (Internal Only)
```tsx
import { tokens } from "@org-design-system/styles";

const successColor = tokens.colors.success;
```

---
*The foundation of visual excellence.*
