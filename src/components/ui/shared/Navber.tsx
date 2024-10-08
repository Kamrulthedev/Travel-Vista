"use client";

import { useState } from "react";
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

const Navber = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("EN");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Unified function to handle language change (both event and direct value)
  const handleLanguageChange = (
    eventOrValue: React.ChangeEvent<HTMLSelectElement> | string
  ) => {
    if (typeof eventOrValue === "string") {
      // If it's a string, we directly set the language
      setLanguage(eventOrValue);
    } else {
      // If it's an event, we extract the value from the event
      setLanguage(eventOrValue.target.value);
    }
  };
  

  return (
    <Navbar shouldHideOnScroll className="bg-white text-black font-serif">
      <NavbarBrand>
        {/* Tripadvisor Logo Placeholder */}
        <div className="flex items-center space-x-2">
          <div className="rounded-full bg-green-400 h-8 w-8 flex items-center justify-center">
            {/* Insert logo SVG here */}
            <span className="text-black text-xl">🦉</span>
          </div>
          <h1 className="font-bold text-xl text-black">TRAVEL VISTA</h1>
        </div>
      </NavbarBrand>

      {/* Desktop Menu */}
      <NavbarContent className="hidden md:flex" justify="center">
        <NavbarItem>
          <Link href="#">Discover</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#">Trips</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#">Review</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#">More</Link>
        </NavbarItem>
      </NavbarContent>

      {/* Currency and Language Selectors */}
      <NavbarContent justify="end" className="space-x-4 bg-white ">
        <NavbarItem className="hidden md:flex">
          {/* Language Selector */}
          <Select
            value={language}
            onChange={handleLanguageChange}
            aria-label="Language Selector"
            placeholder="English"
            style={{ backgroundColor: "white", border: "1px solid #ccc" }} // Example style
            startContent={<RiGlobalFill className="text-2xl" />}
          >
            <SelectItem key={"English"} value="EN">
              English
            </SelectItem>
            <SelectItem key={"Français"} value="FR">
              Français
            </SelectItem>
            <SelectItem key={"Español"} value="ES">
              Español
            </SelectItem>
          </Select>
        </NavbarItem>

        <NavbarItem>
          <Button
            as={Link}
            href="#"
            color="primary"
            className="bg-white text-black shadow-xl"
          >
            Sign in
          </Button>
        </NavbarItem>

        {/* Mobile Menu Toggle */}
        <NavbarMenuToggle
          onClick={toggleMenu}
          className="md:hidden"
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </NavbarMenuToggle>
      </NavbarContent>

      {/* Mobile Menu */}
      {isMenuOpen && (
  <NavbarMenu>
    <NavbarMenuItem>
      <Link href="#">Discover</Link>
    </NavbarMenuItem>
    <NavbarMenuItem>
      <Link href="#">Trips</Link>
    </NavbarMenuItem>
    <NavbarMenuItem>
      <Link href="#">Review</Link>
    </NavbarMenuItem>
    <NavbarMenuItem>
      <Link href="#">More</Link>
    </NavbarMenuItem>

    {/* Language Selector (Mobile) */}
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
          English
        </SelectItem>
        <SelectItem key={"Français"} value="FR">
          Français
        </SelectItem>
        <SelectItem key={"Español"} value="ES">
          Español
        </SelectItem>
      </Select>
    </NavbarMenuItem>
  </NavbarMenu>
)}

    </Navbar>
  );
};

export default Navber;