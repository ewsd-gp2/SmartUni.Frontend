import React from "react";
import { HiOutlinePencil } from "react-icons/hi2";
import { FaRegTrashAlt } from "react-icons/fa";
import { HiSearch } from "react-icons/hi";
import { BsSortDown } from "react-icons/bs";
import { BsFilter } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
const StudentList = () => {
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
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
    </div>
  );
};

export default StudentList;
