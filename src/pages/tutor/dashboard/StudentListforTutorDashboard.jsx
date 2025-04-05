import React from "react";
import { BsSortDown } from "react-icons/bs";

const StudentListforTutorDashboard = () => {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-teal-200 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              No
            </th>
            <th scope="col" className="px-6 py-3">
              Student Names
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center gap-2">Sorting</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b">
            <td className="px-6 py-4 font-medium text-gray-900">1</td>
            <td className="px-6 py-4">
              <div className="flex gap-5 items-center">
                <img
                  className=" size-10 rounded-full"
                  src="https://i.pinimg.com/736x/0e/d7/e8/0ed7e8509f71c4161e7443a86ce517a8.jpg"
                  alt=""
                />
                <span>David</span>
              </div>
            </td>
            <td className="px-6 py-4 flex items-center gap-3">
              <p className=" bg-teal-300 rounded-full text-slate-700 px-5 py-2">
                Present
              </p>
            </td>
          </tr>
          <tr className="bg-white border-b">
            <td className="px-6 py-4 font-medium text-gray-900">2</td>
            <td className="px-6 py-4">
              <div className="flex gap-5 items-center">
                <img
                  className=" size-10 rounded-full"
                  src="https://i.pinimg.com/736x/0e/d7/e8/0ed7e8509f71c4161e7443a86ce517a8.jpg"
                  alt=""
                />
                <span>Olivia</span>
              </div>
            </td>
            <td className="px-6 py-4 flex items-center gap-3">
              <p className=" bg-red-400 rounded-full text-white px-5 py-2">
                Absent
              </p>
            </td>
          </tr>
          <tr className="bg-white border-b">
            <td className="px-6 py-4 font-medium text-gray-900">3</td>
            <td className="px-6 py-4">
              <div className="flex gap-5 items-center">
                <img
                  className=" size-10 rounded-full"
                  src="https://i.pinimg.com/736x/0e/d7/e8/0ed7e8509f71c4161e7443a86ce517a8.jpg"
                  alt=""
                />
                <span>Taylor</span>
              </div>
            </td>
            <td className="px-6 py-4 flex items-center gap-3">
              <p className=" bg-teal-300 rounded-full text-slate-700 px-5 py-2">
                Present
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StudentListforTutorDashboard;
