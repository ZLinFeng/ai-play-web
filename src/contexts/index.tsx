import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider } from "./ThemeContext";

const ContextWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <HeroUIProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </HeroUIProvider>
    </>
  );
};

export default ContextWrapper;
