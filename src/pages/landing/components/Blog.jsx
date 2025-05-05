import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { formatDate } from "../../../formatdatetime/FormatDateTime";
import axios from "axios";

export const Blog = () => {

    const [blogList, setBlogList] = useState([]);
    const userRole = localStorage.getItem("user_role");

    const url = `http://localhost:7142/blog`

    const fetchData = async () => {
        axios
          .get(url, {
            headers: {
              "Access-Control-Allow-Origin": "http://localhost:5173",
            },
            withCredentials: "true",
          })
          .then((response) => {
            console.log(response.data);
            setBlogList(response.data);
          })
          
      };
      useEffect(() => {
        fetchData();
      }, []);

    return(
        <div className="mt-12 md:mt-20 mx-4 md:mx-15">
            <div className="flex justify-center">
                <h1 className="md:text-3xl text-xl text-teal-600 font-semibold">Blogs</h1>
            </div>
      {blogList.length === 0 && (
                <p className="text-center mt-30 py-30 bg-gray-300 text-2xl text-gray-600">No Post Available</p>
            )}
    <div className="flex mt-20 gap-15 flex-wrap justify-center">

{blogList.length !== 0 &&  blogList.slice(0, 6).map((blog) => (
  <div className="rounded-2xl overflow-hidden w-70 lg:w-85 bg-gray-200" key={blog.id}>
    <div className="w-full h-45">
            <img src={`data:image/jpeg;base64,${blog.coverImage}`} alt="blogImage" className="object-cover h-45 w-full"/>
    </div>
    <div className="py-2 border-b-2 px-4 flex flex-col">
    <h1 className="font-semibold text-[24px]">{blog.title}</h1>
    <Link to={`/login`} className="text-teal-600">See the article &gt;&gt;&gt;</Link>
    </div>
    <div className="px-5 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
            <p className="text-teal-600">BY</p>
            <h3>{blog.authorName}</h3>
        </div>
        <div><p className="text-sm text-gray-500">{formatDate(blog.createdOn)}</p></div>
    </div>
</div>))}


            </div>
        </div>
    )
}