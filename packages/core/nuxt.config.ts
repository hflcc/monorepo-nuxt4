import { defineNuxtConfig } from "nuxt/config";
import { fileURLToPath } from "node:url";
import { type AppEnv } from "../../config/app-env";
import { i18nConfig } from "./i18n-config";

const appEnv = (process.env.APP_ENV ?? "local") as AppEnv;

export default defineNuxtConfig({
  // 引入公共模块
  modules: [
    fileURLToPath(new URL("./modules/base", import.meta.url)),
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "@element-plus/nuxt",
    "@vueuse/nuxt",
    "@nuxtjs/i18n",
  ],

  i18n: i18nConfig,

  runtimeConfig: {
    public: {
      appEnv,
    },
  },
});
