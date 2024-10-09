/* eslint-disable @next/next/no-img-element */
import React from "react";

const More = () => {
  return (
    <div className="flex flex-col gap-6 p-6 bg-white  font-serif text-black">
      {/* First section */}
      <div className="flex justify-center">
        <div className="flex items-center justify-between bg-purple-100 p-6 rounded-lg w-[90%] ">
          <div className="flex items-center gap-4">
            {/* Image */}
            <img
              src="https://i.ibb.co.com/0BksSnD/image.png"
              alt="Traveler's Choice"
              className="w-28 h-28 rounded-lg object-cover"
            />
            <div>
              <h2 className="text-2xl font-bold">
                Travelers&apos; Choice Best of the Best Hotels
              </h2>
              <p className="text-gray-600">
                Our top 1%, powered by real reviews.
              </p>
            </div>
          </div>
          <button className="bg-white border border-black rounded-full py-2 px-6 hover:bg-gray-100">
            See the list
          </button>
        </div>
      </div>

      {/* Second section */}
      <div className="flex justify-center">
        <div className="flex items-center justify-between bg-gray-100 p-6 rounded-lg w-[90%]">
          <div className="flex items-center gap-4">
            {/* Image */}
            <img
              src="https://i.ibb.co.com/x8RPjB4/image.png"
              alt="Keep on planning"
              className="w-28 h-28 rounded-lg object-cover"
            />
            <div>
              <h2 className="text-2xl font-bold">Keep on planning</h2>
              <p className="text-gray-600">
                What to do, where to eat & more trip inspo.
              </p>
            </div>
          </div>
          <button className="bg-white border border-black rounded-full py-2 px-6 hover:bg-gray-100">
            See more
          </button>
        </div>
      </div>
    </div>
  );
};

export default More;
