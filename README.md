# vite-react

A React + TypeScript todo app built with Vite. The UI uses Redux Toolkit (slices, thunks) and styled-components. A small Express API backs the todos in development and can be used directly in production builds.

## Stack

- **React 19** with **Vite 8**
- **Redux Toolkit** & **React Redux** for state and async flows
- **styled-components** for styling
- **Express** (`server.js`) in-memory REST API at `http://localhost:3000`

## Prerequisites

- **Node.js** (current LTS recommended)
- **npm** (or another package manager you prefer)

## Install

```bash
npm install
```

## Development

Run the API and the Vite dev server in two terminals.

1. **API** (port `3000`):

   ```bash
   node server.js
   ```

2. **Frontend** (default Vite port, often `5173`):

   ```bash
   npm run dev
   ```

In dev, the app calls `/api`, which Vite proxies to `http://localhost:3000` (see `vite.config.ts`), so you avoid CORS issues.

## Scripts

| Command        | Description                                      |
| -------------- | ------------------------------------------------ |
| `npm run dev`  | Start Vite dev server                            |
| `npm run build`| Typecheck (`tsc -b`) then production Vite build |
| `npm run preview` | Serve the production build locally            |
| `npm run lint` | Run ESLint on the project                        |

## Production API URL

`src/api/config.ts` points the built app at `http://localhost:3000/api` when not in Vite dev mode. Adjust `API_CONFIG` if you deploy the API elsewhere.

## Project layout

- `src/App.tsx` — root layout; dispatches initial `fetchTodos`
- `src/views/` — page-level UI (`Todos`, `TodoFieldForm`)
- `src/components/` — reusable components (`TodoList`)
- `src/store/` — Redux store, hooks, slices (`todo`, `loading`, `error`), thunks
- `src/api/` — `fetch` helpers and todo service
- `src/types/` — shared TypeScript types
- `server.js` — Express routes: `GET/POST /api/todos`, `PUT/PATCH/DELETE /api/todos/:id`

## License

Private project (`private: true` in `package.json`).
