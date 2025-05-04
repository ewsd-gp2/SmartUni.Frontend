import React from "react";
import moment from "moment";

const ChatList = ({
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
  console.log(chatList)
  return (
    <div>
      {chatList.length > 0 ? (
        chatList.map((item, index) => (
          <div
            key={index}
            onClick={() => handleData(item)}
            className={`border-b-1 border-b-[rgba(0,0,0,0.3)] rounded-b-lg flex flex-row pb-4 gap-5 mt-2`}
            // className={`rounded-b-lg flex flex-row pb-4 gap-5 mt-2 border-b-1 ${
            //   item.otherUserId ===
            //   (recipient?.value ? recipient.value : recipient)
            //     ? "border-b-[rgba(17,161,134,0.2)] border-b-2"
            //     : "border-b-[rgba(0,0,0,0.3)]"
            // }`}
          >
            <img
              src={
                item.otherUserImage
                  ? `data:image/jpeg;base64,${item.otherUserImage}`
                  : "https://static.vecteezy.com/system/resources/previews/021/548/095/original/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg"
              }
              className='w-12 h-11 rounded-full'
              alt=''
            />
            <div>
              <p
                //className='text-lg font-semibold'
                className={`text-lg ${
                  item.otherUserId === (recipient?.value || recipient)
                    ? 'font-semibold'
                    : 'font-normal'
                }`}
              >
                {item.otherUserName}</p>
              <p
                //className='text-sm'
                className={`text-sm ${
                  item.otherUserId === (recipient?.value || recipient)
                    ? 'font-semibold'
                    : 'font-normal'
                }`}
              >{item.lastMessage}</p>
              <span className='text-xs text-gray-500'>{moment(item.timestamp).format('DD MMM YYYY')}</span>
            </div>
          </div>
        ))
      ) : (
        <div className='text-center text-gray-500 '>
          Start your first conversation!
        </div>
      )}
    </div>
  );
};

export default ChatList;
