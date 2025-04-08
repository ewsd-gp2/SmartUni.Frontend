import { MdOutlineMessage } from "react-icons/md";
import { GoLink } from "react-icons/go";
import { useState } from "react";

const Dashboard = () => {

    const [chatBox, setChatBox] = useState(false)
    return(
        <div className="md:col-span-2">

            <div className="sm:px-6 py-8 flex justify-between items-center">
                <div className="">
                    <h1 className='font-[400] text-2xl sm:text-3xl sm:ml-3'>John's Dashboard</h1>
                </div>
                <div className='rounded-full overflow-hidden'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT36VHh-mjL_Rc8IL60D77dMDPL_fNhosHuag&ss" alt="profile" className='w-[50px] sm:w-[65px]'/>
                </div>
            </div>


            <div className='my-2 mx-6'>
                <div className="flex gap-10">
                    <div className="relative">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT36VHh-mjL_Rc8IL60D77dMDPL_fNhosHuag&ss" alt="friProfile" className="w-[80px]"/>
                        <p className="text-center mt-3">John Doe</p>
                        <div onClick={() => setChatBox(!chatBox)} className="bg-white absolute p-[5px] rounded-full border-1 top-14 left-13 cursor-pointer">
                            <MdOutlineMessage className="text-teal-600 text-md"/>
                        </div>
                        {chatBox &&  <div className="z-10 absolute w-60 bg-teal-200 p-3 mt-2 rounded-xl">
                            <div className="flex gap-3 mb-2">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT36VHh-mjL_Rc8IL60D77dMDPL_fNhosHuag&ss" alt="friProfile" className="w-[30px] rounded-full"/>
                                <p>John Doe</p>
                            </div>
                            <textarea className="rounded-xl text-sm p-1 w-full h-18" placeholder="Quick Message"></textarea>
                        </div>}
                       
                            
                    </div>
                </div>
            </div>



            <div className="my-15 relative">
                <textarea className="w-full rounded-lg shadow-xl shadow-gray-400 outline-none border-1 border-gray-200 h-25 ring-teal-600 py-3 px-3" placeholder="Quick Messages">
                </textarea>
                <GoLink className="absolute bottom-3 right-4 text-teal-600 text-lg font-bold" />
            </div>





            <div className='px-6'>
                <h1 className='text-xl sm:text-3xl pt-6 pb-3'>What's New</h1>

                <div
                    className="flex items-center my-6 justify-between bg-gray-200 p-4 rounded-md shadow-md border border-gray-300">
                    <div className="flex items-center gap-4">
                        <div className="bg-teal-600 text-white p-3 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                 className="w-6 h-6">
                                <path fill-rule="evenodd"
                                      d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z"
                                      clip-rule="evenodd"/>
                                <path fill-rule="evenodd"
                                      d="M15.5 10.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-4 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-4 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm8 4a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-4 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-4 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                                      clip-rule="evenodd"/>
                            </svg>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold">Meeting Title</h2>
                            <p className="text-sm text-gray-600">From 6pm to 8pm</p>
                        </div>
                    </div>
                    <div className="text-gray-700 font-medium">01, Feb 2025</div>
                    </div>
                <div
                    className="flex items-center my-6 justify-between bg-gray-200 p-4 rounded-md shadow-md border border-gray-300">
                    <div className="flex items-center gap-4">
                        <div className="bg-teal-600 text-white p-3 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                 className="w-6 h-6">
                                <path fill-rule="evenodd"
                                      d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z"
                                      clip-rule="evenodd"/>
                                <path fill-rule="evenodd"
                                      d="M15.5 10.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-4 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-4 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm8 4a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-4 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-4 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                                      clip-rule="evenodd"/>
                            </svg>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold">Meeting Title</h2>
                            <p className="text-sm text-gray-600">From 6pm to 8pm</p>
                        </div>
                    </div>
                    <div className="text-gray-700 font-medium">01, Feb 2025</div>
                </div>
                <div
                    className="flex items-center my-6 justify-between bg-gray-200 p-4 rounded-md shadow-md border border-gray-300">
                    <div className="flex items-center gap-4">
                        <div className="bg-teal-600 text-white p-3 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                 className="w-6 h-6">
                                <path fill-rule="evenodd"
                                      d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z"
                                      clip-rule="evenodd"/>
                                <path fill-rule="evenodd"
                                      d="M15.5 10.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-4 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-4 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm8 4a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-4 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-4 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                                      clip-rule="evenodd"/>
                            </svg>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold">Meeting Title</h2>
                            <p className="text-sm text-gray-600">From 6pm to 8pm</p>
                        </div>
                    </div>
                    <div className="text-gray-700 font-medium">01, Feb 2025</div>
                </div>
                <div
                    className="flex items-center my-6 justify-between bg-gray-200 p-4 rounded-md shadow-md border border-gray-300">
                    <div className="flex items-center gap-4">
                        <div className="bg-teal-600 text-white p-3 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                 className="w-6 h-6">
                                <path fill-rule="evenodd"
                                      d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z"
                                      clip-rule="evenodd"/>
                                <path fill-rule="evenodd"
                                      d="M15.5 10.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-4 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-4 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm8 4a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-4 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-4 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                                      clip-rule="evenodd"/>
                            </svg>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold">Meeting Title</h2>
                            <p className="text-sm text-gray-600">From 6pm to 8pm</p>
                        </div>
                    </div>
                    <div className="text-gray-700 font-medium">01, Feb 2025</div>
                </div>


                </div>
            </div>
            )
}

export default Dashboard;