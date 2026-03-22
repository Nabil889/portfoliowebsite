import { FaPython, FaGitAlt, FaDatabase, FaChartBar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { TbBrain } from 'react-icons/tb';
import { FaReact } from 'react-icons/fa';
import { useState } from 'react';

const Skills = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const skills = [
    { name: 'SQL', icon: <FaDatabase className="text-5xl text-[#00758F]" /> },
    { name: 'Python', icon: <FaPython className="text-5xl text-[#3776AB]" /> },
    { name: 'Machine Learning', icon: <TbBrain className="text-5xl text-[#FF6B6B]" /> },
    { name: 'Power BI', icon: <FaChartBar className="text-5xl text-[#F2C811]" /> },
    { name: 'Git/GitHub', icon: <FaGitAlt className="text-5xl text-[#F05032]" /> },
    { name: 'React', icon: <FaReact className="text-5xl text-[#61DAFB]" /> },
  ];

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % skills.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + skills.length) % skills.length);

  const glassCard = {
    background: 'rgba(255, 255, 255, 0.28)',
    backdropFilter: 'blur(24px) saturate(160%)',
    WebkitBackdropFilter: 'blur(24px) saturate(160%)',
    border: '1px solid rgba(255, 255, 255, 0.6)',
    boxShadow: '0 8px 32px rgba(59, 130, 246, 0.08), inset 0 1px 0 rgba(255,255,255,0.8)',
  };

  const btnStyle = {
    background: 'rgba(255,255,255,0.4)',
    border: '1px solid rgba(255,255,255,0.7)',
    boxShadow: '0 4px 15px rgba(59,130,246,0.08)',
    color: '#1e3a5f',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    cursor: 'pointer',
  };

  const getDesktopCards = () => [0, 1, 2].map(offset => skills[(currentIndex + offset) % skills.length]);

  return (
    <section id="skills" className="py-20 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-12" style={{ color: '#1e3a5f' }}>
          Skills & Expertise
        </h3>

        {/* Mobile: 1 card */}
        <div className="flex md:hidden items-center gap-4">
          <button onClick={prevSlide} style={btnStyle} className="transition-all duration-300 hover:scale-110">
            <FaChevronLeft />
          </button>
          <div className="flex-1 rounded-2xl p-8 flex flex-col items-center text-center" style={glassCard}>
            <div className="mb-4">{skills[currentIndex].icon}</div>
            <h4 className="text-xl font-bold" style={{ color: '#1e3a5f' }}>{skills[currentIndex].name}</h4>
          </div>
          <button onClick={nextSlide} style={btnStyle} className="transition-all duration-300 hover:scale-110">
            <FaChevronRight />
          </button>
        </div>

        {/* Desktop: 3 cards */}
        <div className="hidden md:flex items-center gap-6">
          <button onClick={prevSlide} style={btnStyle} className="transition-all duration-300 hover:scale-110">
            <FaChevronLeft />
          </button>
          <div className="flex gap-6 flex-1">
            {getDesktopCards().map((skill, idx) => (
              <div
                key={`${skill.name}-${idx}`}
                className="flex-1 rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:scale-105"
                style={glassCard}
              >
                <div className="mb-4">{skill.icon}</div>
                <h4 className="text-xl font-bold" style={{ color: '#1e3a5f' }}>{skill.name}</h4>
              </div>
            ))}
          </div>
          <button onClick={nextSlide} style={btnStyle} className="transition-all duration-300 hover:scale-110">
            <FaChevronRight />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {skills.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="h-2.5 rounded-full transition-all duration-300"
              style={{
                width: currentIndex === index ? '32px' : '10px',
                background: currentIndex === index ? '#2563eb' : 'rgba(30,58,95,0.2)',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;