/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-async-client-component */
"use client";

import { useEffect, useState } from "react";
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
import { getCurrentUser } from "@/services/AuthService";
import { IUser } from "@/types";

const Navber = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("EN");
  const [user, setUser] = useState<IUser | null>(null); // User state
  const [isLoading, setIsLoading] = useState(true);

  const handleUser = async () => {
    const user = await getCurrentUser();
    setUser(user);
    setIsLoading(false);
  };

  useEffect(() => {
    handleUser(); // Fetch user data on component mount
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Unified function to handle language change
  const handleLanguageChange = (
    eventOrValue: React.ChangeEvent<HTMLSelectElement> | string
  ) => {
    if (typeof eventOrValue === "string") {
      setLanguage(eventOrValue);
    } else {
      setLanguage(eventOrValue.target.value);
    }
  };

  return (
    <Navbar shouldHideOnScroll className="bg-white text-black font-serif">
      <NavbarBrand>
        {/* Tripadvisor Logo Placeholder */}
        <div className="flex items-center space-x-2 lg:-ml-32">
          <Link className="flex gap-3" href={"/"}>
            <div className="rounded-full bg-green-400 h-8 w-8 flex items-center justify-center text-2xl">
              <span className="text-black text-2xl">🦉</span>
            </div>
            <h1 className="font-bold text-2xl text-black">TRAVEL VISTA</h1>
          </Link>
        </div>
      </NavbarBrand>

      <NavbarContent className="hidden md:flex lg:gap-5" justify="center">
        {/* Links */}
        <NavbarItem>
          <Link href="/discover" className="lg:text-lg hover:bg-slate-100 p-2 hover:rounded-lg">
            Discover
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/about" className="lg:text-lg hover:bg-slate-100 p-2 hover:rounded-lg">
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/contact" className="lg:text-lg hover:bg-slate-100 p-2 hover:rounded-lg">
            Contact Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="lg:text-lg hover:bg-slate-100 p-2 hover:rounded-lg">
            More
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end" className="gap-4 bg-white lg:-mr-32">
        <NavbarItem className="hidden md:flex">
          {/* Language Selector */}
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
            <div className="flex items-center gap-2">
              <img
                src={user?.profileImg || "https://i.ibb.co.com/44vhj8G/image.png"} 
                alt="Profile"
                className="h-12 w-12 border-2 border-black rounded-full cursor-pointer object-cover"
                onClick={() => window.location.href = "/dashboard"}
              />
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
          {/* Mobile Menu Items */}
          <NavbarMenuItem>
            <Link href="/discover" className="text-black font-serif text-xl hover:bg-slate-100 p-2 hover:rounded-lg">
              Discover
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href="/about" className="text-black font-serif text-xl hover:bg-slate-100 p-2 hover:rounded-lg">
              About Us
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href="/contact" className="text-black font-serif text-xl hover:bg-slate-100 p-2 hover:rounded-lg">
              Contact Us
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href="#" className="text-black font-serif text-xl hover:bg-slate-100 p-2 hover:rounded-lg">
              More
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
