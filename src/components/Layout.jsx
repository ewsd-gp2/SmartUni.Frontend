import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const Layout = () => {
  return (
    <div className="flex min-h-screen bg-white">
    <SideBar />
    <main className="flex-1 p-4 sm:mt-4 md:mt-2 transition-all duration-300">
      <Outlet />
    </main>
  </div>
  );
};

export default Layout;