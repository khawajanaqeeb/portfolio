"use client";
import { motion } from "framer-motion";
import { FaGraduationCap, FaUniversity, FaBook, FaSchool } from "react-icons/fa";

export default function Education() {
  const educations = [
    {
      title: "Masters in Economics",
      institution: "University of Karachi",
      description: "Specialization in Economic Analysis, Financial Systems, and Quantitative Policy.",
      icon: <FaUniversity className="text-cyan-400" />,
      tag: "Postgraduate",
    },
    {
      title: "Graduation in Commerce (B.Com)",
      institution: "University of Karachi",
      description: "Focused on Business Economics, Accounting, Financial Principles, and Management.",
      icon: <FaGraduationCap className="text-indigo-400" />,
      tag: "Bachelor Degree",
    },
    {
      title: "Intermediate in Science (Pre-Engineering)",
      institution: "Karachi Board",
      description: "Advanced studies in Higher Mathematics, Physics, and Chemistry.",
      icon: <FaBook className="text-purple-400" />,
      tag: "HSC",
    },
    {
      title: "Matriculation in Science",
      institution: "Karachi Board",
      description: "Foundational sciences with high distinction in Mathematics and Computer Science.",
      icon: <FaSchool className="text-emerald-400" />,
      tag: "SSC",
    },
  ];

  return (
    <section id="education" className="py-16 px-6 sm:px-12 lg:px-20 max-w-6xl mx-auto scroll-mt-24">
      <div className="text-center mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3.5 py-1.5 rounded-full inline-block mb-3">
          Academic Background
        </span>
        <h2 className="text-4xl sm:text-5xl font-extrabold font-outfit text-white tracking-tight">
          Education <span className="text-gradient-cyan">History</span>
        </h2>
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mt-3 font-light">
          A solid academic foundation in economics, commerce, and analytical sciences powering technical problem solving.
        </p>
      </div>

      {/* Timeline Tree Container */}
      <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 lg:ml-28 space-y-12">
        {educations.map((edu, idx) => (
          <motion.div
            key={idx}
            className="relative pl-8 sm:pl-10 group"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
          >
            {/* Timeline Node Point */}
            <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-900 border-2 border-cyan-500/60 flex items-center justify-center text-sm shadow-md shadow-cyan-500/20 group-hover:scale-125 group-hover:border-cyan-400 group-hover:bg-cyan-500/20 transition-all duration-300">
              {edu.icon}
            </div>

            {/* Content Card */}
            <div className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold tracking-wide uppercase px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-cyan-300">
                  {edu.tag}
                </span>
                <span className="text-sm font-medium text-slate-400">
                  {edu.institution}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white font-outfit group-hover:text-cyan-400 transition-colors">
                {edu.title}
              </h3>
              <p className="text-slate-400 text-sm sm:text-base mt-2 leading-relaxed">
                {edu.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

