import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import { MdOutlineDashboard } from 'react-icons/md'
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { IoIosLogOut } from 'react-icons/io';
import { PiBaseballCapDuotone } from 'react-icons/pi';
const AdminSideBar = () => {
  return (
    <section className=" mt-5 bg-gray-200 h-screen p-5">
    <Header className=" "/>
  <Link to={"/dashboard"} className=" flex items-center gap-3 my-7">
    <MdOutlineDashboard className=" text-teal-600 text-xl" />
    <span className=" text-gray-500">Dashboard</span>
  </Link>
  <Link to={""} className=" flex items-center gap-3 mb-7">
    <PiBaseballCapDuotone className=" text-teal-600" />
    <span className=" text-gray-500">Allocation</span>
  </Link>
  <Link to="/admin/report" className=" flex items-center gap-3 mb-7">
    <HiOutlinePencilSquare  className=" text-teal-600 text-xl" />
    <span className=" text-gray-500">Reports</span>
  </Link>
 
  <hr className=" w-[150px] text-teal-600"/>
  <Link to={""} className=" flex items-center gap-3 mt-7">
    <IoIosLogOut  className=" text-teal-600 text-xl" />
    <span className=" text-gray-500">Log Out</span>
  </Link>
</section>
  )
}

export default AdminSideBar