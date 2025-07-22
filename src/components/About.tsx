import React from 'react';
import Image from 'next/image';

/**
 * Renders the About Me section of the portfolio.
 * This component displays a profile picture and a brief introduction.
 */
const About = () => {
  return (
    <div className="py-20 px-4 bg-background text-foreground">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 mb-8 md:mb-0">
          <Image
            src="/profile1.jpg" // Using profile1.jpg
            alt="Sahil Darji"
            width={300}
            height={300}
            className="rounded-full mx-auto"
          />
        </div>
        <div className="md:w-2/3 md:pl-10 text-center md:text-left">
          <h2 className="text-4xl font-bold font-poppins mb-4">About Me</h2>
          <p className="text-lg font-poppins leading-relaxed">
          I am a passionate developer and a recent Computer Engineering graduate, with a growing interest in DevOps. I enjoy building clean and responsive user interfaces, while also exploring tools and practices that improve deployment, automation, and development workflows. I&apos;m always eager to learn, collaborate, and contribute to meaningful tech projects that solve real-world problems.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About; 