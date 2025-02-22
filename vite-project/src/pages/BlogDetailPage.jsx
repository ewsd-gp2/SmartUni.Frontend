import BlogList from "../components/BlogList";
import Container from "../components/Container";
import Breadcrumb from "../components/Breadcrumb";
import BlogSideBar from "../components/BlogSideBar";
import { Link } from "react-router-dom";
import { HiSearch } from "react-icons/hi";
import BlogDetailRow from "../components/BlogDetailRow";

const BlogDetailPage = () => {
  return (
    <section>
    <Container >
      <div className=" flex col-span-4 gap-5">
      <BlogSideBar className=" col-span-1"/>
      <div className=" col-span-3 mt-5">
      <Breadcrumb currentPageTitle={"Details"} links={[{title:"Knowledge Sharing",path:"/blog"}]}/>
       <div className="relative mb-5">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <HiSearch className=" text-gray-400 text-xl"/>
        </div>
        <input type="search" className="block w-96 p-3 ps-8 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500" placeholder="Search"  />
      </div>
      <BlogDetailRow/>
      </div>
      </div>
    </Container>
  </section>
  )
}

export default BlogDetailPage