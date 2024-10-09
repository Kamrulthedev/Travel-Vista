const ContactHome = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://i.ibb.co.com/MD4pXMn/image.png')",
          filter: "brightness(0.8)",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center font-serif">
        <h1 className="text-5xl md:text-7xl mb-6"> Contact Us</h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-6 sm:mb-8 max-w-xl">
          We would love to hear from you! Get in touch with us for any inquiries
          or assistance.
        </p>
        <button className="px-8 py-3 bg-white text-gray-900 rounded-full font-medium hover:bg-sky-500 transition duration-300">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default ContactHome;
