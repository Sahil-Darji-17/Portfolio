import React from 'react';
import Link from 'next/link';

/**
 * Renders the Hero section of the portfolio.
 * This component displays the main heading, subheading, and call-to-action buttons.
 */
const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center p-4 bg-background text-foreground">
      <p className="text-2xl font-mono mb-2">Hi, My name is</p>
      <h1 className="text-7xl font-bold font-poppins">Sahil Darji</h1>
      <p className="mt-4 text-2xl font-light font-poppins">
        Frontend Developer | Computer Science Enthusiast
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
        <Link
          href="#projects"
          className="bg-primary text-background font-mono py-3 px-8 rounded-md hover:opacity-90 transition-opacity duration-300 text-lg"
        >
          View My Work
        </Link>
        <a
          href="/resume.pdf"
          download
          className="border border-primary text-primary font-mono py-3 px-8 rounded-md hover:bg-primary hover:text-background transition-colors duration-300 flex items-center gap-2 text-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Download CV
        </a>
      </div>
      <div className="absolute bottom-10 animate-bounce text-foreground">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 5V19M12 19L7 14M12 19L17 14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;