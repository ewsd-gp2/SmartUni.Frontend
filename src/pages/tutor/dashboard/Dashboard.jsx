import React, { useEffect, useState } from "react";
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
  const [showAllNotifications, setShowAllNotifications] = useState(false);

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
        setSelectedRange({ startTime: todayStart, endTime: todayEnd });
        break;
      case 2:
        setSelectedRange({ startTime: thisWeekStart, endTime: thisWeekEnd });
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
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      setData(response.data);
    } catch (error) {
      console.log(error);
      toast.error("Sorry, something went wrong.", { position: "top-right" });
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
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-2/3">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 lg:mb-6 pt-4 lg:pt-0">
            <div>
              <h1 className="text-2xl font-medium">
                {user.isFirstLoggedIn ? (
                  `Welcome ${userName}`
                ) : (
                  <>
                    <p>Welcome Back {userName}</p>
                    <p className="text-sm text-gray-500">Your Last Login was {formattedDate}</p>
                  </>
                )}
              </h1>
            </div>
            <Profile />
          </div>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">What's New</h2>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Schedule</h3>
              <div className="space-y-3">
                {data.length > 0 ? (
                  data.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all"
                    >
                      <div className="flex items-start gap-3">
                        <div className="bg-teal-50 p-2 rounded-lg">
                          <IoIosPeople className="text-lg text-teal-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                            <p className="font-medium text-gray-900 truncate">
                              {item.title}
                            </p>
                            <span className="text-xs text-gray-500 whitespace-nowrap">
                              {formatDate(item.startTime)}
                            </span>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">
                            From {formatTime(item.startTime)} to {formatTime(item.endTime)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="bg-gray-50 p-6 rounded-lg text-center">
                    <div className="inline-block bg-gray-200 p-3 rounded-full mb-3">
                      <IoIosPeople className="text-xl text-gray-400" />
                    </div>
                    <p className="text-gray-500 font-medium">No schedules found</p>
                    <p className="text-sm text-gray-400 mt-1">You're all caught up for now</p>
                  </div>
                )}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Notifications</h3>
              <div className="space-y-3">
                {tutorData?.notifications?.length > 0 ? (
                  <>
                    {(showAllNotifications
                      ? tutorData.notifications
                      : tutorData.notifications.slice(0, 3)
                    ).map((note) => (
                      <Link
                        to={`/${userRole}/blog/details/${note.blogId}`}
                        key={note.createdOn}
                        className="block bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all"
                      >
                        <div className="flex items-start gap-3">
                          <div className="bg-teal-50 p-2 rounded-lg">
                            <FaBlogger className="text-lg text-teal-600" />
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                              <p className="font-medium text-gray-900">
                                {getNotificationType(note)}
                              </p>
                              <span className="text-xs text-gray-500">
                                {formatDate(note.createdOn)}
                              </span>
                            </div>
                            <p className="text-sm text-gray-500 mt-1">
                              Click to view blog →
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                    {tutorData.notifications.length > 3 && (
                      <div className="text-center pt-2">
                        <button
                          onClick={() => setShowAllNotifications(!showAllNotifications)}
                          className="text-teal-600 hover:text-teal-700 font-medium text-sm"
                        >
                          {showAllNotifications ? "Show Less" : "Show All Notifications"}
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="bg-gray-50 p-6 rounded-lg text-center">
                    <div className="inline-block bg-gray-200 p-3 rounded-full mb-3">
                      <FaBell className="text-xl text-gray-400" />
                    </div>
                    <p className="text-gray-500 font-medium">No notifications yet</p>
                    <p className="text-sm text-gray-400 mt-1">
                      We'll notify you when something arrives
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>

          <div className="mb-8">
            <StudentListforTutorDashboard />
          </div>
        </div>

        <div className="lg:w-1/3">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 sticky top-6">
            <h2 className="text-xl font-semibold mb-4">My Schedules</h2>
            <h3 className="text-lg font-medium mb-4">For Today</h3>
            
            {data.length > 0 ? (
              data.map((item) => (
                <div key={item.id} className="mb-6">
                  <div className="flex items-center mb-3">
                    {item.participants.map((participant, index) => (
                      <img
                        key={participant.id}
                        className="w-8 h-8 rounded-full inline-block border-2 border-white"
                        style={{
                          transform: `translateX(${-index * 10}px)`,
                          zIndex: item.participants.length - index,
                        }}
                        src={`data:image/jpeg;base64,${participant.avatar}`}
                        alt="Student"
                      />
                    ))}
                  </div>
                  <div className="flex gap-3 items-center mb-2">
                    <PiNotepadLight className="text-xl text-teal-500" />
                    <span className="text-gray-700">{item.title}</span>
                  </div>
                  <div className="flex gap-3 items-center mb-3">
                    <PiNoteBlankLight className="text-xl text-teal-500" />
                    <span className="text-sm text-gray-600">
                      {formatDate(item.startTime)} {formatTime(item.startTime)} - {formatTime(item.endTime)}
                    </span>
                  </div>
                  <hr className="my-4 border-t border-gray-200" />
                </div>
              ))
            ) : (
              <div className="text-center py-4">
                <p className="text-gray-500 italic">
                  There are no schedules today.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;