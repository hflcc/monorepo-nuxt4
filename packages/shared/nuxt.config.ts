import { defineNuxtConfig } from "nuxt/config";
import { fileURLToPath } from "node:url";
import { i18nConfig } from "./i18n-config";

export default defineNuxtConfig({
  // 引入公共模块
  modules: [
    fileURLToPath(new URL("./modules/base", import.meta.url)),
    "@nuxtjs/i18n",
  ],

  i18n: i18nConfig,
});
