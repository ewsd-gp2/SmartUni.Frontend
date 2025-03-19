import React, { use, useEffect, useState } from "react";
import { IoFilterOutline } from "react-icons/io5";
import { BsSortDown } from "react-icons/bs";
import axios from "axios";
const AdminAllocation = () => {
  const [studentData, setStudentData] = useState([]);
  const [tutorData, setTutorData] = useState([]);
  const [allocation, setAllocation] = useState("");
  const [selectedTutor, setSelectedTutor] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [studentsRes, tutorsRes, allocationRes] = await Promise.all([
          axios.get("http://localhost:7142/students"),
          axios.get("http://localhost:7142/tutor"),
          axios.get("http://localhost:7142/allocation"),
        ]);
        setStudentData(studentsRes.data);
        setTutorData(tutorsRes.data);
        setAllocation(allocationRes.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <form className="max-w-sm">
        <label
          htmlFor="tutors"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Choose Tutor
        </label>
        <select
          id="tutors"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          value={selectedTutor}
          onChange={(e) => setSelectedTutor(e.target.value)}
        >
          <option selected>Tutor</option>
          {tutorData.map((tutor) => (
            <option key={tutor.id} value={tutor.id}>{tutor.name}</option>
          ))}
        </select>
      </form>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                No
              </th>
              <th scope="col" className="px-6 py-3">
                Students Name
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center gap-2">
                  <BsSortDown />
                  Sorting
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center gap-2">
                  <IoFilterOutline />
                  Filtering
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
          {studentData.map((student, index) => (
              <tr key={student.id} className="bg-white border-b">
                <td className="px-6 py-4 font-medium text-gray-900">{index + 1}</td>
                <td className="px-6 py-4">{student.name}</td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4">
                  <p className="bg-blue-500 text-white px-4 py-2 rounded">
                    Assign
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
                    Assign
                  </button>
        </table>
      </div>
    </div>
  );
};

export default AdminAllocation;
