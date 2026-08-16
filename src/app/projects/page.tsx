"use client";
import { useState } from "react";
import Image from "next/image";
import PageTransition from "@/app/components/PageTransition";
import { FaExternalLinkAlt, FaLayerGroup } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "Furniture E-Commerce Website",
      category: "ecommerce",
      description:
        "A fully functional e-commerce platform for furniture shopping, built with Next.js, Tailwind CSS, and Sanity.",
      image: "/furniro.jpeg",
      tech: ["Next.js", "Tailwind CSS", "Sanity CMS", "TypeScript"],
      link: "https://hackathon-iii-kns.vercel.app/",
      accent: "border-amber-500/40",
    },
    {
      title: "Todo List",
      category: "webapps",
      description:
        "A simple and interactive Todo List app to manage daily tasks efficiently.",
      image: "/todolist.jpeg",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      link: "https://todolist-pi-orcin.vercel.app/",
      accent: "border-cyan-500/40",
    },
    {
      title: "Figma to HTML/CSS",
      category: "design",
      description:
        "Converted a Figma design into responsive HTML and CSS.",
      image: "/figma.png",
      tech: ["Figma", "HTML5", "CSS3", "JavaScript"],
      link: "https://figma-assignment-edited.vercel.app/",
      accent: "border-emerald-500/40",
    },
    {
      title: "Dynamic CV (HTML & CSS)",
      category: "design",
      description:
        "An interactive CV designed with HTML and CSS to showcase my achievements.",
      image: "/dynamic-cv.png",
      tech: ["HTML5", "CSS3", "JavaScript"],
      link: "#",
      accent: "border-purple-500/40",
    },
    {
      title: "Simple Calculator (TypeScript)",
      category: "webapps",
      description:
        "A basic calculator built with TypeScript for performing arithmetic operations.",
      image: "/simplecalculator.png",
      tech: ["TypeScript", "HTML5", "CSS3"],
      link: "#",
      accent: "border-blue-500/40",
    },
    {
      title: "Number Guessing Game (JavaScript)",
      category: "webapps",
      description:
        "A fun number guessing game where players guess a random number.",
      image: "/java.png",
      tech: ["JavaScript", "Algorithms"],
      link: "#",
      accent: "border-indigo-500/40",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((item) => item.category === filter);

  return (
    <PageTransition>
      <div className="py-12 sm:py-16 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 rounded-full inline-block">
            Portfolio Showcase
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-white">
            Project <span className="text-gradient-cyan">Portfolio</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            A showcase of projects demonstrating my expertise in various technologies.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {[
            { id: "all", label: "All Projects" },
            { id: "ecommerce", label: "E-Commerce" },
            { id: "webapps", label: "Web Apps" },
            { id: "design", label: "Figma & Design" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                filter === tab.id
                  ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 shadow-md shadow-cyan-500/25"
                  : "bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className={`glass-card glass-card-hover rounded-3xl overflow-hidden border ${project.accent} flex flex-col justify-between shadow-xl group`}
              >
                <div>
                  <div className="relative w-full h-56 bg-slate-900 overflow-hidden border-b border-slate-800">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-75" />
                    <span className="absolute top-4 right-4 text-[11px] font-bold px-3 py-1 rounded-full bg-slate-950/90 border border-slate-800 text-cyan-400 backdrop-blur-md">
                      {project.category.toUpperCase()}
                    </span>
                  </div>

                  <div className="p-6">
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

                    <h2 className="text-xl font-bold text-white font-heading group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-slate-400 text-sm mt-2 font-light leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  {project.link !== "#" ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold bg-slate-900 border border-slate-800 text-slate-200 hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-400 transition-all duration-300 text-sm"
                    >
                      <FaExternalLinkAlt className="text-xs" /> Live Preview
                    </a>
                  ) : (
                    <span className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold bg-slate-900/50 border border-slate-800/50 text-slate-500 text-sm">
                      <FaLayerGroup className="text-xs" /> Demo Build
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </PageTransition>
  );
}
