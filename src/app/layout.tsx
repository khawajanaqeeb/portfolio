

import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AmbientBackground2026 from "./components/AmbientBackground2026";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "Khawaja Naqeeb Uddin | Full Stack Developer & AI Specialist",
  description:
    "Official portfolio of Khawaja Naqeeb Uddin - Full Stack Web Developer, AI & Cloud Specialist (GIAIC), Head of Faculty at Bitcraft, and System Engineer.",
  keywords: [
    "Khawaja Naqeeb Uddin",
    "Khawaja Naqeeb",
    "Full Stack Developer",
    "Next.js Developer",
    "TypeScript",
    "GIAIC AI",
    "Web Development Faculty",
    "Karachi Developer",
  ],
  authors: [{ name: "Khawaja Naqeeb Uddin" }],
  openGraph: {
    title: "Khawaja Naqeeb Uddin | Full Stack Developer & AI Specialist",
    description:
      "Explore projects, academic credentials, professional experience, and technical expertise in Web Development and AI.",
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
        className={`${outfit.variable} ${plusJakarta.variable} font-sans bg-slate-950 text-slate-100 antialiased selection:bg-cyan-500 selection:text-slate-950 overflow-x-hidden min-h-screen flex flex-col justify-between relative`}
      >
        <AmbientBackground2026 />
        <Navbar />
        <main className="flex-grow pt-20 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}




