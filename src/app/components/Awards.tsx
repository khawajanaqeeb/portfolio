"use client";
import { motion } from "framer-motion";

export default function Awards() {
  return (
    <section
      id="awards"
      className="py-16 px-6 sm:px-12 lg:px-20 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 text-white"
    >
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-bold text-blue-600 mb-6 hover:scale-105 transition-all duration-300">
          Awards & Honors
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed hover:text-white transition-all duration-300">
          I am proud to share my achievements, which reflect my dedication and
          commitment to learning and growth.
        </p>
      </motion.div>

      {/* Awards List */}
      <motion.div
        className="max-w-4xl mx-auto mt-8 space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        {[
          {
            title: "Successfully Completed Quarter One of GIAIC",
            description:
              "Global AI and Cloud Computing Initiative (GIAIC) is a renowned program focusing on AI and Cloud Computing. Completing Quarter One equipped me with foundational knowledge and hands-on experience.",
            color: "border-yellow-400",
          },
          {
            title: "Excellence in Computer Teaching",
            description:
              "Awarded for outstanding performance as computer teacher for class 9th and 10th , got best teacher award which truly shows my computer trainer skills.",
            color: "border-green-400",
          },
          {
            title: "Best Teacher Award",
            description:
              "Received Best Mathamatics and Computer Teacher form All Sindh Teachers Appreciation Award Ceremony 2021",
            color: "border-blue-400",
          },
        ].map((award, index) => (
          <motion.div
            key={index}
            className={`bg-gray-700 shadow-lg rounded-lg p-6 border ${award.color} hover:shadow-2xl transition-all duration-300`}
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-2xl font-semibold text-white">{award.title}</h3>
            <p className="text-gray-300 mt-2">{award.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        className="text-sm text-gray-400 mt-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        These milestones are stepping stones toward a promising future in technology and innovation.
      </motion.p>
    </section>
  );
}
