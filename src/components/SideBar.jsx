import React, { useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { FaPeopleRoof } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { MdNotes, MdOutlineSpeakerNotes } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  const userRole = localStorage.getItem("user_role");
  const student = [
    {
      name: "Dashboard/tutorlist",
      icon: MdOutlineDashboard,
    },
    {
      name: "Chats",
      icon: MdOutlineSpeakerNotes,
    },
    {
      name: "Blogs",
      icon: MdNotes,
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
      icon: MdOutlineSpeakerNotes,
    },
    {
      name: "Blog",
      icon: MdNotes,
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
        { id: 1, name: "Tutor List", path: "/staff/dashboard/tutorlist" },
        { id: 2, name: "Student List", path: "/staff/dashboard/studentlist" },
        { id: 3, name: "Staff List", path: "/staff/dashboard/stafflist" },
      ],
    },
    {
      name: "Allocation",
      icon: FaPeopleRoof,
    },
    {
      name: "Report",
      icon: HiOutlinePencilSquare,
      submenu: [
        { id: 1, name: "Student With Interact", path: "/staff/report/swi" },
        {
          id: 2,
          name: "Student Without Interact",
          path: "/staff/report/swt",
        },
        {
          id: 3,
          name: "Message for Tutors",
          path: "/staff/report/messagefortutors",
        },
        { id: 4, name: "Most Viewed", path: "/staff/report/mostviewed" },
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
    <section className='fixed left-0 top-0 h-screen w-80 border-r-2 border-gray-200 bg-white custom-scrollbar'>
      <header className=''>
        <h1 className=' text-teal-600 text-center text-3xl p-3 mt-5 mb-5  '>
          SmartUni
        </h1>
      </header>
      {data.map((item, index) => (
        <NavLink
          to={item.submenu ? "#" : `/${userRole}/${item.name.toLowerCase()}`}
        //  className='flex flex-col text-gray-500 mt-2 w-70 '
          className={({ isActive }) =>
            `flex flex-col mt-2 w-70 ${
              isActive && !item.submenu ? 'bg-[#f1f1f1]' : 'bg-hite'
            }`
          }
          key={index}
        >
          <div className='flex flex-row p-2 '>
            <item.icon size={24} className='text-gray-500 text-md basis-2/7' />
            <span className='text-gray-500 w-24 text-md'>{item.name}</span>
          </div>
          {item.submenu && (
            <div className='w-full'>
              {/* {item.submenu.map((subItem, subIndex) => (
                <NavLink
                  key={subIndex}
                  to={subItem.path}
                  className={({ isActive }) =>
                    isActive
                      ? "flex text-md mt-2 text-left w-full pr-0 p-2 text-gray-500 bg-[#f1f1f1] rounded-xl font-semibold"
                      : "flex text-md mt-2 text-left w-full pr-0 p-2  text-gray-500"
                  }
                >
                  <div className='basis-2/7'></div>
                  <span className='basis-5/7'>{subItem.name}</span>
                </NavLink>
              ))} */}
              {item.submenu.map((subItem, subIndex) => (
                <NavLink key={subIndex} to={subItem.path}>
                  {({ isActive }) => (
                    <div
                      className={`flex text-md mt-2 text-left w-full pr-0 p-2 text-gray-500 ${
                        isActive ? "bg-[#f1f1f1] font-semibold" : ""
                      }`}
                    >
                      <div className={`basis-2/7`}></div>
                      <div className={`basis-5/7`}>{subItem.name}</div>
                    </div>
                  )}
                </NavLink>
              ))}
            </div>
          )}
        </NavLink>
      ))}

      <button
        className='flex flex-row w-70  text-gray-500 mt-10'
        onClick={() => navigate("/")}
      >
        <CiLogout size={24} className='text-md basis-2/7' />
        <span className='text-md w-24 text-gray-500'>Log Out</span>
      </button>
    </section>
  );
};

export default SideBar;
