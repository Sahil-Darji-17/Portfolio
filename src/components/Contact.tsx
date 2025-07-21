import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

/**
 * Renders the Contact section of the portfolio.
 * This component provides links for users to get in touch via email or social media.
 */
const Contact = () => {
  return (
    <div className="py-20 px-4 text-center bg-background text-foreground">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold font-poppins mb-4">Get In Touch</h2>
        <p className="text-lg font-mono leading-relaxed max-w-2xl mx-auto mb-8">
          I&apos;m currently open to new opportunities and collaborations. Whether you have a project in mind, a
          question, or just want to say hi, my inbox is always open. I&apos;ll try my best to get back to you!
        </p>
        <a
          href="mailto:Sahil_Darji_17@outlook.com"
          className="bg-primary text-background font-mono py-3 px-8 rounded-md hover:opacity-90 transition-opacity duration-300 text-lg"
        >
          Say Hello
        </a>
        <div className="flex justify-center space-x-6 mt-12">
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-3xl hover:opacity-75" />
          </a>
          <a href="https://www.linkedin.com/in/sahil-darji-337193309/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-3xl hover:opacity-75" />
          </a>
          <a href="mailto:Sahil_Darji_17@outlook.com">
            <FaEnvelope className="text-3xl hover:opacity-75" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact; 