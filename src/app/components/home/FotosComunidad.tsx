import Image from 'next/image';

/* Fotos REALES de la comunidad (preservadas con nombre legible en assets/legacy). */
const fotos = [
  { src: '/assets/legacy/viaje-nyc-2025/columbia-university.jpg', caption: 'columbia university · nyc 2025' },
  { src: '/assets/legacy/viaje-nyc-2025/oficina-microsoft-01.jpg', caption: 'oficinas de microsoft · nyc 2025' },
  { src: '/assets/legacy/eventos/prep2intern-2024-duolingo.jpg', caption: 'prep2intern · duolingo' },
  { src: '/assets/legacy/viaje-nyc-2025/oficina-meta-01.jpg', caption: 'oficinas de meta · nyc 2025' },
  { src: '/assets/legacy/eventos/itc-talks-oracle-2025.jpg', caption: 'itc talks · oracle' },
  { src: '/assets/legacy/viaje-nyc-2025/oficina-mongodb-01.jpg', caption: 'oficinas de mongodb · nyc 2025' },
  { src: '/assets/legacy/eventos/prep2intern-2024-microsoft.jpg', caption: 'prep2intern · microsoft' },
  { src: '/assets/legacy/eventos/convivencia-2024-01.jpg', caption: 'convivencia de comunidad' },
];

export default function FotosComunidad() {
  const loop = [...fotos, ...fotos]; // pista duplicada para el loop infinito

  return (
    <section className="bg-navy-950 py-20 md:py-24 overflow-hidden" aria-label="Fotos de la comunidad SEITC">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10" data-aos="fade-up">
        <p className="kicker mb-4">{'[03] // la comunidad en acción'}</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-hielo tracking-tight">
          De Monterrey a las oficinas de la industria<span className="text-azul">.</span>
        </h2>
      </div>

      {/* Marquesina de fotos reales */}
      <div className="relative">
        <div className="marquee-track flex gap-5 w-max pr-5">
          {loop.map((foto, i) => (
            <figure
              key={i}
              aria-hidden={i >= fotos.length}
              className="w-72 md:w-96 shrink-0 border border-hielo/12 bg-navy-900"
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={foto.src}
                  alt={i < fotos.length ? `SEITC — ${foto.caption}` : ''}
                  fill
                  sizes="(min-width: 768px) 24rem, 18rem"
                  className="object-cover"
                />
              </div>
              <figcaption className="px-4 py-2.5 font-mono text-[10px] tracking-[0.18em] uppercase text-bruma border-t border-hielo/12">
                {'>'} {foto.caption}
              </figcaption>
            </figure>
          ))}
        </div>
        {/* Fundido de bordes */}
        <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-28 bg-gradient-to-r from-navy-950 to-transparent" />
        <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-28 bg-gradient-to-l from-navy-950 to-transparent" />
      </div>
    </section>
  );
}
