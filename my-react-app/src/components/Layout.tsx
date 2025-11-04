import { Outlet } from "react-router"; //
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}
/* 
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main">{children}</div>
      </div>
    </>
  );
};

export default Layout;
 */

const Layout: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
