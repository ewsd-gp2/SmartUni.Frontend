import axios from "axios";
import React, { use, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BsSortDown } from "react-icons/bs";

const StudentListforTutorDashboard = () => {
  const [studentList, setStudentList] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchStudentData = async () => {
    setLoading(true);
    const url = "http://localhost:7142/student";
    axios.get(url,
      {
        headers: {
          "Access-Control-Allow-Origin": "http://localhost:5173",
        },
        withCredentials: "true",
      }
    ).then((response) => {
      setStudentList(response.data);
      setLoading(false);
    }).catch((error) => {
      console.log(error);
      toast.error(error.message, {
        position: "top-right",
      });
    });
  };
  useEffect(() => {
    fetchStudentData();
  }, []);
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
          {studentList.map((student,index) => (
            <tr key={student.id} className="bg-white border-b">
              <td className="px-6 py-4 font-medium text-gray-900">
                {index+1}
              </td>
              <td className="px-6 py-4">
                <div className="flex gap-5 items-center">
                  <img
                    className=" size-10 rounded-full"
                    src="https://i.pinimg.com/736x/0e/d7/e8/0ed7e8509f71c4161e7443a86ce517a8.jpg"
                    alt=""
                  />
                  <span>{student.name}</span>
                </div>
              </td>
              <td className="px-6 py-4 flex items-center gap-3">
                <p className=" bg-teal-300 rounded-full text-slate-700 px-5 py-2">
                  Present
                </p>
              </td>
            </tr>
          ))}
        
        </tbody>
      </table>
    </div>
  );
};

export default StudentListforTutorDashboard;
