import axios from "axios";
import React, { use, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BsSortDown } from "react-icons/bs";
import { useParams } from "react-router-dom";

const StudentListforTutorDashboard = () => {
  const [studentList, setStudentList] = useState([]);
  console.log(studentList)
  const [loading, setLoading] = useState(false);
  const user = JSON.parse(localStorage.getItem("user_profile"));

  const fetchStudentData = async () => {
    setLoading(true);
    const url = `http://localhost:7142/dashboard/tutor/${user.id}`;
    axios
      .get(url, {
        headers: {
          Accept: "application/json, text/plain, */*",
          "Access-Control-Allow-Origin": "http://localhost:5173",
        },
        withCredentials: "true",
      })
      .then((response) => {
        const data = Array.isArray(response.data)
          ? response.data
          : response.data?.students || [];
        setStudentList(data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message, {
          position: "top-right",
        });
      });
  };
  useEffect(() => {
    fetchStudentData(user.id);
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
           
          </tr>
        </thead>
        <tbody>
          {Array.isArray(studentList) && studentList.length > 0 ? (
            studentList.map((student, index) => (
              <tr key={student.id || index} className="bg-white border-b">
                <td className="px-6 py-4 font-medium text-gray-900">
                  {index + 1}
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-5 items-center">
                    <img
                      className="size-10 rounded-full"
                      src={`data:image/jpeg;base64,${student.avatar}`}
                      alt=""
                    />
                    <span>{student.name}</span>
                  </div>
                </td>
               
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center py-4 text-gray-500">
                {loading ? "Loading students..." : "No students found."}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentListforTutorDashboard;
