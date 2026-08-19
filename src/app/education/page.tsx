import { Metadata } from "next";
import PageTransition from "@/app/components/PageTransition";
import { FaGraduationCap, FaUniversity, FaBook, FaSchool, FaCalculator, FaServer } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Education | Khawaja Naqeeb Uddin",
  description: "Academic qualifications of Khawaja Naqeeb Uddin: Master's in Economics (Karachi University), CMA Professional I (ICMA Pakistan), MCSE (Microsoft), and B.Com.",
};

export default function EducationPage() {
  const educations = [
    {
      title: "Master's Degree in Economics",
      institution: "Karachi University",
      period: "2000 - 2002",
      description: "Specialization in Economic Analysis, Policy Formulation, and Fiscal Theory.",
      icon: <FaUniversity className="text-cyan-400 text-xl" />,
      tag: "Postgraduate Master's Degree",
      accent: "border-cyan-500/40",
    },
    {
      title: "MCSE - System, Networking & LAN/WAN Management",
      institution: "Microsoft",
      period: "1997 - 1998",
      description: "Systems Engineering, Network Architecture, Active Directory, and LAN/WAN Infrastructure Management.",
      icon: <FaServer className="text-indigo-400 text-xl" />,
      tag: "Systems Engineering Certification",
      accent: "border-indigo-500/40",
    },
    {
      title: "CMA Professional I",
      institution: "Institute of Cost and Management Accountants of Pakistan (ICMA Pakistan)",
      period: "1996 - 1997",
      description: "Accounting and Related Financial Services, Cost Management, and Auditing Principles.",
      icon: <FaCalculator className="text-purple-400 text-xl" />,
      tag: "Professional Accounting Certification",
      accent: "border-purple-500/40",
    },
    {
      title: "Graduation in Commerce (B.Com)",
      institution: "University of Karachi",
      period: "Bachelor Degree",
      description: "Focused on Business Administration, Accounting, Finance, and Commercial Law.",
      icon: <FaGraduationCap className="text-emerald-400 text-xl" />,
      tag: "Bachelor Degree",
      accent: "border-emerald-500/40",
    },
    {
      title: "Intermediate in Science (Pre-Engineering)",
      institution: "Karachi",
      period: "Higher Secondary",
      description: "Pre-Engineering Discipline focusing on Advanced Mathematics, Physics, and Chemistry.",
      icon: <FaBook className="text-amber-400 text-xl" />,
      tag: "Higher Secondary Certificate",
      accent: "border-amber-500/40",
    },
    {
      title: "Matriculation in Science",
      institution: "Karachi Board",
      period: "Secondary Certificate",
      description: "Majors in Mathematics, Chemistry, and Physics.",
      icon: <FaSchool className="text-teal-400 text-xl" />,
      tag: "Secondary School Certificate",
      accent: "border-teal-500/40",
    },
  ];

  return (
    <PageTransition>
      <div className="py-12 sm:py-16 px-4 sm:px-8 lg:px-12 max-w-5xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 rounded-full inline-block">
            Academic &amp; Professional Qualifications
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-white">
            Educational <span className="text-gradient-cyan">Background</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            A rich academic journey encompassing a Master&apos;s Degree in Economics from Karachi University, CMA Professional I from ICMA Pakistan, Microsoft MCSE Systems Engineering, and B.Com.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 lg:ml-28 space-y-10">
          {educations.map((edu, idx) => (
            <div key={idx} className="relative pl-8 sm:pl-10 group">
              {/* Node Icon */}
              <div className="absolute -left-[17px] top-2 w-8 h-8 rounded-full bg-slate-900 border-2 border-cyan-500/60 flex items-center justify-center shadow-md shadow-cyan-500/20 group-hover:scale-125 group-hover:border-cyan-400 group-hover:bg-cyan-500/20 transition-all duration-300">
                {edu.icon}
              </div>

              {/* Card */}
              <div className={`glass-card glass-card-hover rounded-3xl p-6 sm:p-8 border ${edu.accent} shadow-xl`}>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold tracking-wide uppercase px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-cyan-300">
                    {edu.tag}
                  </span>
                  <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-400">
                    <span>{edu.institution}</span>
                    <span className="font-mono text-cyan-400 bg-slate-900 px-2.5 py-0.5 rounded-full border border-slate-800">
                      {edu.period}
                    </span>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-white font-heading group-hover:text-cyan-400 transition-colors">
                  {edu.title}
                </h2>
                <p className="text-slate-400 text-sm sm:text-base mt-2 font-light leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
