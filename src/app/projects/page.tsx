"use client";
import { useState } from "react";
import Image from "next/image";
import PageTransition from "@/app/components/PageTransition";
import { FaExternalLinkAlt, FaGithub, FaCode, FaRobot, FaShoppingBag, FaGraduationCap } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "Furniture E-Commerce Market Place",
      repoName: "hackathon-iii",
      category: "ecommerce",
      description:
        "Full-featured e-commerce platform for furniture shopping built with Next.js, Tailwind CSS, TypeScript, and Sanity CMS.",
      image: "/furniro.jpeg",
      tech: ["Next.js", "Tailwind CSS", "Sanity CMS", "TypeScript"],
      link: "https://hackathon-iii.vercel.app",
      github: "https://github.com/khawajanaqeeb/hackathon-iii",
      accent: "border-amber-500/40",
      featured: true,
    },
    {
      title: "Adamjee Coaching Center Portal",
      repoName: "AFES-EDU",
      category: "webapps",
      description:
        "Client project built for Adamjee Coaching Center providing student management, educational resources, and course info.",
      image: "/figma.png",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      link: "https://afes-edu.vercel.app",
      github: "https://github.com/khawajanaqeeb/AFES-EDU",
      accent: "border-emerald-500/40",
      featured: true,
    },
    {
      title: "Gemini Multi-AI Agent UI",
      repoName: "gemini_multi_agent_ui",
      category: "ai-python",
      description:
        "Multi-AI agent orchestration system with a Streamlit user interface powered by Google Gemini API.",
      image: "/ts.jpg",
      tech: ["Python", "Gemini API", "Streamlit", "AI Agents"],
      link: "#",
      github: "https://github.com/khawajanaqeeb/gemini_multi_agent_ui",
      accent: "border-cyan-500/40",
      featured: true,
    },
    {
      title: "EstateFlow FTE CRM",
      repoName: "estateflow-crm-fte",
      category: "ai-python",
      description:
        "Personal FTE CRM application engineered for real estate lead tracking and property workflow automation.",
      image: "/networking.jpg",
      tech: ["Python", "AI Agents", "Streamlit", "CRM"],
      link: "#",
      github: "https://github.com/khawajanaqeeb/estateflow-crm-fte",
      accent: "border-purple-500/40",
    },
    {
      title: "Personal AI Employee Assistant",
      repoName: "Q4-Hackathon-0-Personal-AI-Employee",
      category: "ai-python",
      description:
        "Autonomous AI employee assistant designed for task execution, scheduling, and workflow automation.",
      image: "/java.png",
      tech: ["Python", "Agentic AI", "Automation"],
      link: "#",
      github: "https://github.com/khawajanaqeeb/Q4-Hackathon-0-Personal-AI-Employee",
      accent: "border-indigo-500/40",
    },
    {
      title: "Punch & Vector Platform",
      repoName: "punchnvector",
      category: "design",
      description:
        "Web application built for vector graphics workflows and design prototyping.",
      image: "/figma.png",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      link: "https://punchnvector.vercel.app",
      github: "https://github.com/khawajanaqeeb/punchnvector",
      accent: "border-pink-500/40",
    },
    {
      title: "Figma Design to Next.js",
      repoName: "figma-assignment",
      category: "design",
      description:
        "Pixel-perfect conversion of a complex Figma design layout into a responsive Next.js application.",
      image: "/figma.png",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Figma"],
      link: "https://figma-assignment-alpha.vercel.app",
      github: "https://github.com/khawajanaqeeb/figma-assignment",
      accent: "border-blue-500/40",
    },
    {
      title: "Bitcraft Institute Faculty Portal",
      repoName: "bitcraft-institute",
      category: "webapps",
      description:
        "Web Development faculty portal built for student course tracking and curriculum delivery at Bitcraft.",
      image: "/html.jfif",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      link: "https://bitcraft-institute.vercel.app",
      github: "https://github.com/khawajanaqeeb/bitcraft-institute",
      accent: "border-teal-500/40",
    },
    {
      title: "Interactive Todo List App",
      repoName: "todolist",
      category: "webapps",
      description:
        "Task management application featuring interactive todo management, persistence, and state tracking.",
      image: "/todolist.jpeg",
      tech: ["TypeScript", "React", "Tailwind CSS"],
      link: "https://todolist-pi-orcin.vercel.app",
      github: "https://github.com/khawajanaqeeb/todolist",
      accent: "border-cyan-500/40",
    },
    {
      title: "Dynamic Country Routing",
      repoName: "dynamic-route-countries",
      category: "webapps",
      description:
        "Next.js App Router application showcasing dynamic parameters for country information and flags.",
      image: "/css.png",
      tech: ["Next.js", "TypeScript", "Dynamic Routes"],
      link: "https://dynamic-route-countries.vercel.app",
      github: "https://github.com/khawajanaqeeb/dynamic-route-countries",
      accent: "border-indigo-500/40",
    },
    {
      title: "Secure Data Encryption System",
      repoName: "Secure-Data-Encryption-System-Using-Streamlit",
      category: "ai-python",
      description:
        "Streamlit-based cryptography application providing secure message hashing and data encryption.",
      image: "/ts.jpg",
      tech: ["Python", "Streamlit", "Cryptography"],
      link: "#",
      github: "https://github.com/khawajanaqeeb/Secure-Data-Encryption-System-Using-Streamlit",
      accent: "border-emerald-500/40",
    },
    {
      title: "CLI Number Guessing Game",
      repoName: "kns-numberguessing",
      category: "webapps",
      description:
        "Command-line interactive number guessing game developed in TypeScript.",
      image: "/simplecalculator.png",
      tech: ["TypeScript", "Node.js", "CLI"],
      link: "#",
      github: "https://github.com/khawajanaqeeb/kns-numberguessing",
      accent: "border-slate-500/40",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((item) => item.category === filter);

  return (
    <PageTransition>
      <div className="py-12 sm:py-16 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 rounded-full inline-block">
            GitHub Verified Repositories
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-white">
            Real Project <span className="text-gradient-cyan">Portfolio</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Real-world applications, AI multi-agent systems, client portals, and e-commerce platforms sourced directly from my GitHub profile.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {[
            { id: "all", label: `All Repos (${projects.length})`, icon: <FaCode /> },
            { id: "ai-python", label: "AI & Python", icon: <FaRobot /> },
            { id: "webapps", label: "Web Applications", icon: <FaGraduationCap /> },
            { id: "ecommerce", label: "E-Commerce", icon: <FaShoppingBag /> },
            { id: "design", label: "Figma & Vector", icon: <FaCode /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                filter === tab.id
                  ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 shadow-lg shadow-cyan-500/25 scale-105"
                  : "bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700"
              }`}
            >
              <span className="text-xs">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.repoName}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className={`glass-card glass-card-hover rounded-3xl overflow-hidden border ${project.accent} flex flex-col justify-between shadow-xl group`}
              >
                <div>
                  {/* Card Banner Header */}
                  <div className="relative w-full h-52 bg-slate-950 overflow-hidden border-b border-slate-800">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                    
                    <span className="absolute top-4 right-4 text-[10px] font-extrabold uppercase px-3 py-1 rounded-full bg-slate-950/90 border border-slate-800 text-cyan-400 backdrop-blur-md shadow-md">
                      {project.category}
                    </span>
                  </div>

                  {/* Body Info */}
                  <div className="p-6 space-y-3">
                    <div className="flex flex-wrap gap-1.5">
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
                    <p className="text-slate-400 text-sm font-light leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Card Action Links */}
                <div className="p-6 pt-0 flex gap-3">
                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 hover:shadow-lg hover:shadow-cyan-500/25 transition-all text-xs uppercase tracking-wider"
                    >
                      <FaExternalLinkAlt className="text-xs" /> Live Demo
                    </a>
                  )}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all text-xs uppercase tracking-wider"
                  >
                    <FaGithub className="text-sm" /> Code Repo
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </PageTransition>
  );
}
