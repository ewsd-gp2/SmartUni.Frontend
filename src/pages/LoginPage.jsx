import React, { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
const LoginPage = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("staff");
  const { register, handleSubmit } = useForm();
  const [isFirstLogin, setIsFirstLogin] = useState(null);
  const [showWelcome, setShowWelcome] = useState(false);

  const getProfile = async () => {
    const url = `http://localhost:7142/${role}/profile`;

    try {
      const response = await axios.get(url, {
        withCredentials: true,
      });
      if (response.status === 200) {
        toast.success("Login Successfully!");
        localStorage.setItem("user_profile", JSON.stringify(response.data));
        localStorage.setItem("user_role", role);
        if (role === "staff") {
          navigate(`/${role}/dashboard/tutorlist`);
        } else {
          navigate(`/${role}/dashboard`);
        }
      } else {
        toast.error("Login failed. Please try again.");
      }
    } catch (error) {
      console.log(error);
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
        const firstLoginKey = `firstLogin_${data.email}`;
        const isFirstTime = sessionStorage.getItem(firstLoginKey) === null;

        sessionStorage.setItem(firstLoginKey, "false");

        setIsFirstLogin(isFirstTime);
        setShowWelcome(true);
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
  useEffect(() => {
    if (showWelcome) {
      const timer = setTimeout(() => {
        navigate(`${role}/dashboard`);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showWelcome, navigate, role]);

  return (
    <div className='flex items-center justify-center h-screen gap-10'>
      <div className=' col-span-1'>
        <img
          src='https://s3-alpha-sig.figma.com/img/d590/6e1b/91f6344455ad810720c3191c57223443?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=X5Toe2VUrkpbB6nujU6-qV0Z8h12-vtCevFuHEOMA3UlpfoJIGQe5vml1d4TW3pakwjv9DtxmWblVyPiorKDXUyShX8HBfv8oC5CLM~S5Xjl5bQIQcFShAu8VGgvnxHfVwDG-EEdYvuxgfvR2bmx6zr4l58UbvVLKeaAPVcfoYa4Xa06MIa-G7KlIyjohYT5-5UGZJSKRyErcqwQsFe-1ruesinQB~F6M3A5ZOxukoCovxl5UIXg3Jo8MEr9KrX-bKajcoPYrbAaCJQ~YZjdyTq6dXQcL8wvqldjAY1TqEmxL2QXXmfCMO4wGMC1xGi5kIC9sA6nIuZUIG~mdORBwQ__'
          className='w-[500px]'
          alt=''
        />
      </div>
      <div className='mb-5'>
        {/* <label className="block text-teal-600 mb-2">Select Role</label> */}
      </div>
      <div className=' col-span-1 flex flex-col w-[400px]'>
        <form onSubmit={handleSubmit(handleLogIn)} className='max-w-sm '>
          {showWelcome && (
            <motion.div
              className='mb-5 text-center text-teal-600 text-2xl font-semibold'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {isFirstLogin
                ? "Welcome to our system! Let's begin your journey. "
                : "Welcome back! Great to see you again."}
            </motion.div>
          )}
          <h3 className='text-2xl text-center mb-5 text-teal-600'>SmartUni</h3>

          <div className='my-5'>
            <input
              type='email'
              id='email'
              {...register("email")}
              className=' bg-teal-50 border border-teal-300 text-teal-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-3 '
              placeholder='Username'
              required
            />
          </div>
          <div className='my-5'>
            <input
              type='password'
              id='password'
              {...register("password")}
              className='bg-teal-50 border border-teal-300 text-teal-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-3 '
              placeholder='Password'
              required
            />
          </div>

          <div className='flex gap-6 mb-8'>
            <label className='font-semibold'>*Sign in as: </label>
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
            className=' w-full text-white bg-gradient-to-r from-teal-600 via-teal-500 to-teal-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-3 text-center me-2'
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;