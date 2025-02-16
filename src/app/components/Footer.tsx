"use client";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 text-gray-200 py-6"
    >
      <div className="container mx-auto text-center px-4">
        <p className="text-lg font-medium">Connect with me on social media:</p>
        <div className="flex justify-center space-x-6 mt-4">
          {[
            { href: "https://www.linkedin.com/in/khawaja-naqeeb-uddin-75203a143/", icon: <FaLinkedinIn />, color: "hover:text-blue-700" },
            { href: "https://www.facebook.com/khawajanaqeebuddin.shajie", icon: <FaFacebookF />, color: "hover:text-blue-500" },
            { href: "https://www.twitter.com", icon: <FaTwitter />, color: "hover:text-blue-400" },
            { href: "https://www.instagram.com/khawaj7/", icon: <FaInstagram />, color: "hover:text-pink-500" },
            
            
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-200 ${item.color} transition-transform transform hover:scale-110`}
              aria-label="Social Media Link"
              whileHover={{ scale: 1.2 }}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
        <p className="text-sm text-gray-400 mt-6">
          © {new Date().getFullYear()} Khawaja Naqeeb Uddin. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}
