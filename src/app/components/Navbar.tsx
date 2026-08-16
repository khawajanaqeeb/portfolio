"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";


const navRoutes = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Education", href: "/education" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Pro Dev", href: "/professional-dev" },
  { name: "Awards", href: "/awards" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "glass-header py-3 shadow-xl shadow-cyan-950/20"
          : "bg-slate-950/70 backdrop-blur-md border-b border-white/5 py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-8 lg:px-12 flex justify-between items-center">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group text-2xl font-extrabold tracking-tight"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-400 via-indigo-500 to-purple-600 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-cyan-500/25 group-hover:scale-105 transition-transform duration-300">
            KNU
          </div>
          <div className="flex flex-col">
            <span className="text-white group-hover:text-cyan-400 transition-colors duration-300 font-heading text-lg font-bold leading-tight">
              Khawaja Naqeeb Uddin
            </span>
            <span className="text-cyan-400 text-xs font-mono tracking-wider font-semibold">
              Full Stack & AI
            </span>
          </div>
        </Link>

        {/* Desktop Page Router Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1 bg-slate-900/80 border border-slate-800/90 rounded-full px-3.5 py-1.5 backdrop-blur-xl">
          {navRoutes.map((route) => {
            const isActive =
              pathname === route.href ||
              (route.href !== "/" && pathname.startsWith(route.href));
            return (
              <Link
                key={route.name}
                href={route.href}
                className={`relative px-3.5 py-1.5 text-xs lg:text-sm font-medium transition-colors duration-300 rounded-full ${
                  isActive
                    ? "text-cyan-400 font-semibold"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeRouterNavBg"
                    className="absolute inset-0 bg-cyan-500/15 border border-cyan-500/35 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {route.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <motion.button
          className="xl:hidden text-xl text-slate-200 p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Menu"
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <FaTimes className="text-cyan-400" /> : <FaBars />}
        </motion.button>
      </div>

      {/* Mobile Router Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 top-[72px] z-40 bg-slate-950/95 backdrop-blur-2xl flex flex-col justify-between p-6 border-t border-slate-800 xl:hidden overflow-y-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col space-y-2">
              {navRoutes.map((route, index) => {
                const isActive =
                  pathname === route.href ||
                  (route.href !== "/" && pathname.startsWith(route.href));
                return (
                  <motion.li
                    key={route.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                  >
                    <Link
                      href={route.href}
                      onClick={() => setIsOpen(false)}
                      className={`block text-base font-semibold py-3 px-4 rounded-xl transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 text-cyan-400 border border-cyan-500/30"
                          : "text-slate-300 hover:text-white hover:bg-slate-900"
                      }`}
                    >
                      {route.name}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}


