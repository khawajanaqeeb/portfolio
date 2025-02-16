"use client";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section
      id="education"
      className="py-16 px-6 sm:px-12 lg:px-20 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500"
    >
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-bold text-blue-400 mb-6 hover:scale-105 transition-all duration-300">
          Education
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-8 hover:text-gray-100 transition-all duration-300">
          My academic journey has shaped my understanding of diverse subjects
          and has provided me with a solid foundation for growth.
        </p>
      </motion.div>

      {/* Education List */}
      <motion.div
        className="max-w-4xl mx-auto space-y-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        {[
          {
            title: "Masters in Economics",
            institution: "University of Karachi",
            description: "Specialization in Economic Analysis and Policy",
          },
          {
            title: "Graduation in Commerce",
            institution: "University of Karachi",
            description: "Focused on Business and Financial Principles",
          },
          {
            title: "Intermediate in Science",
            institution: "Karachi",
            description: "Pre-Engineering",
          },
          {
            title: "Matriculation in Science",
            institution: "Karachi Board",
            description: "Majors: Maths, Chemistry, Physics",
          },
        ].map((edu, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 shadow-lg rounded-lg p-6 border border-gray-400 hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-2xl font-semibold text-blue-400">{edu.title}</h3>
            <p className="text-gray-300 mt-2">{edu.institution}</p>
            <p className="text-gray-400 mt-1">{edu.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
