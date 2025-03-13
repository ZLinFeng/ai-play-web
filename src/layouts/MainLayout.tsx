import { Outlet } from "react-router-dom";
import MainHeader from "./MainHeader";

const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="h-[40px]">
        <MainHeader />
      </div>
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
