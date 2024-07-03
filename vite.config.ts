// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "disable-eslint",
      enforce: "pre",
      transform(code, id) {
        if (id.indexOf("node_modules") !== -1) return null;
        return code.replace(/\/\*\s*eslint-disable\s*\*\//g, "");
      },
    },
  ],
});
