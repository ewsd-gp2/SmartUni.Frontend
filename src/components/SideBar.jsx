import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { BsChatRightText } from "react-icons/bs";
import { ImBlog } from "react-icons/im";
import { IoIosPeople } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { PiBaseballCapDuotone } from "react-icons/pi";
import { Link, NavLink } from "react-router-dom";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  const userRole = localStorage.getItem("user_role");
  const student = [
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

  const tutor = [
    {
      name: "Dashboard",
      icon: MdOutlineDashboard,
    },
    {
      name: "Chat",
      icon: BsChatRightText,
    },
    {
      name: "Blog",
      icon: ImBlog,
    },
    {
      name: "Meeting",
      icon: IoIosPeople,
    },
  ];

  const staff = [
    {
      name: "Dashboard",
      icon: IoIosPeople,
      submenu: [
        { name: "Tutor List", path: "/staff/dashboard" },
        { name: "Student List", path: "/staff/dashboard/studentlist" },
        { name: "Staff List", path: "/staff/dashboard/stafflist" },
      ],
    },
    {
      name: "Allocation",
      icon: PiBaseballCapDuotone,
    },
    {
      name: "Report",
      icon: HiOutlinePencilSquare,
      submenu: [
        { name: "Student With Interactions", path: "/staff/report" },
        { name: "Student Without Interactions", path: "/staff/report/swt" },
        { name: "Message for Tutors", path: "/staff/report/messagefortutors" },
        { name: "Most Viewed", path: "/staff/report/mostviewed" },
      ],
    },
  ];

  const data =
    userRole === "staff"
      ? staff
      : userRole === "student"
      ? student
      : userRole === "tutor"
      ? tutor
      : null;

  return (
    <section className='h-screen w-72 p-5 px-12'>
      <header>
        <h1 className=' text-teal-600 text-3xl text-center mt-5 mb-5'>SmartUni</h1>
      </header>
      {data.map((item, index) => (
        <NavLink
          to={`/${userRole}/${item.name.toLowerCase()}`}
          className={({ isActive }) =>
            item.submenu
          ? "flex flex-col p-3 text-gray-500"
          : isActive
          ? "flex flex-col my-4 bg-teal-500 rounded-xl p-3 text-teal-100 animate-bounceEffect"
          : "flex flex-col my-4 p-3 text-gray-500 hover:bg-teal-100 hover:rounded-xl hover:text-teal-600"
          // className={({ isActive }) =>
          //   isActive
          //     ? "flex flex-row gap-2 my-7 bg-teal-600 rounded-xl p-3 justify-start text-teal-100 animate-bounceEffect"
          //     : "flex flex-row gap-2 my-7 p-3 text-gray-500 hover:bg-teal-100 hover:rounded-xl hover:text-teal-600"
        }
          key={index}
        >
          <div className='flex flex-row gap-2'>
            <item.icon
              size={24}
              className={({ isActive }) =>
                isActive ? "text-white text-xl" : "text-teal-600 text-xl"
              }
            />
            <span
              className={({ isActive }) =>
                isActive ? "text-white font-bold w-24" : "text-gray-700 w-24"
              }
            >
              {item.name}
            </span>
          </div>
          {item.submenu && (
            <div>
              {item.submenu.map((subItem, subIndex) => (
                <NavLink
                  key={subIndex}
                  to={subItem.path}
                  className={({ isActive }) => 
                    isActive ? 'block text-sm text-right pr-15 text-teal-100 gap-2 w-full mt-2 p-3 bg-teal-500 rounded-xl animate-bounceEffect'
                      :'block text-sm text-right w-full pr-15 text-gray-500 mt-2  p-3'
                  }
                 // className='block text-sm text-right w-24 pr-15 text-gray-500 gap-2 w-full p-3'
                >
                  {subItem.name}
                </NavLink>
              ))}
            </div>
          )}
        </NavLink>
      ))}

      <button
        className='flex flex-row gap-2 my-7 p-3 text-gray-500 mt-10 hover:text-black'
        onClick={() => navigate("/")}
      >
        <CiLogout size={32} className='hover:text-black text-xl' />
        <span>Log Out</span>
      </button>
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
