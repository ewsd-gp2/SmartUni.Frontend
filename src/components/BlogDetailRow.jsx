import React from "react";
import { Link } from "react-router-dom";
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
      <div className=" sm:w-[300px] md:w-[400px] lg:w-[700px] xl:w-[800px] bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <Link to={""}>
          <img
            className="rounded-t-lg sm:h-[100px] md:h-[200px] lg:h-[300px] w-full"
            src="https://s3-alpha-sig.figma.com/img/c7b7/df5d/aeb56b6a4622229debe9d0aa7e11c527?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=boRhRgEcCN1jywadNuPwJc-~IiPM41JB2wmfUmy3FYHXZW37iwMxPGajm26bUr7RM~4aR6ue6CYlA4WeG9LsOgto-qGF92GDnPyrY3mxvpkiSuQuf0BCzdxKb8VZ1ymcx7-pNtMpBRFnSO9v2ted1bQWUqnsmBMnW2Jh-gqMvPWyqo2piv6uWDvxTCrbu4iDCL9ZS7WA9dIiYyurRnnQ1f94EB82myB1mxtacWwu4Fz3P7ohM-a4ECRttlDmaMQs6DioFUzXuEne0V9Wbw55B-tj-WcDvQkwei7t6CXI1Ukgu87xuOtG12eJqxHh2Y3DmFxcPF06gYfR8urHDikzKg__"
            alt
          />

          <div className="  mb-3">
            <p className="  text-sm text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <div className="mt-3 flex gap-3">
              <div>
                <AiOutlineLike />
                <span className=" text-sm">10</span>
              </div>
              <div>
                <AiOutlineDislike />
                <span className=" text-sm">10</span>
              </div>
              <div>
                <p className=" text-sm text-gray-500">
                  Comments <span className=" text-gray-800">(2)</span>
                </p>
              </div>
            </div>
          </div>
        </Link>
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
              {/* <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 18"
              >
                <path
                  fill="currentColor"
                  d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"
                />
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18 1H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                />
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"
                />
              </svg> */}
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
              {/* <svg
                className="w-5 h-5 rotate-90 rtl:-rotate-90"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
              >
                <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
              </svg> */}
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
          <img className=" size-12 rounded-full" src="https://i.pinimg.com/236x/da/c0/8d/dac08dbae85f1e89081126a98568c9e9.jpg" alt="" />
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
