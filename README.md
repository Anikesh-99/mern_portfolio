# MERN Portfolio

My personal portfolio site, built on the MERN stack (MongoDB, Express, React,
Node). The React frontend fetches my project list from an Express API backed by
MongoDB, so I can add projects without editing the frontend.

> Rebuilt from my undergrad coursework after I lost access to my original GitHub
> account. Same project, freshly committed.

## Structure

```
server/   Express API + MongoDB (Mongoose) — serves /api/projects
client/   React app (Vite) — fetches and displays the projects
```

## Run it locally

You'll need Node and a local MongoDB (or a MongoDB Atlas connection string).

**Backend:**
```bash
cd server
npm install
cp .env.example .env      # point MONGO_URI at your database
npm run seed              # load a few sample projects
npm start                 # http://localhost:5000
```

**Frontend (in a second terminal):**
```bash
cd client
npm install
npm run dev               # http://localhost:5173
```

The Vite dev server proxies `/api` to the backend on port 5000, so the frontend
just calls `/api/projects`.

## How it works

- `server/models/Project.js` — the Mongoose schema (title, description, tech,
  link, createdAt).
- `server/index.js` — connects to MongoDB and exposes `GET /api/projects` and
  `POST /api/projects`.
- `server/seed.js` — wipes and reloads a few starter projects.
- `client/src/App.jsx` — fetches the projects on load and renders them as cards.

## Things I'd do differently now

- Add an admin form / auth instead of seeding projects from a script.
- Handle the loading and error states more gracefully.
- Deploy it (the backend on something like Render, the frontend as static).
