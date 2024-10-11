/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef, useState } from "react";
import { FaEllipsisH, FaThumbsUp, FaComment } from "react-icons/fa";

const MyPosts = () => {
  // State to manage posts
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Beautiful Beach",
      description: "This is a description of a beautiful beach.",
      imageUrl: "https://via.placeholder.com/300",
      comments: ["Stunning view!", "I love this place!"],
    },
  ]);

  // State for creating/editing posts
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPost, setNewPost] = useState({
    id: "",
    title: "",
    description: "",
    imageUrl: "",
  });

  // State for the 3-dot menu of each post
  const [menuOpen, setMenuOpen] = useState<number | null>(null);

  // State for the comments modal
  const [commentsOpen, setCommentsOpen] = useState<number | null>(null);

  // Ref for the modal and 3-dot menu
  const modalRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Open the create post modal
  const handleCreatePost = () => {
    setNewPost({ id: "", title: "", description: "", imageUrl: "" });
    setIsModalOpen(true);
  };

  // Handle post submission
  const handleSubmitPost = (e: any) => {
    e.preventDefault();
    setPosts([...posts, { ...newPost, id: posts.length + 1, comments: [] }]);
    setIsModalOpen(false);
  };

  // Handle edit post
  const handleEditPost = (post: any) => {
    setNewPost(post);
    setIsModalOpen(true);
    setMenuOpen(null);
  };

  // Handle delete post
  const handleDeletePost = (id: number) => {
    setPosts(posts.filter((post) => post.id !== id));
    setMenuOpen(null);
  };

  // Modal close
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Close modal or menu on outside click
  const handleClickOutside = (event: MouseEvent) => {
    if (
      modalRef.current &&
      !modalRef.current.contains(event.target as Node) &&
      isModalOpen
    ) {
      setIsModalOpen(false);
    }
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      menuOpen !== null
    ) {
      setMenuOpen(null);
    }
  };

  // Open or close comments modal
  const toggleCommentsModal = (postId: number) => {
    if (commentsOpen === postId) {
      setCommentsOpen(null); // Close modal
    } else {
      setCommentsOpen(postId); // Open modal
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen, menuOpen, commentsOpen]);

  return (
    <div className="p-4 max-w-5xl mx-auto text-black bg-purple-50 font-serif">
      {/* Create Post Button */}
      <div className="flex justify-between">
        <div>
          <h1 className="text-3xl font-bold">My Posts</h1>
        </div>
        <button
          onClick={handleCreatePost}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Create Post
        </button>
      </div>

      {/* Display posts */}
      <div className="mt-4 space-y-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white p-4 shadow rounded-lg relative"
          >
            {/* Post Image, Title, Description */}
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full p-3 h-64 object-cover rounded-xl mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-700 mb-4">{post.description}</p>

            {/* Like and Comment */}
            <div className="flex items-center space-x-4">
              <button className="flex items-center text-gray-500">
                <FaThumbsUp className="mr-2 text-sky-600" /> Like
              </button>
              <button
                onClick={() => toggleCommentsModal(post.id)}
                className="flex items-center text-gray-500"
              >
                <FaComment className="mr-2 text-sky-600" /> Comment
              </button>
            </div>

            {/* 3-dot menu */}
            <div className="absolute top-2 right-2" ref={menuRef}>
              <button onClick={() => setMenuOpen(post.id)}>
                <FaEllipsisH className="text-gray-500" />
              </button>
              {menuOpen === post.id && (
                <div className="absolute right-0 mt-2 bg-white shadow-md rounded-lg p-2 z-10 w-44">
                  <button
                    onClick={() => handleEditPost(post)}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Edit Post
                  </button>
                  <button
                    onClick={() => handleDeletePost(post.id)}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Delete Post
                  </button>
                </div>
              )}
            </div>

            {/* Comments Modal */}
            {commentsOpen === post.id && (
              <div className="mt-4 bg-gray-100 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold">Comments</h3>
                <div className="space-y-2">
                  {post.comments.length > 0 ? (
                    post.comments.map((comment, index) => (
                      <p key={index} className="text-gray-700">
                        {comment}
                      </p>
                    ))
                  ) : (
                    <p className="text-gray-500">No comments yet.</p>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal for creating/editing post */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-96"
            ref={modalRef}
          >
            <h2 className="text-xl font-bold mb-4">
              {newPost.id ? "Edit Post" : "Create Post"}
            </h2>
            <form onSubmit={handleSubmitPost}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md"
                  value={newPost.title}
                  onChange={(e) =>
                    setNewPost({ ...newPost, title: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  className="mt-1 block w-full px-3 bg-white py-2 border border-gray-300 rounded-md"
                  value={newPost.description}
                  onChange={(e) =>
                    setNewPost({ ...newPost, description: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Image URL
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full px-3 bg-white py-2 border border-gray-300 rounded-md"
                  value={newPost.imageUrl}
                  onChange={(e) =>
                    setNewPost({ ...newPost, imageUrl: e.target.value })
                  }
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 bg-gray-300 text-black rounded-md mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                  {newPost.id ? "Update Post" : "Create Post"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyPosts;
