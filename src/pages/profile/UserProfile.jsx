import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { HiLockOpen, HiOutlineCamera } from "react-icons/hi2";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const UserProfile = () => {
  const userRole = localStorage.getItem("user_role");
  const [userProfile, setUserProfile] = useState({});
  const fetchProfileData = async () => {
    const url=`http://localhost:7142/${userRole}/profile`
    await axios.get(url,{
      headers: {
        
        "Access-Control-Allow-Origin": "http://localhost:5173",
      },
      withCredentials: "true",
    })
    .then((response) => {
      setUserProfile(response.data);
    })
    .catch((error) => {
      console.log(error);
      toast.error(error.message, {
        position: "top-right",
      });
    });
  }
  useEffect(() => {
    fetchProfileData();
  }, []);
  const userName = userProfile.name
    ? userProfile.name
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ")
    : "";

  return (
    <div className="p-4 sm:p-6 lg:p-8">
  <Link to={`/${userRole}/dashboard`} className="flex items-center mb-6 hover:underline">
    <IoIosArrowBack className="text-2xl text-teal-500" />
    <h1 className="text-2xl font-semibold text-teal-500 ml-2">Smart Uni</h1>
  </Link>

  <div className="bg-white border border-gray-100 shadow-md rounded-xl p-6 space-y-8">
    <div className="flex items-center gap-6">
      <div className="relative">
        <img
          className="w-32 h-32 object-cover rounded-lg border"
          src={`data:image/jpeg;base64,${userProfile.image}`}
          alt="user profile"
        />
        <span className="absolute -right-2 bottom-0 bg-gray-100 w-7 h-7 text-gray-700 rounded-full flex items-center justify-center shadow">
          <HiOutlineCamera className="text-teal-500" />
        </span>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-gray-900">{userName}</h2>
        <p className="text-sm text-gray-500 mt-1">{userProfile.userCode}</p>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-4">
        <div>
          <p className="text-sm font-semibold text-gray-800 mb-1">Name</p>
          <p className="text-gray-600">{userName}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-800 mb-1">ID</p>
          <p className="text-gray-600">{userProfile.userCode}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-800 mb-1">Major</p>
          <p className="text-gray-600">{userProfile.major}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-sm font-semibold text-gray-800 mb-1">Gender</p>
          <p className="text-gray-600">{userProfile.gender}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-800 mb-1">Phone Number</p>
          <p className="text-gray-600">{userProfile.phoneNumber}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-800 mb-1">Email Address</p>
          <p className="text-gray-600">{userProfile.email}</p>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default UserProfile;
