import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import SideBar from "../../components/SideBar";
import TableLayout from "../../components/TableLayout";
import { HiSearch } from "react-icons/hi";
import { BsSortDown } from "react-icons/bs";
import { BsFilter } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import HeaderTitle from "../../components/common/HeaderTitle";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import Lottie from "lottie-react";
import loadingAnimation from "../../assets/lottie/loading.json";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const userRole = localStorage.getItem("userRole");

  // const [pagination, setPagination] = useState({
  //   page: "",
  //   loading: false,
  // });
  const [openDelete, setOpenDelete] = useState({
    isOpen: false,
    id: "",
  });

  const [loading, setLoading] = useState(false);
  const [tutorData, setTutorData] = useState([]);
  const CreateAccount = () => {
    navigate(`/${userRole}/dashboard/create`);
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     setPagination((prev) => ({ ...prev, loading: false }));
  //   }, 2000);
  // }, []);




  useEffect(() => {
    const fetchTutorData = async () => {
      const url = "http://localhost:7142/tutor";
      setLoading(true);
      axios
          .get(url)
          .then((response) => {
            console.log(response);
            setTutorData(response.data);
          })
          .catch((error) => {
            console.log(error);
            toast.error("Sorry, something went wrong.", {
              position: "top-right",
            });
          });
      setLoading(false);
    };
    fetchTutorData();
  }, []);

  const handleDelete = (id) => {
    const url = `http://localhost:7142/tutor/${id}`;
    console.log("deleting...");
    setLoading(true);
    axios
      .delete(url)
      .then((response) => {
        console.log("delete res", response);
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
        <div className=' flex col-span-4 gap-5'>
          <div className=' mt-5 w-full px-10'>
            <HeaderTitle title='Dashboard' />
            <div className=' flex items-center justify-between mt-5'>
              <form className='max-w-sm mb-3'>
                <select
                  id='users'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-[100px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500'
                  value='tutor'
                >
                  <option value='student'>Student</option>
                  <option value='tutor'>Tutor</option>
                  <option value='staff'>Staff</option>
                </select>
              </form>
              <div>
                <button
                  onClick={CreateAccount}
                  className=' flex items-center gap-2 bg-teal-500 p-2 rounded text-white'
                >
                  <AiOutlinePlus />
                  Create Account
                </button>
              </div>
            </div>
            <div className=' flex items-center gap-5'>
              <div className='relative'>
                <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                  <HiSearch className=' text-gray-400 text-xl' />
                </div>
                <input
                  type='search'
                  className='block w-52 p-3 ps-8 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500'
                  placeholder='Search'
                />
              </div>
              <div className=' flex items-center gap-2'>
                <BsSortDown className=' text-2xl' />
                <span>Sorting</span>
              </div>
              <div className=' flex items-center gap-2'>
                <BsFilter className=' text-2xl' />
                <span>Filter</span>
              </div>
            </div>
            {loading ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "200px",
                }}
              >
                <Lottie
                  autoplay
                  loop
                  animationData={loadingAnimation}
                  style={{ width: "100px", height: "100px" }}
                />
              </div>
            ) : (
              <TableLayout data={tutorData} handleDelete={handleDelete} />
            )}
          </div>
        </div>
      </Container>
    </main>
  );
};

export default AdminDashboard;
