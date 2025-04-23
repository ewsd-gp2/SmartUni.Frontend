import { IoFilterSharp } from "react-icons/io5";
import { GoSortAsc } from "react-icons/go";
import {useEffect, useState} from "react";
import axios from "axios";

export const StudentsTable = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("Status Bar");

    const options = [
        { name: "A-Z", enabled: false},
        { name: "Date", enabled: false },
    ];

    
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const url = `http://localhost:7142/studentsWithoutTutor`;
    

    const fetchData = async () => {

        setLoading(true);
        axios
          .get(url, {
            headers: {
              "Access-Control-Allow-Origin": "http://localhost:5173",
            },
            withCredentials: "true",
          })
          .then((response) => {
            console.log(response.data);
            setData(response.data);
          })
          
        setLoading(false);
      };
      useEffect(() => {
        fetchData();
      }, []);

    //   [...names].sort((a, b) => a.localeCompare(b))




    
    return (
        <div className="mt-8">
                <h2 className="text-4xl mb-10">Students Without Tutors</h2>
            <table className="w-7/9 border-none">
                <thead>
                <tr className="bg-teal-300">
                    <th className="rounded-l-2xl text-center py-2 font-normal text-xl w-20">No.</th>
                    <th className="py-2 text-start font-normal text-xl px-7 w-full flex justify-between">
                        <h1>Student Names</h1>
                        <button onClick={() => setIsOpen(!isOpen)} className="hover:text-gray-600 flex items-center cursor-pointer mr-5"><GoSortAsc className="mr-1 mt-1 text-2xl"/>Sorting</button>
                    </th>
                    <th className="p-2 w-40 font-normal text-xl rounded-r-2xl">
                        <h1 className="flex justify-center items-center"><IoFilterSharp className="mt-1 mr-1.5 text-md"/>Filter</h1>
                    </th>
                </tr>
                </thead>
                <tbody>
                {isOpen && (
                    <div
                        className="absolute w-35 right-105 bg-gray-100 black shadow-lg rounded-md border-1 border-gray-300"
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
                    {!!data && data.map((data) => (
                        <tr className="border-b-2 border-teal-500" key={data.id}>
                        <td className="text-center border-teal-500 border-r-2 text-xl">1</td>
                        <td className="py-4 ml-8 flex items-center">
                            <img src={`data:image/jpeg;base64,${data.image}`} alt="ProfileImage" className="w-13 h-13 rounded-full" />
                            <div className="ml-4">
                                <p className="text-xl">{data.name}</p>
                                <p className="text-xs text-gray-700">{data.major}</p>
                            </div>
                        </td>
                        <td className="text-center border-teal-500 border-l-2">
                            <p className="bg-red-200 mx-4 py-1.5 rounded-xl">Unassigned</p>
                        </td>
                    </tr>
                    ))}
                

                </tbody>
            </table>
        </div>
    );
}
