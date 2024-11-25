import Image from "next/image"

export default function ProjectPortfolio() {
  return (
    <section id="projectportfolio" className="py-16 bg-gradient-to-r from-blue-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-blue-700 text-center mb-6">Project Portfolio</h2>
        <p className="text-lg text-gray-600 text-center leading-relaxed mb-8">
          I have worked on several projects that showcase my skills in various technologies. Below are some of the projects I have developed.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1: Simple Calculator */}
          <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
            <img src="/simplecalculator.png" alt="Simple Calculator" className="w-full h-48 object-cover rounded-md mb-4"/>
            <h3 className="text-2xl font-semibold text-blue-600">Simple Calculator (TypeScript)</h3>
            <p className="text-gray-500 mt-2">
              A basic calculator built using TypeScript that performs arithmetic operations such as addition, subtraction, multiplication, and division.
            </p>
          </div>

          {/* Project 2: Number Guessing Game */}
          <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
            <img src="/java.png" alt="Number Guessing Game" className="w-full h-48 object-cover rounded-md mb-4"/>
            <h3 className="text-2xl font-semibold text-blue-600">Number Guessing Game (JavaScript)</h3>
            <p className="text-gray-500 mt-2">
              A fun number guessing game built with JavaScript, where the player has to guess the correct number within a specified range.
            </p>
          </div>

          {/* Project 3: Dynamic CV */}
          <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
            <img src="/dynamic-cv.png" alt="Dynamic CV" className="w-full h-48 object-cover rounded-md mb-4"/>
            <h3 className="text-2xl font-semibold text-blue-600">Dynamic CV (HTML & CSS)</h3>
            <p className="text-gray-500 mt-2">
              A dynamic CV created using HTML and CSS, where users can interact and explore my personal achievements and skills.
            </p>
          </div>

          {/* Project 4: Figma to HTML/CSS */}
          <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
            <img src="/figma.png" alt="Figma Design to HTML & CSS" className="w-full h-48 object-cover rounded-md mb-4"/>
            <h3 className="text-2xl font-semibold text-blue-600">Figma Design to HTML & CSS</h3>
            <p className="text-gray-500 mt-2">
              Converted a Figma design into responsive HTML and CSS, ensuring that the design is pixel-perfect and functional across all devices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
