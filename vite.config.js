import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    {
      name: "seo-inject-site-base",
      transformIndexHtml(html) {
        const raw = process.env.VITE_SITE_URL?.trim();
        const base = raw ? raw.replace(/\/+$/, "") : "";
        let out = html.replaceAll("__SITE_BASE__", base);
        if (!base) {
          out = out.replace(/\s*<link[^>]*rel="canonical"[^>]*>\s*/gi, "");
        }
        return out;
      },
    },
  ],
});
