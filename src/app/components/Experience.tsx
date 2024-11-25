export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-gradient-to-r from-gray-50 via-white to-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-blue-700 text-center mb-6">Professional Experience</h2>
        <p className="text-lg text-gray-600 text-center leading-relaxed mb-8">
          Over the years, I have honed my skills in teaching, account management, and leadership, playing key roles in education and corporate environments.
        </p>
        
        <div className="space-y-8">
          {/* Bitcraft */}
          <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
            <h3 className="text-2xl font-semibold text-blue-600">Head of Faculty for Web Development</h3>
            <p className="text-gray-700 mt-2">Bitcraft</p>
            <p className="text-gray-500 mt-1">
              Currently teaching HTML, CSS, JavaScript, and TypeScript while mentoring students to excel in web development.
            </p>
          </div>

          {/* Falcon Grammar School */}
          <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
            <h3 className="text-2xl font-semibold text-blue-600">Head of Computer Faculty</h3>
            <p className="text-gray-700 mt-2">Falcon Grammar School</p>
            <p className="text-gray-500 mt-1">
              Taught 9th and 10th classes, supervised computer practicals for the Karachi Board, and managed the computer faculty.
            </p>
          </div>

          {/* Beyond Borders */}
          <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
            <h3 className="text-2xl font-semibold text-blue-600">Accounts Manager</h3>
            <p className="text-gray-700 mt-2">Beyond Borders, Dubai</p>
            <p className="text-gray-500 mt-1">
              Oversaw financial accounts, ensured compliance with international standards, and streamlined operations.
            </p>
          </div>

          {/* Venture Crest Pvt Ltd */}
          <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
            <h3 className="text-2xl font-semibold text-blue-600">Accounts Manager</h3>
            <p className="text-gray-700 mt-2">Venture Crest Pvt Ltd, DHA Karachi</p>
            <p className="text-gray-500 mt-1">
              Managed accounts, prepared financial reports, and collaborated with internal teams to enhance fiscal policies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
