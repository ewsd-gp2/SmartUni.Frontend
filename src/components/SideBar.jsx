import React, { useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { FaPeopleRoof } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { MdNotes, MdOutlineSpeakerNotes } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { HiMenu } from "react-icons/hi";

const SideBar = () => {
  const navigate = useNavigate();
  const userRole = localStorage.getItem("user_role");
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const student = [
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
    <section>
      <button
        className="fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-100 shadow-md lg:hidden"
        onClick={toggleSidebar}
      >
        <HiMenu size={24} />
      </button>
      
      <div 
        className={`fixed top-0 left-0 h-full w-64 bg-white border-r-2 border-gray-200 overflow-y-auto transform transition-transform duration-300 ease-in-out z-40
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:static lg:h-screen custom-scrollbar
        `}
        onClick={() => setIsOpen(false)}
      >
        <header>
          <h1 className='text-teal-600 text-center text-2xl p-3 mt-5 mb-5'>
            SmartUni
          </h1>
        </header>
        
        <div className="px-4">
          {data?.map((item, index) => (
            <div key={index} className="mb-2">
              <NavLink
                to={item.submenu ? "#" : `/${userRole}/${item.name.toLowerCase()}`}
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-lg ${
                    isActive && !item.submenu ? 'bg-[#f1f1f1]' : 'bg-white'
                  }`
                }
              >
                <item.icon size={24} className='text-gray-500 mr-3' />
                <span className='text-gray-500 w-24 text-md'>{item.name}</span>
              </NavLink>
              
              {item.submenu && (
                <div className='ml-8 mt-1 space-y-1'>
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
                  {item.submenu.map((subItem,subIndex) => (
                    <NavLink 
                      key={subIndex}
                      to={subItem.path}
                      className={({ isActive }) =>
                        `block px-3 py-2 text-base rounded-lg  text-gray-500 ${
                           isActive ? "bg-[#f1f1f1] font-semibold" : ""
                        }`
                      }
                    >
                      {subItem.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}

          <button
            className='flex items-center w-full p-2 mt-8 text-gray-500 hover:bg-gray-50 rounded-lg'
            onClick={() => navigate("/")}
          >
            <CiLogout size={20} className='mr-3' />
            <span>Log Out</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SideBar;