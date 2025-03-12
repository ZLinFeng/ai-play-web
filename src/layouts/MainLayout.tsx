import { Button } from "@heroui/button";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <header className="h-[60px]">
        <Button color="primary">Header</Button>
      </header>
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
