'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const WHATSAPP_URL = 'https://chat.whatsapp.com/Ejj8hsLdqlXAuHBHQ9bJVG';

const navLinks = [
  { name: 'Inicio', href: '/' },
  { name: 'Eventos', href: '/eventos' },
  { name: 'Integrantes', href: '/integrantes' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-linea">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0" onClick={() => setIsMenuOpen(false)}>
            <Image
              src="/images/Logo.webp"
              alt="SEITC"
              width={120}
              height={44}
              priority
              className="h-11 w-auto"
            />
          </Link>

          {/* Enlaces escritorio */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors duration-150 pb-1 border-b-2 ${
                    active
                      ? 'text-navy-850 border-azul'
                      : 'text-texto-suave border-transparent hover:text-navy-850'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-seitc font-semibold text-sm px-5 py-2.5 rounded-md"
            >
              Únete a SEITC
            </a>
          </div>

          {/* Botón menú móvil */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-navy-850 p-2 -mr-2"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
          >
            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-linea">
          <div className="px-4 py-4 flex flex-col">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`py-3 px-2 rounded-md text-base font-semibold ${
                    active ? 'text-azul-oscuro bg-azul-claro' : 'text-texto'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="btn-seitc mt-4 text-center font-semibold px-6 py-3 rounded-md"
            >
              Únete a SEITC
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
