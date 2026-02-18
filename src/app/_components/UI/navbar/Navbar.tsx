'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'INTEGRANTES', href: '#integrantes' },
    { name: 'MERCHANDISING', href: '#merchandising' },
    { name: 'EVENTOS', href: 'events' },
    { name: 'SEITC CHALLENGE', href: 'events' },
  ];

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/Logo.webp"
                alt="SEITC logo"
                width={128}
                height={128}
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              href="https://chat.whatsapp.com/Ejj8hsLdqlXAuHBHQ9bJVG"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-900 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-800 transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Únete a SEITC
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="https://chat.whatsapp.com/Ejj8hsLdqlXAuHBHQ9bJVG"
              target="_blank"
              rel="noopener noreferrer"
              className="block mx-3 mt-4 text-center bg-blue-900 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Únete a SEITC
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
