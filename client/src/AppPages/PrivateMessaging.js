import React from "react";
import { Link } from "react-router-dom";

const PrivateMessaging = () => {
  const navigation = ["Chats", "Groups"];
  const chatList = [
    {
      icon: "https://plus.unsplash.com/premium_photo-1667667720425-6972aff75f6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      name: "Anna",
      message: "See you soon",
      time: "7:00PM",
    },
    {
      icon: "https://plus.unsplash.com/premium_photo-1667667720425-6972aff75f6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      name: "Anna",
      message: "See you soon",
      time: "7:00PM",
    },
    {
      icon: "https://plus.unsplash.com/premium_photo-1667667720425-6972aff75f6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      name: "Anna",
      message: "See you soon",
      time: "7:00PM",
    },
    {
      icon: "https://plus.unsplash.com/premium_photo-1667667720425-6972aff75f6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      name: "Anna",
      message: "See you soon",
      time: "7:00PM",
    },
    {
      icon: "https://plus.unsplash.com/premium_photo-1667667720425-6972aff75f6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      name: "Anna",
      message: "See you soon",
      time: "7:00PM",
    },
    {
      icon: "https://plus.unsplash.com/premium_photo-1667667720425-6972aff75f6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      name: "Anna",
      message: "See you soon",
      time: "7:00PM",
    },
    {
      icon: "https://plus.unsplash.com/premium_photo-1667667720425-6972aff75f6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      name: "Anna",
      message: "See you soon",
      time: "7:00PM",
    },
    {
      icon: "https://plus.unsplash.com/premium_photo-1667667720425-6972aff75f6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      name: "Anna",
      message: "See you soon",
      time: "7:00PM",
    },
    {
      icon: "https://plus.unsplash.com/premium_photo-1667667720425-6972aff75f6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      name: "Anna",
      message: "See you soon",
      time: "7:00PM",
    },
  ];
  return (
    <div className="grid grid-cols-12 justify-center items-center px-4 py-4 ">
      {/* HEADER */}
      <div className="grid grid-cols-12 col-span-12 justify-center items-center px-4 py-4 border-b-[1px] border-gray-200">
        <div className="flex">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
            className="w-[50px] h-[50px] object-cover rounded-[25px]"
          />
        </div>
        <div className="grid grid-cols-12 col-span-10 col-start-2">
          {navigation.map((key, index) => (
            <Link to="/" className="text-black font-thin">
              {navigation[index]}
            </Link>
          ))}
        </div>
      </div>
      {/* CHAT LIST */}
      <div className="grid grid-rows-1 col-span-4 border-r-[1px] border-gray-100 rounded-sm mt-8">
        {chatList.map((element) => (
          <div className="grid grid-cols-6 col-span-6 px-2 py-2 justify-between items-center border-b-[1px] border-gray-300">
            <div className="grid grid-cols-6 col-span-4">
              <img
                src={element.icon}
                className="w-[50px] h-[50px] object-cover rounded-[25px] col-span-2"
              />
              <div className="grid grid-rows-1 col-span-3">
                <span className="text-base text-extralight">
                  {element.name}
                </span>
                <span className="text-sm text-extralight">
                  {element.message}
                </span>
              </div>
            </div>
            <span className="text-xs">{element.time}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-8 col-span-8">{/* CHAT BODY */}</div>
    </div>
  );
};

export default PrivateMessaging;
