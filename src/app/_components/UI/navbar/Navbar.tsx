'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const WHATSAPP_URL = 'https://chat.whatsapp.com/Ejj8hsLdqlXAuHBHQ9bJVG';

const navLinks = [
  { index: '01', name: 'Inicio', href: '/' },
  { index: '02', name: 'Eventos', href: '/eventos' },
  { index: '03', name: 'Integrantes', href: '/integrantes' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-950/95 border-b border-hielo/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0" onClick={() => setIsMenuOpen(false)}>
            <Image
              src="/images/Logo_Blanco.svg"
              alt="SEITC"
              width={104}
              height={38}
              priority
              className="h-9 w-auto"
            />
            <span className="hidden lg:block font-mono text-[10px] tracking-[0.28em] uppercase text-bruma border-l border-hielo/15 pl-3">
              Tec de Monterrey · MTY
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  data-active={active}
                  className={`nav-underline font-medium text-sm tracking-wide transition-colors duration-200 ${
                    active ? 'text-hielo' : 'text-niebla hover:text-hielo'
                  }`}
                >
                  <span className="font-mono text-[10px] text-azul-bright mr-1.5 align-middle">
                    {link.index}
                  </span>
                  {link.name}
                </Link>
              );
            })}

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-azul text-navy-950 font-semibold text-sm px-5 py-2.5 hover:bg-azul-bright transition-colors duration-200"
            >
              Únete
              <span aria-hidden className="font-mono">→</span>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-hielo p-2 -mr-2"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
          >
            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile panel */}
      {isMenuOpen && (
        <div className="md:hidden bg-navy-950 border-t border-hielo/10 grid-blueprint-fine">
          <div className="px-6 py-6 flex flex-col gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-baseline gap-3 py-3 border-b border-hielo/8 text-lg font-medium ${
                    active ? 'text-azul-bright' : 'text-hielo'
                  }`}
                >
                  <span className="font-mono text-xs text-azul-bright">{link.index}</span>
                  {link.name}
                </Link>
              );
            })}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="mt-5 inline-flex items-center justify-center gap-2 bg-azul text-navy-950 font-semibold px-6 py-3.5 hover:bg-azul-bright transition-colors"
            >
              Únete a SEITC <span aria-hidden className="font-mono">→</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
