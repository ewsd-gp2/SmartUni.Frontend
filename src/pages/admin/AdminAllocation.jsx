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

const AdminAllocation = () => {
  const [studentData, setStudentData] = useState([]);
  const [tutorData, setTutorData] = useState([]);
  const [allocation, setAllocation] = useState([]);
  const [selectedTutor, setSelectedTutor] = useState("");
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [loading, setLoading] = useState(false);

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
    <div className="p-4">
      <form className="max-w-sm my-5">
        <label
          htmlFor="tutors"
          className="block mb-2 text-2xl font-medium text-gray-900"
        >
          Choose Tutor
        </label>
        <select
          id="tutors"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-3"
          value={selectedTutor}
          onChange={(e) => setSelectedTutor(e.target.value)}
        >
          <option value="">Select Tutor</option>
          {tutorData && tutorData?.map((tutor) => (
            <option key={tutor.id} value={tutor.id}>
              {tutor.name}
            </option>
          ))}
        </select>
      </form>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-blue-100">
            <tr>
              <th scope="col" className="px-6 py-3">
                No
              </th>
              <th scope="col" className="px-6 py-3">
                Students Name
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center gap-2">
                  <BsSortDown /> Sorting
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {studentData.map((student, index) => {
              const isAssigned = allocation.some(a => String(a.studentID) === String(student.id));
              return (
                <tr
                  key={student.id}
                  className="bg-white border-b hover:bg-gray-50"
                >
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
                        className="size-12 rounded-full"
                        src="https://i.pinimg.com/736x/0e/d7/e8/0ed7e8509f71c4161e7443a86ce517a8.jpg"
                        alt={student.name}
                      />
                      <span>{student.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2.5 py-2 text-white rounded text-sm ${
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

      <div className="flex justify-end gap-3 mt-4">
        <button
          className={`border border-teal-500 text-slate-900 px-6 py-2 rounded-lg transition ${
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
          className={`bg-teal-500 text-white px-6 py-2 rounded-lg transition ${
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
