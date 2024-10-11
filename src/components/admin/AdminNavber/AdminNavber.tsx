/* eslint-disable @next/next/no-img-element */
"use client";

import { getCurrentUser } from "@/services/AuthService";
import { IUser } from "@/types";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const AdminNavber = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleUser = async () => {
    const user = await getCurrentUser();
    setUser(user);
  };

  useEffect(() => {
    handleUser();
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <nav className="bg-purple-50 text-black font-serif shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-10">
        {/* Logo */}
        <Link href={"/"}>
          <div className="flex items-center gap-3">
            <img
              src="https://i.ibb.co.com/Jymd0MB/around-9041439.png"
              alt="Logo"
              className="h-8 w-8"
            />
            <h1 className="text-3xl font-bold">TRAVEL VISTA</h1>
          </div>
        </Link>

        {/* Search Bar - hidden on small screens */}
        <div className="hidden md:flex flex-grow justify-center">
          <input
            type="text"
            placeholder="Search..."
            className="w-full md:w-96 lg:w-[500px] bg-white px-4 py-2 border-2 border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Profile Image */}
        <div className="flex items-center space-x-4">
          <div className="relative" ref={dropdownRef}>
            {/* Profile Image */}
            <img
              src={user?.profileImg || "https://i.ibb.co.com/44vhj8G/image.png"}
              alt="Profile"
              className="h-12 w-12 rounded-full cursor-pointer border-1 border-black object-cover"
              onClick={toggleDropdown}
            />

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-purple-300 shadow-lg rounded-md z-10 p-4">
                <ul>
                  <li>
                    <button
                      className="w-full text-left px-4 py-2 text-black hover:bg-purple-400 hover:rounded-lg"
                      onClick={() =>
                        (window.location.href = "/myProfile/myPosts")
                      }
                    >
                      My Profile
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white text-black px-4 py-2 space-y-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      )}
    </nav>
  );
};

export default AdminNavber;
