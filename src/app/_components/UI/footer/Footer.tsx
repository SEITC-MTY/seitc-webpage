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
    <footer className="w-full bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Identidad */}
        <div className="space-y-5">
          <Image
            src="/images/Logo_Blanco.svg"
            alt="SEITC"
            width={120}
            height={44}
            className="h-10 w-auto"
          />
          <p className="text-sm text-white/70 leading-relaxed max-w-sm">
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
        <div className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wide text-white/90">Navegación</h3>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm text-white/70 hover:text-white transition-colors duration-150"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wide text-white/90">Únete</h3>
          <p className="text-sm text-white/70 leading-relaxed">
            Únete al grupo de WhatsApp de la comunidad ITC del Campus Monterrey.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-seitc inline-block font-semibold text-sm px-6 py-3 rounded-md"
          >
            Únete a SEITC
          </a>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-t border-white/15">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/60">
          <span>© {new Date().getFullYear()} SEITC. Tecnológico de Monterrey, Campus Monterrey.</span>
          <span>Ingeniería en Tecnologías Computacionales</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
