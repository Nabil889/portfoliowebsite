const About = () => {
  const timeline = [
    {
      year: "2025 - Present",
      title: "SAP User & Authorization Management",
      company: "Siegfried AG",
      type: "Internship",
      description: "Supporting SAP user and authorization management (ECC & S/4HANA), SoD analysis, and collaboration with departments on compliance and audit topics.",
      side: "left"
    },
    {
      year: "Feb 2025 - Jun 2025",
      title: "IT Service Desk",
      company: "Siegfried AG",
      type: "Internship",
      description: "1st and 2nd level support, incident management, user administration including onboarding/offboarding in Active Directory.",
      side: "right"
    },
    {
      year: "Aug 2023 - Present",
      title: "Operator & Deputy Shift Leader",
      company: "Siegfried AG",
      type: "Full-time",
      description: "Ensuring GMP-compliant production processes, SAP-based documentation, continuous improvement (KVP), and leading a 15-person shift team.",
      side: "left"
    },
    {
      year: "Oct 2021 - Aug 2023",
      title: "Production Employee",
      company: "Evonik Industries",
      type: "Full-time",
      description: "Quality assurance and process stability in chemical production and laboratory environment.",
      side: "right"
    },
    {
      year: "Sep 2018 - Oct 2021",
      title: "Police Officer",
      company: "State Police NRW, Germany",
      type: "Full-time",
      description: "Structured analysis of complex situations, decision-making under pressure, and professional communication.",
      side: "left"
    }
  ];

  const education = [
    {
      year: "2024 - 2026",
      degree: "B.Sc. Business Informatics",
      institution: "IU International University",
      status: "Ongoing"
    },
    {
      year: "2018 - 2021",
      degree: "Dual Study Program - Police Officer",
      institution: "FHöV Duisburg",
      status: "Completed"
    },
    {
      year: "2010 - 2014",
      degree: "Vocational Training - Chemical Technician",
      institution: "Berufskolleg am Haspel, Wuppertal",
      status: "Completed"
    }
  ];

  const certifications = [
    "CS50's Introduction to Databases with SQL - Harvard University",
    "GMP Qualification (Regulated Pharmaceutical Production)",
    "Continuous Improvement Processes (KVP)"
  ];

  return (
    <div className="pt-20 px-4 max-w-7xl mx-auto pb-20">
      {/* Header with Photo */}
      <div className="flex items-start justify-between gap-12 mb-16">
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About Me</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Future-focused Business & Data Analyst combining 8+ years of pharma production 
            experience with technical skills in SQL, Python, and SAP. Currently pursuing B.Sc. 
            Business Informatics and exploring AI/machine learning applications. I bring both 
            operational understanding and analytical capabilities to turn data into strategic 
            business value.
          </p>
        </div>
        <div className="flex-shrink-0">
          <img 
            src="/mypicture.jpg" 
            alt="Nabil Aouni" 
            className="w-48 h-48 rounded-full object-cover shadow-lg"
          />
        </div>
      </div>

      {/* Professional Experience Timeline */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">Professional Journey</h2>
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300"></div>

          {timeline.map((item, index) => (
  <div key={index} className="relative mb-16">
    {/* Year on timeline */}
    <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20">
      <div className="w-4 h-4 bg-[#2563eb] rounded-full border-4 border-white shadow-lg mb-2"></div>
      <span className="text-sm font-bold text-gray-900 bg-white px-3 py-1 rounded-full border-2 border-gray-200">
        {item.year}
      </span>
    </div>

    <div className={`flex items-center pt-16 relative ${item.side === 'right' ? 'flex-row-reverse' : ''}`}>
      {/* Card */}
      <div className="w-5/12 relative">
        <div className="bg-white p-4 rounded-2xl border-2 border-gray-200 hover:border-[#2563eb] transition-all">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs bg-blue-100 text-[#2563eb] px-3 py-1 rounded-full">{item.type}</span>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
          <p className="text-sm font-semibold text-gray-600 mb-2">{item.company}</p>
          <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
        </div>
        
        {/* Horizontal line from card to timeline */}
        <div className={`absolute top-1/2 ${item.side === 'left' ? 'right-0 translate-x-full' : 'left-0 -translate-x-full'} w-[calc(100%/5*1.2)] h-0.5 bg-gray-300 z-10`}></div>
      </div>

      {/* Empty space for center line */}
      <div className="w-2/12"></div>

      {/* Empty space on other side */}
      <div className="w-5/12"></div>
    </div>
  </div>
))}
        </div>
      </div>

      {/* Education */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl border-2 border-gray-200">
              <span className="text-sm font-semibold text-[#2563eb]">{item.year}</span>
              <h3 className="text-lg font-bold text-gray-900 mt-2 mb-1">{item.degree}</h3>
              <p className="text-sm text-gray-600 mb-2">{item.institution}</p>
              <span className="inline-block text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">{item.status}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Certifications & Qualifications</h2>
        <div className="bg-white p-8 rounded-2xl border-2 border-gray-200">
          <ul className="space-y-4">
            {certifications.map((cert, index) => (
              <li key={index} className="flex items-start">
                <span className="text-[#2563eb] mr-3 text-xl">✓</span>
                <span className="text-gray-700">{cert}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About