import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { BsChatRightText } from "react-icons/bs";
import { ImBlog } from "react-icons/im";
import { IoIosPeople } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
import Header from "./Header";
const BlogSideBar = () => {
  return (
    <section className=" mt-5 bg-gray-200 h-screen p-5">
        <Header className=" "/>
      <Link to={"/dashboard"} className=" flex items-center gap-3 my-7">
        <MdOutlineDashboard className=" text-teal-600 text-xl" />
        <span className=" text-gray-500">Dashboard</span>
      </Link>
      <Link to={""} className=" flex items-center gap-3 mb-7">
        <BsChatRightText className=" text-teal-600" />
        <span className=" text-gray-500">Chat</span>
      </Link>
      <Link to={""} className=" flex items-center gap-3 mb-7">
        <ImBlog className=" text-teal-600 text-xl" />
        <span className=" text-gray-500">Blogs</span>
      </Link>
      <Link to={""} className=" flex items-center gap-3 mb-7">
        <IoIosPeople className=" text-teal-600 text-xl" />
        <span className=" text-gray-500">Tutor Meetings</span>
      </Link>
      <hr className=" w-[150px] text-teal-600"/>
      <Link to={""} className=" flex items-center gap-3 mt-7">
        <IoIosLogOut  className=" text-teal-600 text-xl" />
        <span className=" text-gray-500">Log Out</span>
      </Link>
    </section>
  );
};

export default BlogSideBar;
