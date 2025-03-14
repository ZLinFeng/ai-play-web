import { Outlet } from "react-router-dom";
import MainHeader from "./MainHeader";

const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="h-[80px]">
        <MainHeader />
      </div>
      <div className="flex-grow">
        <div className="flex h-full gap-10">
          <div className="w-[250px] bg-slate-400 h-full">SubMenu</div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
