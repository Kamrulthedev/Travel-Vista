/* eslint-disable @next/next/no-img-element */
"use client"
import { useState } from 'react';
import { FaSearch, FaHeart, FaComment, FaShare } from 'react-icons/fa';

const NewsFeed = () => {
  const [posts] = useState([
    {
      id: 1,
      user: 'John Doe',
      profileImg: 'https://i.ibb.co/image.png',
      date: '2024-10-07',
      title: 'Exploring the Mountains',
      content: 'I had an amazing experience hiking through the Himalayas...',
      image: 'https://i.ibb.co/mountain.jpg',
    },
    {
      id: 2,
      user: 'Jane Smith',
      profileImg: 'https://i.ibb.co/image.png',
      date: '2024-10-06',
      title: 'Top 5 Travel Destinations for 2024',
      content: 'Here are my top picks for places to visit in 2024...',
      image: 'https://i.ibb.co/destinations.jpg',
    },
    // Add more post data here...
  ]);

  return (
    <div className="p-6 font-serif  bg-purple-50 text-black">
      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        {/* Search Bar */}
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <div className="relative">
            <input
              type="text"
              placeholder="Search posts..."
              className="w-full px-4 py-2 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <FaSearch className="absolute right-3 top-2.5 text-gray-500" />
          </div>
        </div>

        {/* Filter Options */}
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Trending</button>
          <button className="px-4 py-2 bg-gray-300 text-black rounded-lg">Most Recent</button>
          <button className="px-4 py-2 bg-gray-300 text-black rounded-lg">Top Posts</button>
        </div>
      </div>

      {/* Posts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={post.profileImg}
                alt="Profile"
                className="h-12 w-12 rounded-full"
              />
              <div>
                <h2 className="text-lg font-semibold">{post.user}</h2>
                <span className="text-sm text-gray-500">{post.date}</span>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">{post.title}</h3>
            <p className="text-gray-700 mb-4">{post.content}</p>
            {post.image && (
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            )}
            <div className="flex justify-between items-center">
              <div className="flex space-x-4">
                <button className="flex items-center space-x-2">
                  <FaHeart className="text-red-500" />
                  <span>Like</span>
                </button>
                <button className="flex items-center space-x-2">
                  <FaComment />
                  <span>Comment</span>
                </button>
                <button className="flex items-center space-x-2">
                  <FaShare />
                  <span>Share</span>
                </button>
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                View Full Post
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;
