import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import { HiSearch } from "react-icons/hi";
import { getBlogs } from "./api";
const BlogList = () => {
  const [blogList,setBlogList] = useState([]);
  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString("en-GB", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };


  useEffect(() => {
    const getBlogList = async () => {
      const [blogList] = await Promise.all([getBlogs()]);
      setBlogList(blogList);
    };
    getBlogList();
  }, []);

  if (blogList.length === 0) {
      return (
        <div className=" flex justify-center items-center h-screen">
          <p>Loading...</p>
        </div>
      );
    }
  return (
    <section className=" xl:flex lg:flex md:flex gap-5 sm:flex sm:flex-wrap">
      <div className="  sm:w-[150px] md:w-[200px] lg:w-[250px] xl:w-[250px] bg-white border border-gray-200 rounded-lg shadow-sm">
        <div>
          {blogList.map((blog) => (
            <div key={blog.id}>
               <img
            className="rounded-t-lg w-full h-[180px]"
            src={`data:image/jpeg;base64,${blog.coverImage}`}
            alt
          />
          <div className="mb-3 px-1 m-1">
           <p className="text-xl font-semibold mb-2">{blog.title}</p>
           <Link to={"/student/blog/details/1"} className=" flex items-center text-teal-600">
             <p className=" text-sm">See the articles</p> <RiArrowRightDoubleFill />
           </Link>
         </div>
            <hr />
          <div className=" flex justify-between my-3 px-1 m-1">
            <p className=" text-xs">
              By <span>{blog.authorName}</span>{" "}
            </p>
            <p className="text-xs">{formatDate(blog.createdOn)}</p>
          </div>
            </div>
          ))}
        </div>
      </div>
     
    </section>
  );
};

export default BlogList;
