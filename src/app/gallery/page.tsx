"use client";
import { useState } from "react";
import Image from "next/image";
import PageTransition from "@/app/components/PageTransition";
import { motion, AnimatePresence } from "framer-motion";
import { FaExpand, FaTimes, FaPlayCircle } from "react-icons/fa";

const galleryItems = [
  { src: "/g1.jpeg", alt: "Pic1 - Award Ceremony", title: "Award Ceremony Event" },
  { src: "/g2.jpg", alt: "Pic2 - Faculty Group", title: "Faculty Presentation" },
  { src: "/g3.jpg", alt: "Pic3 - Practical Training", title: "Computer Lab Demonstration" },
  { src: "/g4.jpg", alt: "Pic4 - Teacher Honor", title: "Best Teacher Award Presentation" },
  { src: "/g6.jpeg", alt: "Pic6 - GIAIC Classroom", title: "GIAIC Classroom Session" },
  { src: "/g7.jpeg", alt: "Pic7 - Mentorship Workshop", title: "Student Workshop" },
  { src: "/g8.jpeg", alt: "Pic8 - Tech Certification", title: "Certification Ceremony" },
  { src: "/g9.jpeg", alt: "Pic9 - Training Session", title: "Technical Training" },
  { src: "/g10.jpeg", alt: "Pic10 - Campus Milestone", title: "Campus Presentation" },
  { src: "/g11.jpeg", alt: "Pic11 - Recognition", title: "Award Recognition" },
];

const videoItems = [
  { src: "/v1.mp4", title: "Award Ceremony" },
  { src: "/v2.mp4", title: "Website Functionality" },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  return (
    <PageTransition>
      <div className="py-12 sm:py-16 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 rounded-full inline-block">
            Visual Highlights
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-white">
            Gallery
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            A showcase of my projects, achievements, and events.
          </p>
        </div>

        {/* Photos Grid */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedImage(item)}
                className="glass-card glass-card-hover rounded-3xl p-3 border border-slate-800 shadow-xl cursor-pointer group relative overflow-hidden"
              >
                <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-slate-900">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4">
                    <span className="text-sm font-semibold text-white font-heading">{item.title}</span>
                    <span className="p-2 rounded-lg bg-slate-900/90 text-cyan-400">
                      <FaExpand className="text-xs" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Videos Section */}
        <div className="pt-6">
          <div className="mb-8 flex items-center gap-3">
            <FaPlayCircle className="text-cyan-400 text-3xl" />
            <div>
              <h2 className="text-3xl font-bold font-heading text-white">
                Videos
              </h2>
              <p className="text-slate-400 text-sm font-light">
                Recorded events and functional project demonstrations.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videoItems.map((video, idx) => (
              <div
                key={idx}
                className="glass-card rounded-3xl p-4 border border-slate-800 shadow-xl overflow-hidden flex flex-col justify-between"
              >
                <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden bg-slate-900">
                  <video
                    src={video.src}
                    controls
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <div className="pt-4 px-2">
                  <h3 className="text-xl font-bold text-white font-heading">
                    {video.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 p-3 rounded-full bg-slate-900 border border-slate-700 text-white hover:text-cyan-400 text-xl"
                aria-label="Close photo preview"
              >
                <FaTimes />
              </button>

              <div
                className="relative max-w-5xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative w-full h-full max-h-[75vh]">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    fill
                    sizes="100vw"
                    className="object-contain rounded-2xl"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h4 className="text-xl font-bold text-white font-heading">
                    {selectedImage.title}
                  </h4>
                  <p className="text-cyan-400 text-xs sm:text-sm mt-1 font-light">
                    {selectedImage.alt}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
}
