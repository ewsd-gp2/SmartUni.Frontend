import React from "react";

const ChatList = ({ chatList }) => {
  return (
    <div>
      {chatList?.map((item,index) => (
        <div key={index} className='border-b-1 border-b-[rgba(0,0,0,0.3)] rounded-b-lg flex flex-row pb-4 gap-5 mt-2'>
          <img
            src='https://wallpapers.com/images/high/professional-profile-pictures-2880-x-1920-xq8yol0nn3qfm0w4.webp'
            className='w-12 h-11 rounded-full'
            alt=''
          />
          <div>
            <p className='text-lg'>{item.senderName}</p>
            <p className='text-md'>Hello Student</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatList;
