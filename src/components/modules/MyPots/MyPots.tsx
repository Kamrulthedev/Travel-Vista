/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useCreatePost } from "@/hooks/posts.hook";
import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import { FaEllipsisH, FaThumbsUp, FaComment } from "react-icons/fa";
import { getCurrentUser } from "@/services/AuthService";
import { IUser } from "@/types";

interface PostFormInputs {
  title: string;
  description: string;
  imageFile: File | null;
}

const MyPosts = () => {
  const { mutate: CreatePost , isError} = useCreatePost();
  const [posts, setPosts] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState<number | null>(null);
  const [commentsOpen, setCommentsOpen] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // react-hook-form setup
  const { register, handleSubmit, reset } = useForm<PostFormInputs>();

  const [user, setUser] = useState<IUser | null>(null);

  const handleUser = async () => {
    const user = await getCurrentUser();
    setUser(user);
  };

  useEffect(() => {
    handleUser();
  }, []);

  // Open the create post modal
  const handleCreatePost = () => {
    reset({ title: "", description: "", imageFile: null });
    setIsModalOpen(true);
  };

  const onSubmit: SubmitHandler<PostFormInputs> = (data) => {
    console.log(data);

    const formData = {
      userId: user?._id,
      title: data.title,
      description: data.description,
      PostImg: data.imageFile,
    };
    console.log("Form Data:", formData);

    CreatePost(formData);

    console.log(isError)
    setIsModalOpen(false);
  };

  // Handle post edit (log the post data)
  const handleEditPost = (post: any) => {
    console.log("Edit Post Data:", post);
    setIsModalOpen(true);
    setMenuOpen(null);

    reset({
      title: post.title,
      description: post.description,
      imageFile: post.imageFile,
    });
  };

  // Handle delete post
  const handleDeletePost = (id: number) => {
    console.log("Delete Post ID:", id);
    setPosts(posts.filter((post) => post.id !== id));
    setMenuOpen(null);
  };

  // Modal close
  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
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
            {post.imageFile && (
              <img
                src={URL.createObjectURL(post.imageFile)}
                alt={post.title}
                className="w-full p-3 h-64 object-cover rounded-xl mb-4"
              />
            )}
            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-700 mb-4">{post.description}</p>

            {/* Like and Comment */}
            <div className="flex items-center space-x-4">
              <button className="flex items-center text-gray-500">
                <FaThumbsUp className="mr-2 text-sky-600" /> Like
              </button>
              <button
                onClick={() => setCommentsOpen(post.id)}
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
            {post.comments.length > 0 ? (
              post.comments.map((comment: string, index: number) => (
                <p key={index} className="text-gray-700">
                  {comment}
                </p>
              ))
            ) : (
              <p className="text-gray-500">No comments yet.</p>
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
            <h2 className="text-xl font-bold mb-4">Create or Edit Post</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md"
                  {...register("title", { required: true })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  className="mt-1 block w-full px-3 bg-white py-2 border border-gray-300 rounded-md"
                  {...register("description", { required: true })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Image File
                </label>
                <input
                  type="file"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md"
                  {...register("imageFile")}
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
                  Save Post
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
