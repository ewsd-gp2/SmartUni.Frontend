import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import HeaderTitle from "./common/HeaderTitle";
import Footer from "./common/Footer";

const Layout = () => {
  return (
    <div className='flex min-h-screen bg-white'>
      <SideBar />

      <div className='flex-1 p-4 pl-14 ml-72'>
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
