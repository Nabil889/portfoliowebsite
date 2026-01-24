import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="pt-20 px-4 max-w-7xl mx-auto min-h-[70vh] flex items-center">
      <div className="w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            I'm looking for opportunities in Business & Data Analytics.
            My background includes pharma/GxP and SAP, but I'm open to
            various industries and technologies. Feel free to reach out!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 mb-12">
          {/* Left: 3 Cards */}
          <div className="flex flex-col gap-6 md:gap-8">
            {/* Email */}
            <a
              href="mailto:nabilaouni1989@gmail.com"
              className="flex flex-col items-center p-5 md:p-6 bg-white rounded-2xl border-2 border-transparent hover:border-[#2563eb] hover:bg-blue-50 transition-all"
            >
              <FaEnvelope className="text-3xl md:text-4xl text-[#2563eb] mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
              <p className="text-sm text-gray-600 text-center break-all">nabilaouni1989@gmail.com</p>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/nabilaouni"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-5 md:p-6 bg-white rounded-2xl border-2 border-transparent hover:border-[#2563eb] hover:bg-blue-50 transition-all"
            >
              <FaLinkedin className="text-3xl md:text-4xl text-[#0077B5] mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">LinkedIn</h3>
              <p className="text-sm text-gray-600">Connect with me</p>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/nabil889"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-5 md:p-6 bg-white rounded-2xl border-2 border-transparent hover:border-[#2563eb] hover:bg-blue-50 transition-all"
            >
              <FaGithub className="text-3xl md:text-4xl text-gray-900 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">GitHub</h3>
              <p className="text-sm text-gray-600">View my projects</p>
            </a>
          </div>

          {/* Right: Info Box */}
          <div className="flex items-center justify-center lg:justify-start">
            <div className="bg-white rounded-2xl p-6 md:p-8 border-2 border-gray-200 w-full max-w-md lg:w-80">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 text-gray-700">
                  <FaMapMarkerAlt className="text-[#2563eb] flex-shrink-0" />
                  <span className="text-sm">Based in Rothrist, Aargau, Switzerland</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <FaBriefcase className="text-[#2563eb] flex-shrink-0" />
                  <span className="text-sm">Open to full-time positions and internships in German-speaking regions (Switzerland & Germany)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact