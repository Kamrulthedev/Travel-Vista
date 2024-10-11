/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  FaBars,
  FaTimes,
  FaChartLine,
  FaCalendarAlt,
  FaHome,
} from "react-icons/fa";
import { TfiHelpAlt } from "react-icons/tfi";
import { CiLogout } from "react-icons/ci";
import "./UserSidebar.css";
import { logout } from "@/services/AuthService";
import { SlUserFollow, SlUserFollowing } from "react-icons/sl";
import { MdVerified } from "react-icons/md";

const UserSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Dashboard");

  // Toggle sidebar on mobile
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    logout();
    window.location.href = "/login";
  };

  const handleMenuItemClick = (item: any) => {
    setSelectedItem(item);
  };

  return (
    <div className="flex text-black font-serif ">
      {/* Hamburger Icon for Mobile/Tablet */}
      <button
        className="md:hidden p-4 focus:outline-none"
        onClick={toggleSidebar}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar for Large Screens and Mobile */}
      <div
        className={`bg-gray-100 w-64 h-screen p-6 font-serif fixed z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } 
          md:translate-x-0 transition-transform duration-300 ease-in-out overflow-y-auto no-scrollbar`}
      >
        {/* Menu Section */}
        <h2 className="text-lg font-semibold mb-4">Menu</h2>
        <ul className="space-y-2">
          <li
            className={`flex items-center text-gray-600 hover:text-black transition hover:bg-green-600 rounded-lg p-2 ${
              selectedItem === "Home" ? "bg-green-600 text-white" : ""
            }`}
            onClick={() => handleMenuItemClick("Home")}
          >
            <FaHome className="mr-3" />
            <Link href="/">Home</Link>
          </li>
          <li
            className={`flex items-center text-gray-600 hover:text-black transition hover:bg-green-600 rounded-lg p-2 ${
              selectedItem === "Dashboard" ? "bg-green-600 text-white" : ""
            }`}
            onClick={() => handleMenuItemClick("Dashboard")}
          >
            <FaChartLine className="mr-3" />
            <Link href="/user/dashborad">Dashboard</Link>
          </li>
          <li
            className={`flex items-center text-gray-600 hover:text-black transition hover:bg-green-600 rounded-lg p-2 ${
              selectedItem === "Posts" ? "bg-green-600 text-white" : ""
            }`}
            onClick={() => handleMenuItemClick("Posts")}
          >
            <FaCalendarAlt className="mr-3" />
            <Link href="/user/myPosts">Manage Posts</Link>
          </li>
          <li
            className={`flex items-center text-gray-600 hover:text-black transition hover:bg-green-600 rounded-lg p-2 ${
              selectedItem === "Followers" ? "bg-green-600 text-white" : ""
            }`}
            onClick={() => handleMenuItemClick("Followers")}
          >
            <SlUserFollow className="mr-3" />
            <Link href="/user/followers">Followers</Link>
          </li>
          <li
            className={`flex items-center text-gray-600 hover:text-black transition hover:bg-green-600 rounded-lg p-2 ${
              selectedItem === "Following" ? "bg-green-600 text-white" : ""
            }`}
            onClick={() => handleMenuItemClick("Following")}
          >
            <SlUserFollowing className="mr-3" />
            <Link href="/user/following">Following</Link>
          </li>
          <li
            className={`flex items-center text-gray-600 hover:text-black transition hover:bg-green-600 rounded-lg p-2 ${
              selectedItem === "Verify" ? "bg-green-600 text-white" : ""
            }`}
            onClick={() => handleMenuItemClick("Verify")}
          >
            <MdVerified className="mr-3" />
            <Link href="/user/verify">Verify Account</Link>
          </li>
          <li
            className={`flex items-center text-gray-600 hover:text-black transition hover:bg-green-600 rounded-lg p-2 ${
              selectedItem === "AdminHelp" ? "bg-green-600 text-white" : ""
            }`}
            onClick={() => handleMenuItemClick("AdminHelp")}
          >
            <TfiHelpAlt className="mr-3" />
            <Link href="/user/adminHelp">Admin Help</Link>
          </li>
          <li
            className={`flex items-center text-gray-600 hover:text-black transition hover:bg-green-600 rounded-lg p-2 ${
              selectedItem === "LogOut" ? "bg-green-600 text-white" : ""
            }`}
            onClick={() => handleMenuItemClick("LogOut")}
          >
            <CiLogout className="mr-3" />
            <button onClick={handleLogout}>Log Out</button>
          </li>
        </ul>
      </div>

      {/* Overlay when sidebar is open on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default UserSidebar;
