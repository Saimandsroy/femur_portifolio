# TypeScript + React + Tailwind CSS Project

A modern web development starter template built with **Vite**, **React**, **TypeScript**, and **Tailwind CSS**.

## 🚀 Tech Stack

- **Vite** - Next generation frontend tooling
- **React 18** - A JavaScript library for building user interfaces
- **TypeScript** - Typed superset of JavaScript
- **Tailwind CSS** - A utility-first CSS framework

## 📦 What's Included

- ⚡️ Lightning-fast HMR (Hot Module Replacement)
- 🎨 Tailwind CSS with custom configuration
- 📝 TypeScript for type safety
- 🔧 ESLint configuration
- 🎯 PostCSS with Autoprefixer

## 🛠️ Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

Dependencies are already installed! If you need to reinstall:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173/`

### Build

Build for production:

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
ts-tailwind-project/
├── src/
│   ├── assets/          # Static assets
│   ├── App.tsx          # Main App component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles with Tailwind directives
├── public/              # Public static files
├── index.html           # HTML entry point
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## 🎨 Tailwind CSS

Tailwind CSS is configured and ready to use. The configuration file is at `tailwind.config.js`.

### Custom Utilities

- `animate-spin-slow` - Slow spinning animation (3s duration)

### Usage Example

```tsx
<div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-lg">
  Hello Tailwind!
</div>
```

## 📝 TypeScript

TypeScript is fully configured with strict mode enabled. Configuration files:

- `tsconfig.json` - Base TypeScript config
- `tsconfig.app.json` - App-specific config
- `tsconfig.node.json` - Node/Vite config

## 🔧 Customization

### Tailwind Configuration

Edit `tailwind.config.js` to customize your design system:

```js
theme: {
  extend: {
    colors: {
      // Add custom colors
    },
    spacing: {
      // Add custom spacing
    },
  },
}
```

### Vite Configuration

Edit `vite.config.ts` to customize build settings and plugins.

## 📚 Learn More

- [Vite Documentation](https://vite.dev/)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)

## ⚠️ Note on CSS Lint Warnings

You may see warnings about `@tailwind` directives in your IDE. These are expected and safe to ignore - they're Tailwind-specific directives that work perfectly at runtime.

## 🎉 Happy Coding!

Start building your amazing application!
# femur_portifolio
