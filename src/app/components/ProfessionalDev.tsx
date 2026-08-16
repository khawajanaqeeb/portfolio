"use client";
import { motion } from "framer-motion";
import { FaCertificate, FaCloud, FaLaptopCode } from "react-icons/fa";

export default function ProfessionalDev() {
  const certifications = [
    {
      title: "GIAIC (Governor Initiative for AI & Cloud Computing)",
      organization: "Currently Enrolled (Quarter 2)",
      description:
        "Passed Quarter One with high marks. Advanced coursework in Next.js, Python, Generative AI models, and Cloud Infrastructure.",
      icon: <FaCloud className="text-cyan-400 text-xl" />,
      tag: "Active Specialist Program",
      accent: "border-cyan-500/40",
    },
    {
      title: "MCSE (Microsoft Certified System Engineer)",
      organization: "Microsoft Certified",
      description:
        "Comprehensive certification in corporate networking, Active Directory, server infrastructure, and network security protocols.",
      icon: <FaCertificate className="text-amber-400 text-xl" />,
      tag: "Professional Certification",
      accent: "border-amber-500/40",
    },
    {
      title: "Software Engineering Diploma",
      organization: "Computer Guide Institute",
      description:
        "Rigorous diploma covering programming paradigms, database design, software architecture, and algorithm design.",
      icon: <FaLaptopCode className="text-indigo-400 text-xl" />,
      tag: "Diploma",
      accent: "border-indigo-500/40",
    },
  ];

  return (
    <section id="professionaldev" className="py-16 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto scroll-mt-24">
      <div className="text-center mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3.5 py-1.5 rounded-full inline-block mb-3">
          Certifications & Learning
        </span>
        <h2 className="text-4xl sm:text-5xl font-extrabold font-outfit text-white tracking-tight">
          Professional <span className="text-gradient-cyan">Development</span>
        </h2>
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mt-3 font-light">
          Continuous upskilling through industry-recognized certifications and advanced specialization programs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {certifications.map((cert, idx) => (
          <motion.div
            key={idx}
            className={`glass-card glass-card-hover rounded-3xl p-8 border ${cert.accent} flex flex-col justify-between shadow-xl group`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                  {cert.icon}
                </div>
                <span className="text-[11px] font-bold tracking-wide uppercase px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-300">
                  {cert.tag}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white font-outfit group-hover:text-cyan-400 transition-colors">
                {cert.title}
              </h3>
              <p className="text-cyan-400 font-semibold text-xs mt-1">
                {cert.organization}
              </p>
              <p className="text-slate-400 text-sm mt-4 leading-relaxed font-light">
                {cert.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

