import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [TanStackRouterVite(), react()],
  base: "/vk-frontend-challenge",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
