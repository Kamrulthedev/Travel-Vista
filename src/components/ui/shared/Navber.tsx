/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-async-client-component */
"use client";

import { useEffect, useState, useRef } from "react";
import { Button } from "@nextui-org/button";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import Link from "next/link";
import { RiGlobalFill } from "react-icons/ri";
import { FiMenu, FiX } from "react-icons/fi";
import { Select, SelectItem } from "@nextui-org/select";
import { getCurrentUser, logout } from "@/services/AuthService";
import { IUser } from "@/types";

const Navber = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [language, setLanguage] = useState("EN");
  const [user, setUser] = useState<IUser | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleUser = async () => {
    const user = await getCurrentUser();
    setUser(user);
  };

  useEffect(() => {
    handleUser();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    logout();
    window.location.href = "/login";
  };

  const handleLanguageChange = (
    eventOrValue: React.ChangeEvent<HTMLSelectElement> | string
  ) => {
    setLanguage(
      typeof eventOrValue === "string"
        ? eventOrValue
        : eventOrValue.target.value
    );
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Navbar shouldHideOnScroll className="bg-white text-black font-serif">
      <NavbarBrand>
        <div className="flex items-center space-x-2 lg:-ml-32">
          <Link className="flex gap-3" href="/">
            <div className="rounded-full bg-green-400 h-8 w-8 flex items-center justify-center text-2xl">
              <span className="text-black text-2xl">🦉</span>
            </div>
            <h1 className="font-bold text-2xl text-black">TRAVEL VISTA</h1>
          </Link>
        </div>
      </NavbarBrand>

      <NavbarContent className="hidden md:flex lg:gap-5" justify="center">
        <NavbarItem>
          <Link
            href="/discover"
            className="lg:text-lg hover:bg-slate-100 p-2 hover:rounded-lg"
          >
            Discover
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/news"
            className="lg:text-lg hover:bg-slate-100 p-2 hover:rounded-lg"
          >
            News Feed
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/about"
            className="lg:text-lg hover:bg-slate-100 p-2 hover:rounded-lg"
          >
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/contact"
            className="lg:text-lg hover:bg-slate-100 p-2 hover:rounded-lg"
          >
            Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end" className="gap-4 bg-white lg:-mr-32">
        <NavbarItem className="hidden md:flex">
          <Select
            value={language}
            onChange={handleLanguageChange}
            aria-label="Language Selector"
            placeholder="English"
            style={{ backgroundColor: "white", border: "1px solid #ccc" }}
            startContent={<RiGlobalFill className="text-3xl" />}
          >
            <SelectItem key={"English"} value="EN">
              <p className="text-black font-serif text-lg">English</p>
            </SelectItem>
            <SelectItem key={"Français"} value="FR">
              <p className="text-black font-serif text-lg">Français</p>
            </SelectItem>
            <SelectItem key={"Español"} value="ES">
              <p className="text-black font-serif text-lg">Español</p>
            </SelectItem>
          </Select>
        </NavbarItem>

        <NavbarItem>
          {user ? (
            <div className="relative" ref={dropdownRef}>
              <img
                src={user?.profileImg || "https://i.ibb.co/44vhj8G/image.png"}
                alt="Profile"
                className="h-12 w-12 rounded-full cursor-pointer border-1 border-black object-cover"
                onClick={toggleDropdown}
              />
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
                    {user.role === "ADMIN" ? (
                      <li>
                        <button
                          className="w-full text-left px-4 py-2 text-black hover:bg-purple-400 hover:rounded-lg"
                          onClick={() =>
                            (window.location.href = "/admin/adminDeshborad")
                          }
                        >
                          Admin Dashboard
                        </button>
                      </li>
                    ) : user.role === "USER" ? (
                      <li>
                        <button
                          className="w-full text-left px-4 py-2 text-black hover:bg-purple-400 hover:rounded-lg"
                          onClick={() =>
                            (window.location.href = "/user/dashborad")
                          }
                        >
                          Dashboard
                        </button>
                      </li>
                    ) : null}
                    <li>
                      <button
                        className="w-full text-left px-4 py-2 text-black hover:bg-purple-400 hover:rounded-lg"
                        onClick={handleLogout}
                      >
                        Log out
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <Button
              as={Link}
              href="/login"
              color="primary"
              className="bg-white text-black shadow-sm text-[16px] border"
            >
              Sign in
            </Button>
          )}
        </NavbarItem>

        <NavbarMenuToggle onClick={toggleMenu} className="md:hidden">
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </NavbarMenuToggle>
      </NavbarContent>

      {isMenuOpen && (
        <NavbarMenu>
          <NavbarMenuItem>
            <Link
              href="/discover"
              className="text-black font-serif text-xl hover:bg-slate-100 p-2 hover:rounded-lg"
            >
              Discover
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              href="#"
              className="text-black font-serif text-xl hover:bg-slate-100 p-2 hover:rounded-lg"
            >
              News Feed
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              href="/about"
              className="text-black font-serif text-xl hover:bg-slate-100 p-2 hover:rounded-lg"
            >
              About Us
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              href="/contact"
              className="text-black font-serif text-xl hover:bg-slate-100 p-2 hover:rounded-lg"
            >
              Contact Us
            </Link>
          </NavbarMenuItem>

          <NavbarMenuItem>
            <Select
              value={language}
              onChange={handleLanguageChange}
              placeholder="Language"
              aria-label="Language Selector"
              startContent={<RiGlobalFill />}
              className="w-full"
            >
              <SelectItem key={"English"} value="EN">
                <p className="text-black font-serif text-lg"> English</p>
              </SelectItem>
              <SelectItem key={"Français"} value="FR">
                <p className="text-black font-serif text-lg"> Français</p>
              </SelectItem>
              <SelectItem key={"Español"} value="ES">
                <p className="text-black font-serif text-lg"> Español</p>
              </SelectItem>
            </Select>
          </NavbarMenuItem>
        </NavbarMenu>
      )}
    </Navbar>
  );
};

export default Navber;
