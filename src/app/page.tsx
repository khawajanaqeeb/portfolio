'use client'
import Image from "next/image";
import "./globals.css";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Experience from "./components/Experience";
import ProfessionalDev from "./components/ProfessionalDev";
import ProjectPortfolio from "./components/ProjectPortfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Awards from "./components/Awards";

export default function Home() {
  return (
    <div id="home" className="bg-gradient-to-r from-blue-100 via-white to-slate-500" >
      <div className="flex justify-center items-center py-16">
        {/* Left Section: Welcome Message */}
        <section className="w-full sm:w-1/2 p-6 md:p-10 text-center sm:text-left">
          <h1 className="text-5xl font-extrabold text-teal-700 mb-4">My Portfolio</h1>
          <p className="text-xl font-light text-gray-600 mb-6">
            Hello, I am Naqeeb. Here you can find my professional experience, education, skills, awards, and more...
          </p>
          <p className="text-lg text-gray-500">
            Explore my journey in technology, development, and AI.
          </p>
        </section>

        {/* Right Section: Profile Image */}
        <section className="w-full sm:w-1/2 flex justify-center">
          <div className="w-40 h-40 sm:w-60 sm:h-60 relative rounded-full shadow-xl border-4 border-teal-600 overflow-hidden">
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

      {/* Section Links */}
      <div className="space-y-16">
        <AboutMe />
        <Education />
        <Experience />
        <ProfessionalDev />
        <ProjectPortfolio />
        <Awards />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}
