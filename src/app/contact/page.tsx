"use client";
import { useState } from "react";
import PageTransition from "@/app/components/PageTransition";
import { Mail, Phone, MessageCircle, Copy, Check, Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPage() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormData({ name: "", email: "", subject: "", message: "" });
        setFormSubmitted(false);
      }, 4000);
    }
  };

  return (
    <PageTransition>
      <div className="py-12 sm:py-16 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 rounded-full inline-block">
            Direct Reach
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-white">
            Contact <span className="text-gradient-cyan">Information</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Feel free to reach out to me using the following contact details. I am always open to new opportunities and collaborations!
          </p>
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Cards */}
          <div className="lg:col-span-5 space-y-4">
            {[
              {
                icon: <Mail className="text-yellow-400 w-6 h-6" />,
                label: "Email",
                value: "naqeebkns@gmail.com",
                actionText: "naqeebkns@gmail.com",
                href: "mailto:naqeebkns@gmail.com",
                accent: "border-yellow-400/40",
              },
              {
                icon: <MessageCircle className="text-green-400 w-6 h-6" />,
                label: "WhatsApp",
                value: "02345-2435349",
                actionText: "0345-2435349",
                href: "https://wa.me/923452435349",
                accent: "border-green-400/40",
              },
              {
                icon: <Phone className="text-blue-400 w-6 h-6" />,
                label: "Mobile",
                value: "0301-2037478",
                actionText: "0301-2037478",
                href: "tel:03012037478",
                accent: "border-blue-400/40",
              },
            ].map((contact, idx) => (
              <div
                key={idx}
                className={`glass-card glass-card-hover rounded-3xl p-6 border ${contact.accent} shadow-xl flex items-center justify-between group`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0">
                    {contact.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      {contact.label}
                    </p>
                    <a
                      href={contact.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white hover:text-cyan-400 font-bold text-base transition-colors font-heading"
                    >
                      {contact.value}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(contact.actionText, contact.label)}
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                  title="Copy to clipboard"
                  aria-label={`Copy ${contact.label}`}
                >
                  {copiedField === contact.label ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            ))}

            {/* Quick WhatsApp Action Button */}
            <div className="pt-2">
              <a
                href="https://wa.me/923452435349"
                target="_blank"
                rel="noreferrer"
                className="w-full py-4 px-6 rounded-2xl font-bold bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 flex items-center justify-center gap-3 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:scale-[1.02] transition-all duration-300 uppercase tracking-wider text-sm"
              >
                <FaWhatsapp className="text-xl" /> Direct WhatsApp Chat
              </a>
            </div>
          </div>

          {/* Right Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-2xl relative">
              <h2 className="text-2xl font-bold font-heading text-white mb-6">
                Send a <span className="text-gradient-cyan">Direct Message</span>
              </h2>

              <AnimatePresence>
                {formSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3"
                  >
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center mx-auto text-emerald-400">
                      <Check className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white font-heading">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-slate-300 text-sm font-light">
                      Thank you for getting in touch. Khawaja Naqeeb will respond promptly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full px-4 py-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                          Your Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="name@example.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full px-4 py-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        placeholder="Project Collaboration / Consultation"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Write your message here..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors text-sm resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 px-6 rounded-xl font-bold uppercase tracking-wider bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 text-slate-950 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                    >
                      <Send className="w-4 h-4" /> Send Message
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Closing Note */}
        <div className="text-center pt-6">
          <p className="text-base text-slate-300 font-light">
            Looking forward to connecting with you!
          </p>
        </div>
      </div>
    </PageTransition>
  );
}
