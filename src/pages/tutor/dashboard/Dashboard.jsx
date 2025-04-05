import React, { useState } from "react";
import SearchInput from "../../../components/common/SearchInput";
import Container from "../../../components/Container";
import HeaderTitle from "../../../components/common/HeaderTitle";
import { IoIosPeople } from "react-icons/io";
import { FaBlog, FaBook, FaPage4 } from "react-icons/fa";
import { FaBlogger } from "react-icons/fa6";
import StudentListforTutorDashboard from "./StudentListforTutorDashboard";
import CalendarComponent from "./CalendarComponent";
import { PiNotepadLight } from "react-icons/pi";
import { PiNoteBlankLight } from "react-icons/pi";
const Dashboard = () => {
  return (
    <Container>
      <div className=" grid grid-cols-5">
        <div className=" col-span-3">
          <HeaderTitle title="Tutor's Dashboard" />
          <SearchInput className=" mt-5" />
          <div>
            <h1 className="text-2xl mt-5">What's New</h1>
            <div className=" bg-gray-100 flex p-2.5 mt-2 rounded-lg justify-between items-center m-2">
              <div className=" flex gap-7 items-center">
                <IoIosPeople className="text-2xl text-teal-500" />
                <div>
                  <p className="text-lg font-semibold">Meeting Title</p>
                  <span className="text-xs">From 8am to 9am</span>
                </div>
              </div>
              <p className="text-sm">01 Feb 2025</p>
            </div>
            <div className=" bg-gray-100 flex p-2.5 mt-2 rounded-lg justify-between items-center m-2">
              <div className=" flex gap-7 items-center">
                <FaBlogger className="text-2xl text-teal-500" />
                <div>
                  <p className="text-lg font-semibold">
                    David Commented on your post
                  </p>
                  <span className="text-xs">
                    Today I would like to share....
                  </span>
                </div>
              </div>
              <p className="text-sm">01 Feb 2025</p>
            </div>
            <div className=" bg-gray-100 flex p-2.5 mt-2 rounded-lg justify-between items-center m-2">
              <div className=" flex gap-7 items-center">
                <FaBlogger className="text-2xl text-teal-500" />
                <div>
                  <p className="text-lg font-semibold">
                    Kevin reacted on your post
                  </p>
                  <span className="text-xs">
                    Hello everyone the following code....
                  </span>
                </div>
              </div>
              <p className="text-sm">01 Feb 2025</p>
            </div>
          </div>
          <div>
            <StudentListforTutorDashboard />
          </div>
        </div>
        <div className=" col-span-2 m-5">
          <h1 className=" mb-5 text-3xl">My Schedules</h1>
          <CalendarComponent className=" m-3" />
         
            <h3 className="text-2xl my-5">For Today</h3>
            <div className="m-5">
              <div className=" flex gap-5 items-center mb-3">
              <img
                  className=" size-8 rounded-full"
                  src="https://i.pinimg.com/736x/0e/d7/e8/0ed7e8509f71c4161e7443a86ce517a8.jpg"
                  alt=""
                />
                <p>David</p>
              </div>
              <div className=" flex gap-5 items-center mb-3">
                <PiNotepadLight className="text-2xl text-teal-500" />
                <span>Supervision</span>
              </div>
              <div className=" flex gap-5 items-center mb-3">
                <PiNoteBlankLight className="text-2xl text-teal-500" />
                <span className="text-sm">01 Feb 2025  8am-9am</span>
              </div>
            </div>
            <hr className=" text-teal-500"/>
            <div className="m-5">
              <div className=" flex gap-5 items-center mb-3">
              <img
                  className=" size-8 rounded-full"
                  src="https://i.pinimg.com/736x/0e/d7/e8/0ed7e8509f71c4161e7443a86ce517a8.jpg"
                  alt=""
                />
                <p>Kevin</p>
              </div>
              <div className=" flex gap-5 items-center mb-3">
                <PiNotepadLight className="text-2xl text-teal-500" />
                <span>Q & A</span>
              </div>
              <div className=" flex gap-5 items-center mb-3">
                <PiNoteBlankLight className="text-2xl text-teal-500" />
                <span className="text-sm">01 Feb 2025  8am-9am</span>
              </div>
            </div>
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
