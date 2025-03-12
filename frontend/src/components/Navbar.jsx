import React, { useState } from "react";
import { FaBars, FaSearch, FaMicrophone, FaBell, FaPlus } from "react-icons/fa";

const Navbar = ({ toggleSidebar, isSidebarOpen  }) => {
  const [searchTerm, setSearchTerm] = useState("");
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

  return (
    <nav className="flex justify-between items-center px-6 py-3 bg-white shadow-md fixed w-full top-0 z-50">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        {!isSidebarOpen && <FaBars className="text-xl cursor-pointer" onClick={toggleSidebar} />}
        <img src="/youtubeLog0.png" alt="YouTube Premium" className="h-6" />
        {/* <span className="text-sm text-gray-600">IN</span> */}
      </div>

      {/* Center Section - Search Bar */}
      <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full w-[40%]">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-transparent outline-none w-full text-gray-700"
        />
        <FaSearch className="text-gray-600 cursor-pointer" />
      </div>

      {/* Mic Button */}
      <button className="bg-gray-200 p-2 rounded-full ml-2">
        <FaMicrophone className="text-gray-700" />
      </button>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <button className="bg-gray-200 px-4 py-2 rounded-full flex items-center gap-2">
          <FaPlus />
          <span>Create</span>
        </button>
        <div className="relative">
          <FaBell className="text-xl cursor-pointer" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
            9+
          </span>
        </div>
        <img
          src="/avater.svg"
          alt="User Profile"
          className="h-10 w-10 rounded-full object-cover"
        />
      </div>
    </nav>
  );
};

export default Navbar;
