import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';


const Social = () => {
    return (
        <div className=" space-x-6 flex justify-center p-6">
            {/* Facebook */}
            <a 
                href="https://www.facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-2xl"
            >
                <FaFacebookF />
            </a>

            {/* Twitter */}
            <a 
                href="https://www.twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600 text-2xl"
            >
                <FaTwitter />
            </a>

            {/* Instagram */}
            <a 
                href="https://www.instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-800 text-2xl"
            >
                <FaInstagram />
            </a>

            {/* LinkedIn */}
            <a 
                href="https://www.linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900 text-2xl"
            >
                <FaLinkedinIn />
            </a>

            {/* YouTube */}
            <a 
                href="https://www.youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-800 text-2xl"
            >
                <FaYoutube />
            </a>
        </div>
    );
};

export default Social;