import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Layout() {
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
}

export default Layout;
