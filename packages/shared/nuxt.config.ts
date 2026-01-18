import { defineNuxtConfig } from "nuxt/config";
import { fileURLToPath } from "node:url";

export default defineNuxtConfig({
  // 引入公共模块
  modules: [
    fileURLToPath(new URL("./modules/base", import.meta.url))
  ]
});
