"use client";
import { useState } from "react";
import Image from "next/image";
import PageTransition from "@/app/components/PageTransition";
import { motion, AnimatePresence } from "framer-motion";
import { SiHtml5, SiCss3, SiJavascript, SiTypescript } from "react-icons/si";
import { FaNetworkWired } from "react-icons/fa";

export default function SkillsPage() {
  const [filter, setFilter] = useState("all");

  const skills = [
    {
      name: "HTML",
      category: "web",
      level: 90,
      image: "/html.jfif",
      icon: <SiHtml5 className="text-orange-500 text-3xl" />,
      description:
        "Experienced in building web structures with HTML, creating semantic and accessible web pages.",
      accent: "border-orange-500/40",
    },
    {
      name: "CSS",
      category: "web",
      level: 85,
      image: "/css.png",
      icon: <SiCss3 className="text-blue-500 text-3xl" />,
      description:
        "Knowledgeable in styling web pages, making them visually appealing, responsive, and user-friendly.",
      accent: "border-blue-500/40",
    },
    {
      name: "JavaScript",
      category: "programming",
      level: 75,
      image: "/java.png",
      icon: <SiJavascript className="text-yellow-400 text-3xl" />,
      description:
        "Experience in adding interactivity and logic to web pages using JavaScript.",
      accent: "border-yellow-500/40",
    },
    {
      name: "TypeScript",
      category: "programming",
      level: 70,
      image: "/ts.jpg",
      icon: <SiTypescript className="text-blue-400 text-3xl" />,
      description:
        "Learning TypeScript to add type safety and enhance JavaScript projects.",
      accent: "border-cyan-500/40",
    },
    {
      name: "Computer Networking",
      category: "networking",
      level: 80,
      image: "/networking.jpg",
      icon: <FaNetworkWired className="text-emerald-400 text-3xl" />,
      description:
        "Managing and configuring networks to ensure smooth communication between computers in an organization.",
      accent: "border-emerald-500/40",
    },
  ];

  const filteredSkills =
    filter === "all" ? skills : skills.filter((s) => s.category === filter);

  return (
    <PageTransition>
      <div className="py-12 sm:py-16 px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 rounded-full inline-block">
            Core Competencies
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-white">
            My <span className="text-gradient-cyan">Skills</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            I have gained expertise in various fields, including computer networking and web development technologies.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {[
            { id: "all", label: "All Skills" },
            { id: "web", label: "Web Development" },
            { id: "programming", label: "Languages" },
            { id: "networking", label: "Networking" },
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

        {/* Skills Cards Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredSkills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className={`glass-card glass-card-hover rounded-3xl p-6 border ${skill.accent} shadow-xl flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-slate-800 flex-shrink-0">
                      <Image
                        src={skill.image}
                        alt={skill.name}
                        fill
                        sizes="48px"
                        className="object-cover group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white font-heading group-hover:text-cyan-400 transition-colors">
                        {skill.name}
                      </h2>
                      <span className="text-xs font-semibold text-slate-400">
                        {skill.level}% Expertise
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm mb-6 font-light leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Progress Bar */}
                <div>
                  <div className="w-full bg-slate-900 border border-slate-800 rounded-full h-2.5 overflow-hidden">
                    <motion.div
                      className="bg-gradient-to-r from-cyan-400 to-indigo-500 h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </PageTransition>
  );
}
