import { fileURLToPath } from "node:url";
import { customRoutes } from "./app/router.config";

export default defineNuxtConfig({
  extends: ["../../packages/shared"],

  alias: {
    "@": fileURLToPath(new URL("./", import.meta.url)),
    "~": fileURLToPath(new URL("./", import.meta.url)),
    "~~": fileURLToPath(new URL("../../", import.meta.url)),
  },

  hooks: {
    "pages:extend"(pages) {
      pages.splice(0, pages.length);
      pages.push(...customRoutes);
    },
  },

  i18n: {
    strategy: "prefix_except_default",
    detectBrowserLanguage: false,
    langDir: fileURLToPath(new URL("./locales", import.meta.url)),
    locales: [
      { code: "en", file: "en/index.json" },
      { code: "jp", file: "jp/index.json" },
      { code: "kr", file: "kr/index.json" },
      { code: "de", file: "de/index.json" },
    ],
  },
  devServer: {
    port: 3001,
  },
});
