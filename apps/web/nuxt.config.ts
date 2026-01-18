import { fileURLToPath } from "node:url";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ["../../packages/shared"],

  alias: {
    // @和~代表当前项目，~~代表monorepo根项目
    "@": fileURLToPath(new URL("./", import.meta.url)),
    "~": fileURLToPath(new URL("./", import.meta.url)),
    "~~": fileURLToPath(new URL("../../", import.meta.url)),
  },

  // 这里的配置大部分已被 shared/modules/base 处理
  // 只需要保留应用特定的配置
});
