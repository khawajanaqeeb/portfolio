import { Metadata } from "next";
import Link from "next/link";
import PageTransition from "@/app/components/PageTransition";
import {
  FaCode,
  FaPalette,
  FaLaptopCode,
  FaChalkboardTeacher,
  FaUserGraduate,
  FaPenNib,
  FaFileAlt,
  FaChartLine,
  FaBullhorn,
  FaCogs,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Professional Services | Khawaja Naqeeb Uddin",
  description:
    "Explore professional services provided by Khawaja Naqeeb Uddin: Web Development, Web Design, IT Consulting, Custom Software, Educational Training, and Content Strategy.",
};

export default function ServicesPage() {
  const services = [
    {
      title: "Web Development",
      category: "Engineering",
      description:
        "Building responsive, high-performance, full-stack web applications using Next.js, React, TypeScript, and modern backend architectures.",
      icon: <FaCode className="text-cyan-400 text-2xl" />,
      accent: "border-cyan-500/40",
      features: ["Next.js App Router", "TypeScript Type Safety", "API & Database Integration"],
    },
    {
      title: "Web Design",
      category: "UI/UX & Prototyping",
      description:
        "Crafting ultra-modern, frosted glassmorphism user interfaces, pixel-perfect Figma conversions, and intuitive user experiences.",
      icon: <FaPalette className="text-indigo-400 text-2xl" />,
      accent: "border-indigo-500/40",
      features: ["Frosted Glassmorphism", "Figma to Code", "Responsive Layout Math"],
    },
    {
      title: "Custom Software Development",
      category: "Engineering",
      description:
        "Engineering tailor-made software solutions, agentic AI workflows, Python stream applications, and automated business utilities.",
      icon: <FaCogs className="text-purple-400 text-2xl" />,
      accent: "border-purple-500/40",
      features: ["Agentic AI Workflows", "Python Streamlit Tools", "Custom System Logic"],
    },
    {
      title: "IT Consulting",
      category: "Advisory",
      description:
        "Strategic advice on IT infrastructure, cloud deployment, system security, networking engineering, and technology stack selection.",
      icon: <FaLaptopCode className="text-emerald-400 text-2xl" />,
      accent: "border-emerald-500/40",
      features: ["Infrastructure Auditing", "Cloud Strategy", "Network Engineering"],
    },
    {
      title: "Educational Consulting",
      category: "Academic & Leadership",
      description:
        "Curriculum design, academic faculty supervision, board practical examination guidance, and institution administration strategies.",
      icon: <FaUserGraduate className="text-amber-400 text-2xl" />,
      accent: "border-amber-500/40",
      tag: "Academic Leadership",
      features: ["Curriculum Architecture", "Faculty Mentorship", "Institution Administration"],
    },
    {
      title: "Training & Mentorship",
      category: "Coaching",
      description:
        "30+ years of teaching expertise delivering web development, computer science, and technical training for students and faculty.",
      icon: <FaChalkboardTeacher className="text-teal-400 text-2xl" />,
      accent: "border-teal-500/40",
      features: ["Web Dev Bootcamps", "1-on-1 Mentorship", "Board Exam Preparation"],
    },
    {
      title: "Real Estate Marketing",
      category: "Specialized Marketing",
      description:
        "Targeted real estate marketing strategies, FTE CRM integration, and digital lead generation systems for property developments.",
      icon: <FaBullhorn className="text-pink-400 text-2xl" />,
      accent: "border-pink-500/40",
      features: ["FTE CRM Systems", "Lead Generation", "Digital Campaigns"],
    },
    {
      title: "Content Strategy",
      category: "Content & Growth",
      description:
        "Structuring technical content roadmaps, digital branding guidelines, and audience engagement plans for tech and educational initiatives.",
      icon: <FaChartLine className="text-blue-400 text-2xl" />,
      accent: "border-blue-500/40",
      features: ["Brand Positioning", "Technical Roadmaps", "Audience Growth"],
    },
    {
      title: "Blogging",
      category: "Technical Writing",
      description:
        "Authoring in-depth articles, coding tutorials, AI insights, and technology breakdowns to educate and inspire tech communities.",
      icon: <FaPenNib className="text-orange-400 text-2xl" />,
      accent: "border-orange-500/40",
      features: ["Coding Tutorials", "AI Deep Dives", "Tech Industry Insights"],
    },
    {
      title: "Copywriting",
      category: "Technical Writing",
      description:
        "Crafting clear, compelling website copy, project documentation, Software Design Documents (SDD), and promotional materials.",
      icon: <FaFileAlt className="text-yellow-400 text-2xl" />,
      accent: "border-yellow-400/40",
      features: ["Website Copy", "Technical SDDs", "Promotional Materials"],
    },
  ];

  return (
    <PageTransition>
      <div className="py-12 sm:py-16 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto space-y-16">
        {/* Page Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 rounded-full inline-block">
            Professional Offerings
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-white">
            Services <span className="text-gradient-cyan">Provided</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Delivering high-impact full-stack web development, IT consulting, educational leadership, and content strategies tailored to your goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`glass-card glass-card-hover rounded-3xl p-8 border ${service.accent} shadow-xl flex flex-col justify-between group relative overflow-hidden`}
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <span className="text-[11px] font-extrabold tracking-wide uppercase px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-300">
                    {service.category}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-white font-heading group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h2>
                <p className="text-slate-400 text-sm mt-3 font-light leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 space-y-2">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                      <FaCheckCircle className="text-cyan-400 text-[10px] flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6">
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold bg-slate-900 border border-slate-800 text-slate-200 hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-400 transition-all text-xs uppercase tracking-wider"
                >
                  <span>Inquire Service</span>
                  <FaArrowRight className="text-xs" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-cyan-500/30 text-center space-y-6 max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <h2 className="text-3xl font-extrabold font-heading text-white">
            Need a tailored solution for your project or institution?
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto font-light">
            Whether you are looking for custom software development, educational consulting, or real estate marketing CRM integration, let’s discuss your vision.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-xl font-bold uppercase tracking-wider bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 text-slate-950 shadow-lg shadow-cyan-500/25 hover:scale-105 transition-all text-sm"
            >
              Contact Khawaja Naqeeb Uddin
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
