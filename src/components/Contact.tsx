import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';

const Contact = () => {
  const glassStyle = {
    background: 'rgba(255, 255, 255, 0.28)',
    backdropFilter: 'blur(24px) saturate(160%)',
    WebkitBackdropFilter: 'blur(24px) saturate(160%)',
    border: '1px solid rgba(255, 255, 255, 0.6)',
    boxShadow: '0 8px 32px rgba(59, 130, 246, 0.08), inset 0 1px 0 rgba(255,255,255,0.8)',
  };

  return (
    <section id="contact" className="py-20 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1e3a5f' }}>
            Available for Projects
          </h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: 'rgba(30,58,95,0.55)' }}>
            I'm available for freelance projects in data analytics, business intelligence,
            and web development. Whether you need help with data visualization, dashboard
            creation, or building a professional website — let's discuss your project!
          </p>
        </div>

        {/* Layout */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center md:items-start">

          {/* Left: 3 cards stacked */}
          <div className="flex flex-col gap-4" style={{ width: '100%', maxWidth: '220px' }}>

            <a
              href="mailto:nabilaouni1989@gmail.com"
              className="flex flex-col items-center rounded-2xl transition-all duration-300 hover:scale-105"
              style={{ ...glassStyle, padding: '14px 16px' }}
            >
              <FaEnvelope style={{ fontSize: '22px', color: '#1d4ed8', marginBottom: '8px' }} />
              <span style={{ fontWeight: 600, fontSize: '13px', color: '#1e3a5f', marginBottom: '2px' }}>Email</span>
              <span style={{ fontSize: '11px', color: 'rgba(30,58,95,0.55)', textAlign: 'center', wordBreak: 'break-all' }}>nabilaouni1989@gmail.com</span>
            </a>

            <a
              href="https://linkedin.com/in/nabilaouni"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center rounded-2xl transition-all duration-300 hover:scale-105"
              style={{ ...glassStyle, padding: '14px 16px' }}
            >
              <FaLinkedin style={{ fontSize: '22px', color: '#0077B5', marginBottom: '8px' }} />
              <span style={{ fontWeight: 600, fontSize: '13px', color: '#1e3a5f', marginBottom: '2px' }}>LinkedIn</span>
              <span style={{ fontSize: '11px', color: 'rgba(30,58,95,0.55)' }}>Connect with me</span>
            </a>

            <a
              href="https://github.com/nabil889"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center rounded-2xl transition-all duration-300 hover:scale-105"
              style={{ ...glassStyle, padding: '14px 16px' }}
            >
              <FaGithub style={{ fontSize: '22px', color: '#1e3a5f', marginBottom: '8px' }} />
              <span style={{ fontWeight: 600, fontSize: '13px', color: '#1e3a5f', marginBottom: '2px' }}>GitHub</span>
              <span style={{ fontSize: '11px', color: 'rgba(30,58,95,0.55)' }}>View my projects</span>
            </a>

          </div>

          {/* Right: Info box */}
          <div
            style={{
              ...glassStyle,
              borderRadius: '16px',
              padding: '14px 20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              alignSelf: 'center',
              width: '100%',
              maxWidth: '300px',
              height: '113px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <FaMapMarkerAlt style={{ color: '#1d4ed8', marginTop: '2px', flexShrink: 0 }} />
              <span style={{ fontSize: '13px', color: 'rgba(30,58,95,0.7)' }}>Based in Rothrist, Aargau, Switzerland</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <FaBriefcase style={{ color: '#1d4ed8', marginTop: '2px', flexShrink: 0 }} />
              <span style={{ fontSize: '13px', color: 'rgba(30,58,95,0.7)' }}>Open for freelance projects, consulting and collaborations</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;