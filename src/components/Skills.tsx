import React from 'react';
import {
  FaJs,
  FaGitAlt,
  FaJava,
  FaPython,
  FaBootstrap,
  FaLinux,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTailwindcss,
  SiSpringboot,
  SiDjango,
  SiMysql,
  SiPostman,
  SiFigma,
  SiDocker,
} from 'react-icons/si';

/**
 * Renders the Skills section of the portfolio.
 * This component displays a list of technologies the user is proficient in, categorized into languages, frameworks/libraries, and tools.
 */
const languages = [
  { name: 'Java', icon: <FaJava className="text-4xl text-java" /> },
  { name: 'Python', icon: <FaPython className="text-4xl text-python" /> },
  { name: 'JavaScript', icon: <FaJs className="text-4xl text-javascript" /> },
  { name: 'SQL', icon: <SiMysql className="text-4xl text-mysql" /> },
];

const frameworks = [
  { name: 'Spring Boot', icon: <SiSpringboot className="text-4xl text-springboot" /> },
  { name: 'Django', icon: <SiDjango className="text-4xl text-django" /> },
  { name: 'Bootstrap', icon: <FaBootstrap className="text-4xl text-bootstrap" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-4xl text-nextjs" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-4xl text-tailwindcss" /> },
];

const tools = [
  { name: 'MySQL', icon: <SiMysql className="text-4xl text-mysql" /> },
  { name: 'Git', icon: <FaGitAlt className="text-4xl text-git" /> },
  { name: 'Postman', icon: <SiPostman className="text-4xl text-primary" /> },
  { name: 'Figma', icon: <SiFigma className="text-4xl text-figma" /> },
  { name: 'Linux', icon: <FaLinux className="text-4xl text-linux" /> },
  { name: 'DevOps', icon: <SiDocker className="text-4xl text-blue-500" /> },
];

const Skills = () => {
  return (
    <div className="py-20 px-4 text-center bg-background text-foreground">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold font-poppins mb-12">My Tech Stack</h2>
        <div className="mb-12">
          <h3 className="text-2xl font-bold font-poppins mb-6">Languages</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {languages.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center justify-center bg-card text-card-foreground p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-primary w-40 h-40"
              >
                {skill.icon}
                <p className="mt-4 font-poppins font-semibold">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-12">
          <h3 className="text-2xl font-bold font-poppins mb-6">Frameworks & Libraries</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {frameworks.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center justify-center bg-card text-card-foreground p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-primary w-40 h-40"
              >
                {skill.icon}
                <p className="mt-4 font-poppins font-semibold">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold font-poppins mb-6">Tools & Platforms</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {tools.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center justify-center bg-card text-card-foreground p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-primary w-40 h-40"
              >
                {skill.icon}
                <p className="mt-4 font-poppins font-semibold">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills; 