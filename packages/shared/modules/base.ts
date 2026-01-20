import { defineNuxtModule } from "@nuxt/kit";

export default defineNuxtModule({
  meta: {
    name: "@repo/shared-base-module",
    configKey: "sharedBase",
  },
  // 使用 moduleDependencies 代替已弃用的 installModule
  // 这确保了依赖模块在当前模块运行前被正确加载和初始化
  moduleDependencies: {
    "@pinia/nuxt": {},
    "@nuxtjs/tailwindcss": {},
    "@element-plus/nuxt": {},
    "@vueuse/nuxt": {},
    "@nuxtjs/i18n": {},
  },
  setup(options, nuxt) {
    // 1. 统一设置核心配置
    nuxt.options.compatibilityDate = "2024-11-01";

    // 安全地启用 devtools
    nuxt.options.devtools =
      typeof nuxt.options.devtools === "object"
        ? { ...nuxt.options.devtools, enabled: true }
        : { enabled: true };

    // 安全地启用严格模式
    nuxt.options.typescript = {
      ...(nuxt.options.typescript || {}),
      strict: true,
    };

    console.log("Successfully initialized shared base module");
  },
});
