import { useState } from "react";
import HeaderTitle from "../../../components/common/HeaderTitle";
import { MdLocationPin, MdAccessTimeFilled } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import { motion } from "framer-motion";
import { IoAddCircle } from "react-icons/io5";
import CreateMeeting from "./CreateMeeting";
import ShowEmpty from "../../../components/common/ShowEmpty";

const filterOptions = [
  { id: 1, name: "Today" },
  { id: 2, name: "This Week" },
  { id: 3, name: "ShowAll" },
];
const TutorMeeting = () => {
  const [select, setSelect] = useState(1);
  const [openForm, setOpenForm] = useState(false);
  const [listLoading, setListLoading] = useState(false);

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
      <motion.div
        // initial={{ x: -100, opacity: 0 }}
        // animate={{ x: 0, opacity: 1 }}
        // transition={{ duration: 0.5, ease: "easeOut" }}
        initial={{ opacity: 0, x: -200, scale: 0.5 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: 200, scale: 1.2 }}
        transition={{ duration: 0.2, type: "spring" }}
        className='flex flex-row gap-10 border-1 border-gray-300 px-2 py-4 my-4 w-3xl rounded-xl shadow-md transition-transform duration-300 hover:scale-105'
      >
        {/* <div>Charity Discussion</div> */}
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
      </motion.div>
      <CreateMeeting isVisible={openForm} onClose={closeModal} />
    </div>
  );
};

export default TutorMeeting;
