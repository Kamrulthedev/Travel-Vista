"use client"

import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const Evolution = () => {
  const scrollLeft = () => {
    const scrollContainer = document.getElementById("scroll-container");
    if (scrollContainer) {
      scrollContainer.scrollLeft -= 300;
    }
  };

  const scrollRight = () => {
    const scrollContainer = document.getElementById("scroll-container");
    if (scrollContainer) {
      scrollContainer.scrollLeft += 300;
    }
  };

  return (
    <div className="py-16 px-6 bg-white font-serif">
      <h2 className="text-3xl lg:text-5xl font-bold mb-8 text-black p-8">
        At Lonely Planet, <br /> our core values <br /> guide our evolution:
      </h2>
      <div className="relative flex items-center">
        {/* Left Scroll Icon */}
        <BiChevronLeft
          onClick={scrollLeft}
          className="text-4xl cursor-pointer text-gray-500 hover:text-gray-700 transition"
        />

        {/* Scrollable content */}
        <div
          id="scroll-container"
          className="flex space-x-4 overflow-x-auto scrollbar-hide"
        >
          <div className="flex-none w-80 p-6 bg-blue-50 rounded-lg">
            <p className="text-gray-700">
              We know travel has social, economic, and environmental
              consequences. We must equip travelers with the knowledge to make
              informed choices about their impact, and inspire them to travel
              with generosity.
            </p>
          </div>
          <div className="flex-none w-80 p-6 bg-blue-50 rounded-lg">
            <p className="text-gray-700">
              We believe travel is ultimately about joy and delight. The
              planning process should also be enjoyable, filled with serendipity
              and connection wherever the path leads us.
            </p>
          </div>
          <div className="flex-none w-80 p-6 bg-blue-50 rounded-lg">
            <p className="text-gray-700">
              Travel should be about immersing yourself in the experience, not
              just reaching the destination. It’s about discovery and
              adventure.
            </p>
          </div>
          <div className="flex-none w-80 p-6 bg-blue-50 rounded-lg">
            <p className="text-gray-700">
              We must continue to innovate, finding new ways to inspire
              travelers while staying committed to sustainability and
              responsible tourism.
            </p>
          </div>
          <div className="flex-none w-80 p-6 bg-blue-50 rounded-lg">
            <p className="text-gray-700">
              We must continue to innovate, finding new ways to inspire
              travelers while staying committed to sustainability and
              responsible tourism.
            </p>
          </div>
        </div>

        {/* Right Scroll Icon */}
        <BiChevronRight
          onClick={scrollRight}
          className="text-4xl cursor-pointer text-gray-500 hover:text-gray-700 transition"
        />
      </div>
    </div>
  );
};

export default Evolution;

