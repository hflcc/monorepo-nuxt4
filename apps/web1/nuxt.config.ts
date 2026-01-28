import { fileURLToPath } from "node:url";
import { resolveAppRuntimeConfig, type AppEnv } from "../../config/app-env";
// import { customRoutes } from "./app/router.config";

const uiLayer = fileURLToPath(new URL("../../packages/ui", import.meta.url));
const appDir = fileURLToPath(new URL("./app", import.meta.url));
const workspaceRoot = fileURLToPath(new URL("../../", import.meta.url));
const appEnv = (process.env.APP_ENV ?? "local") as AppEnv;
const appRuntime = resolveAppRuntimeConfig(appEnv, "web1");

export default defineNuxtConfig({
  extends: [uiLayer],
  srcDir: appDir,

  alias: {
    "~~": workspaceRoot,
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
  devServer: {
    port: 3001,
  },
  runtimeConfig: {
    public: {
      apiBase: appRuntime.apiBase,
      appName: appRuntime.appName,
    },
  },
});
