'use client';

import React, { useState, useEffect } from 'react';

/**
 * Renders the footer of the website.
 * This component displays the copyright information with the current year.
 */
const Footer = () => {
  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="bg-card text-card-foreground py-4 text-center">
      <div className="container mx-auto">
        <p className="font-poppins text-sm">
          &copy; {currentYear} Sahil Darji. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 