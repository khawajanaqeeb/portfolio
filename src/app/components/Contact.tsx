"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MessageCircle, Copy, Check, Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
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
    <section id="contact" className="py-16 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto scroll-mt-24">
      <div className="text-center mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3.5 py-1.5 rounded-full inline-block mb-3">
          Get In Touch
        </span>
        <h2 className="text-4xl sm:text-5xl font-extrabold font-outfit text-white tracking-tight">
          Contact <span className="text-gradient-cyan">Information</span>
        </h2>
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mt-3 font-light">
          Have a project in mind, a question about Web & AI development, or looking to collaborate? Let&apos;s connect!
        </p>
      </div>


      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Contact Cards */}
        <div className="lg:col-span-5 space-y-4">
          {[
            {
              icon: <Mail className="text-cyan-400 w-6 h-6" />,
              label: "Email Address",
              value: "naqeebkns@gmail.com",
              actionText: "naqeebkns@gmail.com",
              href: "mailto:naqeebkns@gmail.com",
              accent: "border-cyan-500/30",
            },
            {
              icon: <MessageCircle className="text-emerald-400 w-6 h-6" />,
              label: "WhatsApp Direct",
              value: "+92 345 2435349",
              actionText: "0345-2435349",
              href: "https://wa.me/923452435349",
              accent: "border-emerald-500/30",
            },
            {
              icon: <Phone className="text-indigo-400 w-6 h-6" />,
              label: "Mobile Line",
              value: "+92 301 2037478",
              actionText: "0301-2037478",
              href: "tel:03012037478",
              accent: "border-indigo-500/30",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className={`glass-card glass-card-hover rounded-2xl p-6 border ${item.accent} flex items-center justify-between shadow-xl`}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="flex items-center gap-4 min-w-0 flex-1">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    {item.label}
                  </p>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-100 hover:text-cyan-400 font-bold text-sm sm:text-base transition-colors truncate block"
                  >
                    {item.value}
                  </a>
                </div>
              </div>

              {/* Copy button */}
              <button
                onClick={() => handleCopy(item.actionText, item.label)}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                title="Copy to clipboard"
                aria-label={`Copy ${item.label}`}
              >
                {copiedField === item.label ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </motion.div>
          ))}

          {/* Quick WhatsApp Action CTA */}
          <div className="pt-2">
            <a
              href="https://wa.me/923452435349"
              target="_blank"
              rel="noreferrer"
              className="w-full py-4 px-6 rounded-2xl font-bold bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 flex items-center justify-center gap-3 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:scale-[1.02] transition-all duration-300"
            >
              <FaWhatsapp className="text-xl" /> Quick Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Right Contact Form */}
        <div className="lg:col-span-7">
          <motion.div
            className="glass-card rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-2xl relative"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold font-outfit text-white mb-6">
              Send Me a <span className="text-cyan-400">Message</span>
            </h3>

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
                  <h4 className="text-xl font-bold text-white font-outfit">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-slate-300 text-sm font-light">
                    Thank you for reaching out, Khawaja Naqeeb will get back to you shortly.
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
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Project Inquiry / Collaboration"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell me about your project requirements..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl font-bold bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                  >
                    <Send className="w-4 h-4" /> Send Message
                  </button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

