import React, { useState, useEffect } from "react";
import { FaRegPaperPlane } from "react-icons/fa";
import UserProfile from "./UserProfile"; 
import Navbar from "../AppComponents/Navbar";

const PrivateMessaging = () => {
  const [newMessage, setNewMessage] = useState("");
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [userChats, setUserChats] = useState({});
  const [showUserProfile, setShowUserProfile] = useState(false); 

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=15")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results);
      });
  }, []);

  const handleSendMessage = () => {
    if (newMessage.trim() === "" || !selectedUser) return;

    const message = {
      text: newMessage,
      sender: "You",
      timestamp: new Date().toLocaleTimeString(),
    };

    const updatedChat = [...(userChats[selectedUser.login.uuid] || []), message];
    setUserChats({
      ...userChats,
      [selectedUser.login.uuid]: updatedChat,
    });

    setNewMessage("");
  };

  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };

  const handleViewProfile = () => {
    setShowUserProfile(true);
  };

  const handleCloseProfile = () => {
    setShowUserProfile(false);
  };

  const renderChatMessages = () => {
    if (!selectedUser) {
      return (
        <div className="flex-grow flex items-center justify-center text-gray-500">
          Select a user to start a chat.
        </div>
      );
    }

    const chat = userChats[selectedUser.login.uuid] || [];

    return (
      <div className="h-4/5 overflow-y-scroll">
        {chat.map((message, index) => (
          <div
            key={index}
            className={`mb-4 ${
              message.sender === "You" ? "text-right" : "text-left"
            }`}
          >
            <span className="font-semibold">{message.sender}:</span> {message.text}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
    <Navbar/>
    <div className="flex h-screen bg-gray-200">
      {/* User List */}
      <div className="w-1/4 bg-white border-r border-gray-300 p-4">
        <h2 className="text-lg font-semibold mb-4">Direct Message</h2>
        <ul>
          {users.map((user) => (
            <li
              key={user.login.uuid}
              className={`flex items-center p-2 cursor-pointer ${
                selectedUser === user ? "bg-gray-200" : ""
              }`}
            >
              <img
                src={user.picture.thumbnail}
                alt={user.name.first}
                className="w-8 h-8 rounded-full mr-2"
              />
              <span onClick={() => handleSelectUser(user)}>{`${user.name.first} ${user.name.last}`}</span>
              <button
                className="ml-2 text-gray-500 hover:text-gray-800"
                onClick={() => handleViewProfile(user)}
              >
                View Profile
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Chat Window */}
      <div className="w-3/4 p-4">
        {renderChatMessages()}
        <div className="mt-2 flex">
          <input
            type="text"
            className="flex-grow border rounded-l-md p-2 focus:outline-none"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button
            className="bg-green-500 text-white rounded-r-md p-2 hover:bg-green-600"
            onClick={handleSendMessage}
          >
            <FaRegPaperPlane />
          </button>
        </div>
      </div>

      {/* Show user profile */}
      {showUserProfile && selectedUser && (
        <UserProfile user={selectedUser} onClose={handleCloseProfile} />
      )}
    </div>
    </div>
  );
};

export default PrivateMessaging;
