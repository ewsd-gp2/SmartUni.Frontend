import React from "react";
import { HiOutlinePencil } from "react-icons/hi2";
import { FaRegTrashAlt } from "react-icons/fa";
import { HiSearch } from "react-icons/hi";
import { BsSortDown } from "react-icons/bs";
import { BsFilter } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
const StudentList = () => {
  return (
    <div>
      <div className=" flex items-center justify-between">
        <form className="max-w-sm mb-3">
          <select
            id="users"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-[100px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
          >
            <option value="student" selected>
              Student
            </option>
            <option value="tutor">Tutor</option>
            <option value="staff">Staff</option>
          </select>
        </form>
        <div>
          <button className=" flex items-center gap-2 bg-teal-500 p-2 rounded text-white">
            <AiOutlinePlus />
            Create Account
          </button>
        </div>
      </div>
      <div className=" flex items-center gap-5">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <HiSearch className=" text-gray-400 text-xl" />
          </div>
          <input
            type="search"
            className="block w-52 p-3 ps-8 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
            placeholder="Search"
          />
        </div>
        <div className=" flex items-center gap-2">
          <BsSortDown className=" text-2xl" />
          <span>Sorting</span>
        </div>
        <div className=" flex items-center gap-2">
          <BsFilter className=" text-2xl" />
          <span>Filter</span>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Full Name
              </th>
              <th scope="col" className="px-6 py-3">
                Major
              </th>
              <th scope="col" className="px-6 py-3">
                Phone Number
              </th>
              <th scope="col" className="px-6 py-3">
                Email Address
              </th>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Edit
              </th>
              <th scope="col" className="px-6 py-3">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img
                  className=" size-8 rounded-full"
                  src="https://i.pinimg.com/236x/da/c0/8d/dac08dbae85f1e89081126a98568c9e9.jpg"
                  alt=""
                />
              </th>
              <td className="px-6 py-4">Grace</td>
              <td className="px-6 py-4">Computing</td>
              <td className="px-6 py-4">+9599876543</td>
              <td className="px-6 py-4">grace1@gmail.com</td>
              <td className="px-6 py-4">S001</td>
              <td className="px-6 py-4">
                <HiOutlinePencil className="  size-4 text-blue-500" />
              </td>
              <td className="px-6 py-4">
                <FaRegTrashAlt className=" size-4 text-red-500" />
              </td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img
                  className=" size-8 rounded-full"
                  src="https://i.pinimg.com/236x/da/c0/8d/dac08dbae85f1e89081126a98568c9e9.jpg"
                  alt=""
                />
              </th>
              <td className="px-6 py-4">Grace</td>
              <td className="px-6 py-4">Computing</td>
              <td className="px-6 py-4">+9599876543</td>
              <td className="px-6 py-4">grace1@gmail.com</td>
              <td className="px-6 py-4">S001</td>
              <td className="px-6 py-4">
                <HiOutlinePencil className=" size-4 text-blue-500" />
              </td>
              <td className="px-6 py-4">
                <FaRegTrashAlt className=" size-4 text-red-500" />
              </td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img
                  className=" size-8 rounded-full"
                  src="https://i.pinimg.com/236x/da/c0/8d/dac08dbae85f1e89081126a98568c9e9.jpg"
                  alt=""
                />
              </th>
              <td className="px-6 py-4">Grace</td>
              <td className="px-6 py-4">Computing</td>
              <td className="px-6 py-4">+9599876543</td>
              <td className="px-6 py-4">grace1@gmail.com</td>
              <td className="px-6 py-4">S001</td>
              <td className="px-6 py-4">
                <HiOutlinePencil className=" size-4 text-blue-500" />
              </td>
              <td className="px-6 py-4">
                <FaRegTrashAlt className=" size-4 text-red-500" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className=" flex justify-between mt-3">
        <p className=" text-xs text-gray-500">Showing 1 to 10 of 50 entries</p>
        <nav aria-label="Page navigation">
          <ul className="inline-flex -space-x-px text-xs">
            <li>
              <Link
                to={""}
                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500  rounded-s-lg bg-gray-300 hover:bg-gray-300 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <IoIosArrowBack />
              </Link>
            </li>
            <li>
              <Link
                to={""}
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                1
              </Link>
            </li>
            <li>
              <Link
                to={""}
                className="  flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white hover:bg-teal-500 hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                2
              </Link>
            </li>
            <li>
              <Link
                to={""}
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                3
              </Link>
            </li>
            <li>
              <Link
                to={""}
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                4
              </Link>
            </li>
            <li>
              <Link
                to={""}
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-gray-300  rounded-e-lg hover:bg-gray-300 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <IoIosArrowForward />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default StudentList;
