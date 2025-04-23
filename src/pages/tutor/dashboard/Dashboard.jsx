import React, { useEffect, useState } from "react";
import Container from "../../../components/Container";
import { IoIosPeople } from "react-icons/io";
import { FaBell, FaBlogger } from "react-icons/fa6";
import StudentListforTutorDashboard from "./StudentListforTutorDashboard";
import { PiNotepadLight, PiNoteBlankLight } from "react-icons/pi";
import Profile from "../../profile/Profile";
import axios from "axios";
import {
  todayStart,
  todayEnd,
  thisWeekStart,
  thisWeekEnd,
} from "../../../utility/DateRange";
import toast from "react-hot-toast";
import { formatDate, formatTime } from "../../../formatdatetime/FormatDateTime";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user_profile"));
  const userRole = localStorage.getItem("user_role");
  const [listLoading, setListLoading] = useState(false);
  const [select, setSelect] = useState(1);
  const [selectedRange, setSelectedRange] = useState({
    startTime: todayStart,
    endTime: todayEnd,
  });
  const [data, setData] = useState([]);
  const [tutorData, setTutorData] = useState([]);
  console.log(tutorData)
  const date = new Date(user.lastLoggedInDate);
  const formattedDate = date.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const getNotificationType = (note) => {
    let message = "";
    switch (note.notificationType) {
      case "Comment":
        message = `${note.name} commented on your blog`;
        break;
      case "Reaction":
        message = `${note.name} reacted on your blog`;
        break;
      default:
        message = `${note.name} performed an action on your blog`;
    }
    return message;
  };

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
      default:
        break;
    }
  };

  const fetchMeetingList = async () => {
    const url = `http://localhost:7142/meeting/tutor/${user.id}`;
    setListLoading(true);

    try {
      const response = await axios.post(url, selectedRange, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      setData(response.data);
    } catch (error) {
      console.log(error);
      toast.error("Sorry, something went wrong.", {
        position: "top-right",
      });
    } finally {
      setListLoading(false);
    }
  };

  const fetchTutorData = async () => {
    setListLoading(true);
    try {
      const url = `http://localhost:7142/dashboard/tutor/${user.id}`;
      const response = await axios.get(url, {
        headers: {
          Accept: "application/json",
          "Access-Control-Allow-Origin": "http://localhost:5173",
        },
        withCredentials: true,
      });

      const responseData = response.data || {};
      setTutorData({
        ...responseData,
        notifications: responseData.notifications || [],
        students: responseData.students || [],
      });
    } catch (error) {
      console.error("Error fetching tutor data:", error);
      toast.error(error.message);
    } finally {
      setListLoading(false);
    }
  };

  useEffect(() => {
    fetchMeetingList();
  }, [selectedRange]);

  useEffect(() => {
    getRange();
  }, [select]);

  useEffect(() => {
    if (user?.id) {
      fetchTutorData();
    }
  }, [user?.id]);

  const userName =
    user.name &&
    user.name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");

  return (
    <Container>
      <div className="grid grid-cols-5">
        <div className="col-span-3">
          <div className="flex justify-between items-center">
            <p className="text-2xl">
              {user.isFirstLoggedIn ? (
                `Welcome ${userName}`
              ) : (
                <div className="flex flex-col gap-3">
                  <p>Welcome Back {userName}</p>
                  <p className="text-sm">Your Last Login was {formattedDate}</p>
                </div>
              )}
            </p>
            <Profile />
          </div>

          <div>
            <h1 className="text-xl mt-5">What's New</h1>
            <div>
              <h3 className="text-lg mt-5 font-semibold">Schedule</h3>
              <div className="space-y-3 mt-3">
    {data.length > 0 ? (
      data.map((item) => (
        <div
          key={item.id}
          className="block bg-white p-4 rounded-xl border border-gray-100
            shadow-sm hover:shadow-md transition-all duration-300
            transform hover:-translate-y-0.5 group"
        >
          <div className="flex items-start gap-3">
            <div className="bg-teal-50 p-2.5 rounded-lg group-hover:bg-teal-100 transition-colors">
              <IoIosPeople className="text-lg text-teal-600" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start gap-2">
                <p className="font-medium text-gray-900 truncate group-hover:text-teal-700 transition-colors">
                  {item.title}
                </p>
                <span className="text-xs text-gray-500 whitespace-nowrap group-hover:text-gray-600 transition-colors">
                  {formatDate(item.startTime)}
                </span>
              </div>
              <p className="text-sm text-gray-500 mt-1 group-hover:text-gray-600 transition-colors">
                From {formatTime(item.startTime)} to {formatTime(item.endTime)}
              </p>
             
            </div>
          </div>
        </div>
      ))
    ) : (
      <div
        className="bg-gray-50 p-6 rounded-xl text-center"
      >
        <div className="inline-block bg-gray-200 p-3 rounded-full mb-3 ">
          <IoIosPeople className="text-xl text-gray-400" />
        </div>
        <p className="text-gray-500 font-medium">No schedules found</p>
        <p className="text-sm text-gray-400 mt-1">You’re all caught up for now</p>
      </div>
    )}
  </div>
            </div>

            <div>
              <h3 className="text-lg mt-5 font-semibold">Notifications</h3>
              <div className="space-y-3 mt-3">
    {tutorData?.notifications?.length > 0 ? (
      tutorData.notifications.map((note) => (
        <Link
          to={`/${userRole}/blog/details/${note.blogId}`}
          key={note.createdOn}
          className="block bg-white p-4 rounded-xl border border-gray-100 shadow hover:shadow-md transition-all duration-300 group"
        >
          <div className="flex items-start gap-3">
            <div className="bg-teal-50 p-2.5 rounded-lg group-hover:bg-teal-100 transition-colors">
              <FaBlogger className="text-lg text-teal-600" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <p className="font-medium text-gray-900 group-hover:text-teal-700 transition-colors">
                  {getNotificationType(note)}
                </p>
                <span className="text-xs text-gray-500 group-hover:text-gray-600 transition-colors">
                  {formatDate(note.createdOn)}
                </span>
              </div>
              <p className="text-sm text-gray-500 mt-1 group-hover:text-gray-600 transition-colors">
                Click to view blog →
              </p>
            </div>
          </div>
        </Link>
      ))
    ) : (
      <div className="bg-gray-50 p-6 rounded-xl text-center ">
        <div className="inline-block bg-gray-200 p-3 rounded-full mb-3 ">
          <FaBell className="text-xl text-gray-400" />
        </div>
        <p className="text-gray-500 font-medium">No notifications yet</p>
        <p className="text-sm text-gray-400 mt-1">We'll notify you when something arrives</p>
      </div>
    )}
  </div>
            </div>
          </div>
          <div>
            <StudentListforTutorDashboard />
          </div>
        </div>
        <div className="col-span-2 m-5">
          <h1 className="mb-5 text-3xl">My Schedules</h1>
          <h3 className="text-2xl my-5">For Today</h3>
          {data.length > 0 ? (
            data.map((item) => (
              <div key={item.id}>
                <div className="flex items-center mb-3">
                  {item.participants.map((participant, index) => (
                    <img
                      key={participant.id}
                      className="size-8 rounded-full inline-block border-2 border-white"
                      style={{
                        transform: `translateX(${-index * 10}px)`,
                        zIndex: item.participants.length - index,
                      }}
                      src={`data:image/jpeg;base64,${participant.avatar}`}
                      alt="Student"
                    />
                  ))}
                </div>
                <div className="flex gap-5 items-center mb-3">
                  <PiNotepadLight className="text-2xl text-teal-500" />
                  <span>{item.title}</span>
                </div>
                <div className="flex gap-5 items-center mb-3">
                  <PiNoteBlankLight className="text-2xl text-teal-500" />
                  <span className="text-sm">
                    {formatDate(item.startTime)} {formatTime(item.startTime)} -{" "}
                    {formatTime(item.endTime)}
                  </span>
                </div>
                <hr className="my-4 border-t-1 border-teal-500" />
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 italic">
              There are no schedules.
            </p>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;