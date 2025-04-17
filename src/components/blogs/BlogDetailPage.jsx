import Breadcrumb from "../Breadcrumb";
import { Link } from "react-router-dom";
import { HiSearch } from "react-icons/hi";
import BlogDetailRow from "./BlogDetailRow";


const BlogDetailPage = () => {
  const userRole = localStorage.getItem("user_role");
  return (
    <main>
        <div className=" flex col-span-4 gap-5">
          <div className=" col-span-3 mt-5">
            <Breadcrumb
              currentPageTitle={"Details"}
              links={[{ title: "Blogs List", path: `/${userRole}/blog` }]}
            />
            
            <BlogDetailRow />
          </div>
        </div>
    </main>
  );
};

export default BlogDetailPage;
