/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";

const Expolar = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-purple-50 p-6 md:p-8 lg:p-12 gap-8">
      {/* Left Section: Image */}
      <div className="md:w-1/2 w-full mb-6 md:mb-0">
        <img
          src="https://i.ibb.co.com/bQmHJx3/image.png"
          alt="Travel with your dog"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>

      {/* Right Section: Text and CTA */}
      <div className="md:w-1/2 w-full text-center md:text-left font-serif">
        <div className="text-center">
          <p className="text-green-600 text-sm mb-2">
            🥸 Sponsored by
          </p>
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-800 mb-4 leading-snug text-center">
          It’s easier than ever to go <br /> together
        </h2>
        <p className="text-sm md:text-base text-gray-600 mb-6 text-center">
          Travel is better when you can share it with your <br /> best friend.
          Find all the tips, guides, and tools you <br /> need to take a dream
          trip with your dog.
        </p>
        <div className="text-center">
          <a
            href="https://example.com/explore-more"
            className="bg-black text-white px-4 py-2 md:px-6 md:py-3 rounded-full hover:bg-gray-800 transition-colors"
          >
            Explore more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Expolar;
