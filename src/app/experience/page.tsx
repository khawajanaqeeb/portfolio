import { Metadata } from "next";
import PageTransition from "@/app/components/PageTransition";
import { FaLaptopCode, FaChalkboardTeacher, FaBriefcase, FaChartLine } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Professional Experience | Khawaja Naqeeb Uddin",
  description: "Work history, leadership, and teaching experience of Khawaja Naqeeb Uddin.",
};

export default function ExperiencePage() {
  const experiences = [
    {
      title: "Head of Faculty for Web Development",
      company: "Bitcraft",
      period: "Current Role",
      description:
        "Currently teaching HTML, CSS, JavaScript, and TypeScript while mentoring students to excel in web development.",
      icon: <FaLaptopCode className="text-cyan-400 text-xl" />,
      accent: "border-cyan-500/40",
    },
    {
      title: "Head of Computer Faculty",
      company: "Falcon Grammar School",
      period: "Faculty Leadership",
      description:
        "Taught 9th and 10th classes, supervised computer practicals for the Karachi Board, and managed the computer faculty.",
      icon: <FaChalkboardTeacher className="text-emerald-400 text-xl" />,
      accent: "border-emerald-500/40",
    },
    {
      title: "Accounts Manager",
      company: "Beyond Borders, Dubai",
      period: "International Experience",
      description:
        "Oversaw financial accounts, ensured compliance with international standards, and streamlined operations.",
      icon: <FaBriefcase className="text-amber-400 text-xl" />,
      accent: "border-amber-500/40",
    },
    {
      title: "Accounts Manager",
      company: "Venture Crest Pvt Ltd, DHA Karachi",
      period: "Corporate Financials",
      description:
        "Managed accounts, prepared financial reports, and collaborated with internal teams to enhance fiscal policies.",
      icon: <FaChartLine className="text-purple-400 text-xl" />,
      accent: "border-purple-500/40",
    },
  ];

  return (
    <PageTransition>
      <div className="py-12 sm:py-16 px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 rounded-full inline-block">
            Career Journey
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-white">
            Professional <span className="text-gradient-cyan">Experience</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Over the years, I have honed my skills in teaching, account management, and leadership, playing key roles in education and corporate environments.
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`glass-card glass-card-hover rounded-3xl p-8 border ${exp.accent} shadow-xl flex flex-col justify-between group`}
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                    {exp.icon}
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
                    {exp.period}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-white font-heading group-hover:text-cyan-400 transition-colors">
                  {exp.title}
                </h2>
                <p className="text-cyan-400 font-semibold text-sm mt-1">
                  {exp.company}
                </p>
                <p className="text-slate-400 text-sm sm:text-base mt-4 font-light leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
