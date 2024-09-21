import { Outlet } from "react-router-dom";
import { SideBar } from "../../components";

export const ProfileLayout = () => {
  return (
    <div className="flex place-items-center gap-4">
      <SideBar />
      <Outlet />
    </div>
  );
};
