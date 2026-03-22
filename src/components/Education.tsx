const Education = () => {
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
      date: "2026",
      link: "https://verify.skilljar.com/c/vzgvyzrz2u8o"
    },
    {
      name: "CS50's Introduction to Databases with SQL",
      issuer: "Harvard University",
      date: "2025",
      link: "https://certificates.cs50.io/5349c114-8498-4e51-aea3-30dfcdb4679b.pdf?size=letter"
    },
    {
      name: "GMP Qualification (Regulated Pharmaceutical Production)",
      issuer: "Siegfried AG (2025)",
      date: null,
      link: null
    }
  ];

  const glassStyle = {
    background: 'rgba(255, 255, 255, 0.28)',
    backdropFilter: 'blur(24px) saturate(160%)',
    WebkitBackdropFilter: 'blur(24px) saturate(160%)',
    border: '1px solid rgba(255, 255, 255, 0.6)',
    boxShadow: '0 8px 32px rgba(59, 130, 246, 0.08), inset 0 1px 0 rgba(255,255,255,0.8)',
  };

  return (
    <section id="education" className="py-20 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Education */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12" style={{ color: '#1e3a5f' }}>
            Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {education.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl transition-all duration-300 hover:scale-105"
                style={glassStyle}
              >
                <span
                  className="text-sm font-semibold"
                  style={{ color: '#1d4ed8' }}
                >
                  {item.year}
                </span>
                <h3
                  className="text-base md:text-lg font-bold mt-2 mb-1"
                  style={{ color: '#1e3a5f' }}
                >
                  {item.degree}
                </h3>
                <p className="text-sm mb-3" style={{ color: 'rgba(30,58,95,0.5)' }}>
                  {item.institution}
                </p>
                <span
                  className="inline-block text-xs px-3 py-1 rounded-full font-semibold"
                  style={{
                    background: item.status === 'Ongoing'
                      ? 'rgba(59,130,246,0.1)'
                      : 'rgba(34,197,94,0.1)',
                    border: item.status === 'Ongoing'
                      ? '1px solid rgba(59,130,246,0.2)'
                      : '1px solid rgba(34,197,94,0.2)',
                    color: item.status === 'Ongoing' ? '#1d4ed8' : '#16a34a',
                  }}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12" style={{ color: '#1e3a5f' }}>
            Certifications & Qualifications
          </h2>
          <div
            className="p-6 md:p-8 rounded-2xl max-w-3xl mx-auto"
            style={glassStyle}
          >
            <ul className="space-y-4">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-lg shrink-0" style={{ color: '#1d4ed8' }}>✓</span>
                  <div className="text-sm md:text-base" style={{ color: 'rgba(30,58,95,0.7)' }}>
                    {cert.link ? (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-all duration-200 hover:font-semibold"
                        style={{ color: 'rgba(30,58,95,0.7)' }}
                        onMouseEnter={e => (e.currentTarget.style.color = '#1d4ed8')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'rgba(30,58,95,0.7)')}
                      >
                        {cert.name} - {cert.issuer}{cert.date && ` (${cert.date})`}
                      </a>
                    ) : (
                      <span>
                        {cert.name} - {cert.issuer}{cert.date && ` (${cert.date})`}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;