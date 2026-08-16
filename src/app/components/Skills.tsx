"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";
import { FaNetworkWired } from "react-icons/fa";



export default function Skills() {
  const [filter, setFilter] = useState("all");

  const skills = [
    {
      name: "HTML5",
      category: "web",
      level: 90,
      image: "/html.jfif",
      icon: <SiHtml5 className="text-orange-500 text-3xl" />,
      description: "Semantic markup, accessibility standard compliance, and structured web layouts.",
    },
    {
      name: "CSS3 & Styling",
      category: "web",
      level: 85,
      image: "/css.png",
      icon: <SiCss3 className="text-blue-500 text-3xl" />,
      description: "Responsive layouts, Flexbox/Grid, keyframe animations, and Tailwind CSS design systems.",
    },
    {
      name: "JavaScript (ES6+)",
      category: "programming",
      level: 85,
      image: "/java.png",
      icon: <SiJavascript className="text-yellow-400 text-3xl" />,
      description: "Asynchronous programming, DOM manipulation, ES6+ syntax, and functional logic.",
    },
    {
      name: "TypeScript",
      category: "programming",
      level: 80,
      image: "/ts.jpg",
      icon: <SiTypescript className="text-blue-400 text-3xl" />,
      description: "Strong typing, interface definitions, generic types, and compile-time bug prevention.",
    },
    {
      name: "React & Next.js",
      category: "web",
      level: 85,
      icon: <SiNextdotjs className="text-white text-3xl" />,
      description: "App Router architecture, Server Components, SSR, static generation, and custom hooks.",
    },
    {
      name: "Computer Networking",
      category: "networking",
      level: 80,
      image: "/networking.jpg",
      icon: <FaNetworkWired className="text-cyan-400 text-3xl" />,
      description: "Network configuration, IP subnets, LAN/WAN architecture, TCP/IP, and MCSE standards.",
    },
  ];

  const filteredSkills =
    filter === "all" ? skills : skills.filter((s) => s.category === filter);

  return (
    <section id="skills" className="py-16 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto scroll-mt-24">
      <div className="text-center mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3.5 py-1.5 rounded-full inline-block mb-3">
          Technical Stack
        </span>
        <h2 className="text-4xl sm:text-5xl font-extrabold font-outfit text-white tracking-tight">
          Skills & <span className="text-gradient-cyan">Proficiency</span>
        </h2>
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mt-3 font-light">
          A blend of modern web development frameworks, systems engineering, and network architecture.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
        {[
          { id: "all", label: "All Skills" },
          { id: "web", label: "Web Development" },
          { id: "programming", label: "Languages" },
          { id: "networking", label: "Systems & Networks" },
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

      {/* Skills Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredSkills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="glass-card glass-card-hover rounded-3xl p-6 border border-slate-800 shadow-xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  {skill.image ? (
                    <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-slate-800 flex-shrink-0">
                      <Image
                        src={skill.image}
                        alt={skill.name}
                        fill
                        sizes="48px"
                        className="object-cover group-hover:scale-110 transition-transform"
                      />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0">
                      {skill.icon}
                    </div>
                  )}

                  <div>
                    <h3 className="text-xl font-bold text-white font-outfit group-hover:text-cyan-400 transition-colors">
                      {skill.name}
                    </h3>
                    <span className="text-xs font-semibold text-slate-400">
                      {skill.level}% Mastery
                    </span>
                  </div>
                </div>

                <p className="text-slate-400 text-sm mb-6 leading-relaxed font-light">
                  {skill.description}
                </p>
              </div>

              {/* Animated Progress Bar */}
              <div>
                <div className="w-full bg-slate-900 border border-slate-800 rounded-full h-2.5 overflow-hidden">
                  <motion.div
                    className="bg-gradient-to-r from-cyan-400 to-indigo-500 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

