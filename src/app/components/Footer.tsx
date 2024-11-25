import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-6">
      <div className="container mx-auto text-center">
        <p className="text-lg font-medium">Connect with me on social media:</p>
        <div className="flex justify-center space-x-6 mt-4">
          {/* Facebook */}
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-blue-500 transition"
            aria-label="Facebook"
          >
            <FaFacebookF size={24} />
          </a>
          {/* Instagram */}
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-pink-500 transition"
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </a>
          {/* Twitter */}
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-blue-400 transition"
            aria-label="Twitter"
          >
            <FaTwitter size={24} />
          </a>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-blue-700 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={24} />
          </a>
        </div>
        <p className="text-sm text-gray-400 mt-6">
          © {new Date().getFullYear()} Khawaja Naqeeb Uddin. All rights reserved.
        </p>
      </div>
    </footer>
  );
}