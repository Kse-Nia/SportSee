import { Outlet } from "react-router"; //
import Navbar from "./bars/Navbar.js";
import Sidebar from "./bars/Sidebar.js";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="app__container">
        <div className="app__container-sidebars">
          <Sidebar />
        </div>
        <div className="app__container-main">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
