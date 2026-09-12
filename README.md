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

## 📚 React Questions & Answers
1. What is JSX, and why is it used in React?

JSX is a syntax extension that lets you write HTML directly inside JavaScript code. It is used in React because it makes component layout intuitive to read and write, allowing you to easily embed dynamic JavaScript logic directly inside curly braces {}.

2. What is the difference between props and state?

- Props: External, read-only data passed down from a parent component to a child component.
- State: Internal data managed locally inside a component that can change over time. Updating state triggers a component re-render.

3. What does the useState hook do, and where did you use it in this project?

useState allows functional components to create and track local state variables. In this project, it was used to:

- Store selected technologies (stack).
- Store the imported technologies list (technologies).
- Track data loading status (loading).

4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect handles side effects like data fetching or DOM manipulation. It was used here to asynchronously import Explore.json once when the component first mounts on the page, preventing data fetching from blocking initial rendering or causing infinite loops.


5. Why does every item in a .map() list need a unique key prop?

React uses unique keys (like tech.id) to track which list items are added, updated, or removed. It allows React to re-render only the specific DOM node that changed instead of rebuilding the entire list from scratch.

6. What is conditional rendering? Show one place you used it.
Conditional rendering means rendering specific UI elements only when certain conditions are met. In this project, it was used in the sidebar to render an empty state message when no items are selected:

TypeScript
{stack.length === 0 ? (
  <div className="empty-message">No technologies selected yet.</div>
) : (
  <div className="stack-list">{/* Selected technology items */}</div>
)}


7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

-Parent to Child: The parent passes data as attributes (props) to the child component (e.g., <TechCard tech={techData} />).
- Child to Parent: The parent passes a callback function to the child as a prop. The child calls that function when an action occurs to pass data back as arguments (e.g., <TechCard onAdd={handleAddToStack} />).

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
