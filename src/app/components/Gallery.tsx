"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaExpand, FaTimes, FaPlayCircle } from "react-icons/fa";

const galleryItems = [
  { src: "/g1.jpeg", alt: "Academic Excellence Award Ceremony", caption: "Sindh Teacher Appreciation Award Ceremony" },
  { src: "/g2.jpg", alt: "Faculty Group Presentation", caption: "Computer Science Faculty & Seminar" },
  { src: "/g3.jpg", alt: "Lab Demonstration", caption: "Practical Computer Science Training Session" },
  { src: "/g4.jpg", alt: "Award Presentation", caption: "Receiving Best Teacher Honor" },
  { src: "/g6.jpeg", alt: "GIAIC Classroom Event", caption: "GIAIC Tech & AI Community Event" },
  { src: "/g7.jpeg", alt: "Mentorship Session", caption: "Student Web Dev Mentorship Workshop" },
  { src: "/g8.jpeg", alt: "Tech Certification Event", caption: "Computer Science Certification Ceremony" },
];

const videoItems = [
  { src: "/v1.mp4", title: "Award Ceremony Highlights", desc: "Honored with Best Computer Teacher Award" },
  { src: "/v2.mp4", title: "Website Platform Walkthrough", desc: "Demonstrating full-stack project features" },
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
    <section id="gallery" className="py-16 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto scroll-mt-24">
      {/* Title */}
      <div className="text-center mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3.5 py-1.5 rounded-full inline-block mb-3">
          Moments & Media
        </span>
        <h2 className="text-4xl sm:text-5xl font-extrabold font-outfit text-white tracking-tight">
          Photo & Video <span className="text-gradient-cyan">Gallery</span>
        </h2>
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mt-3 font-light">
          A visual journey capturing awards, educational workshops, student mentorship, and live demonstrations.
        </p>
      </div>

      {/* Main Image Slider */}
      <div className="relative max-w-4xl mx-auto glass-card rounded-3xl p-4 border border-slate-800 shadow-2xl overflow-hidden group">
        <div className="relative h-[320px] sm:h-[450px] w-full rounded-2xl overflow-hidden bg-slate-950">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full h-full cursor-pointer"
            onClick={() => setSelectedImage(galleryItems[currentIndex])}
          >
            <Image
              src={galleryItems[currentIndex].src}
              alt={galleryItems[currentIndex].alt}
              fill
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-contain rounded-2xl"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
              <div className="flex items-center justify-between w-full">
                <div>
                  <p className="text-white font-bold text-lg font-outfit">
                    {galleryItems[currentIndex].alt}
                  </p>
                  <p className="text-cyan-400 text-xs sm:text-sm font-light">
                    {galleryItems[currentIndex].caption}
                  </p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(galleryItems[currentIndex]);
                  }}
                  className="p-3 rounded-xl bg-slate-900/90 border border-slate-700 text-cyan-400 hover:scale-110 transition-transform"
                  aria-label="Expand image"
                >
                  <FaExpand />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Slider Arrow Controls */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-950/80 border border-slate-800 text-white hover:text-cyan-400 hover:scale-110 transition-all opacity-80 group-hover:opacity-100"
            aria-label="Previous slide"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-950/80 border border-slate-800 text-white hover:text-cyan-400 hover:scale-110 transition-all opacity-80 group-hover:opacity-100"
            aria-label="Next slide"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center items-center gap-2 mt-4 pb-2">
          {galleryItems.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? "w-8 bg-cyan-400"
                  : "w-2.5 bg-slate-700 hover:bg-slate-500"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Video Showcase Section */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold font-outfit text-white mb-6 text-center sm:text-left flex items-center gap-2">
          <FaPlayCircle className="text-cyan-400" />
          <span>Featured Video Demonstrations</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videoItems.map((video, idx) => (
            <motion.div
              key={idx}
              className="glass-card rounded-3xl p-4 border border-slate-800 shadow-xl overflow-hidden flex flex-col justify-between"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <div className="relative w-full h-[240px] sm:h-[300px] rounded-2xl overflow-hidden bg-slate-950">
                <video
                  src={video.src}
                  controls
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="pt-4 px-2">
                <h4 className="text-lg font-bold text-white font-outfit">
                  {video.title}
                </h4>
                <p className="text-slate-400 text-xs sm:text-sm mt-1 font-light">
                  {video.desc}
                </p>
              </div>
            </motion.div>
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
              aria-label="Close modal"
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
                <h4 className="text-xl font-bold text-white font-outfit">
                  {selectedImage.alt}
                </h4>
                <p className="text-cyan-400 text-sm mt-1 font-light">
                  {selectedImage.caption}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

