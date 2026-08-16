import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageTransition from "@/app/components/PageTransition";
import { FaLaptopCode, FaBrain, FaArrowRight, FaChalkboardTeacher, FaBuilding, FaRobot } from "react-icons/fa";


export const metadata: Metadata = {
  title: "About Me | Khawaja Naqeeb Uddin",
  description: "Learn more about Khawaja Naqeeb Uddin, Educator (30+ Years), Administrator at Adamjee Coaching Centre, Full Stack Developer, and GIAIC Agentic AI Engineer.",
};

export default function AboutPage() {
  const stats = [
    {
      icon: <FaChalkboardTeacher className="text-cyan-400 text-2xl" />,
      value: "30+",
      label: "Years Teaching Experience",
    },
    {
      icon: <FaBrain className="text-indigo-400 text-2xl" />,
      value: "Top",
      label: "GIAIC Agentic AI Student",
    },
    {
      icon: <FaRobot className="text-purple-400 text-2xl" />,
      value: "Q3",
      label: "Certified Agentic AI",
    },
    {
      icon: <FaLaptopCode className="text-amber-400 text-2xl" />,
      value: "6+",
      label: "Production & Client Apps",
    },
  ];

  return (
    <PageTransition>
      <div className="py-12 sm:py-16 px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto space-y-16">
        {/* Page Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 rounded-full inline-block">
            Professional Profile &amp; Legacy
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-white">
            About <span className="text-gradient-cyan">Khawaja Naqeeb Uddin</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Educator | Administrator @ Adamjee Coaching Centre | Full Stack Developer | Accounts Management Professional
          </p>
        </div>

        {/* Profile Story Grid */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Avatar side */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-500" />
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full border-4 border-slate-900 bg-slate-900 overflow-hidden shadow-2xl">
                <Image
                  src="/naq1.png"
                  alt="Khawaja Naqeeb Uddin"
                  fill
                  sizes="256px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Detailed Bio Cards */}
          <div className="lg:col-span-8 space-y-5 text-slate-300 font-light text-base leading-relaxed">
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
              <h3 className="text-xl font-bold font-heading text-white mb-2 flex items-center gap-2">
                <FaChalkboardTeacher className="text-cyan-400 text-base" /> 30+ Years Teaching Legacy &amp; Leadership
              </h3>
              <p>
                With <strong className="text-cyan-300 font-semibold">30 years of teaching experience</strong>, I have dedicated my life to shaping young minds and fostering a love for learning. I previously ran my own coaching center and am currently serving as an <strong className="text-cyan-300 font-semibold">Administrator &amp; Senior Teacher at Adamjee Coaching Centre</strong>. Teaching is not just my profession—it is my passion.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
              <h3 className="text-xl font-bold font-heading text-white mb-2 flex items-center gap-2">
                <FaRobot className="text-indigo-400 text-base" /> Agentic AI &amp; Top Governor House Scholar
              </h3>
              <p>
                Selected as one of the <strong className="text-indigo-300 font-semibold">top students for the Agentic AI Program at Governor House Karachi (GIAIC)</strong>, I have progressed through modern web development (Next.js, TypeScript, Tailwind), <strong className="text-indigo-300 font-semibold">Q3 Certified Agentic AI &amp; Modern Python</strong>, and Q4 Cloud &amp; LLM Orchestration (Docker, Kubernetes, Gemini, Claude Code, SDD).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
              <h3 className="text-xl font-bold font-heading text-white mb-2 flex items-center gap-2">
                <FaBuilding className="text-purple-400 text-base" /> Accounts Management &amp; Corporate Background
              </h3>
              <p>
                Beyond education and AI, I have gained valuable experience as an <strong className="text-purple-300 font-semibold">Accounts Manager in reputed organizations in Karachi and Dubai</strong>, proving myself as a supportive leader committed to integrity, fiscal policies, and excellence.
              </p>
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-800 flex flex-col items-center justify-center text-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <span className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-medium text-slate-400 mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Quick Navigation Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
          <Link
            href="/experience"
            className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-800 flex items-center justify-between group"
          >
            <div>
              <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">Explore Career</p>
              <h4 className="text-lg font-bold text-white font-heading mt-1">Work Experience</h4>
            </div>
            <FaArrowRight className="text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
          </Link>

          <Link
            href="/professional-dev"
            className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-800 flex items-center justify-between group"
          >
            <div>
              <p className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">Certifications &amp; AI</p>
              <h4 className="text-lg font-bold text-white font-heading mt-1">Professional Dev</h4>
            </div>
            <FaArrowRight className="text-slate-400 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
          </Link>

          <Link
            href="/projects"
            className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-800 flex items-center justify-between group"
          >
            <div>
              <p className="text-xs font-semibold text-purple-400 uppercase tracking-wider">Live Demos</p>
              <h4 className="text-lg font-bold text-white font-heading mt-1">GitHub Repositories</h4>
            </div>
            <FaArrowRight className="text-slate-400 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
      </div>
    </PageTransition>
  );
}
