import React from "react";
import { RouterProvider } from "react-router-dom";

import { useTranslation } from "react-i18next";
import { privateRouter } from "./routes";

const App: React.FC = () => {
  const { t } = useTranslation();

  document.title = t("title");

  return (
    <div className="flex h-screen w-screen">
      <RouterProvider router={privateRouter} />
    </div>
  );
};

export default App;
