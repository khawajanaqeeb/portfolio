"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaRocket } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#aboutme" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projectportfolio" },
  { name: "Pro Dev", href: "#professionaldev" },
  { name: "Awards", href: "#awards" },
  { name: "Skills", href: "#skills" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);


  // Scrollspy & Scroll backdrop effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80 py-3 shadow-xl shadow-cyan-950/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 sm:px-12 flex justify-between items-center">
        {/* Brand Logo */}
        <Link
          href="#home"
          className="flex items-center gap-2 group text-2xl font-extrabold tracking-tight"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-500 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-cyan-500/25 group-hover:scale-105 transition-transform duration-300">
            KN
          </div>
          <span className="text-white group-hover:text-cyan-400 transition-colors duration-300 font-outfit">
            Naqeeb<span className="text-cyan-400">.dev</span>
          </span>
        </Link>

        {/* Desktop Navigation Menu */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-md">
          {navLinks.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                className={`relative px-3.5 py-1.5 text-sm font-medium transition-colors duration-300 rounded-full ${
                  isActive
                    ? "text-cyan-400 font-semibold"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavBg"
                    className="absolute inset-0 bg-cyan-500/10 border border-cyan-500/30 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center">
          <a
            href="#contact"
            className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 shadow-md shadow-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300"
          >
            <FaRocket className="text-xs" />
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <motion.button
          className="lg:hidden text-2xl text-slate-200 p-2 rounded-lg bg-slate-900/80 border border-slate-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <FaTimes className="text-cyan-400" /> : <FaBars />}
        </motion.button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 top-[68px] z-40 bg-slate-950/95 backdrop-blur-2xl flex flex-col justify-between p-8 border-t border-slate-800/80 lg:hidden overflow-y-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col space-y-4">
              {navLinks.map((item, index) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block text-xl font-medium py-2 px-4 rounded-xl transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 text-cyan-400 border border-cyan-500/30"
                          : "text-slate-300 hover:text-white hover:bg-slate-900"
                      }`}
                    >
                      {item.name}
                    </a>
                  </motion.li>
                );
              })}
            </ul>

            <div className="pt-6 border-t border-slate-800 mt-6">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 shadow-lg shadow-cyan-500/25"
              >
                <FaRocket /> Get In Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

