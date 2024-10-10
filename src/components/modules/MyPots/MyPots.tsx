import React from "react";

const MyPots = () => {
  return (
    <div>
      {/* Posts Section */}
      <div className="max-w-4xl mx-auto bg-gray-100 py-6 text-black">
        <h2 className="text-xl font-semibold mb-4">Your Posts</h2>
        <div className="bg-white shadow rounded-lg p-6 space-y-4">
          <div className="border-b pb-4">
            <p className="text-lg">Post 1 - Exploring the mountains</p>
            <p className="text-gray-600">Posted on 01/10/2024</p>
          </div>
          <div className="border-b pb-4">
            <p className="text-lg">Post 2 - Beaches of Bali</p>
            <p className="text-gray-600">Posted on 20/09/2024</p>
          </div>
          {/* Add more posts here */}
        </div>
      </div>
    </div>
  );
};

export default MyPots;
