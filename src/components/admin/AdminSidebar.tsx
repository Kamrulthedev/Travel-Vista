"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  FaBars,
  FaTimes,
  FaChartLine,
  FaUser,
  FaCalendarAlt,
  FaComments,
  FaHome,
  FaMoneyCheckAlt,
  FaCog,
} from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { TfiHelpAlt } from "react-icons/tfi";
import { CiLogout } from "react-icons/ci";

import "./AdminSidebar.css";
import { logout } from "@/services/AuthService";

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle sidebar on mobile
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    logout();
    window.location.href = "/login";
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
          <li className="flex items-center text-gray-600 hover:text-black transition hover:bg-green-600 rounded-lg p-2">
            <FaHome className="mr-3" />
            <Link href="/">Home</Link>
          </li>
          <li className="flex items-center text-gray-600 hover:text-black transition hover:bg-green-600 rounded-lg p-2">
            <FaChartLine className="mr-3" />
            <Link href="/admin/adminDeshborad">Dashboard</Link>
          </li>
          <li className="flex items-center text-gray-600 hover:text-black transition hover:bg-green-600 rounded-lg p-2">
            <FaUser className="mr-3" />
            <Link href="/admin/users">Manage Users</Link>
          </li>
          <li className="flex items-center text-gray-600 hover:text-black transition hover:bg-green-600 rounded-lg p-2">
            <FaCalendarAlt className="mr-3" />
            <Link href="/admin/posts">Manage Posts</Link>
          </li>
          <li className="flex items-center text-gray-600 hover:text-black transition hover:bg-green-600 rounded-lg p-2">
            <FaComments className="mr-3" />
            <Link href="/admin/comments">Manage Comments</Link>
          </li>
          <li className="flex items-center text-gray-600 hover:text-black transition hover:bg-green-600 rounded-lg p-2">
            <FaMoneyCheckAlt className="mr-3" />
            <Link href="/admin/payments">Payments</Link>
          </li>
          <li className="flex items-center text-gray-600 hover:text-black transition hover:bg-green-600 rounded-lg p-2">
            <MdVerified className="mr-3" />
            <Link href="/admin/moderation">Verified users </Link>
          </li>
         
          <li className="flex items-center text-gray-600 hover:text-black transition hover:bg-green-600 rounded-lg p-2">
            <FaCog className="mr-3" />
            <Link href="/admin/settings">Settings</Link>
          </li>
          <li className="flex items-center text-gray-600 hover:text-black transition hover:bg-green-600 rounded-lg p-2">
              <TfiHelpAlt className="mr-3" />
              <Link href="/admin/adminHelps">Admin Help</Link>
            </li>
            <li className="flex items-center text-gray-600 hover:text-black transition hover:bg-green-600 rounded-lg p-2">
            <CiLogout  className="mr-3" />
            <button onClick={ handleLogout}>Log Out</button>
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

export default AdminSidebar;
