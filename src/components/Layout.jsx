import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import HeaderTitle from "./common/HeaderTitle";

const Layout = () => {
  return (
    <div className='flex min-h-screen'>
      <SideBar />

      <div className='flex-1 p-4'>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
