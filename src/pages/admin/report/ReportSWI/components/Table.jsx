import { format } from "date-fns";
import {useEffect, useState} from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

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

    const get7DaysAgo = () => {
        const date = new Date();
        date.setDate(date.getDate() - 7);
      
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
      
        return `${year}-${month}-${day}`;
      };

      const get28DaysAgo = () => {
        const date = new Date();
        date.setDate(date.getDate() - 28);
      
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
      
        return `${year}-${month}-${day}`;
      };
      
     
      
      const sevenDaysAgo = get7DaysAgo();
      const twentyEightDaysAgo = get28DaysAgo();

      const [url, setUrl] = useState(`http://localhost:7142/StudentsWithoutInteraction?dateBefore=${sevenDaysAgo}`);

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
    




    return (
        <div className="mt-8">
            <div className="w-65/100">
                <h2 className="text-[15px] lg:text-4xl mb-4">Students Without Interactions</h2>
            </div>
{data.length !== 0 ? (
    <>
                <div className="flex justify-end lg:justify-end mt-8 mb-5 space-x-3 w-65/100">
                    <button
        className={`cursor-pointer text-sm lg:text-base border-3 border-teal-400 rounded-xl py-[3px] px-1 lg:px-3 ${
        url.includes(sevenDaysAgo) ? "bg-teal-400 text-white" : "bg-white"
        }`}
        onClick={() =>
        setUrl(
            `http://localhost:7142/StudentsWithoutInteraction?dateBefore=${sevenDaysAgo}`
        )
        }
    >
        Last 7 Days
                        </button>
 
                    <button
                        className={`cursor-pointer text-sm lg:text-base border-3 border-teal-400 rounded-xl py-[3px] px-1 lg:px-3 ${
                        url.includes(twentyEightDaysAgo) ? "bg-teal-400 text-white" : "bg-white"
                        }`}
                        onClick={() =>
                        setUrl(
                            `http://localhost:7142/StudentsWithoutInteraction?dateBefore=${twentyEightDaysAgo}`
                        )
                        }
                    >
                        Last 28 Days
                    </button>
                </div>
            

<table className="w-full lg:w-7/9 border-none">
                <thead>
                <tr className="bg-teal-300">
                    <th className="rounded-l-2xl w-23 text-center py-2 font-normal text-base lg:text-xl">No.</th>
                    <th className="py-2 px-2 lg:px-7 pl-2 lg:pl-6 text-start font-normal text-base lg:text-xl w-80">Student Names</th>
                    <th className="p-2 w-40 font-normal text-base lg:text-xl rounded-r-2xl">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="px-4 py-2 text-black cursor-pointer flex items-center justify-center ml-8"
                        >
                            Date <RiArrowDropDownLine className="mt-1 text-2xl"/>
                        </button>
                    </th>
                </tr>
                </thead>
                    <tbody className="relative">
                    {isOpen && (
                        <div
                            className="absolute w-25 xl:w-35 right-1 bg-gray-100 black shadow-lg rounded-md border-1 border-gray-300"
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
                        </div>
                    )}

{!!data && [...data].sort((a, b) => {
    if (sortOrder === "ascending") {
      return a.name.localeCompare(b.name);
    } else if (sortOrder === "descending") {
      return b.name.localeCompare(a.name);
    } else {
        return 0;
        }
  }).map((data, index) => ( 
    <tr className="border-b-2 border-teal-500" key={data.id}>
                        <td className="text-center border-teal-500 border-r-2 text-sm lg:text-xl">{index + 1}</td>
                        <td className="py-4 ml-8 flex items-center">
                            <img
                                src={data.image ? `data:image/jpeg;base64,${data.image}`: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'} className="w-10 h-10 lg:w-13 lg:h-13 rounded-full"/>
                            <div className="ml-4">
                                <p className="text-sm lg:text-xl">{data.name}</p>
                                <p className="text-[10px] lg:text-xs text-gray-700">{data.major}</p>
                            </div>
                        </td>
                        <td className="text-center text-xs lg:text-base border-teal-500 border-l-2">Since {format(data.lastLoginDate, 'yyyy-MM-dd')}</td>
                    </tr>)
)}
                    </tbody>
                </table> </>
                )
                : (
                   <div className="text-center mt-40">
                   <p className="text-gray-400">No Data Available</p>
               </div>
               )}
        </div>
    );
}