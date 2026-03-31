'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'INTEGRANTES', href: '/integrantes' },
    { name: 'MERCHANDISING', href: '#merchandising' },
    { name: 'EVENTOS', href: '/events' },
    {name: 'CONGRESO SEITC', href: '/congreso'},
    { name: 'SEITC CHALLENGE', href: '/#seitcchallenge' },
  ];

  const isActive = (href: string) => {
    if (href.startsWith('#')) return false;
    return pathname === href;
  };

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
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-medium transition-colors duration-200 relative group pb-1 ${
                    active
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {link.name}
                  {/* Underline: always visible if active, animated on hover otherwise */}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-200 ${
                      active ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          <div className="hidden md:block">
            <Link
              href="https://chat.whatsapp.com/Ejj8hsLdqlXAuHBHQ9bJVG"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 font-semibold text-white bg-gradient-to-r from-[#0C2748] via-[#0C3A6A] to-[#0B89D0] shadow-[0_10px_30px_rgba(14,113,200,.35)] hover:brightness-110 transition-all"
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

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block px-3 py-2 rounded-md font-medium transition-colors duration-200 ${
                    active
                      ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-600'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="https://chat.whatsapp.com/Ejj8hsLdqlXAuHBHQ9bJVG"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center gap-2 mx-3 mt-4 rounded-2xl px-6 py-3 font-semibold text-white bg-gradient-to-r from-[#0C2748] via-[#0C3A6A] to-[#0B89D0] shadow-[0_10px_30px_rgba(14,113,200,.35)] hover:brightness-110 transition-all"
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
