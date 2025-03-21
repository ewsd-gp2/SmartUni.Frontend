import { IoFilterSharp } from "react-icons/io5";
import { GoSortAsc } from "react-icons/go";
import {useState} from "react";

export const StudentsTable = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("Status Bar");

    const options = [
        { name: "A-Z", enabled: false},
        { name: "Date", enabled: false },
    ];

    return (
        <div className="mt-8">
                <h2 className="text-4xl mb-10">Students Without Tutors</h2>
            <table className="w-7/9 border-none">
                <thead>
                <tr className="bg-teal-300">
                    <th className="rounded-l-2xl w-23 text-center py-2 font-normal text-xl w-10">No.</th>
                    <th className="py-2 w-full text-start font-normal text-xl px-15 w-80 flex justify-between">
                        <h1>Student Names</h1>
                        <button onClick={() => setIsOpen(!isOpen)} className="hover:text-gray-600 flex items-center cursor-pointer"><GoSortAsc className="mr-1 mt-1 text-2xl"/>Sorting</button>
                    </th>
                    <th className="p-2 w-40 font-normal text-xl rounded-r-2xl">
                        <h1 className="flex justify-center items-center"><IoFilterSharp className="mt-1 mr-1.5 text-md"/>Filter</h1>
                    </th>
                </tr>
                </thead>
                <tbody>
                {isOpen && (
                    <div
                        className="absolute w-35 right-112 bg-gray-100 black shadow-lg rounded-md border-1 border-gray-300"
                    >
                        <div className="">
                            {options.map((option) => (
                                <button
                                    key={option.name}
                                    onClick={() => {
                                        setSelected(option.name);
                                        setIsOpen(!isOpen);
                                    }}
                                    className="w-full px-7 py-2 flex items-center gap-2 cursor-pointer border-b-1 border-gray-200"
                                >
                                    {option.name}
                                </button>
                            ))}
                        </div>
                    </div> )}
                <tr className="border-b-2 border-teal-500">
                    <td className="text-center border-teal-500 border-r-2 text-xl">1</td>
                    <td className="py-4 ml-8 flex items-center">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT36VHh-mjL_Rc8IL60D77dMDPL_fNhosHuag&s" alt="ProfileImage" className="w-13 h-13 rounded-full" />
                        <div className="ml-4">
                            <p className="text-xl">John Doe</p>
                            <p className="text-xs text-gray-700">Uni Level</p>
                        </div>
                    </td>
                    <td className="text-center border-teal-500 border-l-2">
                        <p className="bg-red-200 mx-4 py-1.5 rounded-xl">Unassigned</p>
                    </td>
                </tr>
                <tr className="border-b-2 border-teal-500">
                    <td className="text-center border-teal-500 border-r-2 text-xl">1</td>
                    <td className="py-4 ml-8 flex items-center">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT36VHh-mjL_Rc8IL60D77dMDPL_fNhosHuag&s" alt="ProfileImage" className="w-13 h-13 rounded-full" />
                        <div className="ml-4">
                            <p className="text-xl">John Doe</p>
                            <p className="text-xs text-gray-700">Uni Level</p>
                        </div>
                    </td>
                    <td className="text-center border-teal-500 border-l-2">
                        <p className="bg-red-200 mx-4 py-1.5 rounded-xl">Unassigned</p>
                    </td>
                </tr>
                <tr className="border-b-2 border-teal-500">
                    <td className="text-center border-teal-500 border-r-2 text-xl">1</td>
                    <td className="py-4 ml-8 flex items-center">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT36VHh-mjL_Rc8IL60D77dMDPL_fNhosHuag&s" alt="ProfileImage" className="w-13 h-13 rounded-full" />
                        <div className="ml-4">
                            <p className="text-xl">John Doe</p>
                            <p className="text-xs text-gray-700">Uni Level</p>
                        </div>
                    </td>
                    <td className="text-center border-teal-500 border-l-2">
                        <p className="bg-red-200 mx-4 py-1.5 rounded-xl">Unassigned</p>
                    </td>
                </tr>
                <tr className="border-b-2 border-teal-500">
                    <td className="text-center border-teal-500 border-r-2 text-xl">1</td>
                    <td className="py-4 ml-8 flex items-center">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT36VHh-mjL_Rc8IL60D77dMDPL_fNhosHuag&s" alt="ProfileImage" className="w-13 h-13 rounded-full" />
                        <div className="ml-4">
                            <p className="text-xl">John Doe</p>
                            <p className="text-xs text-gray-700">Uni Level</p>
                        </div>
                    </td>
                    <td className="text-center border-teal-500 border-l-2">
                        <p className="bg-red-200 mx-4 py-1.5 rounded-xl">Unassigned</p>
                    </td>
                </tr>

                </tbody>
            </table>
        </div>
    );
}
