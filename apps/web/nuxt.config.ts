import { fileURLToPath } from "node:url";
// import { customRoutes } from "./app/router.config";

const uiLayer = fileURLToPath(new URL("../../packages/ui", import.meta.url));

export default defineNuxtConfig({
  extends: [uiLayer],

  alias: {
    "@": fileURLToPath(new URL("./", import.meta.url)),
    "~": fileURLToPath(new URL("./", import.meta.url)),
    "~~": fileURLToPath(new URL("../../", import.meta.url)),
  },

  // hooks: {
  //   "pages:extend"(pages) {
  //     pages.splice(0, pages.length);
  //     pages.push(...customRoutes);
  //   },
  // },

  i18n: {
    langDir: fileURLToPath(new URL("./locales", import.meta.url)),
    locales: [
      { code: "en", file: "en/index.json" },
      { code: "jp", file: "jp/index.json" },
      { code: "kr", file: "kr/index.json" },
      { code: "de", file: "de/index.json" },
    ],
  },
});
