/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";
import { getCurrentUser } from "@/services/AuthService";
import { IUser } from "@/types";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const MyProfileHome = () => {
  const router = useRouter();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);
  const [profileImg, setProfileImg] = useState<File | null>(null);

  const handleUser = async () => {
    const user = await getCurrentUser();
    setUser(user);
  };

  useEffect(() => {
    handleUser();
  }, []);

  // react-hook-form setup with dynamic default values
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
      phone: user?.phone || "",
      address: user?.address || "",
    },
  });

  // Reset form when user data is loaded
  useEffect(() => {
    if (user) {
      reset({
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
      });
    }
  }, [user, reset]);

  // Function to handle modal open/close
  const handleEditProfile = () => {
    setIsEditModalOpen(!isEditModalOpen);
  };

  // Handle profile image change
  const handleProfileImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setProfileImg(file);
    }
  };

  // Function to handle form submission
  const onSubmit = (data: any) => {
    const EditData = {
      name: data?.name,
      email: data?.email,
      phone: data?.phone,
      address: data?.address,
      ProfileImg: profileImg
    }

    console.log(EditData)


    handleEditProfile();
  };

  // Route to Posts or Followers
  const navigateTo = (path: any) => {
    router.push(path);
  };

  return (
    <div className="bg-gray-100 p-6 text-black font-serif">
      {/* Profile Header */}
      <div className="bg-purple-100 shadow-lg rounded-lg p-8 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Profile Details */}
          <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-6">
            <img
              src={user?.profileImg}
              alt="Profile"
              className="w-28 h-28 rounded-full object-cover"
            />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">{user?.name}</h1>
              <p className="text-gray-500">Travel Blogger</p>
              <p className="text-gray-500">{user?.email || "***********"}</p>
              {user?.phone ? (
                <p className="text-gray-500">Phone: {user?.phone}</p>
              ) : (
                <></>
              )}
              {user?.address ? (
                <p className="text-gray-500">Address: {user?.address}</p>
              ) : (
                <></>
              )}
              <button
                onClick={handleEditProfile}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
              >
                Edit Profile
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="flex space-x-8 mt-6 md:mt-0">
            <div
              className="text-center cursor-pointer"
              onClick={() => navigateTo("/myProfile/myPosts")}
            >
              <h2 className="text-xl font-semibold">120</h2>
              <p className="text-gray-500">Posts</p>
            </div>
            <div
              className="text-center cursor-pointer"
              onClick={() => navigateTo("/myProfile/myFollowers")}
            >
              <h2 className="text-xl font-semibold">300</h2>
              <p className="text-gray-500">Followers</p>
            </div>
            <div
              className="text-center cursor-pointer"
              onClick={() => navigateTo("/myProfile/myFollowing")}
            >
              <h2 className="text-xl font-semibold">180</h2>
              <p className="text-gray-500">Following</p>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-4 sm:w-96 relative z-50">
            <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  {...register("name")}
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border bg-white border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  {...register("email")}
                  type="email"
                  className="mt-1 block w-full px-3 py-2 border bg-white border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  {...register("phone")}
                  type="tel"
                  className="mt-1 block w-full px-3 py-2 border bg-white border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <input
                  {...register("address")}
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border bg-white border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Profile Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleProfileImageChange}
                  className="mt-1 block w-full px-3 py-2 border bg-white border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleEditProfile}
                  className="px-4 py-2 bg-gray-300 text-black rounded-md mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyProfileHome;
