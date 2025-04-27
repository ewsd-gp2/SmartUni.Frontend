import axios from "axios";
import {useEffect, useState} from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

export const StudentsTable = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("Status Bar");

    const options = [
        { name: "Ascending", enabled: false},
        { name: "Descending", enabled: false },
    ];

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const url = `http://localhost:7142/pageview/top`;
    

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
                <h2 className="text-4xl mb-4">Most Viewed Pages</h2>
            </div>

{data.length !== 0 ? ( <table className="w-4/9 border-none">
                <thead>
                <tr className="bg-teal-300">
                    <th className="rounded-l-2xl w-23 text-center py-2 font-normal text-xl">No.</th>
                    <th className="py-2 text-start font-normal text-xl pl-6 w-110">Pages</th>
                    <th className="p-2 w-40 font-normal text-lg rounded-r-2xl">
                        Views
                    </th>
                </tr>
                </thead>
                    <tbody>
                    {!!data && data.map((data, index) => (<tr className="border-b-2 border-teal-500" key={index}>
                        <td className="text-center border-teal-500 border-r-2 text-xl">{index + 1}</td>
                        <td className="py-5 ml-8 flex items-center text-xl">
                            {data.pageName}
                        </td>
                        <td className="text-center border-teal-500 border-l-2 text-xl">{data.viewCount}</td>
                    </tr>))}

                    </tbody>
                </table>) : (
                  <div className="text-center mt-40">
                  <p className="text-gray-400">No Data Available</p>
              </div>
                )}
               
        </div>
    );
}