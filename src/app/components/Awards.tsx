export default function Awards() {
  return (
    <section id="awards" className="py-16 bg-gradient-to-r from-blue-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-6">Awards & Honors</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          I am proud to share my achievements, which reflect my dedication and commitment to learning and growth.
        </p>
        <div className="mt-8">
          <div className="bg-white shadow-md rounded-lg p-6 mb-6 border border-gray-200">
            <h3 className="text-2xl font-semibold text-blue-600">
              Successfully Completed Quarter One of GIAIC
            </h3>
            <p className="text-gray-600 mt-2">
              Global AI and Cloud Computing Initiative (GIAIC) is a renowned program focusing on developing skills in 
              Artificial Intelligence and Cloud Computing. Completing Quarter One has equipped me with foundational 
              knowledge and hands-on experience in these cutting-edge technologies.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 mb-6 border border-gray-200">
            <h3 className="text-2xl font-semibold text-blue-600">
              Excellence in Coding Bootcamp
            </h3>
            <p className="text-gray-600 mt-2">
              Awarded for outstanding performance in a coding bootcamp, showcasing exceptional problem-solving and 
              programming skills.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 mb-6 border border-gray-200">
            <h3 className="text-2xl font-semibold text-blue-600">
              Academic Achievements in Computer Science
            </h3>
            <p className="text-gray-600 mt-2">
              Recognized for achieving top grades in computer science courses during my academic journey.
            </p>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-8">
          These milestones are stepping stones toward a promising future in technology and innovation.
        </p>
      </div>
    </section>
  );
}