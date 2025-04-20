import { useEffect } from "react";
import Dashboard from "./components/Dashboard";
import axios from "axios";

const StudentDashboard = () => {

    const pageView = async (pageName) => {
        try {
          const formData = new FormData();
          formData.append("pageName", pageName);
         
          const response = await axios.post(
            "http://localhost:7142/pageview",
            formData,
            {
              withCredentials: true
            }
          );
          console.log(response.data);
          return response.data;
        } catch (error) {
          console.error('Error:', error.response?.data || error.message);
          throw error;
        }
      };
      useEffect(() => {
        pageView('StudentDashboard');
      }, [])



    return(
        <>
            <Dashboard />
        </>
    )
}

export default StudentDashboard;