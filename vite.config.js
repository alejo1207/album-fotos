import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// If deployed on GitHub Pages as a project site, we need a base path like '/<repo>/'
// This sets base automatically in Actions using the repository name.
// Locally it's just '/'
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const inferredBase = repoName ? `/${repoName}/` : "/";

export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || inferredBase,
});
