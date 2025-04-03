import React, { use, useEffect, useState } from "react";
import { IoFilterOutline } from "react-icons/io5";
import { BsSortDown } from "react-icons/bs";
import {
  assignTutor,
  fetchAllocations,
  fetchStudents,
  fetchTutors,
  unAssignTutor,
} from "./api/api";
import toast from "react-hot-toast";
const AdminAllocation = () => {
  const [studentData, setStudentData] = useState([]);
  const [tutorData, setTutorData] = useState([]);
  const [allocation, setAllocation] = useState([]);
  const [selectedTutor, setSelectedTutor] = useState("");
  const [selectedStudents, setSelectedStudents] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      setStudentData(await fetchStudents());
      setTutorData(await fetchTutors());
      setAllocation(await fetchAllocations());
    };
    loadData();
  }, []);

  const handleSelectStudent = (studentId) => {
    setSelectedStudents((prevSelected) =>
      prevSelected.includes(studentId)
        ? prevSelected.filter((id) => id !== studentId)
        : [...prevSelected, studentId]
    );
  };
  const handleAssign = async () => {
    if (!selectedTutor) {
      toast.error("Please select a tutor first!");
      return;
    }
    if (selectedStudents.length === 0) {
      toast.error("Please select at least one student!");
      return;
    }
    const isAnyStudentUnassigned = selectedStudents.some((studentID) =>
      !allocation.some((assign) => assign.studentID === studentID)
    );
    try {
      await Promise.all(
        selectedStudents.map((studentID) =>
          assignTutor(selectedTutor, studentID)
        )
      );
      toast.success("Tutor assigned successfully");
      setAllocation((prev) => [
        ...prev,
        ...selectedStudents.map((studentID) => ({
          studentID,
          tutorID: selectedTutor,
        })),
      ]);
     
      setSelectedStudents([]);
    } catch (error) {
      toast.error("Failed to assign tutor");
    }
  };

  const handleUnassign = async () => {
    await Promise.all(selectedStudents.map((studentID) => unAssignTutor(studentID)));
    toast.success("Tutor unassigned successfully");
    const updatedAllocations = allocation.filter((assign) => !selectedStudents.includes(assign.studentID));
    setAllocation(updatedAllocations);
    setSelectedStudents([]);
    // setAllocation((prev)=>prev.filter((allocation)=>!selectedStudents.includes(allocation.studentID)));
  };
  const isAnyStudentAssigned = selectedStudents.some((studentID) =>
    allocation.some((assign) => assign.studentID === studentID)
  )
  
 
  return (
    <div>
      <form className="max-w-sm my-5">
        <label
          htmlFor="tutors"
          className="block mb-2 text-2xl font-medium text-gray-900 "
        >
          Choose Tutor
        </label>
        <select
          id="tutors"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-3"
          value={selectedTutor}
          onChange={(e) => setSelectedTutor(e.target.value)}
        >
          <option selected>Tutor</option>
          {tutorData.map((tutor) => (
            <option key={tutor.id} value={tutor.id}>
              {tutor.name}
            </option>
          ))}
        </select>
      </form>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-blue-100 ">
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
                  
                  Status
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {studentData.map((student, index) => {
              const isAssigned = allocation.find(
                (assign) => assign.studentID === student.id
              );
              return (
                <tr key={student.id} className="bg-white border-b">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-3 items-center">
                      <input
                        type="checkbox"
                        checked={selectedStudents.includes(student.id)}
                        onChange={() => handleSelectStudent(student.id)}
                        className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded-sm"
                      />
                      <img
                        className=" size-8 rounded-full"
                        src="https://i.pinimg.com/736x/0e/d7/e8/0ed7e8509f71c4161e7443a86ce517a8.jpg"
                        alt=""
                      />
                      <span>{student.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4 flex items-center gap-3">
                  <p className={`px-2.5 py-2 text-white rounded text-sm ${
                      isAssigned ? "bg-teal-500" : "bg-red-400"
                    }`}>
                      {isAssigned ? "Assigned" : "Unassigned"}
                     
                    </p>
                   
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className=" flex justify-end gap-3 ">
      <button
          className="mt-4 border border-teal-500 text-slate-900 px-6 py-2 rounded-lg"
          onClick={handleUnassign}
          disabled={!isAnyStudentAssigned}
        >
          Unassign -
        </button>
        <button
          onClick={handleAssign}
          className="mt-4 bg-teal-500 text-white px-6 py-2 rounded-lg"
          disabled={isAnyStudentAssigned}
          // disabled={selectedStudents.length === 0 || !selectedTutor}
        >
          Assign +
        </button>
      </div>
    </div>
  );
};

export default AdminAllocation;
