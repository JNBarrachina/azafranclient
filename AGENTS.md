# Azafrán Client — AGENTS.md

## Stack

React 19 · Vite 6 · TypeScript (strict) · React Router 7 · Ant Design 5 · Sass · Vitest

Package manager is **pnpm** (never npm/yarn). Lockfile: `pnpm-lock.yaml`.

## Commands

| Command | What it does |
|---|---|
| `pnpm dev` | Vite dev server |
| `pnpm build` | Production build (Vite + TS type-check) |
| `pnpm lint` | ESLint via `typescript-eslint` on `src/` |
| `pnpm preview` | Preview production build |
| `npx tsc --noEmit` | Standalone type-check (no build) |

## Test config — required before running tests

Vitest needs a DOM environment. Add to `vite.config.js`:

```js
test: { environment: 'jsdom' }
```

Without it, `pnpm vitest run` fails with `document is not defined`.

## Architecture

**Entrypoint**: `src/main.tsx` → `App.tsx`

**Atomic Design layout** under `src/components/`:
- `atoms/` — currently empty, available for leaf components
- `molecules/` — composed sub-components (Ingredient, MainNav, UserNav)
- `organisms/` — complex sections (Header, AddIngredient, UserIngredientsList)
- `pages/` — full page components (Home, Login, Register, UserDashboard, NotFound)

**Routing**: conditional via `localStorage.getItem("accessToken")`:
- No token → `UnauthedRoutes` (Home, Login, Register, catch-all redirect to /login)
- Token present → `AuthedRoutes` (Home, Dashboard)

## Auth model

- Token stored/read from `localStorage` key `"accessToken"`
- No React context or provider — raw `localStorage` reads in components
- Logout: `localStorage.removeItem("accessToken")` + hard navigation
- Backend API hardcoded at `http://localhost:8080`

## Types

Shared interfaces in `src/types/index.ts`: `User`, `Ingredient`, `Recipe`, `AuthResponse`, `LoginCredentials`.

## Known issues

- No `test` script in `package.json` — run `pnpm vitest run` directly
- Vitest `environment: 'jsdom'` not configured — test will fail until added
- `atoms/` directory is empty
- No CI workflow present
- pnpm build scripts for `@parcel/watcher` and `esbuild` are disabled in `pnpm-workspace.yaml`
