import type { RouterConfig } from "@nuxt/schema";

export default <RouterConfig>{
  routes: (_routes) => [
    {
      name: "home",
      path: "/",
      component: () => import("@/app/pages/index.vue"),
    },
    {
      name: "web1-about",
      path: "/about",
      component: () => import("@/app/pages/about.vue"),
    },
  ],
};
