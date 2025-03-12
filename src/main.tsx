import { QueryClient, QueryClientProvider } from "react-query";
import React from "react";
import { createRoot } from "react-dom/client";

import "@/styles/globals.css";

import App from "./App";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
