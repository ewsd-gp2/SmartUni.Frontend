import React, { useEffect, useState } from "react";
import { BsSortDown } from "react-icons/bs";
import {
  assignTutor,
  fetchAllocations,
  fetchStudents,
  fetchTutors,
  sendEmail,
  unAssignTutor,
} from "./api/api";
import toast from "react-hot-toast";
import axios from "axios";

const AdminAllocation = () => {
  const [studentData, setStudentData] = useState([]);
  const [tutorData, setTutorData] = useState([]);
  const [allocation, setAllocation] = useState([]);
  const [selectedTutor, setSelectedTutor] = useState("");
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [sortName, setSortName] = useState("asc");
  const [loading, setLoading] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  // console.log(studentData);
  // console.log(tutorData)
  console.log(allocation)
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const [students, tutors, allocations] = await Promise.all([
          fetchStudents(),
          fetchTutors(),
          fetchAllocations(),
        ]);
        setStudentData(students);
        setTutorData(tutors);
        setAllocation(allocations);
      } catch (error) {
        toast.error("Failed to load data");
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);
  const sortedStudentData = [...studentData].sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (sortName === "asc") return nameA.localeCompare(nameB);
    else return nameB.localeCompare(nameA);
  });
  const toggleDropdown = () => setDropdownVisible(!dropdownVisible);
  const handleSelectStudent = (studentId) => {
    setSelectedStudents((prevSelected) =>
      prevSelected.includes(studentId)
        ? prevSelected.filter((id) => id !== studentId)
        : [...prevSelected, studentId]
    );
  };

  const handleAssign = async () => {
    if (!selectedTutor || selectedStudents.length === 0) {
      toast.error("Select tutor and students first");
      return;
    }

    try {
      setLoading(true);

      await Promise.all(
        selectedStudents.map(async (studentID) => {
          await assignTutor(selectedTutor, studentID);

          const student = studentData.find((s) => s.id === studentID);
          const tutor = tutorData.find((t) => t.id === selectedTutor);

          const emailData = {
            studentEmail: student.email,
            studentName: student.name,
            tutorEmail: tutor.email,
            tutorName: tutor.name,
            subject: "Tutor Assignment Notification",
            // helpCenterUrl: "https://your-help-center.com",
            senderName: "Admin",
            // websiteUrl: "https://your-website.com"
          };

          await sendEmail(emailData);
        })
      );

      const updatedAllocations = await fetchAllocations();
      setAllocation(updatedAllocations);
      toast.success("Tutor assigned successfully and email sent", {
        icon: "✅",
        style: {
          background: "#ECFDF5",
          color: "#065F46",
          borderLeft: "4px solid #059669",
        },
      });

      setSelectedStudents([]);
    } catch (error) {
      toast.error("Assignment failed");
    } finally {
      setLoading(false);
    }
  };

  const handleUnassign = async () => {
    if (!selectedStudents.length) {
      toast.error("Please select students to unassign");
      return;
    }

    try {
      setLoading(true);
      const allocationsToUnassign = allocation
        .filter((a) => selectedStudents.includes(a.studentID))
        .map((a) => ({
          id: a.id,
          student: studentData.find((s) => s.id === a.studentID),
          tutor: tutorData.find((t) => t.id === a.tutorID),
        }));

      if (allocationsToUnassign.length === 0) {
        toast.error("No assignments found for selected students");
        return;
      }

      await Promise.all(
        allocationsToUnassign.map(async ({ id, student, tutor }) => {
          await unAssignTutor(id);

          if (student && tutor) {
            const emailData = {
              studentEmail: student.email,
              studentName: student.name,
              tutorEmail: tutor.email,
              tutorName: tutor.name,
              subject: "Tutor Unassignment Notification",
              senderName: "Admin",
            };

            await sendEmail(emailData);
          }
        })
      );

      const updatedAllocations = await fetchAllocations();
      setAllocation(updatedAllocations);

      toast.success("Tutor unassigned successfully and email sent", {
        icon: "✅",
        style: {
          background: "#ECFDF5",
          color: "#065F46",
          borderLeft: "4px solid #059669",
        },
      });

      setSelectedStudents([]);
    } catch (error) {
      console.error("Unassign failed:", error);
      toast.error(`Failed to complete unassignment: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const isAnyStudentAssigned = selectedStudents.some((studentID) =>
    allocation.some((assign) => assign.studentID === studentID)
  );
  const pageView = async (pageName) => {
    try {
      const formData = new FormData();
      formData.append("pageName", pageName);

      const response = await axios.post(
        "http://localhost:7142/pageview",
        formData,
        {
          withCredentials: true,
        }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      throw error;
    }
  };
  useEffect(() => {
    pageView("Allocation");
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen gap-2">
        <p>Please Wait a moment...</p>
        <p className="animate-spin rounded-full size-8 border-t-2 border-b-2 border-teal-500"></p>
      </div>
    );
  }
  if (studentData.length === 0 || tutorData.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-500 text-lg">
        No student or tutor data available.
      </div>
    );
  }

  return (
    <div className="p-2 md:p-4 lg:p-6 max-w-7xl mx-auto pt-10 md:pt-10">
      <div className="w-full max-w-2xl mb-4 md:mb-6">
        <label
          htmlFor="tutors"
          className="block mb-2 text-lg md:text-xl font-medium text-gray-900"
        >
          Choose Tutor
        </label>
        <div className="flex flex-col sm:flex-row gap-2 w-full">
  <select
    id="tutors"
    className="w-full sm:flex-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm md:text-base rounded-lg focus:ring-teal-500 focus:border-teal-500 p-2 md:p-3"
    value={selectedTutor}
    onChange={(e) => setSelectedTutor(e.target.value)}
  >
    <option value="">Select Tutor</option>
    {tutorData.map((tutor) => (
      <option key={tutor.id} value={tutor.id}>
        {tutor.name}
      </option>
    ))}
  </select>
</div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
        <table className="w-full text-xs md:text-sm text-left text-gray-500">
          <thead className="text-xs md:text-sm text-gray-700 uppercase bg-cyan-100">
            <tr>
              <th className="px-3 py-2 md:px-4 md:py-3">No</th>
              <th className="px-3 py-2 md:px-4 md:py-3">Students Name</th>
              <th className="px-3 py-2 md:px-4 md:py-3 relative">
                <div
                  className="flex items-center gap-1 md:gap-2 cursor-pointer"
                  onClick={toggleDropdown}
                >
                  <BsSortDown className="text-teal-600" />
                  <span>Sort</span>
                </div>
                {dropdownVisible && (
                  <div className="absolute top-full left-0 mt-1 w-24 bg-white border border-gray-200 rounded shadow-md z-10">
                    <p
                      className={`px-2 py-1 md:px-3 md:py-2 hover:bg-teal-100 text-xs md:text-sm cursor-pointer ${
                        sortName === "asc" ? "font-semibold text-teal-600" : ""
                      }`}
                      onClick={() => {
                        setSortName("asc");
                        toggleDropdown();
                      }}
                    >
                      A - Z
                    </p>
                    <p
                      className={`px-2 py-1 md:px-3 md:py-2 hover:bg-teal-100 text-sm md:text-base cursor-pointer ${
                        sortName === "desc" ? "font-semibold text-teal-600" : ""
                      }`}
                      onClick={() => {
                        setSortName("desc");
                        toggleDropdown();
                      }}
                    >
                      Z - A
                    </p>
                  </div>
                )}
              </th>
              <th className="px-3 py-2 md:px-4 md:py-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {sortedStudentData.map((student, index) => {
              const isAssigned = allocation.some(
                (a) => String(a.studentID) === String(student.id)
              );
              return (
                <tr
                  key={student.id}
                  className="bg-white border-b hover:bg-gray-50"
                >
                  <td className="px-3 py-2 md:px-4 md:py-3 font-medium text-gray-900 whitespace-nowrap">
                    {index + 1}
                  </td>
                  <td className="px-3 py-2 md:px-4 md:py-3">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={selectedStudents.includes(student.id)}
                        onChange={() => handleSelectStudent(student.id)}
                        className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded-sm"
                      />
                      <img
                        src={student.image ? `data:image/jpeg;base64,${student.image}` : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
                        alt={student.name}
                        className="size-6 md:size-7 lg:size-8 rounded-full object-cover"
                      />
                      <span className="font-medium md:text-base text-gray-900 truncate max-w-[100px] md:max-w-none">
                        {student.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-3 py-2 md:px-4 md:py-3"></td>
                  <td className="px-3 py-2 md:px-4 md:py-3">
                    <span
                      className={`px-2 py-1 md:px-3 md:py-1.5 rounded text-xs md:text-sm font-medium text-white whitespace-nowrap ${
                        isAssigned ? "bg-teal-500" : "bg-red-400"
                      }`}
                    >
                      {isAssigned ? "Assigned" : "Unassigned"}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col sm:flex-row justify-end gap-2 md:gap-3 mt-3 md:mt-4">
        <button
          className={`border border-teal-500 text-slate-900 px-4 py-1.5 md:px-6 md:py-2 rounded-lg transition text-sm md:text-base ${
            !isAnyStudentAssigned
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-teal-50"
          }`}
          onClick={handleUnassign}
          disabled={!isAnyStudentAssigned || loading}
        >
          {loading ? "Processing..." : "Unassign -"}
        </button>
        <button
          onClick={handleAssign}
          className={`bg-teal-500 text-white px-4 py-1.5 md:px-6 md:py-2 rounded-lg transition text-sm md:text-base ${
            isAnyStudentAssigned ||
            !selectedTutor ||
            selectedStudents.length === 0
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-teal-600"
          }`}
          disabled={
            isAnyStudentAssigned ||
            !selectedTutor ||
            selectedStudents.length === 0 ||
            loading
          }
        >
          {loading ? "Processing..." : "Assign +"}
        </button>
      </div>
    </div>
  );
};

export default AdminAllocation;
