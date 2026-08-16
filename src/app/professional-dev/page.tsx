import { Metadata } from "next";
import PageTransition from "@/app/components/PageTransition";
import { FaCertificate, FaCloud, FaLaptopCode, FaBrain, FaRobot, FaServer } from "react-icons/fa";
import { SiCisco, SiPython, SiDocker, SiKubernetes } from "react-icons/si";

export const metadata: Metadata = {
  title: "Professional Development & Certifications | Khawaja Naqeeb Uddin",
  description: "Certifications, Data Science credentials (Cisco/ITU-DTC), and GIAIC Agentic AI specializations of Khawaja Naqeeb Uddin.",
};

export default function ProfessionalDevPage() {
  const certifications = [
    {
      title: "Introduction to Data Science Certified",
      organization: "Cisco Networking Academy & ITU-DTC Pakistan",
      period: "Completed: Oct 21, 2025",
      description:
        "Successfully completed comprehensive Data Science training covering data analytics, statistical modeling, and foundational machine learning techniques.",
      icon: <SiCisco className="text-cyan-400 text-2xl" />,
      accent: "border-cyan-500/40",
      tag: "Data Science Certification",
      highlight: true,
    },
    {
      title: "GIAIC Certified - Q3: Agentic AI & Modern Python",
      organization: "Governor House Karachi (GIAIC)",
      period: "Q3 Certified",
      description:
        "Completed Agentic AI and Modern Python specialization, mastering autonomous AI agent workflows, multi-agent frameworks, and core machine learning logic.",
      icon: <FaRobot className="text-indigo-400 text-2xl" />,
      accent: "border-indigo-500/40",
      tag: "Agentic AI Specialist",
      highlight: true,
    },
    {
      title: "GIAIC Currently Mastering - Q4: Cloud & LLM Systems",
      organization: "Governor House Karachi (GIAIC)",
      period: "Q4 Advanced",
      description:
        "Deep-diving into deployment and scaling of AI systems: Cloud & Orchestration (Docker, Kubernetes, FTEs) and Advanced LLMs (Gemini, Claude Code, SDD).",
      icon: <FaCloud className="text-purple-400 text-2xl" />,
      accent: "border-purple-500/40",
      tag: "Cloud & LLM Orchestration",
    },
    {
      title: "GIAIC Certified - Q1 & Q2: Web Architecture",
      organization: "Governor House Karachi (GIAIC)",
      period: "Q1 & Q2 Certified",
      description:
        "Mastered modern full-stack web development, responsive user interfaces, and server-side rendering using Next.js App Router, TypeScript, and Tailwind CSS.",
      icon: <FaLaptopCode className="text-emerald-400 text-2xl" />,
      accent: "border-emerald-500/40",
      tag: "Full Stack Certification",
    },
    {
      title: "MCSE (Microsoft Certified System Engineer)",
      organization: "Microsoft",
      period: "Professional Certification",
      description:
        "Advanced engineering in computer networking, infrastructure security, active directory, and server system administration.",
      icon: <FaCertificate className="text-amber-400 text-2xl" />,
      accent: "border-amber-500/40",
      tag: "System Engineering",
    },
    {
      title: "Software Engineering Diploma",
      organization: "Computer Guide Institute",
      period: "Diploma Certification",
      description:
        "Comprehensive diploma program covering programming languages, database design, software development lifecycles, and algorithms.",
      icon: <FaServer className="text-blue-400 text-2xl" />,
      accent: "border-blue-500/40",
      tag: "Software Engineering",
    },
  ];

  return (
    <PageTransition>
      <div className="py-12 sm:py-16 px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 rounded-full inline-block">
            Specialized Training &amp; Certifications
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-white">
            Professional <span className="text-gradient-cyan">Development</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Selected as one of the top students for the Agentic AI Program at Governor House Karachi, continuously expanding expertise across Data Science, AI, and Cloud Architecture.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((item, idx) => (
            <div
              key={idx}
              className={`glass-card glass-card-hover rounded-3xl p-8 border ${item.accent} shadow-xl flex flex-col justify-between group relative overflow-hidden`}
            >
              {item.highlight && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
              )}
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-extrabold tracking-wide uppercase px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-300">
                    {item.tag}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-white font-heading group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h2>
                <div className="flex items-center justify-between gap-2 mt-1">
                  <p className="text-cyan-400 font-semibold text-xs">
                    {item.organization}
                  </p>
                  <span className="text-[11px] font-mono text-slate-400">
                    {item.period}
                  </span>
                </div>
                <p className="text-slate-400 text-sm sm:text-base mt-4 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
