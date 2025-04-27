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
        <div className="mt-25 mx-20">
            <div className="flex justify-center">
                <h1 className="text-teal-600 text-3xl font-semibold">Blogs</h1>
            </div>
            {blogList.length === 0 && (
                <p className="text-center mt-30 py-30 bg-gray-300 text-2xl text-gray-600">No Post Available</p>
            )}
    <div className="grid grid-cols-3 mt-20 gap-25">

{blogList.length !== 0 &&  blogList.slice(0, 6).map((blog) => (<div className="rounded-2xl overflow-hidden w-85 bg-gray-200" key={blog.id}>
    <div className="w-full h-45">
            <img src={`data:image/jpeg;base64,${blog.coverImage}`} alt="blogImage" className="object-cover h-45 w-full"/>
    </div>
    <div className="py-2 border-b-2 px-4 flex flex-col">
    <h1 className="font-semibold text-[24px]">{blog.title}</h1>
    <Link to={`/${userRole}/blog/details/${blog.id}`} className="text-teal-600">See the article &gt;&gt;&gt;</Link>
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