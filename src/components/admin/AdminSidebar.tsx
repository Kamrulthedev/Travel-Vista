"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import {
  FaBars, FaTimes, FaUser, FaChartLine, FaCalendarAlt, FaUsers,
  FaDribbble, FaBehance, FaYoutube, FaInstagram, FaCog, FaArchive, FaInfoCircle
} from 'react-icons/fa';

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle sidebar on mobile
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex ">
      {/* Hamburger Icon for Mobile/Tablet */}
      <button 
        className="md:hidden p-4 focus:outline-none"
        onClick={toggleSidebar}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar for Large Screens */}
      <div className={`bg-gray-50 w-64 h-screen p-6 font-serif fixed z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out`}>
        {/* Menu Section */}
        <h2 className="text-lg font-semibold mb-4">Menu</h2>
        <ul className="space-y-4">
          <li className="flex items-center text-gray-600 hover:text-black transition">
            <FaChartLine className="mr-3" />
            <Link href="/admin/adminDeshborad">Dashboard</Link>
          </li>
          <li className="flex items-center text-gray-600 hover:text-black transition">
            <FaUser className="mr-3" />
            <Link href="/admin/analytics">Analytics</Link>
          </li>
          <li className="flex items-center text-gray-600 hover:text-black transition">
            <FaCalendarAlt className="mr-3" />
            <Link href="/admin/schedules">Schedules</Link>
          </li>
          <li className="flex items-center text-gray-600 hover:text-black transition">
            <FaUsers className="mr-3" />
            <Link href="/admin/communities">Communities</Link>
          </li>
        </ul>

        {/* Accounts Section */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">Accounts</h2>
          <ul className="space-y-4">
            <li className="flex items-center text-white bg-green-500 hover:bg-green-600 rounded-lg p-2">
              <FaDribbble className="mr-3" />
              <Link href="/accounts/dribbble">Dribbble</Link>
            </li>
            <li className="flex items-center text-gray-600 hover:text-black transition">
              <FaBehance className="mr-3" />
              <Link href="/accounts/behance">Behance</Link>
            </li>
            <li className="flex items-center text-gray-600 hover:text-black transition">
              <FaYoutube className="mr-3" />
              <Link href="/accounts/youtube">YouTube</Link>
            </li>
            <li className="flex items-center text-gray-600 hover:text-black transition">
              <FaInstagram className="mr-3" />
              <Link href="/accounts/instagram">Instagram</Link>
            </li>
          </ul>
        </div>

        {/* Others Section */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">Others</h2>
          <ul className="space-y-4">
            <li className="flex items-center text-gray-600 hover:text-black transition">
              <FaCog className="mr-3" />
              <Link href="/settings">Settings</Link>
            </li>
            <li className="flex items-center text-gray-600 hover:text-black transition">
              <FaArchive className="mr-3" />
              <Link href="/archives">Archives</Link>
            </li>
            <li className="flex items-center text-gray-600 hover:text-black transition">
              <FaInfoCircle className="mr-3" />
              <Link href="/help">Help</Link>
            </li>
          </ul>
        </div>
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
