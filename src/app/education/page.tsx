import { Metadata } from "next";
import PageTransition from "@/app/components/PageTransition";
import { FaGraduationCap, FaUniversity, FaBook, FaSchool } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Education | Khawaja Naqeeb Uddin",
  description: "Academic background and degrees of Khawaja Naqeeb Uddin.",
};

export default function EducationPage() {
  const educations = [
    {
      title: "Masters in Economics",
      institution: "University of Karachi",
      description: "Specialization in Economic Analysis and Policy",
      icon: <FaUniversity className="text-cyan-400 text-xl" />,
      tag: "Postgraduate Degree",
      accent: "border-cyan-500/40",
    },
    {
      title: "Graduation in Commerce",
      institution: "University of Karachi",
      description: "Focused on Business and Financial Principles",
      icon: <FaGraduationCap className="text-indigo-400 text-xl" />,
      tag: "Bachelor Degree",
      accent: "border-indigo-500/40",
    },
    {
      title: "Intermediate in Science",
      institution: "Karachi",
      description: "Pre-Engineering",
      icon: <FaBook className="text-purple-400 text-xl" />,
      tag: "Higher Secondary",
      accent: "border-purple-500/40",
    },
    {
      title: "Matriculation in Science",
      institution: "Karachi Board",
      description: "Majors: Maths, Chemistry, Physics",
      icon: <FaSchool className="text-emerald-400 text-xl" />,
      tag: "Secondary School",
      accent: "border-emerald-500/40",
    },
  ];

  return (
    <PageTransition>
      <div className="py-12 sm:py-16 px-4 sm:px-8 lg:px-12 max-w-5xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 rounded-full inline-block">
            Academic Qualifications
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-white">
            Educational <span className="text-gradient-cyan">Background</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            My academic journey has shaped my understanding of diverse subjects and has provided me with a solid foundation for growth.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-28 space-y-10">
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
                  <span className="text-sm font-semibold text-slate-400">
                    {edu.institution}
                  </span>
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
