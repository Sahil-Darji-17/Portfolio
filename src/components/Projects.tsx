import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Media Automation with ARR stack',
    description: 'Self-hosted media automation system using Docker and the ARR Stack (Radarr, Sonarr, Prowlarr, qBittorrent) on Ubuntu Server. This project reflects my strong interest in DevOps, automation, and infrastructure as code.',
    technologies: ['Docker', 'Linux', 'Ubuntu', 'DevOps'],
    githubUrl: 'https://github.com/Sahil-Darji-17/Media-Arr-Stack',
    liveUrl: 'Unavailable',
  },
  {
    title: 'Business Website for Sahil Enterprise',
    description: 'Designed and developed a responsive business website for Sahil Enterprise using Cursor AI and Next.js. I am passionate about integrating DevOps practices for seamless deployment and scalability.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Cursor IDE', 'Vercel', 'DevOps'],
    liveUrl: 'https://sahil-enterprise.vercel.app/',
  },
  {
    title: 'Project Three',
    description: 'A brief description of the third project, highlighting its main features and purpose.',
    technologies: ['React', 'Node.js', 'Express'],
    githubUrl: 'https://github.com/your-username/project-three',
    liveUrl: 'https://project-three.vercel.app',
  },

  {
    title: 'Project four',
    description: 'A brief description of the third project, highlighting its main features and purpose.',
    technologies: ['React', 'Node.js', 'Express'],
    githubUrl: 'https://github.com/your-username/project-three',
    liveUrl: 'https://project-three.vercel.app',
  },
];




/**
 * Renders the Projects section of the portfolio.
 * This component displays a list of projects with their descriptions, technologies used, and links to GitHub and live demos.
 */
const Projects = () => {
  return (
    <div className="py-20 px-4 text-center bg-background text-foreground">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold font-poppins mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-card text-card-foreground p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-left border border-primary flex flex-col h-full"
            >
              <h3 className="text-2xl font-bold font-poppins mb-4">{project.title}</h3>
              <p className="font-poppins mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-medium mr-2 mb-2 px-2.5 py-0.5 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-end space-x-4 mt-auto">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-2xl text-foreground hover:text-primary" />
                </a>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt className="text-2xl text-foreground hover:text-primary" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects; 