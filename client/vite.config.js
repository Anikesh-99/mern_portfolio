import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Proxy /api calls to the Express server during development so I don't have to
// deal with CORS or hardcode the backend URL.
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://localhost:5000",
    },
  },
});
