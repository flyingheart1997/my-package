# Antaris Storybook 📚

The interactive component playground and documentation site for the Antaris Design System.

## 🚀 Purpose

Storybook allows us to develop components in isolation, document their API, and visualize every possible state (variants, sizes, intents) without needing to integrate into a real application first.

## 🛠️ Features

- **Component Explorer**: Browse every available component in the library.
- **Interactive Controls**: Modify props (e.g., change `intent` from `primary` to `success`) on the fly.
- **Autodocs**: Automatically generated documentation based on TypeScript types and JSDoc comments.
- **A11y Testing**: Built-in accessibility checks for every story.

## 🏃 Local Development

From the root of the monorepo:
```bash
npm run storybook
```

Storybook will be available at `http://localhost:6006`.

## ✍️ Writing Stories

Stories are located in `src/stories/`.

### Guidelines
- **Variant Coverage**: Ensure every `variant` and `intent` defined in CVA has at least one corresponding story.
- **Intents Story**: Create a dedicated "Intents" story that shows all states (Success, Warning, etc.) side-by-side for quick visual regression testing.
- **Layout**: Use `parameters: { layout: 'centered' }` for individual components.

---
*Documentation is a feature.*
