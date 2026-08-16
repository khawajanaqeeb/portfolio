"use client";
import { motion } from "framer-motion";
import { FaTrophy, FaMedal, FaStar } from "react-icons/fa";

export default function Awards() {
  const awards = [
    {
      title: "Completed Quarter 1 - GIAIC AI Initiative",
      description:
        "Equipped with foundational mastery in TypeScript, Next.js 14, and Artificial Intelligence paradigms under the Sindh Governor Initiative.",
      icon: <FaStar className="text-amber-400 text-2xl" />,
      tag: "AI & Cloud Certification",
      accent: "border-amber-500/40",
    },
    {
      title: "Excellence in Computer Teaching Award",
      description:
        "Awarded for outstanding instruction and student success rate for 9th & 10th matric computer science practical examinations.",
      icon: <FaTrophy className="text-cyan-400 text-2xl" />,
      tag: "Faculty Distinction",
      accent: "border-cyan-500/40",
    },
    {
      title: "Best Teacher Award (All Sindh Appreciation 2021)",
      description:
        "Recognized at the prestigious All Sindh Teachers Appreciation Award Ceremony for exceptional teaching in Mathematics & Computer Science.",
      icon: <FaMedal className="text-purple-400 text-2xl" />,
      tag: "Provincial Recognition",
      accent: "border-purple-500/40",
    },
  ];

  return (
    <section id="awards" className="py-16 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto scroll-mt-24">
      <div className="text-center mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3.5 py-1.5 rounded-full inline-block mb-3">
          Honors & Recognitions
        </span>
        <h2 className="text-4xl sm:text-5xl font-extrabold font-outfit text-white tracking-tight">
          Awards & <span className="text-gradient-gold">Achievements</span>
        </h2>
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mt-3 font-light">
          Milestones reflecting dedication to teaching excellence, software engineering, and continuous learning.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {awards.map((award, idx) => (
          <motion.div
            key={idx}
            className={`glass-card glass-card-hover rounded-3xl p-8 border ${award.accent} flex flex-col justify-between shadow-xl group relative overflow-hidden`}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                  {award.icon}
                </div>
                <span className="text-[11px] font-bold tracking-wide uppercase px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-amber-300">
                  {award.tag}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white font-outfit group-hover:text-amber-300 transition-colors">
                {award.title}
              </h3>
              <p className="text-slate-400 text-sm mt-3 leading-relaxed font-light">
                {award.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

