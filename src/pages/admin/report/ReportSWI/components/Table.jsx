import axios from "axios";
import { format } from "date-fns";
import {useEffect, useState} from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

export const StudentsTable = () => {

    
    const token = localStorage.getItem('token');

    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("Status Bar");

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
                <h2 className="text-4xl mb-4">Students Without Interactions</h2>
                <div className="flex justify-end mt-8 mb-5 space-x-3">
                     <button className="cursor-pointer border-3 border-teal-400 rounded-xl py-[3px] px-3" onClick={() => {setUrl(`http://localhost:7142/StudentsWithoutInteraction?dateBefore=${sevenDaysAgo}`)
                     }}>Last 7 Days</button>
                    <button className="border-3 border-teal-400 rounded-xl py-[3px] px-3 cursor-pointer bg-teal-400" onClick={() => {setUrl(`http://localhost:7142/StudentsWithoutInteraction?dateBefore=${twentyEightDaysAgo}`)
                    }
                        
                    }>Last 28 Days</button>
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
                            Date <RiArrowDropDownLine className="mt-1 text-2xl"/>
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

{!!data && data.map((data) => ( 
    <tr className="border-b-2 border-teal-500" key={data.id}>
                        <td className="text-center border-teal-500 border-r-2 text-xl">1</td>
                        <td className="py-4 ml-8 flex items-center">
                            <img
                                src={`data:image/jpeg;base64,${data.image}`} className="w-13 h-13 rounded-full"/>
                            <div className="ml-4">
                                <p className="text-xl">{data.name}</p>
                                <p className="text-xs text-gray-700">{data.major}</p>
                            </div>
                        </td>
                        <td className="text-center border-teal-500 border-l-2">Since {format(data.lastLoginDate, 'yyyy-MM-dd')}</td>
                    </tr>)

)}
                   
            

                    </tbody>
                </table>
        </div>
    );
}
