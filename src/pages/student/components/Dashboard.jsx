import React, { useEffect, useState } from "react";
import SearchInput from "../../../components/common/SearchInput";
import Container from "../../../components/Container";
import HeaderTitle from "../../../components/common/HeaderTitle";
import { IoIosPeople } from "react-icons/io";
import { FaBlog, FaBook, FaPage4 } from "react-icons/fa";
import { FaBell, FaBlogger } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import Profile from "../../profile/Profile";
import { FiMail } from "react-icons/fi";
import { MdConnectWithoutContact } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";

import axios from "axios";
import {
  todayStart,
  todayEnd,
  thisWeekStart,
  thisWeekEnd,
} from "../../../utility/DateRange";
import toast from "react-hot-toast";
 
const Dashboard = () => {

  const today = new Date().toLocaleDateString("en-GB", {
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

  const [tutorId, setTutorId] = useState(null);
  const [tutor, setTutor] = useState(null);
const user = JSON.parse(localStorage.getItem("user_profile"));
  const [listLoading, setListLoading] = useState(false);
  const [select, setSelect] = useState(1);
  const [notifications, setNotifications] = useState([])
  const [selectedRange, setSelectedRange] = useState({
    startTime: todayStart,
    endTime: todayEnd,
  });

  useEffect(() => {
    const fetchTutorId = async () => {
      try {
        await axios.get(`http://localhost:7142/dashboard/student/${user.id}`, {
          headers: {
            Accept: "application/json",
            "Access-Control-Allow-Origin": "http://localhost:5173",
          },
          withCredentials: "true",
        })
        .then((response) => {
          const id = response.data.allocation.TutorId;
          const noti = response.data.notifications;
          setNotifications((prev) => {
            return {
              ...prev, noti
            }
          })
          setTutorId(id);
        });
      } catch (error) {
        toast.error("Failed to fetch tutor ID");
      }
    };
  
    if (user?.id) {
      fetchTutorId();
    }
  }, []);

  useEffect(() => {
    const fetchTutorDetails = async () => {
      try {
        await axios.get(`http://localhost:7142/tutor/${tutorId}`,  {
          headers: {
            Accept: "application/json",
            "Access-Control-Allow-Origin": "http://localhost:5173",
          },
          withCredentials: "true",})
          .then((response) => {
            setTutor(response.data);
          }
          );
      } catch (error) {
        toast.error("Unassigned Tutor");
      }
    };
  
    if (tutorId) {
      fetchTutorDetails();
    }
  }, [tutorId]);

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
    const url = `http://localhost:7142/meeting/student/${user.id}`;
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

     return(
        <div className="grid md:grid-cols-5">
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
              <div className="space-y-3 mt-3">
    {notifications.length > 0 ? (
      notifications.map((note) => (
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
      </div>

      {tutor !== null ? (
        <div className="md:col-span-2 bg-gray-300 py-6">

<div className="text-[24px] xl:text-[32px] px-4 md:px-0 md:flex justify-center">
  <h1>My Personal Tutor</h1>
</div>

<div className="flex items-center px-6 pt-11 pb-6 border-b-2 border-teal-400">
    <CgProfile className="text-[50px]" />
  <div className="flex flex-col pl-4">
    <h1 className="text-[20px]">{tutor.name}</h1>
    <span className="text-[13px]">Tutor</span>
  </div>
</div>

<div>
  <ul className="pt-5 pb-2 px-5 xl:px-10">
    <li className="py-4 xl:py-5">
        <div className="flex items-center gap-5 xl:gap-8">
            <FaBook className="text-[22px] xl:text-[26px] text-teal-600" />
            <span className="text-[14px] xl:text-[18px] text-gray-700">{tutor.major}</span>
        </div>
    </li>

      <li className="py-4 xl:py-5">
          <div className="flex items-center gap-5 xl:gap-8">
              <FiMail className="text-[22px] xl:text-[26px] text-teal-600" />
              <span className="text-[14px] xl:text-[18px] text-gray-700">{tutor.email}</span>
          </div>
      </li>

      <li className="py-4 xl:py-5">
          <div className="flex items-center gap-5 xl:gap-8">
              <MdConnectWithoutContact className="text-[22px] xl:text-[26px] text-teal-600" />
              <span className="text-[14px] xl:text-[18px] text-gray-700">Teaching Department</span>
          </div>
      </li>
  </ul>
</div>

<div className="flex items-center px-4 pt-2 pb-10 xl:px-8 border-b-2 border-teal-400">
  <div className="text-[18px] xl:text-[28px] pr-2 text-teal-600">
    <MdOutlineMessage/>
  </div>
  <div>
    <input type="text" className="py-[2px] text-[13px] xl:text-[17px] xl:py-[6px] rounded-sm bg-white border-none focus:ring-0 text-gray-700 w-full" placeholder="Quick Message"/>
  </div>
</div>


<div className=" px-14 pt-8 pb-2 md:px-6">
      <div>
        <h1 className="lg:text-xl text-md">My Presents</h1>
        </div>
</div>

   <div className="w-full px-10 md:px-6">
       <div className="relative bg-white h-[30px] w-full">
           <div className="absolute top-0 bg-teal-500 h-[30px] w-2/3">
           </div>
       </div>
       <span className="text-xs text-gray-700 xl:text-sm">{today}</span>
   </div>

</div> ) : (
    <div className="md:col-span-2 bg-gray-300 py-6">

  <div className="text-[24px] xl:text-[32px] px-4 md:px-0 md:flex justify-center">
  <h1>My Personal Tutor</h1>
</div>

  <p className="text-center mt-15 mb-5"> Loading Tutor information . . .</p>


<div className=" px-14 pt-8 pb-2 md:px-6">
      <div>
        <h1 className="lg:text-xl text-md">My Presents</h1>
      </div>
</div>

   <div className="w-full px-10 md:px-6">
       <div className="relative bg-white h-[30px] w-full">
           <div className="absolute top-0 bg-teal-500 h-[30px] w-2/3">
           </div>
       </div>
       <span className="text-xs text-gray-700 xl:text-sm">{today}</span>
   </div>

</div>
)
}


     </div>
    )
 }
 
 export default Dashboard;