"use client";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-16 px-6 sm:px-12 lg:px-20 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 text-white"
    >
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-bold text-blue-500 mb-6 hover:scale-105 transition-all duration-300">
          Professional Experience
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-8 hover:text-white transition-all duration-300">
          Over the years, I have honed my skills in teaching, account management, and leadership, playing key roles in education and corporate environments.
        </p>
      </motion.div>

      {/* Experience List */}
      <motion.div
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        {[
          {
            title: "Head of Faculty for Web Development",
            company: "Bitcraft",
            description:
              "Currently teaching HTML, CSS, JavaScript, and TypeScript while mentoring students to excel in web development.",
            color: "border-yellow-400",
          },
          {
            title: "Head of Computer Faculty",
            company: "Falcon Grammar School",
            description:
              "Taught 9th and 10th classes, supervised computer practicals for the Karachi Board, and managed the computer faculty.",
            color: "border-green-400",
          },
          {
            title: "Accounts Manager",
            company: "Beyond Borders, Dubai",
            description:
              "Oversaw financial accounts, ensured compliance with international standards, and streamlined operations.",
            color: "border-blue-400",
          },
          {
            title: "Accounts Manager",
            company: "Venture Crest Pvt Ltd, DHA Karachi",
            description:
              "Managed accounts, prepared financial reports, and collaborated with internal teams to enhance fiscal policies.",
            color: "border-red-400",
          },
        ].map((exp, index) => (
          <motion.div
            key={index}
            className={`bg-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-lg p-6 border ${exp.color}`}
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-2xl font-semibold text-white">{exp.title}</h3>
            <p className="text-gray-300 mt-2 font-medium">{exp.company}</p>
            <p className="text-gray-400 mt-1">{exp.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
