import { useEffect, useState, useCallback } from "react";
import HeaderTitle from "../../../components/common/HeaderTitle";
import { MdLocationPin, MdAccessTimeFilled } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import { motion } from "framer-motion";
import { IoAddCircle } from "react-icons/io5";
import CreateMeeting from "./CreateMeeting";
import CustomDateModal from "./CustomDateModal";
import ShowEmpty from "../../../components/common/ShowEmpty";
import axios from "axios";
import toast from "react-hot-toast";
import moment from "moment";
import {
  todayStart,
  todayEnd,
  thisWeekStart,
  thisWeekEnd,
} from "../../../utility/DateRange";

const filterOptions = [
  { id: 1, name: "Today" },
  { id: 2, name: "This Week" },
  { id: 3, name: "Custom" },
];
const TutorMeeting = () => {
  const user = JSON.parse(localStorage.getItem("user_profile"));
  const [select, setSelect] = useState(1);
  const [openForm, setOpenForm] = useState(false);
  const [openCustomDate, setOpenCustomDate] = useState(false);
  const [listLoading, setListLoading] = useState(false);
  const [data, setData] = useState([]);
  const [selectedRange, setSelectedRange] = useState({
    startTime: todayStart,
    endTime: todayEnd,
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
    console.log("SELECTED RANGE", selectedRange);
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

  const onClickFilterOption = (id) => {
    setSelect(id);
    if (id === 3) {
      setOpenCustomDate(true);
    }
  };

  const openModal = () => {
    setOpenForm(true);
  };

  const closeModal = (key) => {
    if (key === "form") {
      setOpenForm(false);
    } else if (key === "custom_date") {
      setOpenCustomDate(false);
    }
  };

  const handleSelectedRange = useCallback((range) => {
    setSelectedRange(range);
  }, []);

  const handleMessage = useCallback((msg) => {
    setMessage(msg);
  }, []);

  const clearData = useCallback(() => {
    setData([]);
  }, []);

  return (
    <div className='md:ml-6'>
      <HeaderTitle title='Meetings' />
      <p className='text-lg text-[#8a8f91] mt-5'>
        View and manage your upcoming meetings with students
      </p>
      <div className='flex flex-row gap-10 mb-10'>
        <div className='bg-[#f8f8f8] flex flex-row justify-between w-md mt-5 px-6 py-2 rounded-xl '>
          {filterOptions.map((options) => (
            <div
              key={options.id}
              className={` text-[#5e636d] px-5 py-1 rounded-xl font-semibold cursor-pointer ${
                options.id === select ? "bg-white text-black shadow-md" : ""
              }`}
              onClick={() => onClickFilterOption(options.id)}
            >
              {options.name}
            </div>
          ))}
        </div>
        <button
          className='rounded-3xl px-4 flex flex-row gap-1.5 mt-5 justify-center bg-gradient-to-br from-green-400 to-blue-600 text-white  transition-transform duration-300 hover:scale-105 hover:bg-green-500'
          onClick={openModal}
        >
          <IoAddCircle size={20} color='white' className='self-center' />
          <span className='self-center font-semibold'>New Event</span>
        </button>
      </div>
      {data.length === 0 ? (
        <div className='px-2 py-4 w-md my-4'>
          <p className='text-xl text-center text-gray-500'>No events found.</p>
        </div>
      ) : (
        data.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, x: -200, scale: 0.5 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 200, scale: 1.2 }}
            transition={{ duration: 0.2, type: "spring" }}
            className='bg-white border-1 border-gray-300 px-2 py-4 my-4 w-2xl rounded-xl shadow-md transition-transform duration-300'
          >
            <div className='flex flex-row gap-4'>
              <div className='pl-4 pr-14 flex flex-col border-r-1 border-[#d3d3d3] basis-1/7'>
                {/* <span className='text-xl text-center text-teal-500'>
                  {moment(item.startTime).utc().format("ddd")}
                </span> */}
                <span className='text-xl text-center text-teal-500'>
                  {moment(item.startTime).utc().format("MMM")}
                </span>
                <span className='text-3xl text-center font-semibold text-[#0D9488]'>
                  {moment(item.startTime).utc().format("D")}
                </span>
              </div>

              <div className='flex flex-col gap-2 pr-14  basis-3/7'>
                <div className='flex flex-row gap-2'>
                  <MdAccessTimeFilled
                    size={16}
                    color='#8e9394'
                    className='self-center'
                  />
                  <span>
                    {moment(item.startTime).format("h:mm A")} -
                    {moment(item.endTime).format("h:mm A")}
                  </span>
                </div>
                <div className='flex flex-row gap-2 '>
                  <MdLocationPin
                    size={16}
                    color='#8e9394'
                    className='self-center'
                  />
                  <span>{item.isOnline ? "online" : "offline"}</span>
                </div>
              </div>

              <div className=''>{item.title}</div>
            </div>
            <div className='pt-2 pl-4 border-t border-gray-300 mt-4'>
              <p className='font-semibold text-[#0D9488] text-lg'>
                {item.isOnline ? "Meeting Link" : "Location"}
              </p>
              <p>{item.isOnline ? item.url : item.location}</p>
              {/* {item.isOnline ? `Meeting Link: ${item.url}` : `Location: ${item.location}`} */}
            </div>
          </motion.div>
        ))
      )}

      <CreateMeeting isVisible={openForm} onClose={() => closeModal("form")} />
      <CustomDateModal
        isVisible={openCustomDate}
        clearData={clearData}
        handleSelectedRange={handleSelectedRange}
        handleMessage={handleMessage}
        onClose={() => closeModal("custom_date")}
      />
    </div>
  );
};

export default TutorMeeting;
