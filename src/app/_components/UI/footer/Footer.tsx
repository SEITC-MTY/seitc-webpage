import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SocialMediaIcon from './SocialMediaIcon';

const WHATSAPP_URL = 'https://chat.whatsapp.com/Ejj8hsLdqlXAuHBHQ9bJVG';

const Footer = () => {
  const socialLinks = [
    { header: 'facebook', content: 'https://www.facebook.com/share/1D97vBEgLj/?mibextid=wwXIfr' },
    { header: 'tiktok', content: 'https://www.tiktok.com/@seitc.mty' },
    { header: 'linkedin', content: 'https://www.linkedin.com/company/seitc/posts/?feedView=all' },
    { header: 'instagram', content: 'https://www.instagram.com/seitc.mty/' },
  ];

  const quickLinks = [
    { name: 'Qué es SEITC', href: '/#que-es-seitc' },
    { name: 'Eventos', href: '/eventos' },
    { name: 'Integrantes', href: '/integrantes' },
  ];

  return (
    <footer className="w-full bg-navy-950 border-t border-hielo/10">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-12">

        {/* Marca */}
        <div className="space-y-5">
          <Image
            src="/images/Logo_Blanco.svg"
            alt="SEITC"
            width={120}
            height={44}
            className="h-10 w-auto"
          />
          <p className="text-sm text-niebla leading-relaxed max-w-sm">
            Sociedad de Estudiantes de Ingeniería en Tecnologías Computacionales
            del Tecnológico de Monterrey, Campus Monterrey.
          </p>
          <ul className="flex gap-4 pt-1">
            {socialLinks.map((link) => (
              <SocialMediaIcon key={link.header} header={link.header} content={link.content} />
            ))}
          </ul>
        </div>

        {/* Navegación */}
        <div className="space-y-5">
          <h3 className="kicker">{'// navegación'}</h3>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm text-niebla hover:text-azul-bright transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Únete */}
        <div className="space-y-5">
          <h3 className="kicker">{'// únete'}</h3>
          <p className="text-sm text-niebla leading-relaxed">
            ¿Estudias ITC en el Tec, Campus Monterrey? La comunidad te está esperando.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-azul text-navy-950 font-semibold text-sm px-6 py-3 hover:bg-azul-bright transition-colors duration-200"
          >
            Únete a SEITC <span aria-hidden className="font-mono">→</span>
          </a>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-hielo/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="font-mono text-[11px] tracking-wider text-bruma">
            © {new Date().getFullYear()} SEITC — Tecnológico de Monterrey, Campus Monterrey
          </span>
          <span className="font-mono text-[11px] tracking-wider text-bruma">
            {'>'} Ingeniería en Tecnologías Computacionales
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
