import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/Home";
import Models from "@/pages/Models";

const privateRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/models",
        element: <Models />,
      },
    ],
  },
];

export const privateRouter = createBrowserRouter(privateRoutes);
