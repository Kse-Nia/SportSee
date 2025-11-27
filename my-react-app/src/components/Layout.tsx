import { Outlet } from "react-router"; //
import Navbar from "./bars/Navbar";
import Sidebar from "./bars/Sidebar";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

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
