import { defineConfig } from "umi"

export default defineConfig({
  routes: [
    { path: "/", component: "dashboard" },
    { path: "/dashboard", component: "dashboard" },
    { path: "/tasks", component: "collection" },
    { path: "/process", component: "process" },
    { path: "/analysis", component: "analysis" },
  ],

  proxy: {},
  npmClient: "pnpm",
  tailwindcss: {},
  plugins: ["@umijs/plugins/dist/tailwindcss", "@umijs/plugins/dist/dva"],
  dva: {},
})
