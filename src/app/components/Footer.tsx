"use client";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaCircle } from "react-icons/fa";
import { motion } from "framer-motion";


export default function Footer() {
  return (
    <footer className="bg-slate-950/90 border-t border-slate-800/80 pt-16 pb-8 text-slate-400 font-light relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <Link
              href="/"
              className="flex items-center gap-2.5 group text-2xl font-extrabold tracking-tight"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-400 via-indigo-500 to-purple-600 flex items-center justify-center text-slate-950 font-black shadow-md shadow-cyan-500/20">
                KNU
              </div>
              <span className="text-white group-hover:text-cyan-400 transition-colors font-heading font-bold">
                Khawaja Naqeeb Uddin
              </span>

            </Link>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Full Stack Web Developer, AI & Cloud Specialist (GIAIC), and Head of Computer Faculty dedicated to engineering scalable web architectures.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400">
              <FaCircle className="text-[8px] animate-pulse" />
              <span>Available for Hire & Remote Projects</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200 font-heading">
              Page Routes
            </h4>
            <div className="grid grid-cols-2 gap-2.5 text-sm">
              {[
                { name: "Home", href: "/" },
                { name: "About Me", href: "/about" },
                { name: "Education", href: "/education" },
                { name: "Experience", href: "/experience" },
                { name: "Projects", href: "/projects" },
                { name: "Skills Matrix", href: "/skills" },
                { name: "Certifications", href: "/professional-dev" },
                { name: "Awards", href: "/awards" },
                { name: "Media Gallery", href: "/gallery" },
                { name: "Contact Hub", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:text-cyan-400 transition-colors text-slate-400"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Profiles & Contact Callout */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200 font-heading">
              Connect With Me
            </h4>
            <div className="flex flex-wrap gap-3">
              {[
                {
                  href: "https://www.linkedin.com/in/khawaja-naqeeb-uddin-75203a143/",
                  icon: <FaLinkedinIn />,
                  label: "LinkedIn",
                },
                {
                  href: "https://www.facebook.com/khawajanaqeebuddin.shajie",
                  icon: <FaFacebookF />,
                  label: "Facebook",
                },
                {
                  href: "https://www.instagram.com/khawaj7/",
                  icon: <FaInstagram />,
                  label: "Instagram",
                },
                {
                  href: "https://www.twitter.com",
                  icon: <FaTwitter />,
                  label: "Twitter",
                },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-block text-xs font-semibold text-cyan-400 hover:underline"
              >
                Send a message directly &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Khawaja Naqeeb Uddin. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with Next.js App Router &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}


