import { Metadata } from "next";
import PageTransition from "@/app/components/PageTransition";
import { FaTrophy, FaMedal, FaStar } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Awards & Honors | Khawaja Naqeeb Uddin",
  description: "Honors and awards received by Khawaja Naqeeb Uddin.",
};

export default function AwardsPage() {
  const awards = [
    {
      title: "Successfully Completed Quarter One of GIAIC",
      description:
        "Global AI and Cloud Computing Initiative (GIAIC) is a renowned program focusing on AI and Cloud Computing. Completing Quarter One equipped me with foundational knowledge and hands-on experience.",
      icon: <FaStar className="text-amber-400 text-2xl" />,
      accent: "border-amber-500/40",
      tag: "AI Initiative",
    },
    {
      title: "Excellence in Computer Teaching",
      description:
        "Awarded for outstanding performance as computer teacher for class 9th and 10th , got best teacher award which truly shows my computer trainer skills.",
      icon: <FaTrophy className="text-cyan-400 text-2xl" />,
      accent: "border-cyan-500/40",
      tag: "Teaching Excellence",
    },
    {
      title: "Best Teacher Award",
      description:
        "Received Best Mathamatics and Computer Teacher form All Sindh Teachers Appreciation Award Ceremony 2021",
      icon: <FaMedal className="text-purple-400 text-2xl" />,
      accent: "border-purple-500/40",
      tag: "Provincial Recognition",
    },
  ];

  return (
    <PageTransition>
      <div className="py-12 sm:py-16 px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 rounded-full inline-block">
            Milestones &amp; Honors
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-white">
            Awards &amp; <span className="text-gradient-gold">Honors</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            I am proud to share my achievements, which reflect my dedication and commitment to learning and growth.
          </p>
        </div>

        {/* Awards Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {awards.map((award, idx) => (
            <div
              key={idx}
              className={`glass-card glass-card-hover rounded-3xl p-8 border ${award.accent} shadow-xl flex flex-col justify-between group`}
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                    {award.icon}
                  </div>
                  <span className="text-[11px] font-bold tracking-wide uppercase px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-amber-300">
                    {award.tag}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-white font-heading group-hover:text-amber-300 transition-colors">
                  {award.title}
                </h2>
                <p className="text-slate-400 text-sm sm:text-base mt-4 font-light leading-relaxed">
                  {award.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Milestone Note */}
        <div className="text-center max-w-2xl mx-auto pt-6">
          <p className="text-sm text-slate-400 font-light">
            These milestones are stepping stones toward a promising future in technology and innovation.
          </p>
        </div>
      </div>
    </PageTransition>
  );
}
