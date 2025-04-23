import React, { useEffect } from 'react'
import Dashboard from './dashboard/Dashboard'
import axios from 'axios';

const TutorDashboard = () => {
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
    pageView('TutorDashboard'); 
  }, [])
  return (
    <div>
      <Dashboard/>
    </div>
  )
}

export default TutorDashboard