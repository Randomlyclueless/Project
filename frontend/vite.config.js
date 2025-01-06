import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:4000", // Your backend URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""), // Optional: Adjust the path if needed
      },
    },
  },
});
