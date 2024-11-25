export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-gradient-to-r from-teal-50 via-white to-teal-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-teal-700 text-center mb-6">My Skills</h2>
        <p className="text-lg text-gray-600 text-center leading-relaxed mb-8">
          I have gained expertise in various skills, including computer networking and web development technologies.
        </p>

        <div className="space-y-10">
          {/* Computer Networking */}
          <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
            <div className="flex items-center mb-4">
              <img src="/networking.jpg" alt="Computer Networking" className="w-12 h-12 mr-4"/>
              <h3 className="text-2xl font-semibold text-teal-600">Computer Networking</h3>
            </div>
            <p className="text-gray-500 mb-4">Managing and configuring networks to ensure smooth communication between computers in an organization.</p>
            <div className="w-full bg-gray-300 rounded-full h-2.5 mb-2">
              <div className="bg-teal-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
            </div>
            <p className="text-gray-500 text-sm">80% Expertise</p>
          </div>

          {/* HTML */}
          <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
            <div className="flex items-center mb-4">
              <img src="html.jfif" alt="HTML" className="w-12 h-12 mr-4"/>
              <h3 className="text-2xl font-semibold text-teal-600">HTML</h3>
            </div>
            <p className="text-gray-500 mb-4">Experienced in building web structures with HTML, creating semantic and accessible web pages.</p>
            <div className="w-full bg-gray-300 rounded-full h-2.5 mb-2">
              <div className="bg-teal-600 h-2.5 rounded-full" style={{ width: '70%' }}></div>
            </div>
            <p className="text-gray-500 text-sm">70% Expertise</p>
          </div>

          {/* CSS */}
          <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
            <div className="flex items-center mb-4">
              <img src="css.png" alt="CSS" className="w-12 h-12 mr-4"/>
              <h3 className="text-2xl font-semibold text-teal-600">CSS</h3>
            </div>
            <p className="text-gray-500 mb-4">Knowledgeable in styling web pages, making them visually appealing, responsive, and user-friendly.</p>
            <div className="w-full bg-gray-300 rounded-full h-2.5 mb-2">
              <div className="bg-teal-600 h-2.5 rounded-full" style={{ width: '60%' }}></div>
            </div>
            <p className="text-gray-500 text-sm">60% Expertise</p>
          </div>

          {/* JavaScript */}
          <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
            <div className="flex items-center mb-4">
              <img src="/java.png" alt="JavaScript" className="w-12 h-12 mr-4"/>
              <h3 className="text-2xl font-semibold text-teal-600">JavaScript</h3>
            </div>
            <p className="text-gray-500 mb-4">Experience in adding interactivity and logic to web pages using JavaScript.</p>
            <div className="w-full bg-gray-300 rounded-full h-2.5 mb-2">
              <div className="bg-teal-600 h-2.5 rounded-full" style={{ width: '60%' }}></div>
            </div>
            <p className="text-gray-500 text-sm">60% Expertise</p>
          </div>

          {/* TypeScript */}
          <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
            <div className="flex items-center mb-4">
              <img src="/ts.jpg" alt="TypeScript" className="w-12 h-12 mr-4"/>
              <h3 className="text-2xl font-semibold text-teal-600">TypeScript</h3>
            </div>
            <p className="text-gray-500 mb-4">Learning TypeScript to add type safety and enhance JavaScript projects.</p>
            <div className="w-full bg-gray-300 rounded-full h-2.5 mb-2">
              <div className="bg-teal-600 h-2.5 rounded-full" style={{ width: '60%' }}></div>
            </div>
            <p className="text-gray-500 text-sm">60% Expertise</p>
          </div>
        </div>
      </div>
    </section>
  );
}
