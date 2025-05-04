import axios from "axios";
import {useEffect, useState} from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
 
export const StudentsTable = () => {
 
    const [data, setData] = useState([])
    const [message, setMessage] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
 
    const url_message =`http://localhost:7142/message`
    const url_average = 'http://localhost:7142/message/averageMessage'
 
    const fetchData = async () => {
        try {
          setLoading(true);
          const response = await axios.get(url_message,{
            headers: {
              "Access-Control-Allow-Origin": "http://localhost:5173",
            },
            withCredentials: true,
          });
          console.log(response.data);
          setData(response.data);
        } catch (error) {
          console.error("Fetch data error:", error);
        } finally {
          setLoading(false);
        }
      };
 
      const fetchMessage = async () => {
        try {
          setLoading(true);
          const response = await axios.get(url_average, {
            headers: {
              "Access-Control-Allow-Origin": "http://localhost:5173",
            },
            withCredentials: true,
          });
          console.log(response.data);
          setMessage(response.data);
        } catch (error) {
          console.error("Fetch message error:", error);
        } finally {
          setLoading(false);
        }
      };
 
      useEffect(() => {
        fetchData();
      }, []);
 
      useEffect(() => {
        fetchMessage();
      }, []);
 
 
    return (
        <div className="mt-8 w-full">
 
 {data.length > 0 || message.length > 0 ? (
    <>
    <div className="w-65/100">
    <h2 className="text-4xl mb-4">Total Messages in last 7 days</h2>
</div>
 
 
<div>
<div className="flex flex-warp gap-15">
 
<table className={`w-full lg:w-6/13 border-none ${data.filter((data) => data.senderType == 'Student').length === 0 ? 'hidden' : 'block'}`}>
<thead>
<tr className="bg-teal-300">
<th className="rounded-l-2xl w-23 text-center py-2 font-normal text-base lg:text-xl">No.</th>
<th className="py-2 text-start font-normal text-base lg:text-xl pl-2 lg:pl-6 w-80">Student Names</th>
<th className="p-2 w-40 font-normal text-base lg:text-xl rounded-r-2xl">
No. of Msg
</th>
</tr>
 
</thead>
<tbody>
{data.filter((data) => data.senderType == 'Student').map((studentMessage, index) => (
<tr className="border-b-2 border-teal-500" key={studentMessage.senderId}>
<td className="text-center border-teal-500 border-r-2 text-xs lg:text-base ">{index + 1}</td>
<td className="py-4 ml-8 flex items-center">
   <img
       src={` data:image/jpeg;base64,${studentMessage.image}`} className="w-10 h-10 lg:w-13 lg:h-13 rounded-full"/>
   <div className="ml-4">
       <p className="text-xs lg:text-base ">{studentMessage.senderName}</p>
       <p className="text-[10px] lg:text-xs text-gray-700">{studentMessage.major}</p>
   </div>
</td>
<td className="text-center text-xs lg:text-base  border-teal-500 border-l-2">{studentMessage.messageCount}</td>
</tr>
))}
 
</tbody>
</table>
 
 
 
<table className={`w-full lg:w-6/13 border-none ${data.filter((data) => data.senderType == 'Tutor').length == 0 ? 'hidden' : 'block'}`}>
<thead>
<tr className="bg-teal-300">
<th className="rounded-l-2xl w-23 text-center py-2 font-normal text-base lg:text-xl">No.</th>
<th className="py-2 text-start font-normal text-base lg:text-xl pl-2 lg:pl-6 w-80">Tutor Names</th>
<th className="p-2 w-40 font-normal text-base lg:text-xl rounded-r-2xl">
No. of Msg
</th>
</tr>
</thead>
<tbody>
{data.filter((data) => data.senderType == 'Tutor').map((tutorMessage, index) => (
<tr className="border-b-2 border-teal-500" key={tutorMessage.senderId}>
<td className="text-center border-teal-500 border-r-2 text-xs lg:text-base ">{index + 1}</td>
<td className="py-4 ml-8 flex items-center">
<img
  src={`data:image/jpeg;base64,${tutorMessage.image}`} className="w-10 h-10 lg:w-13 lg:h-13 rounded-full"/>
<div className="ml-4">
  <p className="text-xs lg:text-base ">{tutorMessage.senderName}</p>
</div>
</td>
<td className="text-center text-xs lg:text-base  border-teal-500 border-l-2">{tutorMessage.messageCount}</td>
</tr>
)
 
)}
 
</tbody>
</table>
 
 
</div>
 
<div className={`mt-15 ${message.length == 0 ? 'hidden' : 'block'}`}>
<h1 className="mt-3 mb-5 text-4xl">Tutor's Average Messages</h1>
<table className="w-full lg:w-6/13 border-none">
<thead>
<tr className="bg-teal-300">
<th className="rounded-l-2xl w-23 text-center py-2 font-normal text-base lg:text-xl">No.</th>
<th className="py-2 text-start font-normal text-base lg:text-xl pl-2 lg:pl-6  w-80">Tutors</th>
<th className="p-2 w-40 font-normal text-base lg:text-lg rounded-r-2xl">
    Average Msg
</th>
</tr>
</thead>
<tbody>
{message.map((message, index) => (
<tr className="border-b-2 border-teal-500" key={message.senderId}>
<td className="text-center border-teal-500 border-r-2 text-base lg:text-xl">{index + 1}</td>
<td className="py-4 ml-8 flex items-center">
   <img
       src={`data:image/jpeg;base64,${message.image}`}
       alt="ProfileImage" className="w-10 h-10 lg:w-13 lg:h-13 rounded-full"/>
   <div className="ml-4">
       <p className="text-xs lg:text-base">{message.senderName}</p>
   </div>
</td>
<td className="text-center text-xs lg:text-base border-teal-500 border-l-2">{message.messageCount}</td>
</tr>
))}
</tbody>
</table>
</div>
 
</div>
</>    
) : (
    <div className="text-center mt-40">
        <p className="text-gray-400">No Data Available</p>
    </div> )}    
 
</div>        
   
       
    );
}