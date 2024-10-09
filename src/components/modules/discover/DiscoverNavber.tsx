/* eslint-disable @next/next/no-img-element */

const DiscoverNavber = () => {
  const currentYear = new Date().getFullYear(); 

  return (
    <footer className="bg-purple-50 text-black py-8 font-serif">
      <div className="container mx-auto px-4 p-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 px-4">
          {/* Logo Section */}
          <div className="mb-6">
            <div className="flex items-center gap-5 mb-6">
              <img
                src="https://i.ibb.co.com/Jymd0MB/around-9041439.png"
                alt="Logo"
                className="w-10 h-10 inline-block"
              />
              <h1 className="text-3xl font-bold">Travel Vista</h1>
            </div>
            <p className="text-gray-400 mt-2 max-w-sm">
              We offer top-notch services around the world, delivering
              high-quality solutions and customer satisfaction.
            </p>
          </div>

          {/* Country Selector */}
          <div className="flex items-center space-x-4">
            <label htmlFor="country" className="text-sm">
              Choose your country:
            </label>
            <select
              id="country"
              className="bg-white text-black px-3 py-2 rounded"
            >
              <option value="US">United States</option>
              <option value="UK">United Kingdom</option>
              <option value="IN">India</option>
              <option value="AU">Australia</option>
              <option value="CA">Canada</option>
              {/* Add more countries as needed */}
            </select>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 px-4">
          <div className="flex space-x-6">
            <a href="/about" className="hover:underline">
              About Us
            </a>
            <a href="/services" className="hover:underline">
              Services
            </a>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
            <a href="/privacy" className="hover:underline">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:underline">
              Terms of Service
            </a>
          </div>
        </div>
        {/* Footer Bottom: Copyright Info */}
        <div className="border-t border-gray-400 pt-4">
          <p className="text-gray-400 text-sm text-center">
            &copy; {currentYear} Travel Vista. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default DiscoverNavber;
