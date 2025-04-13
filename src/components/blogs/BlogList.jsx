import React from "react";
import { Link } from "react-router-dom";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import { HiSearch } from "react-icons/hi";
const BlogList = () => {
  return (
    <section className=" xl:flex lg:flex md:flex gap-5 sm:flex sm:flex-wrap">
      <div className="  sm:w-[150px] md:w-[200px] lg:w-[250px] xl:w-[250px] bg-white border border-gray-200 rounded-lg shadow-sm">
        <div>
          <img
            className="rounded-t-lg"
            src="https://i.pinimg.com/736x/69/25/a8/6925a8fb2c5f8dbeb84f13ca94e310d3.jpg"
            alt
          />

          <div className=" text-teal-600 my-3 px-1">
            <p className=" text-sm text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <Link to={"/student/blog/details/1"} className=" flex items-center justify-end">
              <p className=" text-sm">See more</p> <RiArrowRightDoubleFill />
            </Link>
          </div>
          <hr />
          <div className=" flex justify-between my-3 px-1">
            <p className=" text-xs">
              By <span>John Doe</span>{" "}
            </p>
            <p className="text-xs">03,Jan 2025</p>
          </div>
        </div>
      </div>
      <div className="  sm:w-[150px] md:w-[200px] lg:w-[250px] xl:w-[250px] bg-white border border-gray-200 rounded-lg shadow-sm">
        <div>
          <img
            className="rounded-t-lg"
            src="https://i.pinimg.com/736x/69/25/a8/6925a8fb2c5f8dbeb84f13ca94e310d3.jpg"
            alt
          />

          <div className=" text-teal-600 my-3 px-1">
            <p className=" text-sm text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <Link to={"/student/blog/details/1"} className=" flex items-center justify-end">
              <p className=" text-sm">See more</p> <RiArrowRightDoubleFill />
            </Link>
          </div>
          <hr />
          <div className=" flex justify-between my-3 px-1">
            <p className=" text-xs">
              By <span>John Doe</span>{" "}
            </p>
            <p className="text-xs">03,Jan 2025</p>
          </div>
        </div>
      </div>
      <div className="  sm:w-[150px] md:w-[200px] lg:w-[250px] xl:w-[250px] bg-white border border-gray-200 rounded-lg shadow-sm">
        <div>
          <img
            className="rounded-t-lg"
            src="https://i.pinimg.com/736x/69/25/a8/6925a8fb2c5f8dbeb84f13ca94e310d3.jpg"
            alt
          />

          <div className=" text-teal-600 my-3 px-1">
            <p className=" text-sm text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <Link to={"/student/blog/details/1"} className=" flex items-center justify-end">
              <p className=" text-sm">See more</p> <RiArrowRightDoubleFill />
            </Link>
          </div>
          <hr />
          <div className=" flex justify-between my-3 px-1">
            <p className=" text-xs">
              By <span>John Doe</span>{" "}
            </p>
            <p className="text-xs">03,Jan 2025</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogList;
