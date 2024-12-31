import { defineConfig } from "umi"

export default defineConfig({
  routes: [
    { path: "/", component: "dashboard" },
    { path: "/dashboard", component: "dashboard" },
    { path: "/settings", component: "settings" },
    { path: "/models", component: "models" },
    { path: "/workflow", component: "workflow" },
    { path: "/resources", component: "resources" },
    { path: "/chatbot", component: "chatbot" },
  ],

  proxy: {},
  npmClient: "pnpm",
  tailwindcss: {},
  plugins: ["@umijs/plugins/dist/tailwindcss", "@umijs/plugins/dist/dva"],
  dva: {},
})
