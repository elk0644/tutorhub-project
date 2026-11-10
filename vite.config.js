import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// base "./" + HashRouter => works on GitHub Pages, Vercel and Netlify
export default defineConfig({ plugins: [react()], base: "./" });
