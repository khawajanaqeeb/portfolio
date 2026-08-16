"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import PageTransition from "@/app/components/PageTransition";
import { motion, AnimatePresence } from "framer-motion";
import { FaExpand, FaTimes, FaPlayCircle, FaImages, FaVideo, FaCloud } from "react-icons/fa";
import { getGalleryPictures, getGalleryVideos, SupabaseMediaItem } from "@/lib/supabaseClient";

const defaultGalleryItems = [
  { src: "/g1.jpeg", alt: "Pic1 - Award Ceremony", title: "Award Ceremony Event", category: "Honors" },
  { src: "/g2.jpg", alt: "Pic2 - Faculty Group", title: "Faculty Presentation", category: "Academic" },
  { src: "/g3.jpg", alt: "Pic3 - Practical Training", title: "Computer Lab Supervision", category: "Mentorship" },
  { src: "/g4.jpg", alt: "Pic4 - Teacher Honor", title: "Best Teacher Award Presentation", category: "Honors" },
  { src: "/g6.jpeg", alt: "Pic6 - GIAIC Classroom", title: "GIAIC AI Session", category: "AI & Tech" },
  { src: "/g7.jpeg", alt: "Pic7 - Mentorship Workshop", title: "Student Web Workshop", category: "Mentorship" },
  { src: "/g8.jpeg", alt: "Pic8 - Tech Certification", title: "Certification Ceremony", category: "Honors" },
  { src: "/g9.jpeg", alt: "Pic9 - Training Session", title: "Technical Seminar", category: "Academic" },
  { src: "/g10.jpeg", alt: "Pic10 - Campus Milestone", title: "Faculty Milestone", category: "Academic" },
  { src: "/g11.jpeg", alt: "Pic11 - Recognition", title: "Appreciation Recognition", category: "Honors" },
];

const defaultVideoItems = [
  {
    src: "/v1.mp4",
    title: "All Sindh Teachers Appreciation Award Ceremony 2021",
    subtitle: "Receiving the Best Mathematics & Computer Teacher Award",
    badge: "Award Ceremony Video",
  },
  {
    src: "/v2.mp4",
    title: "E-Commerce & Dynamic Application Demonstration",
    subtitle: "Interactive walkthrough showcasing Next.js and full-stack features",
    badge: "Project Feature Reel",
  },
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<"pictures" | "videos">("pictures");
  const [galleryItems, setGalleryItems] = useState(defaultGalleryItems);
  const [videoItems, setVideoItems] = useState(defaultVideoItems);
  const [isSupabaseConnected, setIsSupabaseConnected] = useState(false);
  const [selectedImage, setSelectedImage] = useState<typeof defaultGalleryItems[0] | null>(null);

  useEffect(() => {
    async function loadSupabaseMedia() {
      const dbPictures = await getGalleryPictures();
      const dbVideos = await getGalleryVideos();

      if (dbPictures.length > 0) {
        setIsSupabaseConnected(true);
        const mappedPics = dbPictures.map((item: SupabaseMediaItem) => ({
          src: item.url,
          alt: item.title,
          title: item.title,
          category: "Supabase Cloud",
        }));
        setGalleryItems([...mappedPics, ...defaultGalleryItems]);
      }

      if (dbVideos.length > 0) {
        setIsSupabaseConnected(true);
        const mappedVids = dbVideos.map((item: SupabaseMediaItem) => ({
          src: item.url,
          title: item.title,
          subtitle: "Streamed from Supabase CDN",
          badge: "Supabase HD Video",
        }));
        setVideoItems([...mappedVids, ...defaultVideoItems]);
      }
    }

    loadSupabaseMedia();
  }, []);

  return (
    <PageTransition>
      <div className="py-12 sm:py-16 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-bold uppercase tracking-widest text-cyan-400">
            {isSupabaseConnected ? (
              <span className="flex items-center gap-1.5 text-emerald-400">
                <FaCloud className="text-sm" /> Connected to Supabase Cloud CDN
              </span>
            ) : (
              <span>Visual Portfolio &amp; Media Hub</span>
            )}
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-white">
            Media <span className="text-gradient-cyan">Gallery</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Switch between pictures and high-definition video demonstrations of events, awards, and software projects.
          </p>
        </div>

        {/* Tab Switcher Buttons */}
        <div className="flex items-center justify-center">
          <div className="inline-flex p-1.5 rounded-full bg-slate-900/90 border border-slate-800 backdrop-blur-xl shadow-2xl">
            <button
              onClick={() => setActiveTab("pictures")}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeTab === "pictures"
                  ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 shadow-lg shadow-cyan-500/25 scale-105"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <FaImages className="text-base" />
              <span>Pictures Gallery ({galleryItems.length})</span>
            </button>

            <button
              onClick={() => setActiveTab("videos")}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeTab === "videos"
                  ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 shadow-lg shadow-cyan-500/25 scale-105"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <FaVideo className="text-base" />
              <span>Videos Showcase ({videoItems.length})</span>
            </button>
          </div>
        </div>

        {/* Dynamic Content Display */}
        <AnimatePresence mode="wait">
          {activeTab === "pictures" ? (
            /* PICTURES GALLERY MODE */
            <motion.div
              key="pictures-grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryItems.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.35, delay: idx * 0.04 }}
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
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                        <span className="self-end text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-cyan-400">
                          {item.category}
                        </span>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold text-white font-heading">{item.title}</span>
                          <span className="p-2 rounded-xl bg-slate-900/90 text-cyan-400 border border-slate-700">
                            <FaExpand className="text-xs" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            /* VIDEOS SHOWCASE MODE (BIGGER CINEMA FRAMES) */
            <motion.div
              key="videos-showcase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-12 max-w-5xl mx-auto"
            >
              {videoItems.map((video, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl space-y-6 relative overflow-hidden group"
                >
                  {/* Title & Badge Header */}
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full inline-block mb-2">
                        {video.badge}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                        {video.title}
                      </h2>
                      <p className="text-slate-400 text-sm mt-1 font-light">
                        {video.subtitle}
                      </p>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-xl">
                      <FaPlayCircle />
                    </div>
                  </div>

                  {/* BIGGER WIDESCREEN CINEMA FRAME */}
                  <div className="relative w-full h-[280px] sm:h-[420px] md:h-[500px] lg:h-[540px] rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl group-hover:border-cyan-500/40 transition-colors">
                    <video
                      src={video.src}
                      controls
                      preload="metadata"
                      className="w-full h-full object-contain rounded-2xl bg-black"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Lightbox Photo Modal */}
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
                className="absolute top-6 right-6 p-3 rounded-full bg-slate-900 border border-slate-700 text-white hover:text-cyan-400 text-xl shadow-lg"
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
