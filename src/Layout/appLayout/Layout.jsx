
import { Outlet, Link } from "react-router-dom";
import "./Layout.css"; // Create this CSS file for styling
import Sidebar from "../../sideBar/SideBar";
import ScreenHeader from "../../components/LayoutScreenHeader/ScreenHeader";
const Layout = () => {
  return (
    <>
      <div className="flex h-screen">
        <div className="w-[23%] h-full">
          <Sidebar />
        </div>
        <div className=" w-full h-full flex flex-col ">
          <ScreenHeader />
          <main className="flex-1 overflow-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
