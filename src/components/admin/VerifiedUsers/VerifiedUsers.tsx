/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client"

import React, { useState } from 'react';
import { FaCheckCircle, FaTrashAlt } from 'react-icons/fa';

const verifiedUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', image: 'https://via.placeholder.com/100', verifiedDate: '2024-10-10' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', image: 'https://via.placeholder.com/100', verifiedDate: '2024-09-15' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', image: 'https://via.placeholder.com/100', verifiedDate: '2024-09-15' },
  // Add more verified users here
];

const VerifiedUsers = () => {
  const [selectedUser, setSelectedUser] = useState<any>(null);

  const openModal = (user: any) => {
    setSelectedUser(user);
  };

  const closeModal = () => {
    setSelectedUser(null);
  };

  const deleteUser = (userId: any) => {
    console.log('Deleting user with ID:', userId);
    // Add your delete logic here
  };

  return (
    <div className="min-h-screen  p-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Verified Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {verifiedUsers.map((user) => (
          <div key={user.id} className="bg-purple-100 rounded-lg p-4 shadow-lg flex items-center">
            <img
              src={user.image}
              alt={user.name}
              className="w-16 h-16 rounded-full cursor-pointer mr-4"
              onClick={() => openModal(user)}
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
              <p className="text-gray-500">{user.email}</p>
              <p className="text-green-500 flex items-center">
                <FaCheckCircle className="mr-1" /> Verified on {user.verifiedDate}
              </p>
            </div>
            <button
              className="ml-auto text-red-500 hover:text-red-700"
              onClick={() => deleteUser(user.id)}
            >
              <FaTrashAlt size={20} />
            </button>
          </div>
        ))}
      </div>

      {/* Simple Modal */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-purple-100 p-6 rounded-lg shadow-lg w-full max-w-md">
            <div className="text-center">
              <img
                src={selectedUser.image}
                alt={selectedUser.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h2 className="text-xl font-bold text-gray-800">{selectedUser.name}</h2>
              <p className="text-gray-500">{selectedUser.email}</p>
              <p className="text-green-500 flex items-center justify-center mt-2">
                <FaCheckCircle className="mr-1" /> Verified on {selectedUser.verifiedDate}
              </p>
              <div className="mt-6 flex justify-around">
                <button
                  onClick={() => deleteUser(selectedUser.id)}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                >
                  Delete User
                </button>
                <button
                  onClick={closeModal}
                  className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VerifiedUsers;
