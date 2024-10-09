"use client"

import Link from "next/link";
import { useState } from "react";
import { FaFacebookF, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaArrowsUpDown } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";


const Footer = () => {
    const [currentDateTime] = useState(new Date());
    const year = currentDateTime.getFullYear();
    return (
      <div className="bg-purple-50  text-black px-3 lg:px-5 py-16 lg:py-28 ">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Links */}
            <div>
              <h6 className="text-black font-serif mb-4 text-xl">COMPANY LINKS</h6>
              <div className="text-lg space-y-1 font-serif">
                <a href="">Privacy Policy</a> <br />
                <a href="">Terms of Service</a> <br />
                <a href="">Accessibility</a> <br />
                <a href="">CA Transparency Act</a> <br />
                <a href="">CA Proposition 65 WARNING</a> <br />
                <a href="">ISO Certificate</a> <br />
                <a href="">Terms & Conditions of Sale</a> <br />
                <a href="">Affiliate Program</a> <br />
                <a href="">Financing - Life Fitness</a> <br />
              </div>
            </div>
  
            {/* Customer Service */}
            <div>
              <h6 className="text-black font-serif mb-4 text-xl">CUSTOMER SERVICE</h6>
              <div className="text-lg space-y-1 font-serif">
                <a>FAQ</a> <br />
                <a>Contact Us</a> <br />
                <a>Returns & Cancellations</a> <br />
                <a>Request Service</a> <br />
                <a>Custom Home Gym</a> <br />
                <a>Product Registration</a> <br />
                <a>Referrals</a> <br />
              </div>
            </div>
  
            {/* Site Links */}
            <div>
              <h6 className="text-black font-serif mb-4 text-xl">SITE LINKS</h6>
              <div className="text-lg font-serif space-y-1">
                <a href="#">Search</a>
                <br />
                <a href="#">Commercial Site</a> <br />
                <a href="#">Military & First Responder Discount</a> <br />
                <a href="#">Dealer Application</a> <br />
                <a href="#">Find a Store</a> <br />
                <a href="#">Cardio</a> <br />
                <a href="#">Strength</a> <br />
                <a href="#">Accessories</a> <br />
                <a href="#">Outlet</a> <br />
              </div>
            </div>
  
            {/* Connect */}
            <div>
              <h6 className="text-black font-serif mb-4 text-xl">CONNECT</h6>
              <div className="text-lg space-y-1 font-serif">
                <p>800-527-6063 (Sales)</p>
                <p>800-527-6065 x2 (Support)</p>
                <Link className="hover:underline" href="">
                  More Contact Options
                </Link>
              </div>
              <div className="mt-6 grid grid-cols-4 gap-3 text-2xl">
                <a
                  href="#"
                  className="text-sky-500 border p-2 lg:p-4 text-2xl hover:bg-slate-300 hover:text-black flex justify-center items-center transition-transform hover:scale-x-110"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="text-orange-400 border p-2 lg:p-4 hover:bg-slate-300 hover:text-black flex justify-center items-center transition-transform hover:scale-x-110"
                >
                  <LuInstagram />
                </a>
                <a
                  href="#"
                  className="text-sky-500 border p-2 lg:p-4 hover:bg-slate-300 hover:text-sky-600 flex justify-center items-center transition-transform hover:scale-x-110"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="text-red-500 border p-2 lg:p-4 hover:bg-slate-300 hover:text-red-600 flex justify-center items-center transition-transform hover:scale-x-110"
                >
                  <FaYoutube />
                </a>
                <a
                  href="#"
                  className="text-sky-600 border p-2 lg:p-4 hover:bg-slate-300 hover:text-blue-600 flex justify-center items-center transition-transform hover:scale-x-110"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
  
            {/* Bloom Shop */}
            <div>
              <Link href='/' className="flex items-center gap-3 text-base font-serif text-black">
                <h1 className="text-2xl">Travel Vista</h1>
                <FaArrowsUpDown />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-xl font-serif">
          <p>© {year} - Travel Vista // All Rights Reserved</p>
        </div>
      </div>
    );
  };
  
  export default Footer;