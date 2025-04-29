import React, { useState } from "react";
import { IoMdSend } from "react-icons/io";

const StudentChatRoom = ({ messages, sendMessage, recipient }) => {
  const user = JSON.parse(localStorage.getItem("user_profile"));
  const [message, setMessage] = useState("");
  const handleForm = (e) => {
    e.preventDefault();
    sendMessage(message);
    setMessage("");
  };
  return (
    <div className='flex flex-1 flex-col mt-18 pb-14'>
      <div className='flex flex-row items-center gap-8 border-b-1 border-b-[rgba(0,0,0,0.3)] w-full pb-2 '>
        {/* <img
          src='https://wallpapers.com/images/high/professional-profile-pictures-2880-x-1920-xq8yol0nn3qfm0w4.webp'
          className='w-13 h-12 rounded-full ml-4'
          alt=''
        /> */}
        <p className='text-xl'>{recipient?.label}</p>
      </div>
      <div className=' flex flex-1 flex-col mt-6 h-[500px]'>
        {messages?.map((msg, index) => {
          const isMine = msg.username === user.id;
          return (
            <div
              key={index}
              className={`inline-block max-w-[80%] p-2 mt-4 ${
                isMine
                  ? "self-end bg-[rgba(17,161,134,0.2)]"
                  : "self-start bg-[#11a186]"
              }`}
            >
              <p className={isMine ? "" : "text-white"}>{msg.msg}</p>
            </div>
          );
        })}
      </div>

      <div>
        <form
          className='w-full mb-6 flex flex-row gap-4 items-center'
          onSubmit={handleForm}
        >
          <input
            type='message'
            id='message'
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
            placeholder='send a message'
            required
          />
          <button type='submit'>
            <IoMdSend size={24} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentChatRoom;
