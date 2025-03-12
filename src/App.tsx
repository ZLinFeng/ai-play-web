import { Button } from "@heroui/button";
import React from "react";

import { useTranslation } from "react-i18next";

const App: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Button color="secondary">{t("welcome")}</Button>
    </>
  );
};

export default App;
