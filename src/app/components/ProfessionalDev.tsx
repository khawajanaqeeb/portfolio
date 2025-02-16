"use client";
import { motion } from "framer-motion";

export default function ProfessionalDev() {
  return (
    <section
      id="professionaldev"
      className="py-16 px-6 sm:px-12 lg:px-20 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 text-white"
    >
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-bold text-blue-600 mb-6 hover:scale-105 transition-all duration-300">
          Professional Development
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-8 hover:text-white transition-all duration-300">
          I continuously expand my knowledge and expertise through certifications and ongoing learning in cutting-edge technologies.
        </p>
      </motion.div>

      {/* Professional Development List */}
      <motion.div
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        {[
          {
            title: "MCSE (Microsoft Certified System Engineer)",
            organization: "Microsoft",
            description:
              "Advanced training in networking, security, and infrastructure management, strengthening my expertise in system engineering.",
            color: "bg-gray-700 border-yellow-400",
          },
          {
            title: "Software Diploma",
            organization: "Computer Guide Institute",
            description:
              "Comprehensive training in programming languages and software development methodologies.",
            color: "bg-gray-700 border-blue-400",
          },
          {
            title: "GIAIC (Governor Initiative for AI & Cloud Computing)",
            organization: "Currently Enrolled",
            description:
              "Successfully passed Quarter One and progressing through Quarter Two with a strong focus on AI and cloud computing.",
            color: "bg-gray-700 border-green-400",
          },
        ].map((dev, index) => (
          <motion.div
            key={index}
            className={`shadow-lg hover:shadow-2xl transition-all duration-300 rounded-lg p-6 border ${dev.color}`}
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-2xl font-semibold text-white">{dev.title}</h3>
            <p className="text-gray-300 mt-2 font-medium">{dev.organization}</p>
            <p className="text-gray-400 mt-1">{dev.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
