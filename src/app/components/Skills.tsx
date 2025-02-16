import Image from "next/image";

const skills = [
  { name: "Computer Networking", level: 80, image: "/networking.jpg", description: "Managing and configuring networks to ensure smooth communication between computers in an organization." },
  { name: "HTML", level: 90, image: "/html.jfif", description: "Experienced in building web structures with HTML, creating semantic and accessible web pages." },
  { name: "CSS", level: 85, image: "/css.png", description: "Knowledgeable in styling web pages, making them visually appealing, responsive, and user-friendly." },
  { name: "JavaScript", level: 75, image: "/java.png", description: "Experience in adding interactivity and logic to web pages using JavaScript." },
  { name: "TypeScript", level: 70, image: "/ts.jpg", description: "Learning TypeScript to add type safety and enhance JavaScript projects." },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-6 text-indigo-400 animate-fadeIn">My Skills</h2>
        <p className="text-lg text-gray-300 text-center leading-relaxed mb-8">
          I have gained expertise in various fields, including computer networking and web development technologies.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 shadow-lg rounded-lg p-6 border border-gray-700 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300"
            >
              <div className="flex items-center mb-4">
                <Image src={skill.image} alt={skill.name} width={48} height={48} className="rounded-md" />
                <h3 className="text-2xl font-semibold text-indigo-300 ml-4">{skill.name}</h3>
              </div>
              <p className="text-gray-400 mb-4">{skill.description}</p>

              {/* Progress Bar */}
              <div className="w-full bg-gray-700 rounded-full h-2.5 mb-2 overflow-hidden">
                <div
                  className="bg-indigo-400 h-2.5 rounded-full transition-all duration-700 ease-in-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <p className="text-gray-400 text-sm">{skill.level}% Expertise</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
