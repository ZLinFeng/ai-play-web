import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import CorpusPage from "./pages/data/CorpusPage";

const privateRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/data/corpus",
        element: <CorpusPage />,
      },
    ],
  },
];

export const privateRouter = createBrowserRouter(privateRoutes);
