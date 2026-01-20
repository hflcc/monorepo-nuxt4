import { fileURLToPath } from "node:url";
import { customRoutes } from "./app/router.config";

export default defineNuxtConfig({
  extends: ["../../packages/shared"],

  alias: {
    "@": fileURLToPath(new URL("./", import.meta.url)),
    "~": fileURLToPath(new URL("./", import.meta.url)),
    "~~": fileURLToPath(new URL("../../", import.meta.url)),
  },

  // 使用 hooks 注入路由，这样 i18n 模块可以检测到并处理它们
  hooks: {
    "pages:extend"(pages) {
      pages.splice(0, pages.length);
      pages.push(...customRoutes);
    },
  },

  i18n: {
    // 必须再次声明策略，确保应用层路由生成逻辑正确
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
});
