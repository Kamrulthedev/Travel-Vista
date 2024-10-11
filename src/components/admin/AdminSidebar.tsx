"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaChartLine, FaUser, FaCalendarAlt, FaDribbble, FaBehance, FaYoutube, FaInstagram, FaComments, FaTags, FaMoneyCheckAlt, FaChartPie, FaShieldAlt, FaCog } from 'react-icons/fa';


const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle sidebar on mobile
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex text-black font-serif">
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
          <li className="flex items-center text-gray-600 hover:text-black transition hover:bg-green-600 rounded-lg p-2">
            <FaChartLine className="mr-3" />
            <Link href="/admin/dashboard">Dashboard</Link>
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
            <FaTags className="mr-3" />
            <Link href="/admin/categories">Manage Categories</Link>
          </li>
          <li className="flex items-center text-gray-600 hover:text-black transition hover:bg-green-600 rounded-lg p-2">
            <FaMoneyCheckAlt className="mr-3" />
            <Link href="/admin/payments">Payments</Link>
          </li>
          <li className="flex items-center text-gray-600 hover:text-black transition hover:bg-green-600 rounded-lg p-2">
            <FaChartPie className="mr-3" />
            <Link href="/admin/analytics">Analytics</Link>
          </li>
          <li className="flex items-center text-gray-600 hover:text-black transition hover:bg-green-600 rounded-lg p-2">
            <FaShieldAlt className="mr-3" />
            <Link href="/admin/moderation">Moderation</Link>
          </li>
          <li className="flex items-center text-gray-600 hover:text-black transition hover:bg-green-600 rounded-lg p-2">
            <FaUser className="mr-3" />
            <Link href="/admin/profile">Profile</Link>
          </li>
          <li className="flex items-center text-gray-600 hover:text-black transition hover:bg-green-600 rounded-lg p-2">
            <FaCog className="mr-3" />
            <Link href="/admin/settings">Settings</Link>
          </li>
        </ul>

        {/* Accounts Section */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">Accounts</h2>
          <ul className="space-y-4">
            <li className="flex items-center text-gray-600 hover:bg-green-600 hover:text-black rounded-lg p-2">
              <FaDribbble className="mr-3" />
              <Link href="/accounts/dribbble">Dribbble</Link>
            </li>
            <li className="flex items-center text-gray-600 hover:text-black transition hover:bg-green-600 rounded-lg p-2">
              <FaBehance className="mr-3" />
              <Link href="/accounts/behance">Behance</Link>
            </li>
            <li className="flex items-center text-gray-600 hover:text-black transition hover:bg-green-600 rounded-lg p-2">
              <FaYoutube className="mr-3" />
              <Link href="/accounts/youtube">YouTube</Link>
            </li>
            <li className="flex items-center text-gray-600 hover:text-black transition hover:bg-green-600 rounded-lg p-2">
              <FaInstagram className="mr-3" />
              <Link href="/accounts/instagram">Instagram</Link>
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
