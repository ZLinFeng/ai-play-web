import { defineConfig } from "umi"

export default defineConfig({
  routes: [
    { path: "/", component: "dashboard" },
    { path: "/dashboard", component: "dashboard" },
    { path: "/tasks", component: "collection" },
    { path: "/collection-logs", component: "collectionLogs" },
    { path: "/process", component: "process" },
    { path: "/analysis", component: "analysis" },
  ],

  proxy: {
    "/api": {
      target: "http://localhost:12345",
      changeOrigin: true,
    },
  },
  npmClient: "pnpm",
  tailwindcss: {},
  plugins: ["@umijs/plugins/dist/tailwindcss", "@umijs/plugins/dist/dva"],
  dva: {},
})
