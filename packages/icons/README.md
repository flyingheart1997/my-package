# @org-design-system/icons 🛰️

A specialized icon library for the Antaris Design System. This package transforms raw SVGs into optimized, type-safe React components.

## 🚀 Features

- **Icon Suffix**: All components follow the `[Name]Icon` convention (e.g., `SatelliteIcon`) for clarity and to avoid collision with standard HTML tags.
- **Dynamic Styling**: uses `currentColor` for fills/strokes, allowing icons to be styled with standard CSS `color` or Tailwind `text-*` utilities.
- **Sizing Control**: Standardized `width` and `height` props with sensible defaults.
- **Performance**: Fully tree-shakable ES modules.

## 🛠️ Build Process

We use a custom automated pipeline to handle icons:

1. **SVG Optimization**: Raw SVGs are processed to remove hardcoded colors, unnecessary metadata, and standard styling.
2. **SVGR Transformation**: optimized SVGs are converted into React components.
3. **Component Generation**: Components are written to `src/components/` with proper React and TypeScript boilerplate.
4. **Index Generation**: A central export file is created to facilitate clean imports.

### Adding New Icons
Simply drop your `.svg` file into the `svg/` directory and run:
```bash
npm run build
```

## 📦 Usage

```tsx
import { RocketIcon, SatelliteIcon } from "@org-design-system/icons";

function Dashboard() {
  return (
    <div className="text-zinc-50 flex gap-2">
      <RocketIcon className="text-blue-500" width={24} height={24} />
      <span>Mission Control</span>
    </div>
  );
}
```

---
*Precision tools for visual communication.*
