import React from "react";
import { HiChevronRight, HiHome, HiMiniHome } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Breadcrumb = ({currentPageTitle,links}) => {
  const userRole = localStorage.getItem("user_role");
  return (
    <div className=" w-full flex gap-3 mb-5">
      <nav
        className="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50"
        aria-label="Breadcrumb"
      >
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link
             to={`/${userRole}/dashboard`}
              className="inline-flex gap-1 items-center text-sm font-medium text-gray-700 hover:text-teal-600 "
            >
              <HiMiniHome/>
              Home
            </Link>
          </li>
          {links && links.map((link,index)=>(
            <li aria-current="page" key={index}>
            <div className="flex items-center gap-1">
            <HiChevronRight />
              <Link to={link.path} className="inline-flex gap-1 items-center text-sm font-medium text-gray-700 hover:text-teal-600 dark:text-gray-400 dark:hover:text-white">
                {link.title}
              </Link>
            </div>
          </li>
          ))}
          <li aria-current="page">
            <div className="flex items-center">
            <HiChevronRight />
              <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                {currentPageTitle}
              </span>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
