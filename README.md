# 🚀 DevStack - Devlopment Stack

### Build Your Ideal Development Stack

DevStack is an interactive workspace designed to help developers explore, compare, and assemble their ideal technology stack in real time.

Seamlessly explore tools by category, build your custom tech stack in real time, and visually manage your architectural workflow in one unified space.

---

## ✨ Features

### 1. 🧩 Build Your Own Stack
Architect your custom tech stack on the fly with single-click precision.

### 2. 📚 Explore Technologies
Discover a curated library of tools across Frontend, Backend, Databases, DevOps, and beyond.

### 3. ⚡ Interactive Stack Management
Manage your selected stack with instant visual highlights, dynamic card borders, and live feedback.

---

## 🛠️ Technologies Used

- ⚛️ React
- 🔷 TypeScript
- 🎨 Tailwind CSS
- 🌼 DaisyUI
- 🔔 React Toastify
- ⭐ React Icons
- ⚡ Vite

---

## 🎯 Project Highlights

📱 Responsive Layout: Multi-device grid adapted for mobile, tablet, and desktop.

🧩 Modular React Structure: Built with clean, reusable components.

🛡️ Type-Safe Code: Powered by TypeScript interfaces to prevent runtime errors.

⚡ Reactive State: Managed with React Hooks (useState, useEffect) for instant UI sync.

📡 Async Data Fetching: Dynamic JSON loading state simulation.

✨ Tactile UX: Interactive green card borders, disabled button states, and toast alerts.

🎨 Modern UI: Minimalist aesthetics styled with Tailwind CSS.







# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
