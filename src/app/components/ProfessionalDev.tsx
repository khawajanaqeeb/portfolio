export default function ProfessionalDev() {
  return (
    <section id="porfessionaldev" className="py-16 bg-gradient-to-r from-green-50 via-white to-green-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-green-700 text-center mb-6">Professional Development</h2>
        <p className="text-lg text-gray-600 text-center leading-relaxed mb-8">
          I am dedicated to improving my skills and knowledge in the computer field through various certifications and continuous learning.
        </p>

        <div className="space-y-8">
          {/* MCSE Certification */}
          <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
            <h3 className="text-2xl font-semibold text-green-600">MCSE (Microsoft Certified System Engineer)</h3>
            <p className="text-gray-700 mt-2">Microsoft</p>
            <p className="text-gray-500 mt-1">
              Successfully completed the MCSE certification, which enhanced my expertise in networking, security, and infrastructure management.
            </p>
          </div>

          {/* Software Diploma */}
          <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
            <h3 className="text-2xl font-semibold text-green-600">Software Diploma</h3>
            <p className="text-gray-700 mt-2">Computer Guide Institute</p>
            <p className="text-gray-500 mt-1">
              Completed a comprehensive software diploma, learning key programming languages and software development techniques.
            </p>
          </div>

          {/* GIAIC Progress */}
          <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
            <h3 className="text-2xl font-semibold text-green-600">GIAIC (Governor Initiative for Artificial Intellegence Cloud Computing)</h3>
            <p className="text-gray-700 mt-2">Currently Enrolled</p>
            <p className="text-gray-500 mt-1">
              Passed Quarter One successfully and now studying hard for Quarter Two to enhance my expertise in AI and intelligent computing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
