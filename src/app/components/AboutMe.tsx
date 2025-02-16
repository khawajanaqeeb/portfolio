"use client";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section
      id="aboutme"
      className="flex flex-col items-center justify-center py-16 px-6 sm:px-12 lg:px-20 xl:px-32 
                 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white 
                 shadow-2xl shadow-indigo-500/40 rounded-lg"
    >
      {/* Animated Heading with Shadow & Hover Glow */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-indigo-400 mb-6 cursor-pointer transition-all 
                   duration-300 hover:text-indigo-500 hover:scale-105 shadow-lg shadow-indigo-500/50 
                   px-6 py-2 rounded-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.1, textShadow: "0px 0px 12px rgba(99, 102, 241, 0.9)" }}
      >
        About Me
      </motion.h2>

      {/* Animated Paragraphs with Glow & Depth */}
      <motion.p
        className="text-lg max-w-3xl text-left font-light leading-relaxed text-gray-300 
                   transition-all duration-300 hover:text-gray-100 p-4 rounded-lg cursor-pointer 
                   shadow-md shadow-indigo-400/30 hover:shadow-lg hover:shadow-indigo-500/40"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        whileHover={{ scale: 1.02 }}
      >
        Hello! I am an aspiring{" "}
        <span className="text-indigo-400 font-semibold hover:text-indigo-500 transition-all duration-300">
          Full Stack Developer
        </span>{" "}
        with a deep interest in{" "}
        <span className="text-indigo-400 font-semibold hover:text-indigo-500 transition-all duration-300">
          Artificial Intelligence
        </span>.
        I thrive on building innovative solutions and exploring cutting-edge technologies.
      </motion.p>

      <motion.p
        className="text-lg max-w-3xl text-left font-light leading-relaxed text-gray-300 mt-4 
                   transition-all duration-300 hover:text-gray-100 p-4 rounded-lg cursor-pointer 
                   shadow-md shadow-indigo-400/30 hover:shadow-lg hover:shadow-indigo-500/40"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.6 }}
        whileHover={{ scale: 1.02 }}
      >
        My journey is driven by curiosity, problem-solving, and a passion for creating impactful 
        digital experiences. Let’s build the future, one line of code at a time. 🚀
      </motion.p>
    </section>
  );
}
