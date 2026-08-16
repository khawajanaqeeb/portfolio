"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import PageTransition from "@/app/components/PageTransition";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCode,
  FaLaptopCode,
  FaGraduationCap,
  FaBriefcase,
  FaAward,
  FaCertificate,
  FaImages,
  FaEnvelope,
  FaBrain,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiReact, SiPython } from "react-icons/si";

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);

  const roles = [
    "Full Stack Web Developer",
    "AI & Cloud Specialist (GIAIC)",
    "Head of Computer Faculty",
    "System & Networking Engineer",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [roles.length]);

  const quickSections = [
    {
      title: "About Me",
      description: "Discover my journey, philosophy, and passion for Web Development and Artificial Intelligence.",
      href: "/about",
      icon: <FaLaptopCode className="text-cyan-400 text-2xl" />,
      accent: "border-cyan-500/40",
      tag: "Profile",
    },
    {
      title: "Featured Projects",
      description: "Explore e-commerce platforms, web apps, and dynamic tools built with Next.js & TypeScript.",
      href: "/projects",
      icon: <FaCode className="text-indigo-400 text-2xl" />,
      accent: "border-indigo-500/40",
      tag: "Portfolio",
    },
    {
      title: "Technical Skills",
      description: "Proficiency in HTML, CSS, JavaScript, TypeScript, Next.js, and Computer Networking.",
      href: "/skills",
      icon: <SiNextdotjs className="text-white text-2xl" />,
      accent: "border-purple-500/40",
      tag: "Competencies",
    },
    {
      title: "Professional Experience",
      description: "Leadership as Head of Faculty at Bitcraft, Falcon Grammar School, and Corporate Accounts.",
      href: "/experience",
      icon: <FaBriefcase className="text-amber-400 text-2xl" />,
      accent: "border-amber-500/40",
      tag: "Career",
    },
    {
      title: "Education History",
      description: "Masters in Economics, Graduation in Commerce (B.Com), and analytical sciences background.",
      href: "/education",
      icon: <FaGraduationCap className="text-emerald-400 text-2xl" />,
      accent: "border-emerald-500/40",
      tag: "Academics",
    },
    {
      title: "Professional Development",
      description: "MCSE Certification from Microsoft, Software Diploma, and GIAIC AI Quarter 2.",
      href: "/professional-dev",
      icon: <FaCertificate className="text-blue-400 text-2xl" />,
      accent: "border-blue-500/40",
      tag: "Certifications",
    },
    {
      title: "Awards & Honors",
      description: "Best Teacher Award 2021, Excellence in Computer Teaching, and GIAIC milestones.",
      href: "/awards",
      icon: <FaAward className="text-yellow-400 text-2xl" />,
      accent: "border-yellow-400/40",
      tag: "Distinctions",
    },
    {
      title: "Media Gallery",
      description: "Photos and video highlights of student mentorship, teaching seminars, and ceremonies.",
      href: "/gallery",
      icon: <FaImages className="text-pink-400 text-2xl" />,
      accent: "border-pink-500/40",
      tag: "Showcase",
    },
  ];

  return (
    <PageTransition>
      <div className="mesh-glow-bg">
        {/* Hero Section */}
        <section className="py-12 sm:py-20 md:py-28 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Left Text */}
          <div className="w-full lg:w-3/5 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-bold uppercase tracking-wider text-cyan-400 shadow-lg shadow-cyan-950/30">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              Available for New Projects &amp; Mentorship
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-heading leading-tight text-white">
              Welcome to <span className="text-gradient-cyan block mt-1">My Portfolio</span>
            </h1>

            {/* Dynamic Role Rotator */}
            <div className="h-10 flex items-center justify-center lg:justify-start">
              <motion.p
                key={roleIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
                className="text-xl sm:text-2xl font-bold text-slate-300 flex items-center gap-3 font-heading"
              >
                <span className="text-cyan-400 font-mono">&gt;</span>
                <span>{roles[roleIndex]}</span>
              </motion.p>
            </div>

            <div className="space-y-2 text-slate-300 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
              <p>
                Hi, I am <span className="font-semibold text-cyan-300">Khawaja Naqeeb Uddin</span>. A passionate web developer and tech enthusiast, eager to create impactful digital experiences.
              </p>
              <p className="text-slate-400">
                Explore my journey in technology, development, and AI.
              </p>
            </div>


            {/* Core Tech Stack */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="text-xs uppercase font-bold tracking-wider text-slate-500 w-full lg:w-auto">
                Tech Stack:
              </span>
              {[
                { icon: <SiNextdotjs className="text-white" />, label: "Next.js" },
                { icon: <SiReact className="text-cyan-400" />, label: "React" },
                { icon: <SiTypescript className="text-blue-400" />, label: "TypeScript" },
                { icon: <SiTailwindcss className="text-cyan-300" />, label: "Tailwind" },
                { icon: <SiPython className="text-yellow-400" />, label: "Python & AI" },
              ].map((tech, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-xs font-semibold text-slate-300"
                >
                  {tech.icon}
                  {tech.label}
                </span>
              ))}
            </div>

            {/* Action CTAs */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Link
                href="/projects"
                className="px-6 py-3.5 rounded-xl font-bold uppercase tracking-wider bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 text-slate-950 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300 flex items-center gap-2 text-sm"
              >
                <FaCode /> View Projects
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-xl font-bold uppercase tracking-wider bg-slate-900 border border-slate-700 text-slate-200 hover:bg-slate-800 hover:text-cyan-400 hover:border-cyan-500/50 hover:scale-105 transition-all duration-300 flex items-center gap-2 text-sm"
              >
                <FaEnvelope className="text-xs" /> Contact Me
              </Link>
              <Link
                href="/about"
                className="px-4 py-3.5 rounded-xl font-bold text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 text-sm"
              >
                About Journey &rarr;
              </Link>
            </div>
          </div>

          {/* Right Avatar Card */}
          <div className="w-full lg:w-2/5 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 rounded-full blur-2xl opacity-70 group-hover:opacity-100 transition duration-700 animate-pulse" />

              <div className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full border-4 border-slate-900 bg-slate-900 overflow-hidden shadow-2xl">
                <Image
                  src="/naq1.png"
                  alt="Khawaja Naqeeb Uddin"
                  fill
                  sizes="320px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>

              {/* Floating Status Badges */}
              <div className="absolute -bottom-2 -left-4 glass-card px-4 py-2 rounded-2xl border border-cyan-500/40 flex items-center gap-2 shadow-xl text-xs font-bold text-cyan-300">
                <FaBrain className="text-cyan-400 text-sm" />
                <span>GIAIC AI Student</span>
              </div>

              <div className="absolute top-4 -right-4 glass-card px-4 py-2 rounded-2xl border border-indigo-500/40 flex items-center gap-2 shadow-xl text-xs font-bold text-indigo-300">
                <FaChalkboardTeacher className="text-indigo-400 text-sm" />
                <span>Head of Faculty</span>
              </div>
            </div>
          </div>
        </section>

        {/* Explore Portfolio Sections Grid */}
        <section className="py-16 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 rounded-full inline-block">
              Multi-Page Navigation
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
              Explore <span className="text-gradient-cyan">Portfolio Sections</span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
              Navigate seamlessly through dedicated pages detailing projects, skills, certifications, career milestones, and media.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickSections.map((sec, idx) => (
              <Link
                key={idx}
                href={sec.href}
                className={`glass-card glass-card-hover rounded-3xl p-6 border ${sec.accent} shadow-xl flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                      {sec.icon}
                    </div>
                    <span className="text-[11px] font-bold uppercase px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 group-hover:text-cyan-400 transition-colors">
                      {sec.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white font-heading group-hover:text-cyan-400 transition-colors">
                    {sec.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm mt-2 font-light leading-relaxed">
                    {sec.description}
                  </p>
                </div>

                <div className="pt-6 flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                  <span>View Page</span>
                  <FaArrowRight className="text-xs" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA Contact Banner */}
        <section className="py-16 px-4 sm:px-8 lg:px-12 max-w-5xl mx-auto">
          <div className="glass-card rounded-3xl p-8 sm:p-12 border border-cyan-500/30 text-center space-y-6 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 rounded-full inline-block">
              Let&apos;s Build Together
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
              Ready to create something extraordinary?
            </h2>
            <p className="text-slate-400 text-base max-w-xl mx-auto font-light leading-relaxed">
              Whether you need full stack development, mentorship, or technology consultancy, I am ready to collaborate.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-xl font-bold uppercase tracking-wider bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 text-slate-950 shadow-lg shadow-cyan-500/25 hover:scale-105 transition-all duration-300 text-sm"
              >
                Open Contact Page
              </Link>
              <a
                href="https://wa.me/923452435349"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-3.5 rounded-xl font-bold uppercase tracking-wider bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/25 hover:scale-105 transition-all duration-300 text-sm"
              >
                WhatsApp Direct
              </a>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
