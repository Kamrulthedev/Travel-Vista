
import React from "react";

const AdminHelp = () => {
  return (
    <div className="min-h-screen py-10">
      <div className="max-w-4xl mx-auto bg-purple-100 p-8 rounded-lg shadow-lg">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Admin Help Center</h1>
        <p className="text-gray-600 mb-8 text-center">
          If you need assistance with managing the platform, feel free to explore our FAQs or reach out for support.
        </p>

        {/* FAQs Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-700">1. How do I delete a user?</h3>
              <p className="text-gray-600">
                Navigate to the user management page, find the user you wish to delete, and click the &quot;Delete&quot; button next to their profile.
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-700">2. How can I edit posts or comments?</h3>
              <p className="text-gray-600">
                Go to the admin posts page, select the post or comment you wish to edit, and click &quot;Edit&quot; to modify the content.
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-700">3. How can I block a user?</h3>
              <p className="text-gray-600">
                In the user management section, you can block any user by clicking the &quot;Block&ldquo; button beside their profile.
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-700">4. How do I view platform analytics?</h3>
              <p className="text-gray-600">
                Access the analytics dashboard from the admin panel to see data on user activity, posts, and overall performance.
              </p>
            </div>
          </div>
        </div>

        {/* Support Form */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Need Further Assistance?</h2>
          <p className="text-gray-600 mb-4">
            If your question is not answered above, please fill out the form below and we’ll get back to you as soon as possible.
          </p>

          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Your Name:</label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Your Email:</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Message:</label>
              <textarea
                className="w-full px-4 bg-white py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your message"
                rows={5}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminHelp;
