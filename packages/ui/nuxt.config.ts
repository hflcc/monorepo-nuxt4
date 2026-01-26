import { defineNuxtConfig } from "nuxt/config";
import { fileURLToPath } from "node:url";

const coreLayer = fileURLToPath(new URL("../core", import.meta.url));

export default defineNuxtConfig({
  extends: [coreLayer],
});
