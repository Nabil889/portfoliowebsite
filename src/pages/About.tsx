const About = () => {
  const timeline = [
    {
      year: "May 2026 - Present",
      title: "Data Analyst",
      company: "Siegfried AG, Zofingen",
      type: "Full-time",
      description: "Analyzing industrial and energy data using SQL and Python. Working with Cognite Data Fusion, Visplore, and Aveva PI systems to deliver insights for process optimization and energy analytics. Creating dashboards and reports to support data-driven decision making across production operations.",
      side: "right"
    },
    { 
      year: "Feb 2025 - Feb 2026",
      title: "SAP & IT Intern",
      company: "Siegfried AG",
      type: "Internship",
      description: "Primary focus on SAP user and authorization management (ECC & S/4HANA), including SoD analysis and collaboration with departments on compliance and audit topics. Additionally supporting IT service desk operations with incident management and user administration.",
      side: "left"
    },
    {
      year: "Aug 2023 - May 2026",
      title: "Operator & Deputy Shift Leader",
      company: "Siegfried AG",
      type: "Full-time",
      description: "Ensuring GMP-compliant production processes, SAP-based documentation, continuous improvement (KVP), and leading a 15-person shift team.",
      side: "right"
    },
    {
      year: "Oct 2021 - Aug 2023",
      title: "Production Employee",
      company: "Evonik Industries",
      type: "Full-time",
      description: "Quality assurance and process stability in chemical production and laboratory environment.",
      side: "left"
    },
    {
      year: "Sep 2018 - Oct 2021",
      title: "Police Officer",
      company: "State Police NRW, Germany",
      type: "Full-time",
      description: "Structured analysis of complex situations, decision-making under pressure, and professional communication.",
      side: "right"
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
    {
      name: "Cognite Data Fusion Fundamentals",
      issuer: "Cognite",
      date: "Feb. 2026",
      link: "https://verify.skilljar.com/c/vzgvyzrz2u8o"
    },
    {
      name: "CS50's Introduction to Databases with SQL",
      issuer: "Harvard University",
      date: "2024",
      link: "https://certificates.cs50.io/5349c114-8498-4e51-aea3-30dfcdb4679b.pdf?size=letter"
    },
    {
      name: "GMP Qualification (Regulated Pharmaceutical Production)",
      issuer: "Siegfried AG",
      date: null,
      link: null
    }
  ];

  return (
    <div className="pt-20 px-4 max-w-7xl mx-auto pb-20">
      
      {/* Header with Photo */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-12 mb-16">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Me</h1>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Data Analyst with 8+ years of pharma production experience, now working with 
            SQL and Python to drive data-driven decisions. Pursuing B.Sc. Business Informatics 
            while expanding expertise in machine learning and AI applications to advance into data science.
          </p>
        </div>
        <div className="shrink-0">
          <img 
            src="/mypicture.jpg" 
            alt="Nabil Aouni" 
            className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-lg"
          />
        </div>
      </div>

      {/* Professional Experience Timeline */}
      <div className="mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-16">Professional Journey</h2>
        
        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
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

        {/* Mobile Timeline */}
        <div className="md:hidden relative pl-8">
          {/* Timeline Line */}
          <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gray-300"></div>

          {timeline.map((item, index) => (
            <div key={index} className="relative mb-12">
              {/* Dot */}
              <div className="absolute -left-7 top-6 w-4 h-4 bg-[#2563eb] rounded-full border-4 border-white shadow-lg"></div>

              {/* Card */}
              <div className="bg-white p-4 rounded-2xl border-2 border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-[#2563eb]">{item.year}</span>
                  <span className="text-xs bg-blue-100 text-[#2563eb] px-3 py-1 rounded-full">{item.type}</span>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm font-semibold text-gray-600 mb-2">{item.company}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl border-2 border-gray-200">
              <span className="text-sm font-semibold text-[#2563eb]">{item.year}</span>
              <h3 className="text-base md:text-lg font-bold text-gray-900 mt-2 mb-1">{item.degree}</h3>
              <p className="text-sm text-gray-600 mb-2">{item.institution}</p>
              <span className="inline-block text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">{item.status}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">Certifications & Qualifications</h2>
        <div className="bg-white p-6 md:p-8 rounded-2xl border-2 border-gray-200">
          <ul className="space-y-4">
            {certifications.map((cert, index) => (
              <li key={index} className="flex items-start">
                <span className="text-[#2563eb] mr-3 text-xl shrink-0">✓</span>
                <div className="text-sm md:text-base text-gray-700">
                  {cert.link ? (
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-[#2563eb] hover:font-semibold transition-all cursor-pointer"
                    >
                      {cert.name} - {cert.issuer}
                      {cert.date && ` (${cert.date})`}
                    </a>
                  ) : (
                    <span>
                      {cert.name} - {cert.issuer}
                      {cert.date && ` (${cert.date})`}
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About