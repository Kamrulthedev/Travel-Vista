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
        <div className="flex items-center space-x-2 lg:-ml-32 ">
          <Link className="flex gap-3" href={"/"}>
            {" "}
            <div className="rounded-full bg-green-400 h-8 w-8 flex items-center justify-center text-2xl">
              {/* Insert logo SVG here */}
              <span className="text-black text-2xl">🦉</span>
            </div>
            <h1 className="font-bold text-2xl text-black">TRAVEL VISTA</h1>
          </Link>
        </div>
      </NavbarBrand>

      {/* Desktop Menu */}
      <NavbarContent className="hidden md:flex lg:gap-8" justify="center">
        <NavbarItem>
          <Link href="#" className="lg:text-lg">
            Discover
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="lg:text-lg">
            Trips
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="lg:text-lg">
            Review
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="lg:text-lg">
            More
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Currency and Language Selectors */}
      <NavbarContent justify="end" className="gap-4 bg-white lg:-mr-32 ">
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
            <SelectItem className="text-xl" key={"English"} value="EN">
            <p className="text-black font-serif text-lg"> English</p>
            </SelectItem>
            <SelectItem className="text-xl" key={"Français"} value="FR">
            <p className="text-black font-serif text-lg"> Français</p>
            </SelectItem>
            <SelectItem className="text-xl" key={"Español"} value="ES">
            <p className="text-black font-serif text-lg"> Español</p>
            </SelectItem>
          </Select>
        </NavbarItem>

        <NavbarItem>
          <Button
            as={Link}
            href="/login"
            color="primary"
            className="bg-white text-black shadow-sm text-[16px] border"
          >
            Sign in
          </Button>
        </NavbarItem>

        {/* Mobile Menu Toggle */}
        <NavbarMenuToggle onClick={toggleMenu} className="md:hidden">
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </NavbarMenuToggle>
      </NavbarContent>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <NavbarMenu>
          <NavbarMenuItem>
            <Link className="text-black font-serif text-xl" href="#">
              Discover
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link className="text-black font-serif text-xl" href="#">
              Trips
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link className="text-black font-serif text-xl" href="#">
              Review
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link className="text-black font-serif text-xl" href="#">
              More
            </Link>
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
