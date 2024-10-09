"use client";

import { Card, CardFooter, Image } from "@nextui-org/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Destination = () => {
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
    <div className="bg-white pb-10">
      <div className="pt-16 px-7 text-black space-y-4 pb-3">
        <h1 className="lg:text-4xl text-2xl font-serif">
          Top destinations for your next vacation
        </h1>
      </div>

      {/* Scroll Buttons */}
      <div className="relative flex items-center justify-center">
        {/* Left Scroll Button */}
        <button
          className="absolute left-0 bg-gray-200 hover:bg-gray-300 rounded-full p-2 z-10 focus:outline-none"
          onClick={scrollLeft}
        >
          <FaArrowLeft className="text-black" size={20} />
        </button>

        {/* Scrollable Flex Layout for Cards */}
        <div
          id="scroll-container"
          className="flex space-x-4 p-5 overflow-x-auto scrollbar-hide scroll-smooth"
        >
          {/* Card 1 */}
          <Card isFooterBlurred className="min-w-[300px] h-[300px]">
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
              src="https://i.ibb.co.com/F0Qjrkf/image.png"
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between p-4">
              <h1 className="text-3xl font-serif text-white">
                New York City, YN
              </h1>
            </CardFooter>
          </Card>

          {/* Card 2 */}
          <Card isFooterBlurred className="min-w-[300px] h-[300px]">
            <Image
              removeWrapper
              alt="Relaxing app background"
              className="z-0 w-full h-full object-cover"
              src="https://i.ibb.co.com/0BBzkvC/image.png"
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 p-4">
              <h1 className="text-3xl font-serif">Las Vegas, NV</h1>
            </CardFooter>
          </Card>

          {/* Card 3 */}
          <Card isFooterBlurred className="min-w-[300px] h-[300px]">
            <Image
              removeWrapper
              alt="Smartphone background"
              className="z-0 w-full h-full object-cover"
              src="https://i.ibb.co.com/FW3nsG8/image.png"
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between p-4">
              <h1 className="text-3xl font-serif">National Park, CN</h1>
            </CardFooter>
          </Card>

          {/* Card 4 */}
          <Card isFooterBlurred className="min-w-[300px] h-[300px]">
            <Image
              removeWrapper
              alt="Travel background"
              className="z-0 w-full h-full object-cover"
              src="https://i.ibb.co.com/6th6WqP/image.png"
            />
            <CardFooter className="absolute flex justify-between bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 p-4">
              <h1 className="text-3xl font-serif">London, UK</h1>
            </CardFooter>
          </Card>

          {/* Card 5 */}
          <Card isFooterBlurred className="min-w-[300px] h-[300px]">
            <Image
              removeWrapper
              alt="Travel background"
              className="z-0 w-full h-full object-cover"
              src="https://i.ibb.co.com/zQF3T4y/image.png"
            />
            <CardFooter className="absolute flex justify-between bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 p-4">
              <h1 className="text-3xl font-serif">Sedana, AJ</h1>
            </CardFooter>
          </Card>
        </div>

        {/* Right Scroll Button */}
        <button
          className="absolute right-0 bg-gray-200 hover:bg-gray-300 rounded-full p-2 z-10 focus:outline-none"
          onClick={scrollRight}
        >
          <FaArrowRight className="text-black"  size={20} />
        </button>
      </div>
    </div>
  );
};

export default Destination;
