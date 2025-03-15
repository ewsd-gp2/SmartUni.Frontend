import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import useCookie from "react-use-cookie";

const LoginPage = () => {
  const navigate = useNavigate();

 
  const { register, handleSubmit } = useForm();
  const handleLogIn = async(data) => {
    const url = "http://localhost:7142/signin/tutor";
    try {
      const response = await axios.post(url, data, {
        headers: {
          "Content-Type": "application/json",
         "Allow-Control-Allow-Origin":"*"
        },
      });
  
      console.log(data); 
      
      // const userRole = response.data.userRole; 
      // if (userRole) {
      //   // localStorage.setItem('userRole', userRole);
      //   // navigate(`/${userRole}/dashboard`);
      //   console.log(userRole)
      // } else {
      //   toast.error("Role not found in the response.");
      // }
      if(response.status === 200){
        toast.success("Login Successfully!");
        localStorage.setItem("access_token", response.data.access_token);
        console.log(response.data.access_token);
        navigate("/admin/dashboard");
        // setTimeout(() => {
        //   navigate("/admin/dashboard");
        // }, 100);
      }else {
        toast.error("Login failed. Please try again.");
    }
    } catch (error) {
      console.log(error);
      toast.error("Sorry, something went wrong.", {
        position: "top-right",
      });
    }
  };
  // const onClickLogin = () => {
  //   localStorage.setItem('userRole', 'admin')
  //   const userRole = localStorage.getItem('userRole');
  //   if (userRole) {
  //     navigate(`${userRole}/dashboard`)
  //   }
  // }
  return (
    <div className="flex items-center justify-center h-screen gap-10">
      <div className=" col-span-1">
        <img
          src="https://s3-alpha-sig.figma.com/img/d590/6e1b/91f6344455ad810720c3191c57223443?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=X5Toe2VUrkpbB6nujU6-qV0Z8h12-vtCevFuHEOMA3UlpfoJIGQe5vml1d4TW3pakwjv9DtxmWblVyPiorKDXUyShX8HBfv8oC5CLM~S5Xjl5bQIQcFShAu8VGgvnxHfVwDG-EEdYvuxgfvR2bmx6zr4l58UbvVLKeaAPVcfoYa4Xa06MIa-G7KlIyjohYT5-5UGZJSKRyErcqwQsFe-1ruesinQB~F6M3A5ZOxukoCovxl5UIXg3Jo8MEr9KrX-bKajcoPYrbAaCJQ~YZjdyTq6dXQcL8wvqldjAY1TqEmxL2QXXmfCMO4wGMC1xGi5kIC9sA6nIuZUIG~mdORBwQ__"
          className="w-[500px]"
          alt=""
        />
      </div>
      <div className=" col-span-1 flex flex-col w-[400px]">
        <form onSubmit={handleSubmit(handleLogIn)} className="max-w-sm ">
          <h3 className="text-2xl text-center mb-5 text-teal-600">SmartUni</h3>
          <div className="my-5">
            <input
              type="email"
              id="email"
              {...register("email")}
              className=" bg-teal-50 border border-teal-300 text-teal-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-3 dark:bg-teal-700 dark:border-teal-600 dark:placeholder-teal-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
              placeholder="Username"
              required
            />
          </div>
          <div className="my-5">
            <input
              type="password"
              id="password"
              {...register("password")}
              className="bg-teal-50 border border-teal-300 text-teal-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-3 dark:bg-teal-700 dark:border-teal-600 dark:placeholder-teal-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
              placeholder="Password"
              required
            />
          </div>

          <button
            type="submit"
            className=" w-full text-white bg-gradient-to-r from-teal-600 via-teal-500 to-teal-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-3 text-center me-2"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
