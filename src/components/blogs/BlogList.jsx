import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import { HiSearch } from "react-icons/hi";
import { getBlogs } from "./api";
import { formatDate } from "../../formatdatetime/FormatDateTime";
import { set } from "date-fns";
const BlogList = () => {
  const [blogList, setBlogList] = useState([]);
  const userRole = localStorage.getItem("user_role");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getBlogList = async () => {
      setLoading(true);
      const [blogList] = await Promise.all([getBlogs()]);
      setBlogList(blogList);
    };
    getBlogList();
    setLoading(false);
  }, []);

  if (blogList.length === 0) {
    return (
      <div className=" flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }
 
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
      {blogList.map((blog) => (
        <div
          key={blog.id}
          className="bg-white border border-gray-200 rounded-lg shadow-sm"
        >
          <img
            className="rounded-t-lg w-full h-[180px] object-cover"
            src={`data:image/jpeg;base64,${blog.coverImage}`}
            alt={blog.title}
          />
          <div className="mb-3 px-3 mt-2">
            <div className=" mb-2">
           <p className="text-lg font-semibold">{blog.title}  </p>
               
            {/* <span className="text-xs">({blog.type})</span> */}
            </div>
            <Link
              to={`/${userRole}/blog/details/${blog.id}`}
              className="flex items-center text-teal-600"
            >
              <p className="text-sm">See the articles</p>
              <RiArrowRightDoubleFill className="ml-1" />
            </Link>
          </div>
          <hr />
          <div className="flex justify-between text-xs text-gray-500 px-3 py-2">
            <p>
              By <span>{blog.authorName}</span>
            </p>
            <p>{formatDate(blog.createdOn)}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default BlogList;
