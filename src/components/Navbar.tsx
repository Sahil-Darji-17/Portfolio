'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ThemeSwitcher } from './ThemeSwitcher';

/**
 * Renders the navigation bar for the portfolio.
 * This component includes links to different sections of the page and a theme switcher.
 * It is responsive and includes a mobile menu.
 */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Contact', href: '/#contact' },
    { name: 'Resume', href: '/resume' },
  ];

  return (
    <nav className="bg-card text-card-foreground shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/#home" className="text-2xl font-bold font-poppins text-primary">
              Sahil Darji
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link key={link.name} href={link.href} className="font-poppins hover:text-primary">
                {link.name}
              </Link>
            ))}
            <ThemeSwitcher />
          </div>
          <div className="md:hidden flex items-center">
            <ThemeSwitcher />
            <button onClick={() => setIsOpen(!isOpen)} className="text-foreground focus:outline-none ml-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-card text-card-foreground">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link key={link.name} href={link.href} className="block font-poppins px-3 py-2 rounded-md text-base font-medium hover:bg-background">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 