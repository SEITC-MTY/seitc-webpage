import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SocialMediaIcon from './SocialMediaIcon';

const Footer = () => {
  const socialLinks = [
    { header: 'facebook', content: 'https://www.facebook.com/share/1D97vBEgLj/?mibextid=wwXIfr' },
    { header: 'tiktok', content: 'https://www.tiktok.com/@seitc.mty' },
    { header: 'linkedin', content: 'https://www.linkedin.com/company/seitc/posts/?feedView=all' },
    { header: 'instagram', content: 'https://www.instagram.com/seitc.mty/' },
  ];

  const quickLinks = [
    { name: 'Sobre nosotros', href: '#sobre-nosotros' },
    { name: 'Eventos', href: '/events' },
    {name: 'Congreso SEITC', href: '/congreso'},
    { name: 'SEITC Challenge', href: '/challenge' },
  ];

  return (
    <footer className="w-full bg-[#0c1f35] text-white">

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Brand column */}
        <div className="space-y-5" data-aos="fade-up" data-aos-delay="0">
          <Image
            src="/images/Logo_Blanco.svg"
            alt="SEITC logo"
            width={120}
            height={44}
            className="h-11 w-auto"
          />
          <p className="text-sm text-blue-200 leading-relaxed">
            Sociedad de Estudiantes de Ingeniería en Tecnologías Computacionales del Tecnológico de Monterrey, Campus Monterrey.
          </p>
          <ul className="flex gap-4 pt-1">
            {socialLinks.map((link) => (
              <SocialMediaIcon
                key={link.header}
                header={link.header}
                content={link.content}
              />
            ))}
          </ul>
        </div>

        {/* Quick links */}
        <div className="space-y-5" data-aos="fade-up" data-aos-delay="100">
          <h3 className="text-xs font-semibold tracking-widest uppercase text-blue-400">Navegación</h3>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm text-blue-100 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact / join */}
        <div className="space-y-5" data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-xs font-semibold tracking-widest uppercase text-blue-400">Únete</h3>
          <p className="text-sm text-blue-200 leading-relaxed">
            ¿Eres estudiante de ITC en el Tec de Monterrey? Forma parte de nuestra comunidad.
          </p>
          <Link
            href="https://chat.whatsapp.com/Ejj8hsLdqlXAuHBHQ9bJVG"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 font-semibold text-white text-sm bg-gradient-to-r from-[#0C2748] via-[#0C3A6A] to-[#0B89D0] hover:brightness-110 transition-all whitespace-nowrap flex-shrink-0"
          >
            Únete a SEITC
          </Link>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-blue-900">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-blue-400">
          <span>© {new Date().getFullYear()} SEITC — Tecnológico de Monterrey, Campus Monterrey</span>
          <span>Ingeniería en Tecnologías Computacionales</span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
