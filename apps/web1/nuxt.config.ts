import { fileURLToPath } from "node:url";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ["../../packages/shared"],

  alias: {
    "@": fileURLToPath(new URL("./", import.meta.url)),
    "~": fileURLToPath(new URL("./", import.meta.url)),
    "~~": fileURLToPath(new URL("../../", import.meta.url)),
  },

  // web1 特有的配置
  devServer: {
    port: 3001,
  },
});
