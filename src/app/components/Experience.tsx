"use client";
import { motion } from "framer-motion";
import { FaLaptopCode, FaChalkboardTeacher, FaBriefcase, FaChartLine } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      title: "Head of Faculty for Web Development",
      company: "Bitcraft",
      period: "Present",
      description:
        "Directing curriculum, leading practical lectures in HTML, CSS, JavaScript, and TypeScript, and mentoring future software engineers.",
      icon: <FaLaptopCode className="text-cyan-400" />,
      accent: "border-cyan-500/30 text-cyan-400",
    },
    {
      title: "Head of Computer Faculty",
      company: "Falcon Grammar School",
      period: "2019 - 2023",
      description:
        "Taught 9th and 10th matriculation computer sciences, supervised Karachi Board computer practical exams, and managed faculty operations.",
      icon: <FaChalkboardTeacher className="text-indigo-400" />,
      accent: "border-indigo-500/30 text-indigo-400",
    },
    {
      title: "Accounts Manager",
      company: "Beyond Borders, Dubai",
      period: "2017 - 2019",
      description:
        "Supervised corporate accounting, managed international financial compliance, reconciled ledger books, and optimized operational costs.",
      icon: <FaBriefcase className="text-amber-400" />,
      accent: "border-amber-500/30 text-amber-400",
    },
    {
      title: "Accounts Manager",
      company: "Venture Crest Pvt Ltd, DHA Karachi",
      period: "2015 - 2017",
      description:
        "Managed company financials, generated monthly audit balance sheets, and collaborated with executive leadership on fiscal strategy.",
      icon: <FaChartLine className="text-purple-400" />,
      accent: "border-purple-500/30 text-purple-400",
    },
  ];

  return (
    <section id="experience" className="py-16 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto scroll-mt-24">
      <div className="text-center mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3.5 py-1.5 rounded-full inline-block mb-3">
          Career Milestone
        </span>
        <h2 className="text-4xl sm:text-5xl font-extrabold font-outfit text-white tracking-tight">
          Professional <span className="text-gradient-cyan">Experience</span>
        </h2>
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mt-3 font-light">
          A proven track record spanning technical faculty leadership, software training, and executive corporate account management.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            className={`glass-card glass-card-hover rounded-3xl p-8 border ${exp.accent} relative overflow-hidden flex flex-col justify-between shadow-xl`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-xl shadow-inner">
                  {exp.icon}
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
                  {exp.period}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white font-outfit">
                {exp.title}
              </h3>
              <p className="text-cyan-400 font-medium text-sm mt-1">
                {exp.company}
              </p>
              <p className="text-slate-400 text-sm sm:text-base mt-4 leading-relaxed font-light">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

