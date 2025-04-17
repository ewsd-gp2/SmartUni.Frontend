import {useEffect, useState} from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

export const StudentsTable = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("Status Bar");

    const options = [
        { name: "Ascending", enabled: false},
        { name: "Descending", enabled: false },
    ];
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)


    let today = new Date();
    let sevenDaysAgo = new Date(today);

    const [url, setUrl] = useState(`http://localhost:7142/student/StudentsWithoutInteraction?dateBefore=${sevenDaysAgo.setDate(today.getDate() - 7)}`)


    useEffect(() => {

        setLoading(true)
        const fetchData = async () => {
            try {
                
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                    'Content-Type': 'application/json',
                    },
                    withCredentials: true,
                })
                if(!response.ok){
                    throw Error('Something went wrong')
                } else {
                    const data = await response.json()
                    console.log(data)
                    setData(data)
                }
            } catch (e) {
                setError(e.message)
            } finally {
                setLoading(false)
            }
        }
        fetchData();
    }, [url])




    return (
        <div className="mt-8">
            <div className="w-65/100">
                <h2 className="text-4xl mb-4">Students Without Interactions</h2>
                <div className="flex justify-end mt-8 mb-5 space-x-3">
                     <button className="border-3 border-teal-400 rounded-xl py-[3px] px-3">Last 7 Days</button>
                    <button className="border-3 border-teal-400 rounded-xl py-[3px] px-3 bg-teal-400">Last 28 Days</button>
                </div>
            </div>

                <table className="w-6/9 border-none">
                <thead>
                <tr className="bg-teal-300">
                    <th className="rounded-l-2xl w-23 text-center py-2 font-normal text-xl">No.</th>
                    <th className="py-2 text-start font-normal text-xl pl-6  w-80">Student Names</th>
                    <th className="p-2 w-40 font-normal text-lg rounded-r-2xl">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="px-4 py-2 text-black cursor-pointer flex items-center justify-center ml-8"
                        >
                            Open <RiArrowDropDownLine className="mt-1 text-2xl"/>
                        </button>
                    </th>
                </tr>
                </thead>
                    <tbody className="relative">
                    {isOpen && (
                        <div
                            className="absolute w-35 right-1 bg-gray-100 black shadow-lg rounded-md border-1 border-gray-300"
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
                        </div>
                    )}

                    <tr className="border-b-2 border-teal-500">
                        <td className="text-center border-teal-500 border-r-2 text-xl">1</td>
                        <td className="py-4 ml-8 flex items-center">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT36VHh-mjL_Rc8IL60D77dMDPL_fNhosHuag&s"
                                alt="ProfileImage" className="w-13 h-13 rounded-full"/>
                            <div className="ml-4">
                                <p className="text-xl">John Doe</p>
                                <p className="text-xs text-gray-700">Uni Level</p>
                            </div>
                        </td>
                        <td className="text-center border-teal-500 border-l-2">Since 01 Jan, 2025</td>
                    </tr>
                    <tr className="border-b-2 border-teal-500">
                        <td className="text-center border-teal-500 border-r-2 text-xl">1</td>
                        <td className="py-4 ml-8 flex items-center">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT36VHh-mjL_Rc8IL60D77dMDPL_fNhosHuag&s"
                                alt="ProfileImage" className="w-13 h-13 rounded-full"/>
                            <div className="ml-4">
                                <p className="text-xl">John Doe</p>
                                <p className="text-xs text-gray-700">Uni Level</p>
                            </div>
                        </td>
                        <td className="text-center border-teal-500 border-l-2">Since 01 Jan, 2025</td>
                    </tr>
                    <tr className="border-b-2 border-teal-500">
                        <td className="text-center border-teal-500 border-r-2 text-xl">1</td>
                        <td className="py-4 ml-8 flex items-center">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT36VHh-mjL_Rc8IL60D77dMDPL_fNhosHuag&s"
                                alt="ProfileImage" className="w-13 h-13 rounded-full"/>
                            <div className="ml-4">
                                <p className="text-xl">John Doe</p>
                                <p className="text-xs text-gray-700">Uni Level</p>
                            </div>
                        </td>
                        <td className="text-center border-teal-500 border-l-2">Since 01 Jan, 2025</td>
                    </tr>
                    <tr className="border-b-2 border-teal-500">
                        <td className="text-center border-teal-500 border-r-2 text-xl">1</td>
                        <td className="py-4 ml-8 flex items-center">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT36VHh-mjL_Rc8IL60D77dMDPL_fNhosHuag&s"
                                alt="ProfileImage" className="w-13 h-13 rounded-full"/>
                            <div className="ml-4">
                                <p className="text-xl">John Doe</p>
                                <p className="text-xs text-gray-700">Uni Level</p>
                            </div>
                        </td>
                        <td className="text-center border-teal-500 border-l-2">Since 01 Jan, 2025</td>
                    </tr>
                    <tr className="border-b-2 border-teal-500">
                        <td className="text-center border-teal-500 border-r-2 text-xl">1</td>
                        <td className="py-4 ml-8 flex items-center">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT36VHh-mjL_Rc8IL60D77dMDPL_fNhosHuag&s"
                                alt="ProfileImage" className="w-13 h-13 rounded-full"/>
                            <div className="ml-4">
                                <p className="text-xl">John Doe</p>
                                <p className="text-xs text-gray-700">Uni Level</p>
                            </div>
                        </td>
                        <td className="text-center border-teal-500 border-l-2">Since 01 Jan, 2025</td>
                    </tr>

                    </tbody>
                </table>
        </div>
    );
}
