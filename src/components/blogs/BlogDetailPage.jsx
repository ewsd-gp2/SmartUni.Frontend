import Breadcrumb from "../Breadcrumb";
import { Link } from "react-router-dom";
import { HiSearch } from "react-icons/hi";
import BlogDetailRow from "./BlogDetailRow";


const BlogDetailPage = () => {
  const userRole = localStorage.getItem("user_role");
  return (
    <main>
        <div className=" flex col-span-4 gap-5">
          <div className=" col-span-3 mt-10 md:mt-6 lg:mt-5 md:ms-15 lg:ms-18">
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
