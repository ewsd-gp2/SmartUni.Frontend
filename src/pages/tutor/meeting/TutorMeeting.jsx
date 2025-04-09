import { useEffect, useState } from "react";
import HeaderTitle from "../../../components/common/HeaderTitle";
import { MdLocationPin, MdAccessTimeFilled } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import { motion } from "framer-motion";
import { IoAddCircle } from "react-icons/io5";
import CreateMeeting from "./CreateMeeting";
import ShowEmpty from "../../../components/common/ShowEmpty";
import axios from "axios";
import toast from "react-hot-toast";
import moment from 'moment';

const filterOptions = [
  { id: 1, name: "Today" },
  { id: 2, name: "This Week" },
  { id: 3, name: "Custom" },
];
const TutorMeeting = () => {
  const [select, setSelect] = useState(1);
  const [openForm, setOpenForm] = useState(false);
  const [listLoading, setListLoading] = useState(false);
  const [data, setData] = useState([]);
  // const [todayRange, setTodayRange] = useState({
  //   // startTime: moment().startOf('day').toISOString(),
  //   startTime:"2025-04-04T00:00:00Z",
  //   endTime: "2025-04-04T23:59:59Z"
  // });
  const todayRange = {
startTime: "2025-04-06T00:00:00Z",
endTime: "2025-04-06T23:59:59Z"
}
  const organizer_id = "fd9233a2-98bb-4b69-bc8f-18923fd48805";

  useEffect(() => {
    fetchMeetingList();
  },[])

  const fetchMeetingList = async () => {
    const url = `http://localhost:7142/meeting/tutor/${organizer_id}`;
    setListLoading(true);
    console.log('payload',todayRange);
    axios
      .post(url,todayRange,{
        headers: {
         "Content-Type": "application/json", 
         // "Access-Control-Allow-Origin": "http://localhost:5173",
        },
        //data:todayRange,
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
    // setListLoading(true);
    
  
    // // Log the payload (todayRange) to ensure it's being sent properly
    // console.log('Payload (todayRange):', todayRange);
  
    // try {
    //   const response = await axios({
    //     method: 'get',  // Explicitly use GET method
    //     url: url,
    //     headers: {
    //       "Content-Type": "application/json",  // Sending JSON content
    //      "Access-Control-Allow-Origin": "*",
    //       // Uncomment if needed
    //       // "Authorization": `Bearer ${token}`,
    //     },
    //     data: todayRange,  // This is the JSON body being sent
    //     withCredentials: true,  // Boolean value
    //   });
  
    //   console.log("getMeetingList Response:", response.data);
    //   setData(response.data);
    // } catch (error) {
    //   console.error("Error fetching meetings:", error);
    //   toast.error("Sorry, something went wrong.", { position: "top-right" });
    // }
  
    // setListLoading(false);
    
  //  setListLoading(true);

    //const url = `/smartuni/meeting/tutor/${organizer_id}`;
  
    // const todayRange = {
    //   startTime: "2025-04-04T00:00:00Z",
    //   endTime: "2025-04-04T23:59:59Z",
    // };
  };

  const onClickFilterOption = (id) => {
    setSelect(id);
  };

  const openModal = () => {
    setOpenForm(true);
  };

  const closeModal = (event) => {
    // event.preventDefault();
    setOpenForm(false);
  };
  return (
    <div>
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
      {data.map((item,index) => (
        <motion.div
          initial={{ opacity: 0, x: -200, scale: 0.5 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 200, scale: 1.2 }}
          transition={{ duration: 0.2, type: "spring" }}
          className='flex flex-row gap-10 border-1 border-gray-300 px-2 py-4 my-4 w-3xl rounded-xl shadow-md transition-transform duration-300'
        >
          <div className='pl-4 pr-14 flex flex-col border-r-1 border-[#d3d3d3]'>
            <span className='text-xl text-center text-[#0D9488]'>Wed</span>
            <span className='text-3xl text-center font-semibold text-[#0D9488]'>
              28
            </span>
          </div>
          <div className='flex flex-col gap-2 pr-14'>
            <div className='flex flex-row gap-2'>
              <MdAccessTimeFilled
                size={16}
                color='#8e9394'
                className='self-center'
              />
              <span>09:00 - 09:30</span>
            </div>
            <div className='flex flex-row gap-2'>
              <MdLocationPin size={16} color='#8e9394' className='self-center' />
              <span>{item.isOnline?'online':item.location}</span>
            </div>
          </div>
          <div>{item.title}</div>
        </motion.div>))}
      {/* <motion.div
        initial={{ opacity: 0, x: -200, scale: 0.5 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: 200, scale: 1.2 }}
        transition={{ duration: 0.2, type: "spring" }}
        className='flex flex-row gap-10 border-1 border-gray-300 px-2 py-4 my-4 w-3xl rounded-xl shadow-md transition-transform duration-300 hover:scale-105'
      >
        <div className='pl-4 pr-14 flex flex-col border-r-1 border-[#d3d3d3]'>
          <span className='text-xl text-center text-[#0D9488]'>Wed</span>
          <span className='text-3xl text-center font-semibold text-[#0D9488]'>
            28
          </span>
        </div>
        <div className='flex flex-col gap-2 pr-14'>
          <div className='flex flex-row gap-2'>
            <MdAccessTimeFilled
              size={16}
              color='#8e9394'
              className='self-center'
            />
            <span>09:00 - 09:30</span>
          </div>
          <div className='flex flex-row gap-2'>
            <MdLocationPin size={16} color='#8e9394' className='self-center' />
            <span>online or location</span>
          </div>
        </div>
        <div>School Charity leader selection and discussion.</div>
      </motion.div>
      <motion.div
        // initial={{ x: -100, opacity: 0 }}
        // animate={{ x: 0, opacity: 1 }}
        // transition={{ duration: 0.5, ease: "easeOut" }}
        initial={{ opacity: 0, x: -200, scale: 0.5 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: 200, scale: 1.2 }}
        transition={{ duration: 0.2, type: "spring" }}
        className='flex flex-row gap-10 border-1 border-gray-300 px-2 py-4 my-4 w-3xl rounded-xl shadow-md transition-transform duration-300 hover:scale-110'
      >
        <div className='pl-4 pr-14 flex flex-col border-r-1 border-[#d3d3d3]'>
          <span className='text-xl text-center text-[#0D9488]'>Wed</span>
          <span className='text-3xl text-center font-semibold text-[#0D9488]'>
            28
          </span>
        </div>
        <div className='flex flex-col gap-2 pr-14'>
          <div className='flex flex-row gap-2'>
            <MdAccessTimeFilled
              size={16}
              color='#8e9394'
              className='self-center'
            />
            <span>09:00 - 09:30</span>
          </div>
          <div className='flex flex-row gap-2'>
            <MdLocationPin size={16} color='#8e9394' className='self-center' />
            <span>online or location</span>
          </div>
        </div>
        <div>School Charity leader selection and discussion.</div>
      </motion.div> */}
      <CreateMeeting isVisible={openForm} onClose={closeModal} />
    </div>
  );
};

export default TutorMeeting;
