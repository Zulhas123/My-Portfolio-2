# My Portfolio (React + Vite)

A modern, minimal, single-page portfolio built with React and Vite, refactored to follow **Clean Architecture** and **SOLID** principles. The goal is a small but production-ready codebase with clear boundaries, reusable UI components, and an easy path to replace data sources (static → API) without rewriting the UI.

## Features

- Section-based portfolio layout with smooth scrolling (`#hash` or route-driven section targeting)
- Route-per-section navigation (React Router)
- Centralized data loading with caching (loads once, shared across Header + Page)
- Responsive, minimal UI with consistent styling
- Contact form with `mailto:` submission

## Architecture (Clean Architecture)

This project is organized into four layers:

- **Domain** (`src/domain/`): Pure business models and invariants (no React, no network).
- **Application** (`src/application/`): Use-cases that orchestrate Domain + abstractions (repository interfaces).
- **Infrastructure** (`src/infrastructure/`): Concrete implementations (e.g. a static repository; future API clients).
- **Presentation** (`src/presentation/`): React UI, routes, hooks, and providers. Depends on Application via dependency injection.

Key design decisions:

- **Dependency inversion**: Presentation depends on Application interfaces/use-cases; Infrastructure provides implementations.
- **DI container**: A small container wires repositories to use-cases at app startup.
- **Async-first services**: Repositories and use-cases are `async` so swapping to real APIs is straightforward.

## Folder structure

```
src/
  application/
    portfolio/
      getNavigationItems.js
      getPortfolioSections.js
      portfolioRepository.js

  domain/
    portfolio/
      navigationItem.js
      portfolioSection.js

  infrastructure/
    portfolio/
      staticPortfolioRepository.js

  presentation/
    AppRouter.jsx
    components/
      Footer/
      Header/
      Section/
      ...feature sections (Services, Projects, etc.)
      sections/               # page-specific section content (Home/About/Contact)
    di/
      AppProviders.jsx
      appContainerContext.js
      createAppContainer.js
      useAppContainer.js
    hooks/
      useNavigationItems.js
      usePortfolioSections.js
    pages/
      PortfolioPage.jsx
    portfolio/
      PortfolioDataProvider.jsx
      portfolioSectionsContext.js

  styles/
    global.css

  main.jsx
```

## Application flow

1. `src/main.jsx` mounts the app, sets up DI (`AppProviders`) and shared data providers (`AppDataProviders`), then starts the router.
2. `src/presentation/AppRouter.jsx` routes to `PortfolioPage` with an `initialSectionId`.
3. `PortfolioDataProvider` calls the application use-case `getPortfolioSections()` once and shares the result through context.
4. `PortfolioPage` renders sections from repository data using the reusable `Section` component.
5. `Header` builds its menu from the same shared section list via `useNavigationItems()`.

## Setup

Prerequisites:

- Node.js (LTS recommended)
- npm (comes with Node)

Install dependencies:

```bash
npm install
```

If your Windows PowerShell blocks `npm` scripts (Execution Policy), run npm via `cmd`:

```bash
cmd /c npm install
```

## Run (development)

```bash
npm run dev
```

Or on Windows if needed:

```bash
cmd /c npm run dev
```

## Lint

```bash
npm run lint
```

## Build

```bash
npm run build
```

Note: in some restricted Windows environments, Vite/esbuild may fail to spawn its service process (`spawn EPERM`). This is typically a permissions/security-policy issue rather than a code issue.

## Dependencies

Runtime:

- `react`
- `react-dom`
- `react-router-dom`

Dev tooling:

- `vite` + `@vitejs/plugin-react`
- `eslint` + `eslint-plugin-react-hooks` + `eslint-plugin-react-refresh`

## Extending / swapping the data source

To replace static data with a real API:

1. Create a new repository implementation in `src/infrastructure/portfolio/` (e.g. `apiPortfolioRepository.js`).
2. Keep the same `getSections(): Promise<PortfolioSection[]>` contract.
3. Update wiring in `src/presentation/di/createAppContainer.js` to use the new repository.
4. No Presentation changes should be needed if the contract remains stable.

## Refactor overview (step-by-step)

This codebase was refactored progressively:

1. **Analyze**: identified duplicated section/menu definitions and mixed responsibilities in UI files.
2. **Redesign**: introduced Domain/Application/Infrastructure/Presentation boundaries and a minimal DI container.
3. **Extract**: moved portfolio data behind a repository and exposed it via application use-cases.
4. **Integrate**: refactored Header/Page to consume shared application data via provider + hooks.
5. **Optimize**: removed unused files and redundant dependencies, keeping the runtime lightweight.

## Adding your profile image

This project includes a placeholder image at:

- `src/presentation/assets/profile-placeholder.svg`

To use your own image:

1. Add your photo to `src/presentation/assets/` (e.g. `profile.jpg` or `profile.png`).
2. Update the import in `src/presentation/components/sections/HomeSectionContent.jsx` to point to your file.
