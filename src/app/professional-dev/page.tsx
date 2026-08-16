import { Metadata } from "next";
import PageTransition from "@/app/components/PageTransition";
import { FaCertificate, FaCloud, FaLaptopCode } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Professional Development | Khawaja Naqeeb Uddin",
  description: "Certifications and professional training of Khawaja Naqeeb Uddin.",
};

export default function ProfessionalDevPage() {
  const certifications = [
    {
      title: "MCSE (Microsoft Certified System Engineer)",
      organization: "Microsoft",
      description:
        "Advanced training in networking, security, and infrastructure management, strengthening my expertise in system engineering.",
      icon: <FaCertificate className="text-amber-400 text-2xl" />,
      accent: "border-amber-500/40",
      tag: "Professional Certification",
    },
    {
      title: "Software Diploma",
      organization: "Computer Guide Institute",
      description:
        "Comprehensive training in programming languages and software development methodologies.",
      icon: <FaLaptopCode className="text-blue-400 text-2xl" />,
      accent: "border-blue-500/40",
      tag: "Software Engineering",
    },
    {
      title: "GIAIC (Governor Initiative for AI & Cloud Computing)",
      organization: "Currently Enrolled",
      description:
        "Successfully passed Quarter One and progressing through Quarter Two with a strong focus on AI and cloud computing.",
      icon: <FaCloud className="text-emerald-400 text-2xl" />,
      accent: "border-emerald-500/40",
      tag: "AI & Cloud Program",
    },
  ];

  return (
    <PageTransition>
      <div className="py-12 sm:py-16 px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 rounded-full inline-block">
            Certifications & Training
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-white">
            Professional <span className="text-gradient-cyan">Development</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            I continuously expand my knowledge and expertise through certifications and ongoing learning in cutting-edge technologies.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((item, idx) => (
            <div
              key={idx}
              className={`glass-card glass-card-hover rounded-3xl p-8 border ${item.accent} shadow-xl flex flex-col justify-between group`}
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-bold tracking-wide uppercase px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-300">
                    {item.tag}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-white font-heading group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h2>
                <p className="text-cyan-400 font-semibold text-sm mt-1">
                  {item.organization}
                </p>
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
