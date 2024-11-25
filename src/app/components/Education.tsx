export default function Education() {
  return (
    <section id="education" className="py-16 bg-gradient-to-r from-blue-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-6">Education</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          My academic journey has shaped my understanding of diverse subjects and has provided me with a solid foundation for growth.
        </p>
        
        <div className="space-y-8">
          {/* Masters */}
          <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
            <h3 className="text-2xl font-semibold text-blue-600">Master's in Economics</h3>
            <p className="text-gray-700 mt-2">University of Karachi</p>
            <p className="text-gray-500 mt-1">Specialization in Economic Analysis and Policy</p>
          </div>

          {/* Graduation */}
          <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
            <h3 className="text-2xl font-semibold text-blue-600">Graduation in Commerce</h3>
            <p className="text-gray-700 mt-2">University of Karachi</p>
            <p className="text-gray-500 mt-1">Focused on Business and Financial Principles</p>
          </div>

          {/* Intermediate */}
          <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
            <h3 className="text-2xl font-semibold text-blue-600">Intermediate in Science</h3>
            <p className="text-gray-700 mt-2">Karachi</p>
            <p className="text-gray-500 mt-1">Pre-Engineering</p>
          </div>

          {/* Matriculation */}
          <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
            <h3 className="text-2xl font-semibold text-blue-600">Matriculation in Science</h3>
            <p className="text-gray-700 mt-2">Karachi Board</p>
            <p className="text-gray-500 mt-1">Majors Maths,Chemistry,Physics</p>
          </div>
        </div>
      </div>
    </section>
  );
}
