const Join = () => {
  return (
    <div className="bg-blue-600 flex justify-center py-16 px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-[85%] w-full flex flex-col md:flex-row items-center md:items-start">
        {/* Left Side: Title and Description */}
        <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0 p-6">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">
            Join Now & Subscribe
          </h2>
          <p className="text-gray-700">
            Join our newsletter and discover new destinations to <br /> inspire
            the traveler within. Plus, get 20% off at our <br /> online shop.
            Every week you&apos;ll receive expert advice, <br /> tips, exclusive
            offers, and much more.
          </p>
        </div>

        {/* Right Side: Email Input and Button */}
        <div className="md:w-1/3 p-8">
          <div className=" flex flex-col md:flex-row items-center w-full md:w-64 space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="email"
              placeholder="Email address"
              className="w-full md:w-96 px-4 py-2 text-black border rounded-full outline-none focus:ring-2 bg-white focus:ring-blue-500"
            />
            <div className="w-full">
              <button className="w-full md:w-60 px-6 py-2 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition duration-300">
                Sign Up
              </button>
            </div>
          </div>

          {/* Small Print */}
          <div className="w-full mt-4 text-sm text-gray-500">
            Subscribe to Lonely Planet newsletters and promotions. <br /> Read
            our{" "}
            <a href="#" className="text-blue-600">
              Privacy Policy
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
