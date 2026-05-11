import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const { VITE_SITE_URL } = loadEnv(mode, process.cwd(), "");
  const siteBase = VITE_SITE_URL?.trim()?.replace(/\/+$/, "") ?? "";

  return {
    plugins: [
      tailwindcss(),
      react(),
      {
        name: "seo-inject-site-base",
        transformIndexHtml(html) {
          let out = html.replaceAll("__SITE_BASE__", siteBase);
          if (!siteBase) {
            out = out.replace(/\s*<link[^>]*rel="canonical"[^>]*>\s*/gi, "");
          }
          return out;
        },
      },
    ],
  };
});
