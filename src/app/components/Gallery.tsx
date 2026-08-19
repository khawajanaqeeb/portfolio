"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaExpand, FaTimes, FaPlayCircle } from "react-icons/fa";

const cdnBase = "https://egpdxaviimyirpbafgpt.supabase.co/storage/v1/object/public/gallery";

const galleryItems = [
  { src: `${cdnBase}/g1.jpeg`, alt: "Academic Excellence Award Ceremony", caption: "Sindh Teacher Appreciation Award Ceremony" },
  { src: `${cdnBase}/g2.jpg`, alt: "Faculty Group Presentation", caption: "Computer Science Faculty & Seminar" },
  { src: `${cdnBase}/g3.jpg`, alt: "Lab Demonstration", caption: "Practical Computer Science Training Session" },
  { src: `${cdnBase}/g4.jpg`, alt: "Award Presentation", caption: "Receiving Best Teacher Honor" },
  { src: `${cdnBase}/g6.jpeg`, alt: "GIAIC Classroom Event", caption: "GIAIC Tech & AI Community Event" },
  { src: `${cdnBase}/g7.jpeg`, alt: "Mentorship Session", caption: "Student Web Dev Mentorship Workshop" },
  { src: `${cdnBase}/g8.jpeg`, alt: "Tech Certification Event", caption: "Computer Science Certification Ceremony" },
];

const videoItems = [
  { src: `${cdnBase}/v1.mp4`, title: "Award Ceremony Highlights", desc: "Honored with Best Computer Teacher Award" },
  { src: `${cdnBase}/v2.mp4`, title: "Website Platform Walkthrough", desc: "Demonstrating full-stack project features" },
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
  };

  return (
    <section id="gallery" className="py-24 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto space-y-16">
      {/* Section Header */}
      <div className="text-center space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 rounded-full inline-block">
          Media Highlights
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading text-white">
          Event <span className="text-gradient-cyan">Gallery</span>
        </h2>
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-light">
          A visual record of academic achievements, student mentorship, award ceremonies, and interactive project demonstrations.
        </p>
      </div>

      {/* Main Carousel Showcase */}
      <div className="relative glass-card rounded-3xl p-4 sm:p-8 border border-slate-800 shadow-2xl overflow-hidden">
        <div className="relative h-[320px] sm:h-[450px] md:h-[520px] rounded-2xl overflow-hidden bg-slate-950">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="relative w-full h-full"
            >
              <Image
                src={galleryItems[currentIndex].src}
                alt={galleryItems[currentIndex].alt}
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-contain"
                priority
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex flex-col justify-end p-6 sm:p-10">
                <p className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-1">
                  Photo {currentIndex + 1} of {galleryItems.length}
                </p>
                <h3 className="text-xl sm:text-3xl font-extrabold text-white font-heading">
                  {galleryItems[currentIndex].caption}
                </h3>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 border border-slate-700 text-white hover:text-cyan-400 hover:border-cyan-500 transition-all shadow-lg backdrop-blur-md"
            aria-label="Previous Slide"
          >
            <FaChevronLeft className="text-lg" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 border border-slate-700 text-white hover:text-cyan-400 hover:border-cyan-500 transition-all shadow-lg backdrop-blur-md"
            aria-label="Next Slide"
          >
            <FaChevronRight className="text-lg" />
          </button>
        </div>

        {/* Thumbnail Indicator Strip */}
        <div className="flex justify-center gap-2 mt-6 overflow-x-auto py-2 scrollbar-hide">
          {galleryItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`relative w-16 h-12 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 ${
                idx === currentIndex
                  ? "border-cyan-400 scale-105 shadow-md shadow-cyan-500/30"
                  : "border-slate-800 opacity-50 hover:opacity-100"
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="64px"
                className="object-cover"
                unoptimized
              />
            </button>
          ))}
        </div>
      </div>

      {/* Video Demonstration Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
        {videoItems.map((video, idx) => (
          <div
            key={idx}
            className="glass-card rounded-3xl p-6 border border-slate-800 shadow-xl space-y-4 relative overflow-hidden group"
          >
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                  Video Feature
                </span>
                <h4 className="text-xl font-bold text-white font-heading mt-1">
                  {video.title}
                </h4>
                <p className="text-slate-400 text-xs mt-1 font-light">
                  {video.desc}
                </p>
              </div>
              <FaPlayCircle className="text-cyan-400 text-3xl group-hover:scale-110 transition-transform" />
            </div>

            <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
              <video
                src={video.src}
                controls
                preload="metadata"
                className="w-full h-full object-contain bg-black"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-slate-900 border border-slate-700 text-white hover:text-cyan-400 text-xl"
            >
              <FaTimes />
            </button>
            <div
              className="relative max-w-4xl w-full h-[80vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  sizes="100vw"
                  className="object-contain rounded-2xl"
                  unoptimized
                />
              </div>
              <p className="text-center text-slate-200 font-heading font-bold text-lg mt-4">
                {selectedImage.caption}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
