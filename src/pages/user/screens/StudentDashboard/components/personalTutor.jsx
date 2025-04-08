import { CgProfile } from "react-icons/cg";
import { FaBook } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { MdConnectWithoutContact } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";

const PersonalTutor = () => {
  return(
     <div className="md:col-span-1 bg-gray-200 py-6">

      <div className="text-[24px] xl:text-[32px] px-4 md:px-0 md:flex justify-center">
        <h1>My Personal Tutor</h1>
      </div>

      <div className="flex items-center px-6 pt-11 pb-6 border-b-2 border-teal-400">
          <CgProfile className="text-[50px]" />
        <div className="flex flex-col pl-4">
          <h1 className="text-[20px]">Name</h1>
          <span className="text-[13px]">Tutor</span>
        </div>
      </div>

      <div>
        <ul className="pt-5 pb-2 px-5 xl:px-10">
          <li className="py-4 xl:py-5">
              <div className="flex items-center gap-5 xl:gap-8">
                  <FaBook className="text-[22px] xl:text-[26px] text-teal-600" />
                  <span className="text-[14px] xl:text-[18px] text-gray-700">EWSD</span>
              </div>
          </li>

            <li className="py-4 xl:py-5">
                <div className="flex items-center gap-5 xl:gap-8">
                    <FiMail className="text-[22px] xl:text-[26px] text-teal-600" />
                    <span className="text-[14px] xl:text-[18px] text-gray-700">tutor@gmail.com</span>
                </div>
            </li>

            <li className="py-4 xl:py-5">
                <div className="flex items-center gap-5 xl:gap-8">
                    <MdConnectWithoutContact className="text-[22px] xl:text-[26px] text-teal-600" />
                    <span className="text-[14px] xl:text-[18px] text-gray-700">Teaching Department</span>
                </div>
            </li>
        </ul>
      </div>

      <div className="flex items-center px-4 pt-2 pb-10 xl:px-8 border-b-2 border-teal-400">
        <div className="text-[18px] xl:text-[28px] pr-2 text-teal-600">
          <MdOutlineMessage/>
        </div>
        <div>
          <input type="text" className="py-[2px] text-[13px] xl:text-[17px] xl:py-[6px] rounded-sm bg-white border-none focus:ring-0 text-gray-700 w-full" placeholder="Quick Message"/>
        </div>
      </div>


      <div className="flex justify-between items-center px-14 pt-8 pb-6 md:px-6">

            <div>
              <h1 className="lg:text-xl text-md">My Presents</h1>
              </div>

                <div className="flex lg:text-[36px] text-[25px] gap-[4px]">
                  <CgProfile />
                    <CgProfile />
                </div>



      </div>

         <div className="w-full px-10 md:px-6">
             <div className="relative bg-white h-[30px] w-full">
                 <div className="absolute top-0 bg-teal-500 h-[30px] w-2/3">
                 </div>
             </div>
             <span className="text-xs text-gray-700 xl:text-sm">Mar 03, 2025-April-03, 2025</span>
         </div>

     </div>

  )
}

export default PersonalTutor;