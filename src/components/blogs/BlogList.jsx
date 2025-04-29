import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import { getBlogs } from "./api";
import { formatDate } from "../../formatdatetime/FormatDateTime";
import { MdOutlineArticle } from 'react-icons/md'
const BlogList = () => {
  const [blogList, setBlogList] = useState([]);
  const userRole = localStorage.getItem("user_role");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getBlogList = async () => {
      setLoading(true);
      const [blogList] = await Promise.all([getBlogs()]);
      setBlogList(blogList);
      console.log(blogList)
    };
    getBlogList();
    setLoading(false);
  }, []);

  const groupByType = (blog) => {
    const grouped = {};
    blog.forEach((item) => {
      if (!grouped[item.type]) {
        grouped[item.type] = [];
      }
      grouped[item.type].push(item);
    });
    return grouped;
  }
const groupedBlogs = groupByType(blogList);
const getEmojiTitle = (type) => {
  switch (type) {
    case "announcement":
      return "📢 Announcements";
    case "knowledge_sharing":
      return "📚 Knowledge Sharing";
    case "news_letter":
      return "📰 News Letter";
    default:
      return type;
  }
};
  if (blogList?.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
    <div className="text-center space-y-4">
      <MdOutlineArticle className="text-6xl text-teal-400 mx-auto" />

      <h2 className="text-2xl font-bold text-gray-800">No Blogs Yet</h2>

      <p className="text-gray-500">
        Looks like you haven't created any blogs.{' '}
        <Link
          to={`/${userRole}/blog/create`}
          className="text-teal-500 font-medium hover:underline"
        >
          Get started by creating one!
        </Link>
      </p>
    </div>
  </div>
    );
  }
 
  return (
    <div className="space-y-10">
      {Object.entries(groupedBlogs).map(([type, blogs]) => (
        <div key={type}>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 capitalize">
            {getEmojiTitle(type)}
          </h2>
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
            {blogs.map((blog) => (
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
                  <div className="mb-2">
                    <p className="text-lg font-semibold">{blog.title}</p>
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
        </div>
      ))}
    </div>
  );
};

export default BlogList;
