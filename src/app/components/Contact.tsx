export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gradient-to-r from-gray-50 via-white to-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-6">Contact Information</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Feel free to reach out to me using the following contact details. I am always open to new opportunities and collaborations!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Email */}
          <div className="flex items-center space-x-4">
            
            <p className="text-lg text-gray-700">
              <strong>Email:</strong> <a href="mailto:naqeebkns@gmail.com" className="text-blue-600 hover:underline">naqeebkns@gmail.com</a>
            </p>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center space-x-4">
            
            
            <p className="text-lg text-gray-700">
              <strong>WhatsApp:</strong> <a href="https://wa.me/923452435349" className="text-green-600 hover:underline">02345-2435349</a>
            </p>
          </div>

          {/* Mobile */}
          <div className="flex items-center space-x-4">
            
            <p className="text-lg text-gray-700">
              <strong>Mobile:</strong> <a href="tel:03012037478" className="text-indigo-600 hover:underline">0301-2037478</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
