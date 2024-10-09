import React from "react";

const AboutBannar = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://i.ibb.co.com/Tbh7sxs/image-1.png')",
          filter: "brightness(0.8)",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center font-serif">
        <h1 className="text-5xl md:text-7xl mb-6">ABOUT US</h1>
        <button className="px-8 py-3 bg-white text-gray-900 rounded-full font-medium hover:bg-sky-500 transition duration-300">
        For explorers everywhere
        </button>
      </div>
    </div>
  );
};

export default AboutBannar;
