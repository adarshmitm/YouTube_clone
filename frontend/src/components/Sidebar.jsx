import React, { useState } from "react";
import { FaHome, FaHistory, FaClock, FaThumbsUp, FaDownload, FaBars } from "react-icons/fa";
import { MdSubscriptions, MdOutlineOndemandVideo, MdLibraryMusic } from "react-icons/md";
import { AiOutlinePlaySquare } from "react-icons/ai";

const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <div
            className={`fixed left-0 h-full w-64 bg-white shadow-lg m-y-5 transform${
                isOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out z-50`}
        >
            {/* Close Sidebar when clicking outside */}
            {/* <div className="absolute top-4 right-4 text-2xl cursor-pointer" onClick={toggleSidebar}>
                ✖
            </div> */}

            <ul className="p-4 space-y-4 text-gray-800">
                {/* Home Section */}
                <li className="flex items-center gap-4 p-3 hover:bg-gray-100 rounded-lg cursor-pointer">
                    <FaHome size={20} />
                    <span>Home</span>
                </li>
                <li className="flex items-center gap-4 p-3 hover:bg-gray-100 rounded-lg cursor-pointer">
                    <MdOutlineOndemandVideo size={20} />
                    <span>Shorts</span>
                </li>
                <li className="flex items-center gap-4 p-3 hover:bg-gray-100 rounded-lg cursor-pointer">
                    <MdSubscriptions size={20} />
                    <span>Subscriptions</span>
                </li>
                <li className="flex items-center gap-4 p-3 hover:bg-gray-100 rounded-lg cursor-pointer">
                    <MdLibraryMusic size={20} />
                    <span>YouTube Music</span>
                </li>

                {/* User Section */}
                <p className="mt-4 text-gray-500 text-sm font-semibold">You</p>
                <li className="flex items-center gap-4 p-3 hover:bg-gray-100 rounded-lg cursor-pointer">
                    <FaHistory size={20} />
                    <span>History</span>
                </li>
                <li className="flex items-center gap-4 p-3 hover:bg-gray-100 rounded-lg cursor-pointer">
                    <AiOutlinePlaySquare size={20} />
                    <span>Playlists</span>
                </li>
                <li className="flex items-center gap-4 p-3 hover:bg-gray-100 rounded-lg cursor-pointer">
                    <MdOutlineOndemandVideo size={20} />
                    <span>Your videos</span>
                </li>
                <li className="flex items-center gap-4 p-3 hover:bg-gray-100 rounded-lg cursor-pointer">
                    <FaClock size={20} />
                    <span>Watch later</span>
                </li>
                <li className="flex items-center gap-4 p-3 hover:bg-gray-100 rounded-lg cursor-pointer">
                    <FaThumbsUp size={20} />
                    <span>Liked videos</span>
                </li>
                <li className="flex items-center gap-4 p-3 hover:bg-gray-100 rounded-lg cursor-pointer">
                    <FaDownload size={20} />
                    <span>Downloads</span>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;



