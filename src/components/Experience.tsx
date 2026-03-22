const Experience = () => {
  const timeline = [
    {
      year: 'May 2026 – Present',
      title: 'Data Analyst',
      company: 'Siegfried AG, Zofingen',
      type: 'Full-time',
      description: 'Analyzing industrial and energy data using SQL and Python. Working with Cognite Data Fusion, Visplore, and Aveva PI systems.',
      position: 'top',
    },
    {
      year: 'Feb 2025 – Feb 2026',
      title: 'SAP & IT Intern',
      company: 'Siegfried AG, Zofingen',
      type: 'Internship',
      description: 'SAP user and authorization management (ECC & S/4HANA), SoD analysis, IT service desk operations.',
      position: 'bottom',
    },
    {
      year: 'Aug 2023 – May 2026',
      title: 'Operator & Deputy Shift Leader',
      company: 'Siegfried AG, Zofingen',
      type: 'Full-time',
      description: 'GMP-compliant production processes, SAP-based documentation, continuous improvement (KVP), leading a 15-person shift team.',
      position: 'top',
    },
    {
      year: 'Oct 2021 – Aug 2023',
      title: 'Production Employee',
      company: 'Evonik Industries, Cologne',
      type: 'Full-time',
      description: 'Quality assurance and process stability in chemical production and laboratory environment.',
      position: 'bottom',
    },
    {
      year: 'Sep 2018 – Oct 2021',
      title: 'Police Officer',
      company: 'State Police NRW, Germany',
      type: 'Full-time',
      description: 'Structured analysis of complex situations, decision-making under pressure, and professional communication.',
      position: 'top',
    },
  ];

  const glassCard = {
    background: 'rgba(255, 255, 255, 0.28)',
    backdropFilter: 'blur(24px) saturate(160%)',
    WebkitBackdropFilter: 'blur(24px) saturate(160%)',
    border: '1px solid rgba(255, 255, 255, 0.6)',
    boxShadow: '0 8px 32px rgba(59, 130, 246, 0.08), inset 0 1px 0 rgba(255,255,255,0.8)',
  };

  const CARD_HEIGHT = 200;
  const CONNECTOR = 40;
  const DOT = 14;
  const TOTAL_TOP = CARD_HEIGHT + CONNECTOR + DOT / 2;

  return (
    <section id="experience" className="py-20 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-2xl md:text-3xl font-bold text-center mb-16"
          style={{ color: '#1e3a5f' }}
        >
          Professional Journey
        </h2>

        {/* Desktop horizontal */}
        <div className="hidden md:block overflow-x-auto pb-4">
          <div
            className="relative flex"
            style={{ minWidth: '900px', height: `${TOTAL_TOP * 2 + DOT}px`, alignItems: 'stretch' }}
          >
            {/* Horizontal line exactly in the middle */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: 0,
                right: 0,
                height: '2px',
                background: 'rgba(37,99,235,0.15)',
                transform: 'translateY(-50%)',
                zIndex: 0,
              }}
            />

            {timeline.map((item, index) => (
              <div
                key={index}
                className="flex-1 flex flex-col items-center"
                style={{ position: 'relative', zIndex: 1 }}
              >
                {/* TOP half */}
                <div
                  style={{
                    height: '50%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                  }}
                >
                  {item.position === 'top' && (
                    <>
                      <div
                        className="rounded-2xl p-4 transition-all duration-300 hover:scale-105"
                        style={{ ...glassCard, width: '180px', marginBottom: '0' }}
                      >
                        <span
                          className="text-xs font-semibold px-2 py-1 rounded-full inline-block mb-2"
                          style={{
                            background: 'rgba(37,99,235,0.08)',
                            border: '1px solid rgba(37,99,235,0.15)',
                            color: '#1d4ed8',
                          }}
                        >
                          {item.year}
                        </span>
                        <h3 className="text-sm font-bold mb-1" style={{ color: '#1e3a5f' }}>
                          {item.title}
                        </h3>
                        <p className="text-xs font-semibold mb-1" style={{ color: 'rgba(30,58,95,0.5)' }}>
                          {item.company}
                        </p>
                        <p className="text-xs" style={{ color: 'rgba(30,58,95,0.4)' }}>
                          {item.description}
                        </p>
                        <div className="text-xs font-semibold mt-2 pt-2" style={{ borderTop: '1px solid rgba(30,58,95,0.08)', color: 'rgba(30,58,95,0.4)' }}>
                          {item.type}
                        </div>
                      </div>
                      {/* Connector down to dot */}
                      <div style={{ width: '2px', flex: 1, background: 'rgba(37,99,235,0.2)' }} />
                    </>
                  )}
                </div>

                {/* Dot — exactly on the line */}
                <div
                  style={{
                    width: `${DOT}px`,
                    height: `${DOT}px`,
                    borderRadius: '50%',
                    background: '#2563eb',
                    border: '3px solid white',
                    boxShadow: '0 0 0 2px rgba(37,99,235,0.3)',
                    zIndex: 3,
                    flexShrink: 0,
                  }}
                />

                {/* BOTTOM half */}
                <div
                  style={{
                    height: '50%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                  }}
                >
                  {item.position === 'bottom' && (
                    <>
                      {/* Connector up from dot */}
                      <div style={{ width: '2px', flex: 1, background: 'rgba(37,99,235,0.2)' }} />
                      <div
                        className="rounded-2xl p-4 transition-all duration-300 hover:scale-105"
                        style={{ ...glassCard, width: '180px' }}
                      >
                        <span
                          className="text-xs font-semibold px-2 py-1 rounded-full inline-block mb-2"
                          style={{
                            background: 'rgba(37,99,235,0.08)',
                            border: '1px solid rgba(37,99,235,0.15)',
                            color: '#1d4ed8',
                          }}
                        >
                          {item.year}
                        </span>
                        <h3 className="text-sm font-bold mb-1" style={{ color: '#1e3a5f' }}>
                          {item.title}
                        </h3>
                        <p className="text-xs font-semibold mb-1" style={{ color: 'rgba(30,58,95,0.5)' }}>
                          {item.company}
                        </p>
                        <p className="text-xs" style={{ color: 'rgba(30,58,95,0.4)' }}>
                          {item.description}
                        </p>
                        <div className="text-xs font-semibold mt-2 pt-2" style={{ borderTop: '1px solid rgba(30,58,95,0.08)', color: 'rgba(30,58,95,0.4)' }}>
                          {item.type}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile vertical */}
        <div className="md:hidden relative pl-8">
          <div
            className="absolute left-2 top-0 bottom-0"
            style={{ width: '2px', background: 'rgba(37,99,235,0.15)' }}
          />
          {timeline.map((item, index) => (
            <div key={index} className="relative mb-8">
              <div
                className="absolute"
                style={{
                  left: '-26px',
                  top: '16px',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: '#2563eb',
                  border: '3px solid white',
                  boxShadow: '0 0 0 2px rgba(37,99,235,0.3)',
                }}
              />
              <div className="rounded-2xl p-4" style={glassCard}>
                <span
                  className="text-xs font-semibold px-2 py-1 rounded-full inline-block mb-2"
                  style={{
                    background: 'rgba(37,99,235,0.08)',
                    border: '1px solid rgba(37,99,235,0.15)',
                    color: '#1d4ed8',
                  }}
                >
                  {item.year}
                </span>
                <h3 className="text-sm font-bold mb-1" style={{ color: '#1e3a5f' }}>
                  {item.title}
                </h3>
                <p className="text-xs font-semibold mb-1" style={{ color: 'rgba(30,58,95,0.5)' }}>
                  {item.company}
                </p>
                <p className="text-xs" style={{ color: 'rgba(30,58,95,0.4)' }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;