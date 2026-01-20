import { fileURLToPath } from "node:url";

export const supportedLocales = [
  { code: "en", iso: "en-US", name: "English", file: "en/index.json" },
  { code: "jp", iso: "ja-JP", name: "日本語", file: "jp/index.json" },
  { code: "kr", iso: "ko-KR", name: "한국어", file: "kr/index.json" },
  { code: "de", iso: "de-DE", name: "Deutsch", file: "de/index.json" },
];

export const defaultLocale = "en";

export const i18nConfig = {
  strategy: "prefix_except_default" as const,
  defaultLocale,
  locales: supportedLocales,
  lazy: true,
  langDir: fileURLToPath(new URL("./locales", import.meta.url)),
  // 禁用自动重定向，严格遵循 URL 路由
  detectBrowserLanguage: false,
};
