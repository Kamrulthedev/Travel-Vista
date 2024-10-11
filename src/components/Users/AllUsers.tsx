/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect } from "react";
import { Table, Button, Spin, Space, Modal, Avatar } from "antd";
import { FaTrash, FaUserShield, FaUserTimes } from "react-icons/fa";

type demoUser1 = {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
  profileImage: string;
};

const AllUsers = () => {
  // Updated the type to be an array of demoUser1
  const [users, setUsers] = useState<demoUser1[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState<demoUser1 | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const demoUser: demoUser1 = {
      id: 999,
      name: "Demo User",
      email: "demo@demo.com",
      isAdmin: false,
      profileImage: "https://via.placeholder.com/40",
    };

    // Simulating API call delay
    setTimeout(() => {
      setUsers([demoUser]); // Set as an array of users
      setLoading(false);
    }, 1000);
  }, []);

  // Handle making a user admin
  const handleMakeAdmin = (userId: number) => {
    console.log(userId);
  };

  // Handle demoting a user from admin
  const handleDemoteAdmin = (userId: number) => {
    console.log(userId);
  };

  // Handle deleting a user
  const handleDeleteUser = (userId: number) => {
    console.log(userId);
  };

  // Handle view details
  const handleViewDetails = (user: demoUser1) => {
    setSelectedUser(user); // Set selected user for details
    setIsModalVisible(true); // Show modal
  };

  // Handle closing modal
  const handleModalClose = () => {
    setIsModalVisible(false);
    setSelectedUser(null);
  };

  const columns = [
    {
      title: "Profile",
      dataIndex: "profileImage",
      key: "profileImage",
      render: (profileImage: string) => (
        <Avatar src={profileImage} alt="Profile" />
      ), // Display profile image
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "isAdmin",
      key: "role",
      render: (isAdmin: boolean) => (isAdmin ? "Admin" : "User"),
    },
    {
      title: "Actions",
      key: "actions",
      render: (text: any, user: demoUser1) => (
        <Space>
          <Button type="primary" onClick={() => handleViewDetails(user)}>
            View Details
          </Button>
          {user.isAdmin ? (
            <Button
              type="primary"
              danger
              icon={<FaUserTimes />}
              onClick={() => handleDemoteAdmin(user.id)}
            >
              Demote Admin
            </Button>
          ) : (
            <Button
              type="primary"
              icon={<FaUserShield />}
              onClick={() => handleMakeAdmin(user.id)}
            >
              Make Admin
            </Button>
          )}
          <Button
            type="default"
            danger
            icon={<FaTrash />}
            onClick={() => handleDeleteUser(user.id)}
          >
            Delete User
          </Button>
        </Space>
      ),
    },
  ];

  // Render loading spinner while fetching users
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spin size="large" tip="Loading Users..." />
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">All Users</h1>
      <Table dataSource={users} columns={columns} rowKey="id" />

      {/* Modal for viewing user details */}
      <Modal
        title="User Details"
        visible={isModalVisible}
        onCancel={handleModalClose}
        footer={null}
      >
        {selectedUser && (
          <div>
            <Avatar src={selectedUser.profileImage} size={64} alt="Profile" />
            <p>
              <strong>Name:</strong> {selectedUser.name}
            </p>
            <p>
              <strong>Email:</strong> {selectedUser.email}
            </p>
            <p>
              <strong>Role:</strong> {selectedUser.isAdmin ? "ADMIN" : "USER"}
            </p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default AllUsers;
