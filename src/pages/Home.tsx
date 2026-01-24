import { FaGithub, FaLinkedin, FaPython, FaGitAlt, FaDatabase, FaCogs, FaChartBar, FaFileExcel } from 'react-icons/fa';
import { SiTableau, SiJirasoftware, SiSap } from 'react-icons/si';
import { TbCertificate, TbBrain,} from 'react-icons/tb';
import { FaReact } from 'react-icons/fa';
import { useState } from 'react';

const Home = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const coreSkills = [
    {
      name: 'SQL',
      icon: <FaDatabase className="text-5xl text-[#00758F]" />,
      details: ['Data Queries & Analysis', 'Harvard CS50 Certificate']
    },
    {
      name: 'Excel',
      icon: <FaFileExcel className="text-5xl text-[#217346]" />,
      details: ['Data Analysis & Reporting', 'Pivot Tables & Formulas', 'Professional Experience']
    },
    {
      name: 'SAP',
      icon: <SiSap className="text-5xl text-[#0FAAFF]" />,
      details: ['User & Authorization Management', 'ECC & S/4HANA', 'Security & SoD Analysis']
    },
    {
      name: 'Process Optimization',
      icon: <FaCogs className="text-5xl text-[#7b7b7b]" />,
      details: ['Continuous Improvement (KVP)', 'Process Analysis & Optimization', 'Cross-functional Collaboration']
    },
    {
      name: 'React',
      icon: <FaReact className="text-5xl text-[#61DAFB]" />,
      details: ['Component-Based Development', 'TypeScript Integration', 'Portfolio Project Experience']
     },
    {
      name: 'GxP',
      icon: <TbCertificate className="text-5xl text-[#2563eb]" />,
      details: ['GMP-Qualified', 'Pharma Production (8+ years)', 'Regulatory Compliance']
    },
    {
      name: 'Jira/Confluence',
      icon: <SiJirasoftware className="text-5xl text-[#0052CC]" />,
      details: ['Ticket Management (ITSM)', 'Documentation & Collaboration', 'Professional Experience']
    },
    {
      name: 'Git/GitHub',
      icon: <FaGitAlt className="text-5xl text-[#F05032]" />,
      details: ['Version Control', 'Project Management', 'Active User']
    },
  ];

  const developingSkills = [
    {
      name: 'Python',
      icon: <FaPython className="text-5xl text-[#3776AB]" />,
      details: ['Currently Learning']
    },
    {
      name: 'Power BI',
      icon: <FaChartBar className="text-5xl text-[#F2C811]" />,
      details: ['Currently Learning']
    },
    {
      name: 'Tableau',
      icon: <SiTableau className="text-5xl text-[#E97627]" />,
      details: ['Planned Next']
    },
    {
      name: 'Machine Learning',
      icon: <TbBrain className="text-5xl text-[#FF6B6B]" />,
      details: ['Planned Next']
    }
  ];

  return (
    <div className="pt-20 px-4 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="min-h-[70vh] flex flex-col md:flex-row items-center justify-between gap-12 mb-20">
        {/* Text Left */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nabil Aouni
          </h1>
          
          <h2 className="text-xl md:text-2xl text-[#7b7b7b] font-semibold mb-3">
            Building a Career in Business & Data Analytics
          </h2>
          
          <p className="text-base md:text-lg text-[#7b7b7b] mb-6">
            Data Analytics | SQL | Python | Business Intelligence | SAP
          </p>
          
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
            Studying B.Sc. Business Informatics at IU International University 
            while developing practical skills in SAP systems, data analytics, 
            and business process optimization within GxP-regulated pharmaceutical 
            environments, with growing interest in AI and machine learning for 
            data-driven decision making.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://github.com/nabil889" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#2563eb] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#1d4ed8] transition-colors"
            >
              <FaGithub className="text-xl" />
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/nabilaouni" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#2563eb] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1d4ed8] transition-colors"
            >
              <FaLinkedin className="text-xl" />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Photo Right */}
        <div className="flex-shrink-0">
          <img 
            src="/mypicture.jpg" 
            alt="Nabil Aouni" 
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg"
          />
        </div>
      </div>

      {/* Core Skills Section */}
      <div className="mb-16">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
          Core Skills
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreSkills.map((skill) => (
            <div
              key={skill.name}
              className="relative flex flex-col items-center p-4 bg-white rounded-2xl border-2 border-transparent hover:border-[#2563eb] hover:bg-blue-50 transition-all cursor-pointer"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="text-3xl">{skill.icon}</div>
              <p className="mt-3 text-xs font-semibold text-gray-700 text-center">
                {skill.name}
              </p>
              
              {/* Hover Details */}
              {hoveredSkill === skill.name && (
                 <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-gray-100 border-2 border-gray-300 text-sm rounded-lg p-4 shadow-lg z-50">
                  <ul className="space-y-2">
                    {skill.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="mr-2 text-[#2563eb]">•</span>
                          <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Developing Skills Section */}
      <div className="mb-20">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
          Developing Skills
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {developingSkills.map((skill) => (
            <div
              key={skill.name}
              className="relative flex flex-col items-center p-4 bg-white rounded-2xl border-2 border-transparent hover:border-[#2563eb] hover:bg-blue-50 transition-all cursor-pointer"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="text-3xl">{skill.icon}</div>
              <p className="mt-3 text-xs font-semibold text-gray-700 text-center">
                {skill.name}
              </p>
              
              {/* Hover Details */}
              {hoveredSkill === skill.name && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-gray-100 border-2 border-gray-300 text-gray-800 text-sm rounded-lg p-4 shadow-lg z-50">
                  <ul className="space-y-2">
                    {skill.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="mr-2 text-[#2563eb]">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home