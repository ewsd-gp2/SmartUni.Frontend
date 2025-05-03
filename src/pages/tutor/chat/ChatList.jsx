import React from "react";

const ChatList = ({ chatList, handleChange, handleChatRoomChange }) => {
  const handleData = (data) => {
    let tutor = { value: data.otherUserId, label: data.otherUserName };
    handleChange(tutor);
    handleChatRoomChange(data.chatRoomId);
  };
  return (
    <div>
      {chatList.length > 0 ? (
        chatList.map((item, index) => (
          <div
            key={index}
            onClick={() => handleData(item)}
            className='border-b-1 border-b-[rgba(0,0,0,0.3)] rounded-b-lg flex flex-row pb-4 gap-5 mt-2'
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
        ))
      ) : (
        <div className='text-center text-gray-500'>Start your first conversation!</div>
      )}
    </div>
  );
};

export default ChatList;
