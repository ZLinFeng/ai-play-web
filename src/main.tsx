import { QueryClient, QueryClientProvider } from "react-query";
import React from "react";
import { createRoot } from "react-dom/client";

import "@/styles/globals.css";
import "./i18n";

import App from "./App";
import ContextWrapper from "./contexts";
//import ContextWrapper from "./contexts";

// 负责管理所有查询的状态、缓存和配置
// 1. 存储和缓存查询结果
// 2. 管理查询的生命周期（如重试、缓存失效、重新获取等）
// 3. 提供全局配置（如默认的查询行为）
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      retry: 0,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/** QueryClientProvider 是一个React上下文提供者（Context Provider），用于将 QueryClient 实例传递给应用中的所有组件
     * 使 QueryClient 实例在整个应用中可用。
     * 允许组件使用 useQuery 或 useMutation 等钩子来访问和操作数据
     */}
    <QueryClientProvider client={queryClient}>
      {/** 跨组件共享数据 */}
      <ContextWrapper>
        <main>
          <App />
        </main>
      </ContextWrapper>
    </QueryClientProvider>
  </React.StrictMode>
);
