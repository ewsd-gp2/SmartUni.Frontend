import React, { use, useEffect } from "react";
import Breadcrumb from "../Breadcrumb";
import { Link, useNavigate } from "react-router-dom";
import { HiSearch } from "react-icons/hi";
import BlogList from "./BlogList";
import GradientButton from "../buttons/GradientButton";
import { IoAddCircle } from "react-icons/io5";
import axios from "axios";
const BlogPage = () => {
  const userRole = localStorage.getItem("user_role");

  const navigate = useNavigate();
  const handleCreateBlog = () => {
    navigate(`/${userRole}/blog/create`);
  };

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
    pageView('Blog'); 
  }, [])
  return (
    <main>
      <div className=" flex col-span-4 gap-5">
        <div className=" col-span-3">
          <Breadcrumb currentPageTitle={"Blogs List"} />
          <div className="flex justify-end mb-4">
            <GradientButton
              handleAction={handleCreateBlog}
              Icon={IoAddCircle}
              text={"Create Blog"}
            />
          </div>
          <BlogList />
        </div>
      </div>
    </main>
  );
};

export default BlogPage;
