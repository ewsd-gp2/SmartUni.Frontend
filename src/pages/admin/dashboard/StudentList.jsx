import React, { useEffect, useState } from "react";
import Container from "../../../components/Container";
import SideBar from "../../../components/SideBar";
import TableLayout from "../../../components/TableLayout";
import { HiSearch } from "react-icons/hi";
import { BsSortDown } from "react-icons/bs";
import { BsFilter } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import HeaderTitle from "../../../components/common/HeaderTitle";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import Lottie from "lottie-react";
import { IoAddCircle } from "react-icons/io5";
import GradientButton from "../../../components/buttons/GradientButton";
import TableSkeleton from "../../../components/TableSkelenton";

const StudentList = () => {
  const navigate = useNavigate();

  const [openDelete, setOpenDelete] = useState({
    isOpen: false,
    id: "",
  });
  const [loading, setLoading] = useState(false);
  const [studentData, setStudentData] = useState([]);
  const CreateAccount = () => {
    navigate("/staff/dashboard/create/student");
  };

  const fetchStudentData = async () => {
    setLoading(true);
    const url = "http://localhost:7142/student";
    axios
      .get(url, {
        headers: {
          "Access-Control-Allow-Origin": "http://localhost:5173",
        },
        withCredentials: "true",
      })
      .then((response) => {
        console.log("getstudent", response.data);
        setStudentData(response.data);
      })
      
    setLoading(false);
  };
  useEffect(() => {
    fetchStudentData();
  }, []);
  const handleDelete = (id) => {
    setLoading(true);
    const url = `http://localhost:7142/student/${id}`;
    console.log("deleting...");
    axios
      .delete(url, {
        headers: {
          "Access-Control-Allow-Origin": "http://localhost:5173",
        },
        withCredentials: true,
      })
      .then((response) => {
        console.log("delete res", response);
        fetchStudentData();
      })
      .catch((error) => {
        console.log(error);
        toast.error("Sorry, something went wrong.", {
          position: "top-right",
        });
      });
    setLoading(false);
  };

  return (
    <main>
      <Container>
        <div className=" flex col-span-4 gap-5">
          <div className=" mt-5 w-full">
            <HeaderTitle title="Student List" />
            <div className="mb-8" />
            {/* <div className='flex flex-row justify-between'>
              <div className=' flex items-center justify-between mt-5'>
                <button
                  className='rounded-3xl py-3 px-4 flex flex-row gap-1.5 justify-center bg-gradient-to-br from-green-400 to-blue-600 text-white  transition-transform duration-300 hover:scale-105 hover:bg-green-500'
                  onClick={CreateAccount}
                >
                  <IoAddCircle
                    size={20}
                    color='white'
                    className='self-center'
                  />
                  <span className='self-center font-semibold'>New Tutor</span>
                </button>
              </div>
            </div> */}
            
            <TableLayout data={studentData} userRole="student" handleDelete={handleDelete} CreateAccount={CreateAccount} loading={loading} />
          </div>
        </div>
      </Container>
    </main>
  );
};

export default StudentList;
