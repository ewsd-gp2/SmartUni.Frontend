import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { HiLockOpen, HiOutlineCamera } from "react-icons/hi2";
import { Link } from "react-router-dom";

const UserProfile = () => {
  return (
    <div>
      <Link to={"/admin/dashboard"} className=" flex items-center mb-5">
        <IoIosArrowBack className=" size-8 text-teal-500" />
        <h1 className=" text-2xl font-semibold text-teal-500">Smart Uni</h1>
      </Link>
      <div className="mb-4 grid gap-4 sm:grid-cols-2  sm:gap-8 lg:gap-16 border border-gray-100 shadow rounded-lg p-5">
        <div className="space-y-4 mx-auto">
          <div className="flex space-x-6 items-end">
            <div className=" relative">
              <img
                className="size-32 rounded-lg object-cover"
                src="https://i.pinimg.com/736x/e9/cd/33/e9cd3310df0be9dad8b64c2fa887d690.jpg"
                alt="uer profile"
              />
              <p className=" absolute -right-2 bottom-0 bg-gray-100 size-6 text-gray-700 rounded-full flex items-center justify-center">
                <HiOutlineCamera className=" text-teal-400" />
              </p>
            </div>
            <div className=" flex items-start gap-x-15">
              <div>
                <h2 className="flex items-center text-xl font-bold leading-none text-gray-900 dark:text-white">
                  Helene Engels
                </h2>
                <p className="text-gray-500 font-semibold font-serif mt-2 text-sm">
                  S1001
                </p>
              </div>
              <div>
                <button className=" w-[130px] flex gap-2 items-center justify-center text-slate-200 bg-teal-500 px-3 py-2.5 text-sm font-medium rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-4 focus:ring-teal-300">
                  <HiLockOpen /> Edit Profile
                </button>
              </div>
            </div>
          </div>

          <div className=" grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-x-60">
            <div className=" col-span-1">
              <div className=" mb-3">
                <p className="font-semibold text-gray-900 ">Full Name</p>
                <p className="text-gray-500">Helen Engels</p>
              </div>
              <div className=" mb-3">
                <p className="font-semibold text-gray-900 ">Major</p>
                <p className="text-gray-500">Computing</p>
              </div>
              <div className=" mb-3">
                <p className="font-semibold text-gray-900 ">Phone Number</p>
                <p className="text-gray-500">+959876543</p>
              </div>
            </div>
            <div className=" col-span-1">
              <div className=" mb-3">
                <p className="font-semibold text-gray-900 ">Id</p>
                <p className="text-gray-500">S1001</p>
              </div>
              <div className=" mb-3">
                <p className="font-semibold text-gray-900 ">Gender</p>
                <p className="text-gray-500">Female</p>
              </div>
              <div className=" mb-3">
                <p className="font-semibold text-gray-900 ">Email Address</p>
                <p className="text-gray-500">helen@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
