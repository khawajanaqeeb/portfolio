"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 px-6 sm:px-12 lg:px-20 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 text-white"
    >
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-bold text-yellow-400 mb-6 hover:scale-105 transition-all duration-300">
          Contact Information
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-8 hover:text-white transition-all duration-300">
          Feel free to reach out to me using the following contact details. I am always open to new opportunities and collaborations!
        </p>
      </motion.div>

      {/* Contact Details */}
      <motion.div
        className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        {[
          {
            icon: <Mail className="text-yellow-400 w-6 h-6" />,
            label: "Email",
            value: "naqeebkns@gmail.com",
            href: "mailto:naqeebkns@gmail.com",
            color: "text-yellow-400",
          },
          {
            icon: <MessageCircle className="text-green-400 w-6 h-6" />,
            label: "WhatsApp",
            value: "02345-2435349",
            href: "https://wa.me/923452435349",
            color: "text-green-400",
          },
          {
            icon: <Phone className="text-blue-400 w-6 h-6" />,
            label: "Mobile",
            value: "0301-2037478",
            href: "tel:03012037478",
            color: "text-blue-400",
          },
        ].map((contact, index) => (
          <motion.div
            key={index}
            className="flex items-center bg-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg p-6 border border-gray-500 space-x-4"
            whileHover={{ scale: 1.03 }}
          >
            {contact.icon}
            <div>
              <p className="text-gray-300 font-semibold">{contact.label}</p>
              <a
                href={contact.href}
                className={`${contact.color} hover:underline text-lg font-medium`}
              >
                {contact.value}
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        className="text-sm text-gray-400 mt-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        Looking forward to connecting with you!
      </motion.p>
    </section>
  );
}
