import { IoFilterSharp } from "react-icons/io5";
import { GoSortAsc } from "react-icons/go";
import {useEffect, useState} from "react";
import axios from "axios";

export const StudentsTable = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("Status Bar");
    const [sortOrder, setSortOrder] = useState(null);

    const options = [
        { name: "Ascending", enabled: false},
        { name: "Descending", enabled: false },
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
                <h2 className="text-[15px] lg:text-4xl mb-10">Students Without Tutors</h2>


{data.length !== 0 ? (
    <table className="w-full lg:w-7/9 border-none">
                <thead>
                <tr className="bg-teal-300">
                    <th className="text-center py-3 pl-2 font-normal text-base lg:text-xl w-20">No.</th>
                    <th className="py-3 text-start font-normal text-base lg:text-xl px-4 lg:px-7 w-full">
                        <h1>Student Names</h1>
                        
                    </th>
                    <th className="p-3 w-40 font-normal text-base lg:text-xl rounded-r-2xl">
                    <button onClick={() => setIsOpen(!isOpen)} className="hover:text-gray-600 flex items-center cursor-pointer ml-4"><GoSortAsc className="mt-1 mr-1 text-base lg:text-xl"/>Sorting</button>
                    </th>
                </tr>
                </thead>
                <tbody>

                {isOpen && (
                    <div
                        className="absolute w-25 xl:w-35 right-10 xl:right-60 bg-gray-100 black shadow-lg rounded-md border-1 border-gray-300"
                    >
                        <div className="">
                        {options.map((option) => (
                            <button
                                key={option.name}
                                onClick={() => {
                                    setSelected(option.name);
                                    setSortOrder(option.name.toLowerCase());
                                    setIsOpen(false);
                                }}
                                className="w-full px-3 xl:px-7 py-2 flex items-center gap-2 cursor-pointer border-b-1 border-gray-200 text-sm xl:text-base"
                            >
                                {option.name}
                            </button>
                            ))}
                        </div>
                    </div> )}
                    {!!data && [...data]
                            .sort((a, b) => {
                                if (sortOrder === "ascending") {
                                return a.name.localeCompare(b.name);
                                } else if (sortOrder === "descending") {
                                return b.name.localeCompare(a.name);
                                } else {
                                return 0;
                                }
                                    }).map((data, index) => (
                        <tr className="border-b-2 border-teal-500" key={data.id}>
                        <td className="text-cent er border-teal-500 border-r-2 text-sm lg:text-xl">{index + 1}</td>
                        <td className="py-4 ml-8 flex items-center">
                            <img src={data.image ? `data:image/jpeg;base64,${data.image}` : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} alt="ProfileImage" className="w-10 h-10 lg:w-13 lg:h-13 rounded-full" />
                            <div className="ml-4">
                                <p className="text-sm lg:text-xl">{data.name}</p>
                                <p className="text-[10px] lg:text-xl text-gray-700">{data.major}</p>
                            </div>
                        </td>
                        <td className="text-center border-teal-500 border-l-2">
                            <p className="bg-red-200 mx-4 py-2 lg:py-1.5 rounded-xl text-xs lg:text-base">Unassigned</p>
                        </td>
                    </tr>
                    ))}
                

                </tbody>
            </table>) : (
                <div className="text-center mt-40">
                <p className="text-gray-400">No Data Available</p>
            </div>
            )}
            
        </div>
    );
}