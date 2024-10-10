/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";

const MyFollowing = () => {
  // Sample data for followed users
  const [followingList, setFollowingList] = useState([
    { id: 1, name: "Jane Smith", username: "@janesmith", isFollowing: true },
    {
      id: 2,
      name: "Alex Johnson",
      username: "@alexjohnson",
      isFollowing: true,
    },
    { id: 3, name: "Emily Davis", username: "@emilydavis", isFollowing: true },
    { id: 4, name: "Emily Davis", username: "@emilydavis", isFollowing: true },
    { id: 5, name: "Emily Davis", username: "@emilydavis", isFollowing: true },
  ]);

  // Toggle follow/unfollow
  const handleFollowToggle = (id: any) => {
    setFollowingList((prevList) =>
      prevList.map((user) =>
        user.id === id ? { ...user, isFollowing: !user.isFollowing } : user
      )
    );
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md text-black font-serif">
      <h2 className="text-2xl font-bold mb-4">Following</h2>
      <ul className="space-y-4">
        {followingList.map((user) => (
          <li
            key={user.id}
            className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div>
                <img
                  src={"https://i.ibb.co.com/44vhj8G/image.png"}
                  //   user?.profileImg ||
                  alt="Profile"
                  className="h-12 w-12 rounded-full cursor-pointer border-2 border-black"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{user.name}</h3>
                <p className="text-gray-500">{user.username}</p>
              </div>
            </div>

            <button
              onClick={() => handleFollowToggle(user.id)}
              className={`px-4 py-2 rounded-lg ${
                user.isFollowing
                  ? "bg-red-500 text-white"
                  : "bg-blue-500 text-white"
              }`}
            >
              {user.isFollowing ? "Unfollow" : "Follow"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyFollowing;
