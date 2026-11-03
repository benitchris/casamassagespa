import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative base keeps every asset working on both
// https://<user>.github.io/<repo>/ and a custom domain.
export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    outDir: "dist",
    assetsInlineLimit: 2048,
  },
});
