import React from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const StudentChatList = ({
  chatList,
  handleChange,
  handleChatRoomChange,
  recipient,
}) => {
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
            src={
              item.otherUserImage
                ? `data:image/jpeg;base64,${item.otherUserImage}`
                : "https://static.vecteezy.com/system/resources/previews/021/548/095/original/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg"
            }
            //  src={`data:image/jpeg;base64,${item.otherUserImage}`}
            className='w-12 h-11 rounded-full'
            alt=''
          />
          <div>
            <p
              //className='text-lg'
              className={`text-lg ${
                item.otherUserId === (recipient?.value || recipient)
                  ? "font-semibold"
                  : "font-normal"
              }`}
            >
              {item.otherUserName}
            </p>
            <p
              //   className='text-md'
              className={`text-md ${
                item.otherUserId === (recipient?.value || recipient)
                  ? "font-semibold"
                  : "font-normal"
              }`}
            >
              {item.lastMessage}
            </p>
             <span className='text-xs text-gray-500'>{moment(item.timestamp).format('DD MMM YYYY')}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudentChatList;
