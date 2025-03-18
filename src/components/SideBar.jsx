import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { BsChatRightText } from "react-icons/bs";
import { ImBlog } from "react-icons/im";
import { IoIosPeople } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { PiBaseballCapDuotone } from "react-icons/pi";
import { Link, NavLink} from "react-router-dom";
import Header from "./Header";

const SideBar = () => {
  const studentTutor = [
    {
      name: "Dashboard",
      icon: MdOutlineDashboard,
    },
    {
      name: "Chats",
      icon: BsChatRightText,
    },
    {
      name: "Blogs",
      icon: ImBlog,
    },
    {
      name: "Meetings",
      icon: IoIosPeople,
    },
  ];

  const admin = [
    {
      name: "Dashboard",
      icon: IoIosPeople,
    },
    {
      name: "Allocation",
      icon: PiBaseballCapDuotone,
    },
    {
      name: "Reports",
      icon: HiOutlinePencilSquare,
    },
  ];
  return (
    <section className='h-screen w-72 p-5 px-12'>
      <header>
        <h1 className=' text-teal-600 text-3xl text-center mt-5'>SmartUni</h1>
      </header>
      {studentTutor.map((item, index) => (
        <NavLink to={`${item.name}`} className=" flex flex-row gap-2 my-10 " key={index} activeClassName='text-teal-800'>
        <item.icon size={24} className=" text-teal-600 text-xl" />
          <span className=" text-gray-500 w-24">{item.name}</span>
      </NavLink>
      ))}
      {/* {admin.map((item, index) => (
        <Link
          to={"/dashboard"}
          className=' flex flex-row gap-2 my-10 '
          key={index}
        >
          <item.icon size={30} className=' text-teal-600' />
          <span className=' text-gray-500 w-24 text-lg'>{item.name}</span>
        </Link>
      ))} */}
      {/* <Link to={"/dashboard"} className=" flex items-center justify-between my-10 ">
        <MdOutlineDashboard size={24} className=" text-teal-600 text-xl" />
        <span className=" text-gray-500 w-24">Dashboard</span>
      </Link>
      <Link to={""} className=" flex items-center justify-between  gap-5 mb-10">
        <BsChatRightText  size={24} className=" text-teal-600" />
        <span className=" text-gray-500 w-24">Chat</span>
      </Link>
      <Link to={""} className=" flex items-center justify-between gap-5 mb-10">
        <ImBlog  size={24} className=" text-teal-600 " />
        <span className=" text-gray-500 w-24">Blogs</span>
      </Link>
      <Link to={""} className=" flex items-center justify-between gap-5 mb-10">
        <IoIosPeople  size={24} className=" text-teal-600 " />
        <span className=" text-gray-500 w-24">Meetings</span>
      </Link>
      <hr className=" w-[150px] text-teal-600"/>
      <Link to={""} className=" flex items-center gap-5 justify-between mt-10">
        <IoIosLogOut  size={24} className=" text-teal-600 " />
        <span className=" text-gray-500 w-24">Log Out</span>
      </Link> */}
    </section>
  );
};

export default SideBar;
