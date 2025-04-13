import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Profile = () => {
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
       console.log(response.data);
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
  return (
    <div>
      <Link to={`/${userRole}/profile`}>
        <img
          data-popover-target="popover-user-profile"
          className="size-14 rounded-full border-2 border-gray-600 m-2 shadow-2xl"
          src={userProfile.image}
          alt=""
        />
        <div
          data-popover
          id="popover-user-profile"
          role="tooltip"
          className=" absolute z-10 invisible inline-block w-32 text-sm text-gray-800 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-xs opacity-0 "
        >
          <p className=" p-2 font-semibold text-slate-800 dark:text-white">{userProfile.name}</p>
          <p className=" p-2 font-semibold text-slate-800 dark:text-white">{userProfile.userCode}</p>
        </div>
      </Link>
    </div>
  );
};

export default Profile;
