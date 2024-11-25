'use client'

import Link from "next/link"

export default function Navbar(){
    return(
        <div className="flex justify-end items-center p-4 bg-gray-50 shadow-md ">
            <ul className="flex space-x-6 text-gray-800 font-sans text-lg">
            <li><a href="#home" className="hover:text-blue-600 transition">
            Home
          </a></li>
                <li><a href="#aboutme" className="hover:text-blue-600 transition">About Me</a></li>
                <li><a href="#education" className="hover:text-blue-600 transition">Education</a></li>
                <li><a href="#experience" className="hover:text-blue-600 transition">Experience</a></li>
                <li><a href="#projectportfolio" className="hover:text-blue-600 transition">Project Portfolio</a></li>
                <li><a href="#porfessionaldev" className="hover:text-blue-600 transition">Professional Development</a></li>
                <li><a href="#awards" className="hover:text-blue-600 transition">Awards and Honor</a></li>
                <li><a href="#contact" className="hover:text-blue-600 transition">Contact</a></li>
            </ul>
        </div>
    )

    

}