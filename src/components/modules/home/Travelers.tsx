/* eslint-disable @next/next/no-img-element */

import React from "react";

const Travelers = () => {
  return (
    <div className="flex items-center justify-between p-8 text-black bg-purple-50  font-serif">
      {/* Left section with text */}
      <div className="flex flex-col gap-4 max-w-md p-6">
        <img
          src="https://i.ibb.co.com/syYCkbq/image.png"
          alt="Travelers' Choice Logo"
          className="w-12 h-12"
        />
        <div className="font-serif space-y-4">
          <h2 className="text-4xl ">
            Travelers&lsquo; Choice <br /> Awards Best of <br /> the Best
          </h2>
          <p className="text-gray-700">
            Among our top 1% of places, stays, eats, and experiences—decided by
            you.
          </p>
          <button className="bg-black text-white rounded-full py-2 px-6 hover:bg-gray-800">
            See the winners
          </button>
        </div>
      </div>

      {/* Right section with image */}
      <div className="relative w-1/2">
        <div className="absolute top-0 left-0 w-20 h-20 bg-yellow-400 rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 bg-teal-400 rounded-full"></div>
        <img
          src="https://i.ibb.co.com/D15cRyV/image.png"
          alt="Travel Experience"
          className="w-full lg:h-[350px] object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Travelers;
