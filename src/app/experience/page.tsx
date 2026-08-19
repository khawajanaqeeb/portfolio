import { Metadata } from "next";
import PageTransition from "@/app/components/PageTransition";
import { FaLaptopCode, FaChalkboardTeacher, FaBriefcase, FaUserTie, FaGlobe, FaShieldAlt, FaHandHoldingHeart, FaBuilding } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Professional Experience | Khawaja Naqeeb Uddin",
  description: "Career history of Khawaja Naqeeb Uddin: Freelance Web Developer, Administrator at Adamjee Coaching, Head of Unit at Pak Qatar Takaful, Unit Manager at EFU Hemayah, and Team Manager at Jubilee Family Takaful.",
};

export default function ExperiencePage() {
  const experiences = [
    {
      title: "Freelance Website & AI Developer",
      company: "Freelance Practice",
      period: "Feb 2024 - Present (2 yrs 7 mos)",
      location: "Karāchi, Sindh, Pakistan",
      description:
        "Actively engineering high-performance web applications, client management portals, e-commerce platforms, and agentic AI systems utilizing Next.js, TypeScript, and Python.",
      icon: <FaGlobe className="text-cyan-400 text-xl" />,
      accent: "border-cyan-500/40",
      tag: "Full-Stack & Agentic AI",
    },
    {
      title: "Administrator",
      company: "Adamjee Coaching Centre",
      period: "July 2017 - Jan 2025 (7 yrs 7 mos)",
      location: "Gulberg Karachi, Pakistan",
      description:
        "Served as Administrator and Senior Teacher, directing campus operations, student relations, academic leadership, and faculty supervision.",
      icon: <FaUserTie className="text-indigo-400 text-xl" />,
      accent: "border-indigo-500/40",
      tag: "Academic Administration",
    },
    {
      title: "Head Of Unit",
      company: "Pak Qatar Takaful",
      period: "June 2019 - Jan 2025 (5 yrs 8 mos)",
      location: "Shahrah-e-Faisal, Karachi",
      description:
        "Directed unit operations, financial strategy, team management, and customer relationship frameworks within Islamic Takaful services.",
      icon: <FaShieldAlt className="text-emerald-400 text-xl" />,
      accent: "border-emerald-500/40",
      tag: "Corporate Leadership",
    },
    {
      title: "Unit Manager",
      company: "EFU HEMAYAH FAMILY TAKAFUL KARACHI",
      period: "August 2017 - Jan 2025 (7 yrs 6 mos)",
      location: "DHA Phase 1, Karachi",
      description:
        "Managed unit portfolio, financial planning strategies, client acquisition, and corporate relationship building.",
      icon: <FaHandHoldingHeart className="text-purple-400 text-xl" />,
      accent: "border-purple-500/40",
      tag: "Financial Unit Management",
    },
    {
      title: "Team Manager",
      company: "Jubilee Family Takaful",
      period: "2019 - Jan 2025 (6 yrs)",
      location: "Karachi, Pakistan",
      description:
        "Led team of financial advisors, optimized sales procedures, and ensured adherence to corporate policy guidelines.",
      icon: <FaBriefcase className="text-amber-400 text-xl" />,
      accent: "border-amber-500/40",
      tag: "Team Leadership",
    },
    {
      title: "Head of Faculty for Web Development",
      company: "Bitcraft",
      period: "Faculty Leadership",
      location: "Karachi, Pakistan",
      description:
        "Taught HTML, CSS, JavaScript, and TypeScript while mentoring students and leading web development curriculum design.",
      icon: <FaLaptopCode className="text-teal-400 text-xl" />,
      accent: "border-teal-500/40",
      tag: "Web Faculty Head",
    },
    {
      title: "Founder & Head Principal",
      company: "Own Coaching Center",
      period: "30-Year Legacy",
      location: "Karachi, Pakistan",
      description:
        "Owned and administered private coaching center, fostering academic excellence and mentoring thousands of students over three decades.",
      icon: <FaChalkboardTeacher className="text-pink-400 text-xl" />,
      accent: "border-pink-500/40",
      tag: "Educational Entrepreneurship",
    },
    {
      title: "Head of Computer Faculty",
      company: "Falcon Grammar School",
      period: "Faculty Leadership",
      location: "Karachi, Pakistan",
      description:
        "Supervised 9th & 10th computer classes, conducted Karachi Board practical examinations, and directed computer faculty teachers.",
      icon: <FaChalkboardTeacher className="text-blue-400 text-xl" />,
      accent: "border-blue-500/40",
      tag: "Faculty Supervision",
    },
    {
      title: "Accounts Manager",
      company: "Beyond Borders Dubai & Venture Crest DHA",
      period: "Corporate Financial Accounts",
      location: "Dubai & Karachi",
      description:
        "Managed financial accounts, ensured international compliance standards, and streamlined corporate fiscal operations.",
      icon: <FaBuilding className="text-yellow-400 text-xl" />,
      accent: "border-yellow-400/40",
      tag: "Corporate Accounts",
    },
  ];

  return (
    <PageTransition>
      <div className="py-12 sm:py-16 px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 rounded-full inline-block">
            Career Journey &amp; Corporate History
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-white">
            Professional <span className="text-gradient-cyan">Experience</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Verified leadership records spanning Freelance Web Development, Administrator at Adamjee Coaching, Head of Unit at Pak Qatar Takaful, Unit Manager at EFU Hemayah, and 30 years of educational excellence.
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
                  <span className="text-[11px] font-bold uppercase px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-300">
                    {exp.tag}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-white font-heading group-hover:text-cyan-400 transition-colors">
                  {exp.title}
                </h2>
                <p className="text-cyan-400 font-semibold text-sm mt-1">
                  {exp.company}
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 mt-2 text-xs font-mono text-slate-400 border-b border-slate-800/80 pb-3">
                  <span>{exp.location}</span>
                  <span className="text-indigo-300 bg-slate-900 px-2.5 py-0.5 rounded-full border border-slate-800">
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
