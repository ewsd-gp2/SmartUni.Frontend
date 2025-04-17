import React from "react";
import Breadcrumb from "../Breadcrumb";
import { Link, useNavigate } from "react-router-dom";
import { HiSearch } from "react-icons/hi";
import BlogList from "./BlogList";
import GradientButton from "../buttons/GradientButton";
import { IoAddCircle } from "react-icons/io5";
const BlogPage = () => {
  const userRole = localStorage.getItem("user_role");

  const navigate = useNavigate();
  const handleCreateBlog = () => {
    navigate(`/${userRole}/blog/create`);
  }
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