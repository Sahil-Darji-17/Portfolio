'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

/**
 * Renders the Hero section of the portfolio.
 * This component displays the main heading, subheading, and call-to-action buttons.
 */
const Hero = () => {
  const [mouse, setMouse] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center text-center p-4 bg-background text-foreground overflow-hidden">
      {/* Visible mouse-tracking dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-10"
        style={{ width: '100vw', height: '100vh' }}
      >
        <div
          className="absolute rounded-full bg-blue-500 opacity-80 border-4 border-white shadow-lg"
          style={{
            width: 32,
            height: 32,
            left: mouse.x - 16,
            top: mouse.y - 16,
            transition: 'left 0.08s linear, top 0.08s linear',
          }}
        />
      </div>
      <div className="relative z-20 w-full flex flex-col items-center">
        <p className="text-2xl font-mono mb-2">Hi, My name is</p>
        <h1 className="text-7xl font-bold font-poppins">Sahil Darji</h1>
        <p className="mt-4 text-2xl font-light font-poppins">
          Frontend Developer | Computer Science & DevOps Enthusiast
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
              className="h-6 w-6 self-center"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{ display: 'inline-block', verticalAlign: 'middle' }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            <span className="align-middle">Download CV</span>
          </a>
        </div>
      </div>
      {/* Scroll indicator at the bottom center */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 animate-bounce text-foreground z-30">
        <svg
          width="32"
          height="32"
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