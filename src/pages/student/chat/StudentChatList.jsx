import React from "react";
import { useNavigate } from "react-router-dom";

const StudentChatList = ({ chatList, handleChange, handleChatRoomChange }) => {
  const handleData = (data) => {
    let tutor = { value: data.otherUserId, label: data.otherUserName };
    handleChange(tutor);
    handleChatRoomChange(data.chatRoomId);
  };

  return (
    <div>
      {chatList?.map((item, index) => (
        <div
          key={index}
          onClick={() => handleData(item)}
          className='border-b-1 pointer-cursor border-b-[rgba(0,0,0,0.3)] rounded-b-lg flex flex-row pb-4 gap-5 mt-2'
        >
          <img
            src={`data:image/jpeg;base64,${item.otherUserImage}`}
            className='w-12 h-11 rounded-full'
            alt=''
          />
          <div>
            <p className='text-lg'>{item.otherUserName}</p>
            <p className='text-md'>{item.lastMessage}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudentChatList;
