"use client";
import { motion } from "framer-motion";
import Image from "next/image";
export default function ProjectPortfolio() {
  return (
    <section
      id="projectportfolio"
      className="py-16 px-6 sm:px-12 lg:px-20 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#334155] text-white"
    >
      {/* Title and Description */}
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-bold text-blue-700 mb-6 hover:scale-105 transition-all duration-300">
          Project Portfolio
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-8 hover:text-white transition-all duration-300">
          A showcase of projects demonstrating my expertise in various technologies.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        {[
          {
            title: "Furniture E-Commerce Website",
            description:
              "A fully functional e-commerce platform for furniture shopping, built with Next.js, Tailwind CSS, and Sanity.",
            image: "/furniro.jpeg",
            color: "bg-[#1e293b] border-[#facc15]",
            link: "https://hackathon-iii-kns.vercel.app/",
          },
          {
            title: "Simple Calculator (TypeScript)",
            description:
              "A basic calculator built with TypeScript for performing arithmetic operations.",
            image: "/simplecalculator.png",
            color: "bg-[#1e293b] border-[#facc15]",
          },
          {
            title: "Number Guessing Game (JavaScript)",
            description:
              "A fun number guessing game where players guess a random number.",
            image: "/java.png",
            color: "bg-[#1f2937] border-[#38bdf8]",
          },
          {
            title: "Dynamic CV (HTML & CSS)",
            description:
              "An interactive CV designed with HTML and CSS to showcase my achievements.",
            image: "/dynamic-cv.png",
            color: "bg-[#374151] border-[#ef4444]",
          },
          {
            title: "Figma to HTML/CSS",
            description:
              "Converted a Figma design into responsive HTML and CSS.",
            image: "/figma.png",
            color: "bg-[#475569] border-[#22c55e]",
            link:"https://figma-assignment-edited.vercel.app/"
          },
          {
            title: "Todo List",
            description:
              "A simple and interactive Todo List app to manage daily tasks efficiently.",
            image: "/todolist.jpeg",
            color: "bg-[#2563eb] border-[#facc15]",
            link: "https://todolist-pi-orcin.vercel.app/",
          },
        ].map((project, index) => (
          <motion.div
            key={index}
            className={`shadow-lg hover:shadow-2xl transition-all duration-300 rounded-lg p-6 border ${project.color}`}
            whileHover={{ scale: 1.03 }}
          >
            <a href={project.link || "#"} target="_blank" rel="noopener noreferrer">
              <Image
                src={project.image}
                alt={project.title}
                width={50}
                height={50}
                className="w-full h-56 object-contain rounded-md mb-4 hover:scale-105 transition-all duration-300"
              />
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <p className="text-gray-300 mt-2">{project.description}</p>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
