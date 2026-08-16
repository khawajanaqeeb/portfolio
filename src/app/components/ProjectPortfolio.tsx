"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaExternalLinkAlt, FaLayerGroup } from "react-icons/fa";


export default function ProjectPortfolio() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "Furniture E-Commerce Website",
      category: "ecommerce",
      description:
        "A feature-rich e-commerce marketplace platform for modern furniture shopping with dynamic routing and content management.",
      image: "/furniro.jpeg",
      tech: ["Next.js", "Tailwind CSS", "Sanity CMS", "TypeScript"],
      link: "https://hackathon-iii-kns.vercel.app/",
    },
    {
      title: "Todo List Web App",
      category: "webapps",
      description:
        "A sleek task manager application with real-time state persistence, filter views, and interactive task prioritization.",
      image: "/todolist.jpeg",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      link: "https://todolist-pi-orcin.vercel.app/",
    },
    {
      title: "Figma to Responsive HTML/CSS",
      category: "design",
      description:
        "Pixel-perfect translation of complex multi-screen Figma designs into fully responsive, mobile-first web pages.",
      image: "/figma.png",
      tech: ["Figma", "HTML5", "CSS3", "JavaScript"],
      link: "https://figma-assignment-edited.vercel.app/",
    },
    {
      title: "Dynamic Interactive CV",
      category: "design",
      description:
        "An interactive, customizable resume generator web interface allowing dynamic live updates of skills and credentials.",
      image: "/dynamic-cv.png",
      tech: ["HTML5", "CSS3", "JavaScript"],
      link: "#",
    },
    {
      title: "Simple Calculator Tool",
      category: "webapps",
      description:
        "A clean arithmetic operations engine built using TypeScript with error boundary checks and responsive keypad UI.",
      image: "/simplecalculator.png",
      tech: ["TypeScript", "HTML5", "CSS3"],
      link: "#",
    },
    {
      title: "Number Guessing Game",
      category: "webapps",
      description:
        "An engaging interactive CLI/web game logic algorithm evaluating user accuracy with custom scoring metrics.",
      image: "/java.png",
      tech: ["JavaScript", "Logic Algorithms"],
      link: "#",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((item) => item.category === filter);

  return (
    <section id="projectportfolio" className="py-16 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto scroll-mt-24">
      {/* Title */}
      <div className="text-center mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3.5 py-1.5 rounded-full inline-block mb-3">
          Selected Work
        </span>
        <h2 className="text-4xl sm:text-5xl font-extrabold font-outfit text-white tracking-tight">
          Featured <span className="text-gradient-cyan">Projects</span>
        </h2>
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mt-3 font-light">
          A collection of web applications, e-commerce platforms, and digital designs built with modern web technologies.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
        {[
          { id: "all", label: "All Projects" },
          { id: "ecommerce", label: "E-Commerce" },
          { id: "webapps", label: "Web Applications" },
          { id: "design", label: "UI/UX & Figma" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilter(tab.id)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              filter === tab.id
                ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 shadow-md shadow-cyan-500/25"
                : "bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="glass-card glass-card-hover rounded-3xl overflow-hidden border border-slate-800 flex flex-col justify-between shadow-xl group"
            >
              <div>
                {/* Project Image Box */}
                <div className="relative w-full h-56 bg-slate-900 overflow-hidden border-b border-slate-800">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  
                  {/* Badge Overlay */}
                  <span className="absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full bg-slate-950/90 border border-slate-800 text-cyan-400 backdrop-blur-md">
                    {project.category.toUpperCase()}
                  </span>
                </div>

                {/* Info Container */}
                <div className="p-6">
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-white font-outfit group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mt-2 leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-6 pt-0">
                {project.link !== "#" ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold bg-slate-900 border border-slate-800 text-slate-200 hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-400 transition-all duration-300 text-sm"
                  >
                    <FaExternalLinkAlt className="text-xs" /> Live Preview
                  </a>
                ) : (
                  <span className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold bg-slate-900/50 border border-slate-800/50 text-slate-500 text-sm cursor-not-allowed">
                    <FaLayerGroup className="text-xs" /> Built Project
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

