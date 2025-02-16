"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Experience from "./components/Experience";
import ProfessionalDev from "./components/ProfessionalDev";
import ProjectPortfolio from "./components/ProjectPortfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Awards from "./components/Awards";
import Gallery from "@/app/components/Gallery"; // ✅ Import Gallery Component

export default function Home() {
  return (
    <div id="home" className="bg-gray-900 text-white min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center py-16 px-6 sm:px-12">
        {/* Left: Welcome Message */}
        <section className="w-full lg:w-1/2 text-center lg:text-left space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-400 mb-4 hover:scale-105 transition-all duration-300">
            Welcome to My Portfolio
          </h1>
          <p className="text-lg sm:text-xl font-light text-gray-300 hover:text-gray-100 transition-all duration-300">
            Hi, I am <span className="font-semibold text-blue-300">Naqeeb</span>. A passionate web developer and tech enthusiast, eager to create impactful digital experiences.
          </p>
          <p className="text-base sm:text-lg text-gray-400 hover:text-gray-200 transition-all duration-300">
            Explore my journey in technology, development, and AI.
          </p>
        </section>

        {/* Right: Profile Image */}
        <section className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
          <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-60 md:h-60 relative rounded-full shadow-xl border-4 border-blue-400 overflow-hidden hover:scale-105 transition-all duration-300">
            <Image
              src="/naq1.png"
              alt="Naqeeb"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </section>
      </div>

      {/* Sections */}
      <div className="space-y-16 px-6 sm:px-12 lg:px-20">
        <AboutMe />
        <Education />
        <Experience />
        <ProfessionalDev />
        <ProjectPortfolio />
        <Awards />
        <Skills />
        <Gallery />
        <Contact />
      </div>
    </div>
  );
}
