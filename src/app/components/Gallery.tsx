"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Image and Video Data
const galleryItems = [
  { src: "/g1.jpeg", alt: "Pic1" },
  { src: "/g2.jpg", alt: "Pic2" },
  { src: "/g3.jpg", alt: "Pic3" },
  { src: "/g4.jpg", alt: "Pic4" },
  { src: "/g6.jpeg", alt: "Pic6" },
  { src: "/g7.jpeg", alt: "Pic7" },
  { src: "/g8.jpeg", alt: "Pic8" },
];

const videoItems = [
  { src: "/v1.mp4", title: "Award Ceremony" },
  { src: "/v2.mp4", title: "Website Functionality" },
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryItems.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="gallery" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-400 mb-6">Gallery</h2>
        <p className="text-gray-300 text-lg mb-8">
          A showcase of my projects, achievements, and events.
        </p>

        {/* Image Slider with Dots */}
        <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
          <motion.div
            className="flex transition-transform duration-700"
            animate={{ x: `-${currentIndex * 100}%` }}
          >
            {galleryItems.map((item, index) => (
              <div key={index} className="min-w-full flex justify-center items-center">
                <div className="w-full h-[400px] relative overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg"
                  />
                </div>
              </div>
            ))}
          </motion.div>

          {/* Dots for Slider */}
          <div className="flex justify-center mt-4">
            {galleryItems.map((_, index) => (
              <span
                key={index}
                className={`h-3 w-3 mx-1 rounded-full ${
                  currentIndex === index ? "bg-blue-400" : "bg-gray-500"
                } transition-all duration-300`}
              ></span>
            ))}
          </div>
        </div>

        {/* Videos Section */}
        <h3 className="text-3xl font-semibold text-blue-300 mt-12 mb-6">Videos</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4">
          {videoItems.map((video, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] relative">
                <video
                  src={video.src}
                  controls
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <p className="text-gray-300 mt-2">{video.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
