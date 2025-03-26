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
    console.log(res.data)
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
    console.log(response.data)

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
    console.log(response.data)
    
    return response.data;
  } catch (error) {
    console.error("Error fetching allocations:", error);
    return [];
  }
};

export const assignTutor = async (tutorID, studentID) => {
    const createdBy = localStorage.getItem("userId")
    console.log(createdBy)
  try {
    const assign = {
      data: {
        createdBy,
        requestAllocationModels: [{ tutorID, studentID }],
      },
    };
    await axios.post(`${BASE_URL}/allocation`, assign, {
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:5173",
      },
      withCredentials: true,
    });
    console.log("Allocation successful");
  } catch (error) {
    console.error("Error allocating tutor:", error);
  }
};
