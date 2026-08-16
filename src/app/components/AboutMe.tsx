"use client";
import { motion } from "framer-motion";
import { FaLaptopCode, FaBrain, FaAward, FaUserGraduate } from "react-icons/fa";

export default function AboutMe() {
  const stats = [
    {
      icon: <FaLaptopCode className="text-cyan-400 text-2xl" />,
      value: "6+",
      label: "Web Projects Completed",
    },
    {
      icon: <FaUserGraduate className="text-indigo-400 text-2xl" />,
      value: "100+",
      label: "Students Mentored",
    },
    {
      icon: <FaAward className="text-amber-400 text-2xl" />,
      value: "3+",
      label: "Teaching & Tech Awards",
    },
    {
      icon: <FaBrain className="text-purple-400 text-2xl" />,
      value: "Q2",
      label: "GIAIC AI & Cloud Computing",
    },
  ];

  return (
    <section
      id="aboutme"
      className="py-16 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto scroll-mt-24"
    >
      <motion.div
        className="glass-card glass-card-hover rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Ambient Top Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Who I Am
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold font-outfit text-white tracking-tight">
            About <span className="text-gradient-cyan">Me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Paragraph Description */}
          <div className="space-y-5 text-slate-300 font-light text-base sm:text-lg leading-relaxed">
            <p className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 shadow-inner">
              Hello! I am{" "}
              <span className="font-semibold text-cyan-300">
                Khawaja Naqeeb Uddin
              </span>
              , a dedicated{" "}
              <span className="text-cyan-400 font-medium">
                Full Stack Web Developer
              </span>{" "}
              and technology educator with a strong foundation in Economics and Computer Science.
            </p>

            <p className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 shadow-inner">
              Currently pursuing advanced studies in{" "}
              <span className="text-indigo-300 font-medium">
                Artificial Intelligence & Cloud Computing (GIAIC)
              </span>
              , I specialize in crafting modern web solutions with Next.js, React, TypeScript, and Tailwind CSS.
            </p>

            <p className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 shadow-inner">
              My journey combines software development with academic leadership as Head of Faculty for Web Development at Bitcraft. I am passionate about leveraging code to solve real-world problems and build the future of tech. 🚀
            </p>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col items-center justify-center text-center group hover:border-cyan-500/40 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 rounded-xl bg-slate-800/80 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <span className="text-3xl sm:text-4xl font-extrabold text-white font-outfit">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-medium text-slate-400 mt-1">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

