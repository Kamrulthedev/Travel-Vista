/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

const MyFollowers = () => {
  // Sample data for followers
  const [followersList, setFollowersList] = useState([
    { id: 1, name: "Michael Brown", username: "@michaelbrown" },
    { id: 2, name: "Sara Williams", username: "@sarawilliams" },
    { id: 3, name: "David Wilson", username: "@davidwilson" },
  ]);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md text-black font-serif">
      <h2 className="text-2xl font-bold mb-4">Followers</h2>
      <ul className="space-y-4">
        {followersList.map((follower) => (
          <li
            key={follower.id}
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
                <h3 className="text-lg font-semibold">{follower.name}</h3>
                <p className="text-gray-500">{follower.username}</p>
              </div>
            </div>

            <button
              onClick={() => alert(`Viewing ${follower.name}'s profile`)}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              View Profile
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyFollowers;
