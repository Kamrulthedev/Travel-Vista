/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaSearch, FaHeart, FaComment, FaShare, FaTimes } from 'react-icons/fa';
import { useForm } from 'react-hook-form';


// Define types for the posts and comments
type Post = {
  id: number;
  user: string;
  profileImg: string;
  date: string;
  title: string;
  content: string;
  image: string;
  comments: string[];
  like: string;
};

type CommentFormData = {
  comment: string;
};


const NewsFeed = () => {
  const router = useRouter(); // For navigation
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      user: 'John Doe',
      profileImg: 'https://i.ibb.co.com/hWHPfvr/image.png',
      date: '2024-10-07',
      title: 'Exploring the Mountains',
      content: 'I had an amazing experience hiking through the Himalayas...',
      image: 'https://i.ibb.co.com/wcYqqDg/image.png',
      comments: ['Amazing trip!', 'I want to go there too!'],
      like: "12"
    },
    {
      id: 2,
      user: 'Jane Smith',
      profileImg: 'https://i.ibb.co.com/hWHPfvr/image.png',
      date: '2024-10-06',
      title: 'Top 5 Travel Destinations for 2024',
      content: 'Here are my top picks for places to visit in 2024...',
      image: 'https://i.ibb.co.com/4sBvqcW/image.png',
      comments: ['Great suggestions!', 'Loved the article.'],
      like:"22"
    },
    // Add more post data here...
  ]);

  const [showDropdown, setShowDropdown] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [openModalId, setOpenModalId] = useState<number | null>(null);
  const { register, handleSubmit, reset } = useForm<CommentFormData>(); 

  const onSubmitComment = (data: CommentFormData, postId: number) => {
    console.log('Submitted Comment:', data.comment, 'Post ID:', postId);

    // Add the comment to the correct post
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? { ...post, comments: [...post.comments, data.comment] }
          : post
      )
    );
    reset(); 
  };



  const handleInputFocus = () => {
    setShowDropdown(true);
  };

  const handleInputBlur = () => {
    setTimeout(() => setShowDropdown(false), 200); // Close dropdown after a delay
  };

  const handleProfileClick = (userId: number) => {
    router.push(`/profile/${userId}`); // Navigate to the user's profile page
  };

  const suggestions = [
    { id: 1, text: 'Nearby', icon: '📍' },
    { id: 2, text: 'Fall in love with Princess Cruises', icon: '🛳️' },
    { id: 3, text: 'Budapest Danube Cruise', icon: '🎶' }
  ];

  return (
    <div className="p-6 font-serif bg-purple-50 text-black">
      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        {/* Search Bar */}
        <div className="w-full md:w-1/3 mb-4 md:mb-0 relative">
          <div className="relative">
            <input
              type="text"
              placeholder="Search posts..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              className="w-full px-4 py-2 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <FaSearch className="absolute right-3 top-2.5 text-gray-500" />
          </div>

          {/* Dropdown */}
          {showDropdown && (
            <div className="absolute top-full left-0 mt-2 w-full bg-white shadow-lg border border-gray-300 rounded-lg z-10">
              <ul className="p-2">
                {suggestions.map((suggestion) => (
                  <li
                    key={suggestion.id}
                    className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                  >
                    <span className="mr-2">{suggestion.icon}</span>
                    {suggestion.text}
                  </li>
                ))}
              </ul>
            </div>
          )}
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
                className="h-12 w-12 rounded-full cursor-pointer"
                onClick={() => handleProfileClick(post.id)} // Handle profile click
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
                <button className="flex items-center space-x-2 ">
                  {post.like}
                  <FaHeart className="text-red-500 ml-1" />
                  <span>Like</span>
                </button>
                <button
                  className="flex items-center space-x-2"
                  onClick={() => setOpenModalId(openModalId === post.id ? null : post.id)} // Toggle comment modal
                >
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

           {/* Comments Modal */}
           {openModalId === post.id && (
              <div className="mt-4 bg-gray-100 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-lg font-semibold">Comments</h4>
                  <FaTimes
                    className="cursor-pointer"
                    onClick={() => setOpenModalId(null)} // Close modal
                  />
                </div>
                {post.comments.length > 0 ? (
                  post.comments.map((comment, index) => (
                    <p key={index} className="text-gray-700 mb-2">{comment}</p>
                  ))
                ) : (
                  <p className="text-gray-500">No comments yet.</p>
                )}

                {/* Comment Form */}
                <form
                  onSubmit={handleSubmit((data) => onSubmitComment(data, post.id))} // Handle comment submit
                >
                  <input
                    {...register('comment')}
                    type="text"
                    placeholder="Add a comment..."
                    className="w-full mt-2 px-4 py-2 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2"
                  >
                    Comment
                  </button>
                </form>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;
