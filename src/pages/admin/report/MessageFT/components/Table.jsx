import axios from "axios";
import {useEffect, useState} from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

export const StudentsTable = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const url = useState(`http://localhost:7142/message`)

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
        <div className="mt-8 w-full">
            <div className="w-65/100">
                <h2 className="text-4xl mb-4">Total Messages in last 7 days</h2>
                <div className="mt-8 mb-10 space-x-3">
                    <input type={"text"} className="bg-gray-100 rounded-2xl text-sm w-60 py-[7px] pl-4 pr-4 focus:border-teal-500 focus:ring-teal-500" placeholder="Search"  />
                </div>
            </div>

            <div className="flex gap-15">
                <table className="w-6/13 border-none">
                <thead>
                <tr className="bg-teal-300">
                    <th className="rounded-l-2xl w-23 text-center py-2 font-normal text-xl">No.</th>
                    <th className="py-2 text-start font-normal text-xl pl-6  w-80">Student Names</th>
                    <th className="p-2 w-40 font-normal text-lg rounded-r-2xl">
                        No. of Msg
                    </th>
                </tr>

                </thead>
                    <tbody>
                    {!!data && data.filter((data) => data.SenderType == 'student' ).map((studentMessage) => {
                        <tr className="border-b-2 border-teal-500" key={studentMessage.SenderId}>
                        <td className="text-center border-teal-500 border-r-2 text-xl">1</td>
                        <td className="py-4 ml-8 flex items-center">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT36VHh-mjL_Rc8IL60D77dMDPL_fNhosHuag&s"
                                alt="ProfileImage" className="w-13 h-13 rounded-full"/>
                            <div className="ml-4">
                                <p className="text-xl">{studentMessage.senderName}</p>
                                <p className="text-xs text-gray-700">{studentMessage.senderMajor}</p>
                            </div>
                        </td>
                        <td className="text-center text-xl border-teal-500 border-l-2">{studentMessage.MessageCount}</td>
                    </tr>
                    })} 

                    </tbody>
                </table>


                <table className="w-6/13 border-none">
                <thead>
                <tr className="bg-teal-300">
                    <th className="rounded-l-2xl w-23 text-center py-2 font-normal text-xl">No.</th>
                    <th className="py-2 text-start font-normal text-xl pl-6  w-80">Student Names</th>
                    <th className="p-2 w-40 font-normal text-lg rounded-r-2xl">
                        No. of Msg
                    </th>
                </tr>
                </thead>
                <tbody>
                {!!data && data.filter((data) => data.SenderType == 'tutor' ).map((tutorMessage) => {
                        <tr className="border-b-2 border-teal-500" key={tutorMessage.SenderId}>
                        <td className="text-center border-teal-500 border-r-2 text-xl">1</td>
                        <td className="py-4 ml-8 flex items-center">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT36VHh-mjL_Rc8IL60D77dMDPL_fNhosHuag&s"
                                alt="ProfileImage" className="w-13 h-13 rounded-full"/>
                            <div className="ml-4">
                                <p className="text-xl">{tutorMessage.senderName}</p>
                            </div>
                        </td>
                        <td className="text-center text-xl border-teal-500 border-l-2">{tutorMessage.MessageCount}</td>
                    </tr>
                    })} 

                </tbody>
            </table>
            </div>

            <div className="mt-15">
                <h1 className="mt-3 mb-5 text-4xl">Tutor's Average Messages</h1>
                <table className="w-6/13 border-none">
                    <thead>
                    <tr className="bg-teal-300">
                        <th className="rounded-l-2xl w-23 text-center py-2 font-normal text-xl">No.</th>
                        <th className="py-2 text-start font-normal text-xl pl-6  w-80">Tutors</th>
                        <th className="p-2 w-40 font-normal text-lg rounded-r-2xl">
                            Average Msg
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {!!data && data.filter((data) => data.SenderType == 'student' ).map((studentMessage) => {
                        <tr className="border-b-2 border-teal-500" key={studentMessage.SenderId}>
                        <td className="text-center border-teal-500 border-r-2 text-xl">1</td>
                        <td className="py-4 ml-8 flex items-center">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT36VHh-mjL_Rc8IL60D77dMDPL_fNhosHuag&s"
                                alt="ProfileImage" className="w-13 h-13 rounded-full"/>
                            <div className="ml-4">
                                <p className="text-xl">{studentMessage.senderName}</p>
                            </div>
                        </td>
                        <td className="text-center text-xl border-teal-500 border-l-2">{studentMessage.MessageCount}</td>
                    </tr>
                    })} 
                    </tbody>
                </table>
            </div>
        </div>
    );
}
