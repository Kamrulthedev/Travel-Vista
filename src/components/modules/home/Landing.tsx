/* eslint-disable @next/next/no-img-element */
"use client";
import { Input } from "@nextui-org/input";
import { FaSearch } from "react-icons/fa";

const Landing = () => {
  return (
    <div className="bg-purple-50  ">
      {/* Header */}
      <header className="bg-white py-9">
        <div className="max-w-7xl mx-auto px-4 text-center items-center space-y-16">
          <div className="" id="1">
            <h1 className="text-5xl font-serif text-black">Where to?</h1>
          </div>
          <nav className="space-x-8 font-serif">
            <a href={""} className="text-gray-800 hover:text-black">
              🏠 Search All
            </a>
            <a href="#" className="text-gray-800 hover:text-black">
              🏨 Hotels
            </a>
            <a href="#" className="text-gray-800 hover:text-black">
              🈯 Things to Do
            </a>
            <a href="#" className="text-gray-800 hover:text-black">
              🍴 Restaurants
            </a>
            <a href="#" className="text-gray-800 hover:text-black">
              ✈️ Flights
            </a>
            <a href="#" className="text-gray-800 hover:text-black">
              🌴 Vacation Rentals
            </a>
          </nav>
        </div>
      </header>

      {/* Search Bar */}
      <div className="bg-white py-8">
        <div className="max-w-4xl mx-auto flex justify-center items-center relative shadow-lg rounded-full lg:w-full w-[300px] md:w-[400px]">
          <Input
            aria-label="Search"
            classNames={{
              inputWrapper: "bg-white",
              input: "text-sm",
            }}
            placeholder="Searching Your Location..."
            size="lg"
            startContent={
              <FaSearch className="pointer-events-none flex-shrink-0 text-base text-default-400 mr-5" />
            }
            type="text"
          />
          <button className="absolute right-0 bg-green-500 text-white px-6 py-2 rounded-xl hover:bg-green-600 ">
            Search
          </button>
        </div>
      </div>

      {/* AI Trip Builder Section with Background Image */}
      <section className="relative py-12 h-[450px] overflow-hidden">
        {/* Background Image with Blur */}
        <div
          className="absolute inset-0 bg-cover bg-center h-[500px] w-full"
          style={{
            backgroundImage: "url('https://i.ibb.co/CwtsBsD/image.png')",
            filter: "blur(8px)", // Apply the blur effect
          }}
        ></div>

        {/* Content Layer for Desktop */}
        <div className="relative max-w-7xl mx-auto px-4 flex items-center h-full z-10 hidden lg:flex">
          <div className="w-1/2 text-white">
            <p className="text-sm uppercase tracking-wide">
              Powered by AI
              <span className="bg-white text-green-600 rounded px-2 py-1 text-xs ml-2">
                BETA
              </span>
            </p>
            <h2 className="text-5xl font-serif mt-4">
              AI trip builder <br /> gets you out there
            </h2>
            <p className="text-lg mt-4">
              Get a whole getaway’s worth of ideas made for you—ready in
              seconds.
            </p>
            <button className="mt-6 bg-white text-green-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100">
              Try it
            </button>
          </div>
          <div className="w-1/2 relative">
            <img
              src="https://i.ibb.co/YPDB27v/Screenshot-2024-10-08-161603.png"
              alt="Family trip"
              className="rounded-lg shadow-lg h-96 w-[420px] object-cover"
            />
          </div>
        </div>

        {/* Content Layer for Mobile */}
        <div className="relative mx-auto px-4 items-center h-full z-10 lg:hidden">
          <div className="w-1/2 text-white text-center">
            <p className="text-sm uppercase tracking-wide">
              Powered by AI
              <span className="bg-white text-green-600 rounded px-1 py-1 text-xs ml-2">
                BETA
              </span>
            </p>
            <h2 className="text-3xl font-serif mt-4">
              AI trip builder <br /> gets you out there
            </h2>
            <p className="text-base mt-4">
              Get a whole getaway’s worth of ideas made for you—ready in
              seconds.
            </p>
            <button className="mt-6 bg-white text-green-600 px-4 py-2 rounded-xl text-lg font-semibold hover:bg-gray-100">
              Try it
            </button>
          </div>
          <div className="w-1/2 relative">
            <img
              src="https://i.ibb.co/YPDB27v/Screenshot-2024-10-08-161603.png"
              alt="Family trip"
              className="rounded-lg shadow-lg h-40 w-[300px] object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
