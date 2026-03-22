import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "Responsive portfolio website showcasing my skills, experience, and projects. Built from scratch with modern web technologies.",
      techStack: ["React", "Vite", "TypeScript", "Tailwind CSS"],
      githubLink: "https://github.com/Nabil889/portfoliowebsite",
      liveLink: "https://portfoliowebsite-pied-five.vercel.app"
    },
    {
      title: "Coming Soon",
      description: "More projects on the way — focused on data analytics, machine learning, and AI applications.",
      techStack: ["Python", "SQL", "ML"],
      githubLink: "#",
      liveLink: "#"
    },
    {
      title: "Coming Soon",
      description: "More projects on the way — focused on data analytics, machine learning, and AI applications.",
      techStack: ["Python", "SQL", "ML"],
      githubLink: "#",
      liveLink: "#"
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
    <section id="projects" className="py-20 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1e3a5f' }}>
            Projects
          </h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: 'rgba(30,58,95,0.55)' }}>
            Building my portfolio with data analytics and data science projects using
            Python, SQL, and machine learning. More projects coming soon focused on
            AI applications and predictive analytics!
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 flex flex-col transition-all duration-300 hover:scale-105"
              style={glassStyle}
            >
              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold mb-3" style={{ color: '#1e3a5f' }}>
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm mb-4 grow" style={{ color: 'rgba(30,58,95,0.55)' }}>
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-4">
                <h4 className="text-xs font-semibold mb-2" style={{ color: 'rgba(30,58,95,0.5)' }}>
                  Tech Stack:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full font-semibold"
                      style={{
                        background: 'rgba(37,99,235,0.08)',
                        border: '1px solid rgba(37,99,235,0.15)',
                        color: '#1d4ed8',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-2" style={{ borderTop: '1px solid rgba(30,58,95,0.08)' }}>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold transition-all duration-200"
                  style={{ color: 'rgba(30,58,95,0.6)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#1d4ed8')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(30,58,95,0.6)')}
                >
                  <FaGithub className="text-lg" />
                  GitHub
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold transition-all duration-200"
                  style={{ color: 'rgba(30,58,95,0.6)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#1d4ed8')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(30,58,95,0.6)')}
                >
                  <FaExternalLinkAlt className="text-sm" />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;