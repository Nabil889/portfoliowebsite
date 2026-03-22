import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="pt-24 pb-16" style={{ paddingLeft: '4rem', paddingRight: '4rem' }}>
      <div className="max-w-7xl mx-auto min-h-[80vh] flex items-center py-20">

        {/* Glass Card */}
        <div
          className="w-full rounded-3xl px-10 py-20 flex flex-col md:flex-row items-center justify-between gap-12"
          style={{
            background: 'rgba(255, 255, 255, 0.28)',
            backdropFilter: 'blur(24px) saturate(160%)',
            WebkitBackdropFilter: 'blur(24px) saturate(160%)',
            border: '1px solid rgba(255, 255, 255, 0.6)',
            boxShadow: '0 8px 32px rgba(59, 130, 246, 0.08), inset 0 1px 0 rgba(255,255,255,0.8)',
          }}
        >
          {/* Text Left */}
          <div className="flex-1">
            <h1
              className="text-4xl md:text-5xl font-bold mb-3"
              style={{ color: '#1e3a5f', letterSpacing: '-1.5px', lineHeight: 1.05 }}
            >
              Nabil Aouni
            </h1>

            <h2 className="text-xl md:text-2xl font-semibold mb-2" style={{ color: 'rgba(30,58,95,0.6)' }}>
              Data Analyst | Data Science Enthusiast
            </h2>

            <p className="text-base md:text-lg mb-6" style={{ color: 'rgba(30,58,95,0.42)' }}>
              Data Analytics | SQL | Python | AI/ML
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-8 max-w-xl" style={{ color: 'rgba(30,58,95,0.55)' }}>
              Data Analyst leveraging SQL and Python for industrial analytics at Siegfried AG Zofingen.
              Studying B.Sc. Business Informatics and building expertise in machine learning
              and AI to transition into data science.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://github.com/nabil889"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105"
                style={{
                  background: 'rgba(37,99,235,0.85)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  boxShadow: '0 4px 15px rgba(37,99,235,0.25), inset 0 1px 0 rgba(255,255,255,0.2)',
                }}
              >
                <FaGithub className="text-lg" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/nabilaouni"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  background: 'rgba(255,255,255,0.4)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.7)',
                  color: '#1d4ed8',
                  boxShadow: '0 4px 15px rgba(59,130,246,0.06), inset 0 1px 0 rgba(255,255,255,0.8)',
                }}
              >
                <FaLinkedin className="text-lg" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Photo Right */}
          <div className="shrink-0">
            <div
              className="w-64 h-64 md:w-80 md:h-80 rounded-full p-1"
              style={{
                background: 'rgba(255,255,255,0.4)',
                border: '1px solid rgba(255,255,255,0.7)',
                boxShadow: '0 12px 40px rgba(59,130,246,0.12), inset 0 1px 0 rgba(255,255,255,0.8)',
              }}
            >
              <img
                src="/mypicture.jpg"
                alt="Nabil Aouni"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;