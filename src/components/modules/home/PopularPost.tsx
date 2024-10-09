/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { FaHeart, FaArrowRight, FaArrowLeft } from "react-icons/fa";

const posts = [
  {
    id: 1,
    title: "3 family-friendly days in Rome and most popular",
    author: "Ashlyn S",
    image: "https://i.ibb.co.com/VH71VCj/image.png",
    likes: 30,
    comments: 10,
    link: "/rome-trip",
  },
  {
    id: 2,
    title: 'The ultimate "workcation" in Mexico City',
    author: "Eileen Ivette",
    image: "https://i.ibb.co.com/FYFwJr3/image.png",
    likes: 28,
    comments: 15,
    link: "/mexico-workcation",
  },
  {
    id: 3,
    title: "Exploring LGBTQ+-friendly Barcelona",
    author: "Two Bad Tourists",
    image: "https://i.ibb.co.com/SdFgRpP/image.png",
    likes: 28,
    comments: 20,
    link: "/barcelona-exploration",
  },
  {
    id: 3,
    title: "Exploring LGBTQ+-friendly Barcelona",
    author: "Two Bad Tourists",
    image: "https://i.ibb.co.com/HKF99Mn/image.png",
    likes: 28,
    comments: 20,
    link: "/barcelona-exploration",
  },
  {
    id: 3,
    title: "Exploring LGBTQ+-friendly Barcelona",
    author: "Two Bad Tourists",
    image: "https://i.ibb.co.com/MCjwvBm/image.png",
    likes: 28,
    comments: 20,
    link: "/barcelona-exploration",
  },
];

const PopularPost = () => {
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
    <div className=" py-8 bg-white text-black font-serif px-6">
      <div className="py-6 space-y-3">
        <h2 className="lg:text-4xl text-2xl">
          Most Popular Post In the Our travel Users
        </h2>
        <p className="text-gray-500 mb-8">
          Tried-and-true guidance to fuel your next big trip
        </p>
      </div>

      <div className="relative flex items-center justify-center">
        {/* Left Scroll Button */}
        <button
          className="absolute left-0 bg-gray-200 hover:bg-gray-300 rounded-full p-2 z-10 focus:outline-none"
          onClick={scrollLeft}
        >
          <FaArrowLeft size={20} />
        </button>

        {/* Scrollable container */}
        <div
          id="scroll-container"
          className="flex overflow-x-auto scrollbar-hide space-x-4 max-w-full mb-10"
        >
          {posts.map((post) => (
            <div
              key={post.id}
              className="min-w-[400px] bg-white rounded-lg overflow-hidden mb-6"
            >
              <a href={post.link}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{post.title}</h3>
                  <p className="text-gray-500">By {post.author}</p>
                  <div className="flex items-center text-gray-500 mt-2">
                    <FaHeart className="mr-1 text-red-500" />
                    <span>
                      {post.likes} likes • {post.comments} comments
                    </span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Right Scroll Button */}
        <button
          className="absolute right-0 bg-gray-200 hover:bg-gray-300 rounded-full p-2 z-10 focus:outline-none"
          onClick={scrollRight}
        >
          <FaArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default PopularPost;
