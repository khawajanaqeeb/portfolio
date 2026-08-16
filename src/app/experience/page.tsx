import { Metadata } from "next";
import PageTransition from "@/app/components/PageTransition";
import { FaLaptopCode, FaChalkboardTeacher, FaBriefcase, FaChartLine, FaUserTie, FaGlobe } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Professional Experience | Khawaja Naqeeb Uddin",
  description: "Career history of Khawaja Naqeeb Uddin: Administrator at Adamjee Coaching Centre, 30+ Years Educator, Freelance Web Developer, and Corporate Accounts Manager.",
};

export default function ExperiencePage() {
  const experiences = [
    {
      title: "Administrator & Senior Teacher",
      company: "Adamjee Coaching Centre",
      period: "Current Role",
      description:
        "Serving as Administrator and Senior Teacher, overseeing administrative operations, academic leadership, and senior class instruction.",
      icon: <FaUserTie className="text-cyan-400 text-xl" />,
      accent: "border-cyan-500/40",
      tag: "Academic Administration",
    },
    {
      title: "Freelance Full-Stack & AI Developer",
      company: "Independent Practice",
      period: "Active",
      description:
        "Actively applying full-stack and AI skills to engineer functional, high-performance web applications, client portals, and agentic workflows.",
      icon: <FaGlobe className="text-indigo-400 text-xl" />,
      accent: "border-indigo-500/40",
      tag: "Full-Stack & AI",
    },
    {
      title: "Head of Faculty for Web Development",
      company: "Bitcraft",
      period: "Faculty Leadership",
      description:
        "Taught HTML, CSS, JavaScript, and TypeScript while mentoring students and leading web development curriculum design.",
      icon: <FaLaptopCode className="text-emerald-400 text-xl" />,
      accent: "border-emerald-500/40",
      tag: "Web Faculty Head",
    },
    {
      title: "Founder & Principal",
      company: "Own Coaching Center",
      period: "30-Year Legacy",
      description:
        "Owned and administered private coaching center, fostering academic excellence and mentoring thousands of students over three decades.",
      icon: <FaChalkboardTeacher className="text-purple-400 text-xl" />,
      accent: "border-purple-500/40",
      tag: "Educational Entrepreneurship",
    },
    {
      title: "Head of Computer Faculty",
      company: "Falcon Grammar School",
      period: "Karachi Board Supervision",
      description:
        "Supervised 9th & 10th computer classes, conducted Karachi Board practical examinations, and directed computer faculty teachers.",
      icon: <FaChalkboardTeacher className="text-amber-400 text-xl" />,
      accent: "border-amber-500/40",
      tag: "Faculty Supervision",
    },
    {
      title: "Accounts Manager",
      company: "Beyond Borders, Dubai",
      period: "International Corporate",
      description:
        "Managed financial accounts, ensured international compliance standards, and streamlined corporate fiscal operations.",
      icon: <FaBriefcase className="text-blue-400 text-xl" />,
      accent: "border-blue-500/40",
      tag: "Dubai Financial Operations",
    },
    {
      title: "Accounts Manager",
      company: "Venture Crest Pvt Ltd, DHA Karachi",
      period: "Corporate Accounts",
      description:
        "Oversaw financial management, prepared fiscal statements, and enhanced internal accounting procedures.",
      icon: <FaChartLine className="text-teal-400 text-xl" />,
      accent: "border-teal-500/40",
      tag: "Corporate Fiscal Management",
    },
  ];

  return (
    <PageTransition>
      <div className="py-12 sm:py-16 px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 rounded-full inline-block">
            Leadership &amp; Professional Career
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-white">
            Work <span className="text-gradient-cyan">Experience</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Combining 30 years of teaching dedication, academic administration at Adamjee Coaching Centre, freelance full-stack AI development, and corporate accounts management in Karachi and Dubai.
          </p>
        </div>

        {/* Experience Grid */}
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
                  <span className="text-[11px] font-bold uppercase px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
                    {exp.tag}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-white font-heading group-hover:text-cyan-400 transition-colors">
                  {exp.title}
                </h2>
                <div className="flex items-center justify-between gap-2 mt-1">
                  <p className="text-cyan-400 font-semibold text-sm">
                    {exp.company}
                  </p>
                  <span className="text-xs font-mono text-slate-400">
                    {exp.period}
                  </span>
                </div>
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
