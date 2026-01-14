# Tareen Hossain — Marketing Landing (Vite + React)

A modern, responsive marketing landing built with React and Vite. This repository contains a lightweight component-driven UI focused on clarity, accessible layout, and smooth scroll interactions — ideal as a starter for product or personal landing pages.

## Demo

- Open the app locally (instructions below) to preview the demo.

## Features

- Clean, componentized React structure
- Fast dev experience with Vite
- Responsive hero, features, FAQ, CTA, and trust/logo loop
- Smooth scrolling utilities and scroll-to-top controls
- Opinionated styling with Tailwind-compatible setup

## Tech Stack

- React 19
- Vite
- Tailwind-compatible tooling
- ESLint for linting

## Getting Started

Prerequisites

- Node.js 18+ (or compatible LTS)

Install

```bash
npm install
```

Run development server

```bash
npm run dev
```

Build for production

```bash
npm run build
```

Preview production build

```bash
npm run preview
```

Run linter

```bash
npm run lint
```

## Project Structure (high level)

- `index.html` — Vite entry
- `src/main.jsx` — app bootstrap and router mount
- `src/App.jsx` — root layout
- `src/router/routes.jsx` — route definitions
- `src/sections/` — page sections (Hero, Features, CTA, FAQ, HowItWorks, TrustBadge)
- `src/Components/` — shared UI components (Header, Footer, common pieces, utility helpers)

Notable components:

- `Header.jsx` / `Footer.jsx` — site chrome
- `Hero/*` — hero content and title components
- `TrustBadge/LogoLoop.jsx` — scrolling logo loop for trust
- `utility/ScrollToTop*` — scroll helpers and a floating button

## Customization

- Replace images in `public/images/` and adjust copy inside the relevant section components.
- Tweak styles in `src/App.css` and `index.css` (or adapt to your Tailwind config).

## Deployment

Build with `npm run build` and deploy the contents of `dist/` to any static host (Netlify, Vercel, GitHub Pages, etc.).

#

## License

This project has no license specified. Add a `LICENSE` file or update `package.json` to include a license if you plan to publish.

---