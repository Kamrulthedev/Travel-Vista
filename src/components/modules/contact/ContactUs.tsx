
import { FaPhoneAlt, FaCommentDots } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="bg-white text-black font-serif py-16">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Get in touch</h1>
        <p className="text-lg mt-2">Want to get in touch? We&apos;d love to hear from you. Here&apos;s how you can reach us.</p>
      </div>

      {/* Contact Options Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mx-auto max-w-4xl">
        {/* Sales Contact */}
        <div className="bg-white text-gray-800 rounded-lg shadow-md p-6 w-full md:w-1/2">
          <div className="flex justify-center mb-4">
            <FaPhoneAlt className="text-3xl text-gray-900" />
          </div>
          <h2 className="text-center text-2xl font-semibold mb-4">Talk to Sales</h2>
          <p className="text-center mb-6">
            Interested in our products? Just pick up the phone to chat with a member of our sales team.
          </p>
          <p className="text-center text-blue-500 font-semibold text-lg mb-2">+1 857 829 5060</p>
          <p className="text-center text-blue-500 underline cursor-pointer">View all global numbers</p>
        </div>

        {/* Customer Support */}
        <div className="bg-white text-gray-800 rounded-lg shadow-md p-6 w-full md:w-1/2">
          <div className="flex justify-center mb-4">
            <FaCommentDots className="text-3xl text-gray-900" />
          </div>
          <h2 className="text-center text-2xl font-semibold mb-4">Contact Customer Support</h2>
          <p className="text-center mb-6">
            Sometimes you need a little help from your friends. Or a support rep. Don’t worry… we’re here for you.
          </p>
          <div className="flex justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
