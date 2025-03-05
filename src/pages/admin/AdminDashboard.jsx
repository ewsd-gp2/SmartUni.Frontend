import React from "react";
import Container from "../../components/Container";
import SideBar from "../../components/SideBar";
import StudentList from "../../components/StudentList";
import { HiSearch } from "react-icons/hi";
import { BsSortDown } from "react-icons/bs";
import { BsFilter } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import HeaderTitle from "../../components/common/HeaderTitle";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const CreateAccount = () => {
    navigate("/admin/dashboard/create");
  };
  return (
    <main>
      <Container>
        <div className=' flex col-span-4 gap-5'>
          {/* <SideBar className=' col-span-1' /> */}
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
            <StudentList />
          </div>
        </div>
      </Container>
    </main>
  );
};

export default AdminDashboard;
