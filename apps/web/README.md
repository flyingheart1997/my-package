# Antaris Internal Demo (Web) 🌐

An internal Next.js application used for playground testing and real-world integration verification of the Antaris Design System components.

## 🚀 Purpose

This app serves as a "Canary" environment for the design system. It is used to:
- Verify component behavior in a standard Next.js (App Router) environment.
- Test SSR compatibility.
- Validate the complex CSS bundling and token injection process.

## 🛠️ Tech Stack

- **Next.js**: App Router based.
- **TypeScript**: Typed component integration.
- **Tailwind CSS v4**: for local styling and layout.
- **org-design-system**: consumed directly from the local workspace.

## 🏃 Local Development

From the root of the monorepo:
```bash
npm run dev
# or specifically for the web app
npx turbo dev --filter=web
```

The app will be available at `http://localhost:3001`.

## 🧪 Testing Components

When adding new components to `packages/ui`, it is recommended to drop an instance of that component into `src/app/page.tsx` to see how it performs alongside other components and real-world layout constraints.

---
*For internal use only.*
