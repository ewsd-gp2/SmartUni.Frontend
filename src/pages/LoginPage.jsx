import React, { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import loginImage from "../assets/images/LogInImg.png";
const LoginPage = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("staff");
  const { register, handleSubmit } = useForm();
  // const [isFirstLogin, setIsFirstLogin] = useState(null);
  // const [showWelcome, setShowWelcome] = useState(false);

  const api = axios.create({
    baseURL: "http://localhost:7142",
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });
  const getProfile = async () => {
    const url = api.get(`/${role}/profile`);

    try {
      const response = await axios.get(url, {
        
        withCredentials: true,
      });
      if (response.status === 200) {
        toast.success("Login Successfully!");
        localStorage.setItem("user_profile", JSON.stringify(response.data));
        localStorage.setItem("user_role", role);
        if (role === "staff") {
        const profile = response.data;

          if (profile.role === "authorized_staff") {
            navigate("/staff/dashboard/tutorlist");
          } else {
            navigate("/staff/dashboard/studentlist");
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
    const url = `http://localhost:7142/signin/${role}`;

    try {
      const response = await axios.post(url, data, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:5173",
          "Access-Control-Expose-Headers": "Set-Cookie",
        },
        withCredentials: true,
      });
      if (response.status === 200) {
        
        getProfile();
        // const firstLoginKey = `firstLogin_${data.email}`;
        // const isFirstTime = sessionStorage.getItem(firstLoginKey) === null;

        // sessionStorage.setItem(firstLoginKey, "false");

        // setIsFirstLogin(isFirstTime);
        // setShowWelcome(true);
      } else {
        toast.error("Login failed. Please try again.");
      }
    } catch (error) {
      toast.error("Login attempt failed!Please try again.", {
        icon: "✋",
        style: {
          borderRadius: "8px",
          background: "#ECFDF5", // Teal-50
          color: "#065F46", // Teal-800
          borderLeft: "4px solid #047857", // Teal-700
          boxShadow: "0 2px 10px rgba(5, 150, 105, 0.1)",
          fontSize: "20px",
        },
        iconTheme: {
          primary: "#047857", // Teal-700
          secondary: "#D1FAE5", // Teal-100
        },
      });
      // toast.error("Oops! That didn't work. Let's try that again.");
    }
  };
  // useEffect(() => {
  //   if (showWelcome) {
  //     const timer = setTimeout(() => {
  //       navigate(`${role}/dashboard`);
  //     }, 2000);
  //     return () => clearTimeout(timer);
  //   }
  // }, [showWelcome, navigate, role]);

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
            {...register("email")}
            className='bg-teal-50 border border-teal-300 text-teal-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-3'
            placeholder='Username'
            required
          />
        </div>
        
        <div className='mb-4'>
          <input
            type='password'
            id='password'
            {...register("password")}
            className='bg-teal-50 border border-teal-300 text-teal-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-3'
            placeholder='Password'
            required
          />
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
          className='w-full text-white bg-gradient-to-r from-teal-600 via-teal-500 to-teal-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-3 text-center'
        >
          Log In
        </button>
      </form>
    </div>
  </div>
  );
};

export default LoginPage;