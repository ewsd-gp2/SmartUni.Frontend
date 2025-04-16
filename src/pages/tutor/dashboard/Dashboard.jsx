import React, { useEffect, useState } from "react";
import SearchInput from "../../../components/common/SearchInput";
import Container from "../../../components/Container";
import HeaderTitle from "../../../components/common/HeaderTitle";
import { IoIosPeople } from "react-icons/io";
import { FaBlog, FaBook, FaPage4 } from "react-icons/fa";
import { FaBlogger } from "react-icons/fa6";
import StudentListforTutorDashboard from "./StudentListforTutorDashboard";
import { PiNotepadLight } from "react-icons/pi";
import { PiNoteBlankLight } from "react-icons/pi";
import Profile from "../../profile/Profile";
import axios from "axios";
import {
  todayStart,
  todayEnd,
  thisWeekStart,
  thisWeekEnd,
} from "../../../utility/DateRange";
import toast from "react-hot-toast";
const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user_profile"));
  const [listLoading, setListLoading] = useState(false);
  const [select, setSelect] = useState(1);
  const [items, setItems] = useState([]);
  const [selectedRange, setSelectedRange] = useState({
    startTime: todayStart,
    endTime: todayEnd,
  });
  const [data, setData] = useState([]);
  const date = new Date(user.lastLoggedInDate);
  const formattedDate = date.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  useEffect(() => {
    fetchMeetingList();
  }, [selectedRange]);

  useEffect(() => {
    getRange();
  }, [select]);

  const getRange = () => {
    switch (select) {
      case 1:
        setSelectedRange((prev) => ({
          startTime: todayStart,
          endTime: todayEnd,
        }));
        break;
      case 2:
        setSelectedRange((prev) => ({
          startTime: thisWeekStart,
          endTime: thisWeekEnd,
        }));
        break;
    }
  };

  const fetchMeetingList = async () => {
    const url = `http://localhost:7142/meeting/tutor/${user.id}`;
    setListLoading(true);

    axios
      .post(url, selectedRange, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: "true",
      })
      .then((response) => {
        console.log("getMeetingList", response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Sorry, something went wrong.", {
          position: "top-right",
        });
      });
    setListLoading(false);
  };

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString("en-GB", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (dateStr) => {
    return new Date(dateStr).toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const getImageSrc = (base64) => {
    if (!base64) return "fallback.jpg";
  
    if (base64.startsWith("/9j/")) {
      return `data:image/jpeg;base64,${base64}`;
    } else if (base64.startsWith("iVBORw0KGgo")) {
      return `data:image/png;base64,${base64}`;
    } else {
      return `data:image/*;base64,${base64}`; // fallback
    }
  };
  return (
    <Container>
      <div className=" grid grid-cols-5">
        <div className=" col-span-3">
          <div className=" flex justify-between items-center">
            <p className=" text-2xl">
              {user.isFirstLoggedIn ? (
                `Welcome ${user.name}`
              ) : (
                <div className="flex flex-col gap-3">
                  {" "}
                  <p>Welcome Back {user.name}</p>{" "}
                  <p className="text-sm">
                    {" "}
                    Your Last Login was {formattedDate}
                  </p>
                </div>
              )}
            </p>
            <Profile />
          </div>

          <div>
            <h1 className="text-xl mt-5">What's New</h1>
            <div>
              <h3 className="text-lg mt-5 font-semibold">Schedule</h3>
            </div>
            {data.map((item) => (
              <>
                <div key={item.id} className=" bg-gray-100 flex p-2.5 mt-2 rounded-lg justify-between items-center m-2">
                  <div className=" flex gap-7 items-center">
                    <IoIosPeople className="text-2xl text-teal-500" />
                    <div>
                      <p className="text-lg font-semibold">{item.title}</p>
                      <span className="text-xs">
                        From {formatTime(item.startTime)} to{" "}
                        {formatTime(item.endTime)}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm"> {formatDate(item.startTime)}</p>
                </div>
              </>
            ))}
            <div>
              <h3 className="text-lg mt-5 font-semibold">Notifications</h3>
              <div>
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
            </div>
          </div>
          <div>
            <StudentListforTutorDashboard />
          </div>
        </div>
        <div className=" col-span-2 m-5">
          <h1 className=" mb-5 text-3xl">My Schedules</h1>
          <h3 className="text-2xl my-5">For Today</h3>
          {/* <CalendarComponent className=" m-3" /> */}
          {data.map((item) => (
            <div key={item.id} >
              <div className=" flex gap-5 items-center mb-3">
              {item.participants.map((participant) => (
                    <img key={participant.id}
                      className=" size-8 rounded-full inline-block"
                      src={getImageSrc(participant.avatar)}
                      alt={participant.name}
                    />                      
              ))}
              </div>
              <div className=" flex gap-5 items-center mb-3">
                <PiNotepadLight className="text-2xl text-teal-500" />
                <span>{item.title}</span>
              </div>
              <div className=" flex gap-5 items-center mb-3">
                <PiNoteBlankLight className="text-2xl text-teal-500" />
                <span className="text-sm">
                  {formatDate(item.startTime)} {formatTime(item.startTime)} -{" "}
                  {formatTime(item.endTime)}
                </span>
              </div>
              <hr className="my-4 border-t-1 border-teal-500" />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
