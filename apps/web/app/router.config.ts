import { fileURLToPath } from "node:url";

// 手动定义路由表
export const customRoutes = [
  {
    name: "home",
    path: "/",
    file: fileURLToPath(new URL("./pages/index.vue", import.meta.url)),
  },
  {
    name: "about",
    path: "/about",
    file: fileURLToPath(new URL("./pages/about.vue", import.meta.url)),
  },
];
