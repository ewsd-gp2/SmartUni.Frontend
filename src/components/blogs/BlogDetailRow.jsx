import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { FaRegImage } from "react-icons/fa6";
import { IoMdSend } from "react-icons/io"
const BlogDetailRow = () => {
  return (
    <div className=" h-screen">
       <div className=" w-96 flex gap-4 mb-5
        ">
          <img className=" size-10 rounded-full" src="https://i.pinimg.com/474x/f4/c7/1c/f4c71c4050c8b01d4ec39ab4185bd23a.jpg" alt="" />
          <div>
            <p className="">Grace</p>
            
          <p className=" text-xs text-gray-500 text-end">03,Jan 2025</p>
          </div>
        </div>
      <div className=" sm:w-[300px] md:w-[400px] lg:w-[700px] xl:w-[800px] bg-white rounded-lg border border-gray-200 shadow-sm ">
      <div>
          <img
            className="rounded-t-lg sm:h-[100px] md:h-[200px] lg:h-[300px] w-full"
            src="https://i.pinimg.com/736x/69/25/a8/6925a8fb2c5f8dbeb84f13ca94e310d3.jpg"
            alt
          />

          <div className="  my-3">
            <p className="  text-sm text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <div className="mt-3 flex gap-3">
              
                <AiOutlineLike />
                <span className=" text-sm">10</span>
              
              <div>
                <p className=" text-sm text-gray-500">
                  Comments <span className=" text-gray-800">(2)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className=" mt-5">Comments</p>

        <form className=" w-[400px]">
          <label htmlFor="chat" className="sr-only">
            Your message
          </label>
          <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
            <button
              type="button"
              className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
            >
          
             <FaRegImage className=" size-5"/>
              <span className="sr-only">Upload image</span>
            </button>
            
            <textarea
              id="chat"
              rows={1}
              className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Add a comment..."
              defaultValue={""}
            />
            <button
              type="submit"
              className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
            >
              
              <IoMdSend className=" size-5"/>
              <span className="sr-only">Send message</span>
            </button>
          </div>
        </form>
        <div className=" w-96 flex gap-4 mt-5
        ">
          <img className=" size-12 rounded-full" src="https://i.pinimg.com/736x/da/8f/6f/da8f6f587a9c94a93998f2b932acb440.jpg" alt="" />
          <div>
            <p className=" mb-3">Olivia</p>
            <p className=" text-sm mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat error eos,  reprehenderit reiciendis?
            </p>
          <p className=" text-xs text-gray-500 text-end">03,Jan 2025</p>
          </div>
        </div>
        <div className=" w-96 flex gap-4 mt-5
        ">
          <img className=" size-10 rounded-full" src="https://i.pinimg.com/236x/da/c0/8d/dac08dbae85f1e89081126a98568c9e9.jpg" alt="" />
          <div>
            <p className=" mb-3">Taylor</p>
            <p className=" text-sm mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat error eos,  reprehenderit reiciendis?
            </p>
          <p className=" text-xs text-gray-500 text-end">03,Jan 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailRow;
