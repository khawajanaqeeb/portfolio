"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Me", href: "#aboutme" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Project Portfolio", href: "#projectportfolio" },
    { name: "Professional Development", href: "#professionaldev" },
    { name: "Awards", href: "#awards" },
    { name: "Skills", href: "#skills" },
    { name: "Gallery", href: "#gallery" }, // ✅ Added Gallery Section
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-blue-600 shadow-lg fixed top-0 left-0 w-full z-50 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          My Portfolio
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg">
          {navLinks.map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={item.href} className="hover:text-yellow-400 transition duration-300">
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-screen bg-blue-900 flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <motion.button
              className="absolute top-6 right-6 text-3xl text-white"
              onClick={() => setIsOpen(false)}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              <FaTimes />
            </motion.button>

            <ul className="flex flex-col space-y-6 text-2xl font-medium">
              {navLinks.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link href={item.href} className="hover:text-yellow-400 transition duration-300" onClick={() => setIsOpen(false)}>
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
