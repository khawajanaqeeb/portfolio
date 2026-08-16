"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaArrowUp,
  FaCode,
  FaBrain,
  FaChalkboardTeacher,
  FaDownload,
  FaPaperPlane,
} from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiReact, SiPython } from "react-icons/si";

import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Experience from "./components/Experience";
import ProfessionalDev from "./components/ProfessionalDev";
import ProjectPortfolio from "./components/ProjectPortfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Awards from "./components/Awards";
import Gallery from "@/app/components/Gallery";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  const roles = [
    "Full Stack Web Developer",
    "AI & Cloud Specialist (GIAIC)",
    "Head of Computer Faculty",
    "System & Networking Engineer",
  ];

  // Typing role rotator effect
  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [roles.length]);

  // Top progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id="home" className="min-h-screen bg-slate-950 text-slate-100 mesh-glow-bg relative">
      {/* Top Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 origin-left z-[60]"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Left Content */}
        <motion.div
          className="w-full lg:w-3/5 text-center lg:text-left space-y-6 z-10"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-semibold text-cyan-400 shadow-lg shadow-cyan-950/30">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            Available for New Projects & Mentorship
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-outfit leading-tight">
            Hi, I am{" "}
            <span className="text-gradient-cyan block mt-1">Khawaja Naqeeb</span>
          </h1>

          {/* Dynamic Animated Role */}
          <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
            <motion.p
              key={roleIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="text-xl sm:text-2xl font-semibold text-slate-300 flex items-center gap-3"
            >
              <span className="text-cyan-400 font-mono">&gt;</span>
              <span>{roles[roleIndex]}</span>
            </motion.p>
          </div>

          <p className="text-base sm:text-lg text-slate-400 max-w-2xl font-light leading-relaxed">
            Passionate about crafting high-performance full-stack web applications, exploring Next.js & Artificial Intelligence, and empowering students with cutting-edge tech education.
          </p>

          {/* Tech Stack Badges */}
          <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
            <span className="text-xs uppercase font-bold tracking-wider text-slate-500 w-full lg:w-auto">
              Core Tech:
            </span>
            {[
              { icon: <SiNextdotjs className="text-white" />, label: "Next.js 14" },
              { icon: <SiReact className="text-cyan-400" />, label: "React" },
              { icon: <SiTypescript className="text-blue-400" />, label: "TypeScript" },
              { icon: <SiTailwindcss className="text-cyan-300" />, label: "Tailwind CSS" },
              { icon: <SiPython className="text-yellow-400" />, label: "Python & AI" },
            ].map((tech, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-medium text-slate-300 hover:border-cyan-500/40 hover:text-white transition-colors"
              >
                {tech.icon}
                {tech.label}
              </span>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <a
              href="#projectportfolio"
              className="px-6 py-3.5 rounded-xl font-bold bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <FaCode /> View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3.5 rounded-xl font-bold bg-slate-900 border border-slate-700/80 text-slate-200 hover:bg-slate-800 hover:text-cyan-400 hover:border-cyan-500/50 hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <FaPaperPlane className="text-xs" /> Contact Me
            </a>
            <a
              href="#contact"
              className="px-4 py-3.5 rounded-xl font-bold text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-sm"
            >
              <FaDownload /> Resume Info
            </a>
          </div>

          {/* Social Quick Links */}
          <div className="pt-2 flex items-center justify-center lg:justify-start gap-5 text-slate-400 text-xl">
            <a
              href="https://www.linkedin.com/in/khawaja-naqeeb-uddin-75203a143/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 hover:scale-110 transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>
          </div>
        </motion.div>

        {/* Right Avatar Card */}
        <motion.div
          className="w-full lg:w-2/5 flex justify-center z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative group">
            {/* Ambient Animated Ring */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 rounded-full blur-xl opacity-65 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />

            {/* Profile Frame */}
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full border-4 border-slate-900 bg-slate-900 overflow-hidden shadow-2xl">
              <Image
                src="/naq1.png"
                alt="Khawaja Naqeeb"
                fill
                sizes="(max-width: 768px) 224px, 320px"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                priority
              />
            </div>

            {/* Floating Badges */}
            <motion.div
              className="absolute -bottom-2 -left-4 glass-card px-4 py-2 rounded-2xl border border-cyan-500/30 flex items-center gap-2.5 shadow-xl text-xs font-semibold text-cyan-300"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <FaBrain className="text-cyan-400 text-base" />
              <span>GIAIC AI Student</span>
            </motion.div>

            <motion.div
              className="absolute top-4 -right-4 glass-card px-4 py-2 rounded-2xl border border-indigo-500/30 flex items-center gap-2.5 shadow-xl text-xs font-semibold text-indigo-300"
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
            >
              <FaChalkboardTeacher className="text-indigo-400 text-base" />
              <span>Head of Faculty</span>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Main Sections */}
      <div className="space-y-24 pb-20">
        <AboutMe />
        <Education />
        <Experience />
        <ProjectPortfolio />
        <ProfessionalDev />
        <Awards />
        <Skills />
        <Gallery />
        <Contact />
      </div>

      {/* Back To Top Floating Action Button */}
      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-600 text-slate-950 font-bold shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300"
          aria-label="Back to Top"
        >
          <FaArrowUp />
        </motion.button>
      )}
    </div>
  );
}

