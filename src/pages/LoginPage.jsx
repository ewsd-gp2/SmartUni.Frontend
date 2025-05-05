import React, { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import loginImage from "../assets/images/LogInImg.png";
const LoginPage = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("staff");
  const { register, handleSubmit,setError, formState: { errors,isSubmitting } } = useForm();
 
  const api = axios.create({
    baseURL: "http://localhost:7142",
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      "Allow-Access-Control-Origin": "http://localhost:5173",
    },
  });
  const getProfile = async () => {
    try {
      const response = await api.get(`/${role}/profile`);
  
      if (response.status === 200) {
        toast.success("Login Successfully!");
        localStorage.setItem("user_profile", JSON.stringify(response.data));
        localStorage.setItem("user_role", role);
  
        if (role === "staff") {
          const profile = response.data;
          if (profile.role === "AuthorizedStaff") {
            navigate("/staff/dashboard/stafflist");
          } else 
          if (profile.role === "Staff") {
            navigate("/staff/dashboard/tutorlist");
          }
        } else {
          navigate(`/${role}/dashboard`);
        }
      } else {
        toast.error("Log in failed. Please try again.");
      }
      
    } catch (error) {
      console.error("Profile error:", error);
      toast.error("Error fetching profile.");
    }
  };
  

  const handleLogIn = async (data) => {
    try {
      const response = await api.post(`/signin/${role}`, data);
      
      if (response.status === 200) {
        await getProfile();
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          setError("email", {
            type: "manual",
            message: "Invalid email or password"
          });
          setError("password", {
            type: "manual",
            message: "Invalid email or password"
          });
          
          toast.error("Invalid credentials. Please try again.", {
            icon: "✋",
            style: {
              borderRadius: "8px",
              background: "#FEF2F2", 
              color: "#B91C1C", 
              borderLeft: "4px solid #DC2626", 
              boxShadow: "0 2px 10px rgba(220, 38, 38, 0.1)",
              fontSize: "14px",
            },
            iconTheme: {
              primary: "#DC2626",
              secondary: "#FEE2E2", 
            },
          });
        } else {
          toast.error("Login failed. Please try again later.");
        }
      } else {
        toast.error("Login failed. Please try again later.");
      }
    }
  };
 

  return (
    <div className='flex flex-col md:justify-center md:items-center lg:flex-row lg:items-center lg:justify-center min-h-screen p-4 gap-6 lg:gap-10'>
    <div className=' md:w-1/2 lg:w-auto'>
      <img
      src={loginImage}
        className='w-full max-w-[400px] lg:max-w-[500px]'
        alt='Login illustration'
      />
    </div>

    <div className='w-full max-w-md'>
      <form onSubmit={handleSubmit(handleLogIn)} className='w-full'>
        <h3 className='text-2xl text-center mb-5 text-teal-600'>SmartUni</h3>
<div className='mb-4'>
  <input
    type='email'
    id='email'
    {...register("email", { 
      required: "Email is required",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email address"
      }
    })}
    className={`bg-teal-50 border-2 ${
      errors.email ? 'border-red-500 bg-red-50 focus:border-red-500' : 'border-teal-300 focus:border-teal-500'
    } text-teal-900 text-sm rounded-lg focus:ring-teal-500 block w-full p-3`}
    placeholder='Email' 
  />
  {errors.email && (
    <p className='mt-2 text-sm text-red-600'>{errors.email.message}</p>
  )}
</div>

<div className='mb-4'>
  <input
    type='password'
    id='password'
    {...register("password", { 
      required: "Password is required",
      
    })}
    className={`bg-teal-50 border-2 ${
      errors.password ? 'border-red-500 bg-red-50 focus:border-red-500' : 'border-teal-300 focus:border-teal-500'
    } text-teal-900 text-sm rounded-lg focus:ring-teal-500 block w-full p-3 `}
    placeholder='Password'
  />
  {errors.password && (
    <p className='mt-2 text-sm text-red-600'>{errors.password.message}</p>
  )}
</div>

        <div className='flex gap-3 mb-6 '>
          <span className='font-semibold w-full sm:w-auto'>*Sign in as: </span>
          <label className='flex items-center gap-2'>
            <input
              type='radio'
              value='tutor'
              checked={role === "tutor"}
              onChange={(e) => setRole(e.target.value)}
              className='w-4 h-4 text-teal-600 focus:ring-teal-500'
            />
            Tutor
          </label>

          <label className='flex items-center gap-2'>
            <input
              type='radio'
              value='staff'
              checked={role === "staff"}
              onChange={(e) => setRole(e.target.value)}
              className='w-4 h-4 text-teal-600 focus:ring-teal-500'
            />
            Staff
          </label>

          <label className='flex items-center gap-2'>
            <input
              type='radio'
              value='student'
              checked={role === "student"}
              onChange={(e) => setRole(e.target.value)}
              className='w-4 h-4 text-teal-600 focus:ring-teal-500'
            />
            Student
          </label>
        </div>

        <button
            type='submit'
            disabled={isSubmitting}
            className={`w-full text-white bg-gradient-to-r from-teal-600 via-teal-500 to-teal-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-3 text-center ${
              isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? 'Logging in...' : 'Log In'}
          </button>
      </form>
    </div>
  </div>
  );
};

export default LoginPage;