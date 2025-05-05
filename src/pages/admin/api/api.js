import axios from "axios";

const BASE_URL = "http://localhost:7142";
export const fetchStudents = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/student`, {
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:5173",
      },
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching students:", error);
    return [];
  }
};

export const fetchTutors = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/tutor`, {
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:5173",
      },
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching tutors:", error);
    return [];
  }
};

export const fetchAllocations = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/allocation`, {
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:5173",
      },
      withCredentials: true,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching allocations:", error);
    return [];
  }
};

export const assignTutor = async (tutorID, studentID) => {
  const assignData = {
    data: {
      tutorID: tutorID,
      requestAllocationModels: [
        {
          studentID: studentID,
        },
      ],
    },
  }
  try {
    await axios.post(`${BASE_URL}/allocation`, assignData, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:5173",
      },
      withCredentials: true,
    });
    // console.log("Allocation successful");
  } catch (error) {
    console.error("Error allocating tutor:", error);
  }
};

// export const updateTutorAssignment = async (tutorID, studentID) => {
//   const updateData = {
//     tutorID: tutorID,
//     studentID: studentID,
//   };

//   try {
//     await axios.put(`${BASE_URL}/allocation`, updateData, {
//       headers: {
//         "Content-Type": "application/json",
//         "Access-Control-Allow-Origin": "http://localhost:5173",
//       },
//       withCredentials: true,
//     });
//     console.log("Tutor updated successfully");
//   } catch (error) {
//     console.error("Error updating tutor:", error);
//   }
// };

export const unAssignTutor = async (allocationId) => {
  const options = {
    method: 'PUT',
    url: `${BASE_URL}/allocation`,
    headers: {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "http://localhost:5173",
    },
    data: {
      allocationIds: [allocationId] 
    },
    withCredentials: true
  };

  try {
    await axios.request(options);
    // console.log("Tutor unassigned successfully");
  } catch (error) {
    console.error("Error unassigning tutor:", error);
    throw error;
  }
};

export const sendEmail = async (emailData) => {
  try {
    await axios.post(`${BASE_URL}/email`, { data: emailData }, {
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:5173",
      },
      withCredentials: true,
    });
    // console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};