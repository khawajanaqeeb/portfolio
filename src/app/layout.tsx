

import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Khawaja Naqeeb | Full Stack Developer & AI Specialist",
  description:
    "Portfolio of Khawaja Naqeeb Uddin - Full Stack Web Developer, AI & Cloud Computing Specialist, and Tech Educator.",
  keywords: [
    "Khawaja Naqeeb",
    "Full Stack Developer",
    "Web Developer Portfolio",
    "Next.js Developer",
    "TypeScript",
    "AI Enthusiast",
    "Karachi Developer",
  ],
  authors: [{ name: "Khawaja Naqeeb Uddin" }],
  openGraph: {
    title: "Khawaja Naqeeb | Full Stack Developer & AI Specialist",
    description:
      "Explore my journey, projects, skills, and experience in web development and artificial intelligence.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${plusJakarta.variable} font-sans bg-slate-950 text-slate-100 antialiased selection:bg-cyan-500 selection:text-slate-950 overflow-x-hidden`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

