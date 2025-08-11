# WebApp SDK
Manage a modern React web application with a lightweight starter/SDK that includes theming, accessibility-minded components, testing, and a production build pipeline.

## Table of Contents
- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Setup and Deployment](#setup-and-deployment)
- [Development](#development)
- [Extras](#extras)
- [License](#license)

## Overview
A minimal, production-ready React starter that demonstrates:
1. A light/dark theme toggle
2. Rotating greetings with a customizable name input
3. An accessible counter component

Use this as a boilerplate/SDK to quickly bootstrap new web apps or prototypes while keeping sensible defaults for testing and builds.

## Tech Stack
- **Frontend**: React 19, React DOM
- **Tooling**: `react-scripts` (Create React App), Web Vitals
- **Testing**: Jest, React Testing Library
- **Language**: JavaScript (ES202x)
- **Styles**: CSS (see `src/App.css`)

## Features

### 1. Example UI Components
- Theme toggle (light/dark) managed via React state
- Rotating multilingual greetings every few seconds
- Name input with `aria-label` for accessibility
- Clickable counter with a visible numeric indicator

### 2. Theming & Accessibility
- Light/Dark mode classes provided in `App.css`
- Interactive controls labeled for screen readers
- Encourages keyboard-friendly interactions

### 3. Tooling & Scripts
- Local dev server with fast refresh (`npm start`)
- Optimized production build output (`npm run build`)
- Unit tests with Jest and React Testing Library (`npm test`)

## Setup and Deployment

### Prerequisites
- Node.js (LTS recommended)
- npm (comes with Node)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/McDevStudios/webapp-sdk.git
   cd webapp-sdk
   ```
2. Install dependencies and start the dev server:
   ```bash
   npm install
   npm start
   ```
   - App will be available at `http://localhost:3000`.
3. Create a production build:
   ```bash
   npm run build
   ```
   - Optimized assets output to `build/`.

### Configuration
- Environment variables must be prefixed with `REACT_APP_` to be exposed to the client.
- Create a `.env` file in the project root. Example:
  ```env
  REACT_APP_API_BASE_URL=https://api.example.com
  REACT_APP_FEATURE_FLAG=true
  ```
- Restart the dev server after changing env vars.

## Development

### Frontend
- Source lives in the `src/` directory.
  - `src/App.js`: Example UI (theme toggle, greeting, input, counter)
  - `src/App.css`: Styles and theme classes
  - `src/index.js`: App bootstrap
  - `src/reportWebVitals.js`: Performance metrics hook
  - `src/setupTests.js`: Jest/RTL test setup

### Backend
- This template is frontend-only. Integrate your own API (REST/GraphQL) as needed and consume via `fetch`/`axios` from the React app.

### Database
- Not included. Choose a backend/database stack that fits your use case.

## Extras
- Add code quality tooling (ESLint, Prettier) and pre-commit hooks (Husky)
- Set up CI (GitHub Actions) for tests and builds
- Deploy the `build/` directory to your hosting provider (GitHub Pages, Netlify, Vercel, S3/CloudFront)
- Optionally migrate to Vite or Next.js if your project needs a different build/runtime approach

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 