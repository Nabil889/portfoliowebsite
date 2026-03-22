import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "Responsive portfolio website showcasing my skills, experience, and projects. Built from scratch with modern web technologies.",
      techStack: ["React", "TypeScript", "Tailwind CSS"],
      githubLink: "https://github.com/nabil889/portfoliowebsite",
      liveLink: "https://portfoliowebsite-pied-five.vercel.app"
    },
    {
      title: "Title",
      description: "coming soon ",
      techStack: ["x", "x", "x"],
      githubLink: "#",
      liveLink: "#"
    },
    {
      title: "Title",
      description: "coming soon",
      techStack: ["x", "x", "x"],
      githubLink: "#",
      liveLink: "#"
    }
  ];

  return (
    <div className="pt-20 px-4 max-w-7xl mx-auto pb-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Projects</h1>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
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
            className="bg-white rounded-2xl border-2 border-gray-200 p-5 md:p-6 hover:border-[#2563eb] transition-all flex flex-col"
          >
            {/* Title */}
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 mb-4 grow">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="mb-4">
              <h4 className="text-xs font-semibold text-gray-700 mb-2">Tech Stack:</h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="text-xs bg-blue-100 text-[#2563eb] px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={project.githubLink}
                className="flex items-center justify-center sm:justify-start gap-2 text-sm font-semibold text-gray-700 hover:text-[#2563eb] transition-colors"
              >
                <FaGithub className="text-lg" />
                GitHub
              </a>
              <a
                href={project.liveLink}
                className="flex items-center justify-center sm:justify-start gap-2 text-sm font-semibold text-gray-700 hover:text-[#2563eb] transition-colors"
              >
                <FaExternalLinkAlt className="text-sm" />
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects