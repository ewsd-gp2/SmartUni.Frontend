import Container from "../../../components/Container";
import HeaderTitle from "../../../components/common/HeaderTitle";
import ChatList from "./ChatList";
import ChatRoom from "./ChatRoom";
import NoConnection from "./NoConnection";
import axios from "axios";
import Select from "react-select";
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect, use } from "react";
import toast from "react-hot-toast";

const Chat = () => {
  const user = JSON.parse(localStorage.getItem("user_profile"));
  const userRole = localStorage.getItem("user_role");
  const capitalRole = userRole
    ? userRole.charAt(0).toUpperCase() + userRole.slice(1)
    : "";
  const [conn, setConnection] = useState(null);
  const [messages, setMessages] = useState([]);
  const [students, setStudents] = useState([]);
  const [chatList, setChatList] = useState([]);
  const [recipient, setRecipient] = useState();
  const [chatId, setChatId] = useState();

  const studentOptions = students?.map((student) => ({
    value: student.id,
    label: student.name,
  }));
  useEffect(() => {
    console.log("msg", messages);
  }, [messages]);

  useEffect(() => {
    fetchStudents();
    // fetchChatList();
  }, []);

  useEffect(() => {
    const newId = uuidv4();
    if (user && capitalRole && recipient) {
      joinChatRoom(user.id, null, user.name, capitalRole, recipient.value);
    }
  }, [recipient, user.id]);

  const fetchChatList = () => {
    const url = `http://localhost:7142/message/chatlist/${user.id}`;
    axios
      .get(url, {
        withCredentials: true,
      })
      .then((response) => {
        console.log("get chat list", response.data);
        setChatList(response.data);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Sorry, something went wrong.", {
          position: "top-right",
        });
      });
  };

  const fetchStudents = async () => {
    const url = "http://localhost:7142/student";
    axios
      .get(url, {
        withCredentials: true,
      })
      .then((response) => {
        console.log("get student", response.data);
        setStudents(response.data);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Sorry, something went wrong.", {
          position: "top-right",
        });
      });
  };

  const handleChange = (selectedOption) => {
    setRecipient(selectedOption);
  };

  const joinChatRoom = async (
    username,
    chatroom,
    sendername,
    usertype,
    receiverid
  ) => {
    console.log("join", username, chatroom, sendername, usertype, receiverid);
    try {
      // Initiate a SignalR connection
      const newConn = new HubConnectionBuilder()
        .withUrl("http://localhost:7142/ChatHub")
        .configureLogging(LogLevel.Information)
        .build();

      // Setup event listeners
      newConn.on(
        "JoinSpecificChatRoom",
        (username, chatroom, sendername, usertype, receiverid) => {
          console.log(
            "User Joined:",
            username,
            chatroom,
            sendername,
            usertype,
            receiverid
          );
        }
      );

      // newConn.on("userleft", (username) => {
      //   console.log("User left:", username);
      //   // You might want to update your UI here when a user leaves
      // });

      newConn.on("LoadChatHistory", (chatHistory) => {
        console.log("Chat History Loaded:", chatHistory);
        setMessages(
          chatHistory.map((msg) => ({
            username: msg.senderId,
            msg: msg.content,
            timestamp: msg.timestamp,
          }))
        );
      });

      newConn.on("ReceiveSpecificMessage", (username, msg) => {
        setMessages((prevMessages) => [...prevMessages, { username, msg }]);
      });

      // Start connection
      await newConn.start();
      await newConn.invoke("JoinSpecificChatRoom", {
        senderID: username,
        chatRoom: chatroom,
        senderName: sendername,
        senderType: usertype,
        recieverID: receiverid
      });
      // Store connection
      setConnection(newConn);
    } catch (e) {
      console.error("Connection Error:", e);
    }
  };

  const sendMessage = async (message) => {
    try {
      if (conn) {
        console.log(message);
        await conn.invoke("SendMessage", message);
      }
    } catch (e) {
      console.error("SendMessage Error:", e);
    }
  };

  // Cleanup connection when unmounting
  useEffect(() => {
    return () => {
      if (conn) {
        conn.stop();
      }
    };
  }, [conn]);

  return (
    <Container className=''>
      <div className='flex flex-row gap-5 flex-1 ml-5 h-screen'>
        <div className='flex flex-col w-1/3 gap-5'>
          <HeaderTitle title='Chat' />
          <Select
            options={studentOptions}
            onChange={handleChange}
            placeholder='Select a student...'
          />
          <ChatList chatList={chatList} />
        </div>
        {!conn ? (
          <NoConnection />
        ) : (
          <ChatRoom
            messages={messages}
            sendMessage={sendMessage}
            recipient={recipient}
          />
        )}
      </div>
    </Container>
  );
};
export default Chat;
