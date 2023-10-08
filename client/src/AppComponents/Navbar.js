import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navigation = [
    { name: "Dashboard", to: "/learner-dashboard" },
    { name: "View Courses", to: "/categories" },
    {name: "Discussion", to:"/discussion-forum"},
    {name: "Messages", to:"/message"},
    { name: "Community Chat", to: "/community-chat" },
    { name: "Blogs", to: "/blog" },
    // "Logout",
  ];
  return (
    <div className="grid grid-cols-12 px-4 justify-between items-center">
      <div className="grid grid-cols-12 col-span-12 col-start-1 px-4 py-4 justify-between items-center">
        <div className="flex flex-col mr-4">
          <img
            src="https://i.ibb.co/5MXSrg8/cropped-logo.png"
            className="w-16"
          />
        </div>
        <div className="col-span-9 ml-[90px]">
          {navigation.map((element) => (
            <Link
              to={element.to}
              className="mx-4 py-4 text-sm text-gray-600 hover:text-gray-500 hover:underline"
            >
              {element.name}
            </Link>
          ))}
        </div>
        <div className="bg-transparent border-gray-700 border-2 border-solid rounded-sm px-2 py-2 text-center text-black hover:text-white hover:bg-gray-700  hover:border-gray-700 hover:border-2 hover:border-solid w-[90px] col-span-1">
          <Link
            to="/update-profile"
            className="flex flex-row justify-center items-center text-xs "
          >
            <i class="ri-user-line text-black text-xs mr-4"></i>
            Profile
          </Link>
        </div>
        <div className="bg-gray-700 border-gray-700 border-2 border-solid rounded-sm px-2 py-2 text-center text-white hover:bg-gray-800  hover:border-gray-700 hover:border-2 hover:border-solid w-16 col-span-1">
          <Link
            to="/logout"
            className="flex flex-row justify-center items-center text-xs"
          >
            Log out
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
