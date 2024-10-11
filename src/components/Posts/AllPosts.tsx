/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */

"use client"
import { useState } from "react";
import { FaHeart, FaEllipsisH } from "react-icons/fa";

const AllPosts = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);

    const posts = [
        {
            id: 1,
            title: "Exploring the Mountains",
            image: "https://via.placeholder.com/150",
            author: "John Doe",
            authorProfile: "https://via.placeholder.com/50",
            likes: 120,
            comments: 45,
            link: "/post/1",
        },
    ];

    const openModal = (post: any) => {
        setSelectedPost(post);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedPost(null);
    };

    const handleProfileClick = () => {
        // Navigate to user profile page logic
        window.location.href = "/user-profile";
    };

    return (
        <div className="min-h-screen bg-white py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">All Posts</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <div key={post.id} className="min-w-[400px] bg-white rounded-lg overflow-hidden mb-6">
                            {/* Profile Image and Three Dot Menu */}
                            <div className="flex justify-between items-center p-4 bg-purple-100">
                                <div className="flex items-center">
                                    <img
                                        src={ "https://i.ibb.co.com/37bvpdk/image.png"}
                                        alt={post.author}
                                        className="w-10 h-10 rounded-full cursor-pointer"
                                        onClick={handleProfileClick}
                                    />
                                    <p className="ml-3 text-gray-700 font-medium cursor-pointer" onClick={handleProfileClick}>
                                        {post.author}
                                    </p>
                                </div>
                                <div>
                                    <FaEllipsisH
                                        className="text-gray-500 cursor-pointer"
                                        onClick={() => openModal(post)}
                                    />
                                </div>
                            </div>

                            {/* Post Image and Details */}
                            <a href={post.link}>
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold">{post.title}</h3>
                                    <div className="flex items-center text-gray-500 mt-2">
                                        <FaHeart className="mr-1 text-red-500" />
                                        <span>{post.likes} likes • {post.comments} comments</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>

                {/* Modal for Post Actions */}
                {isModalOpen && selectedPost && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                            <h2 className="text-xl font-semibold mb-4">Post Actions</h2>
                            <ul>
                                <li className="py-2 hover:bg-gray-100 cursor-pointer">Delete Post</li>
                                <li className="py-2 hover:bg-gray-100 cursor-pointer">Edit Post</li>
                                <li className="py-2 hover:bg-gray-100 cursor-pointer">Block Post</li>
                            </ul>
                            <button
                                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                                onClick={closeModal}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllPosts;
