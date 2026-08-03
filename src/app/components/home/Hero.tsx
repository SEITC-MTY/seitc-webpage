import Image from 'next/image';
import Link from 'next/link';

const WHATSAPP_URL = 'https://chat.whatsapp.com/Ejj8hsLdqlXAuHBHQ9bJVG';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-navy-950 grid-blueprint overflow-hidden flex items-center">
      {/* Línea de acento vertical (detalle de plano) */}
      <div aria-hidden className="absolute left-6 md:left-10 top-0 bottom-0 w-px bg-hielo/8" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-20">
        <div className="grid lg:grid-cols-[1.25fr_1fr] gap-14 lg:gap-10 items-center">

          {/* Columna de texto */}
          <div>
            <p className="kicker mb-6" data-aos="fade-up">
              {'> sociedad_estudiantil · ITC · campus monterrey'}
            </p>

            <h1
              className="font-display font-bold text-hielo leading-[0.95] tracking-tight text-[clamp(4.2rem,12vw,9rem)]"
              data-aos="fade-up"
              data-aos-delay="80"
            >
              SEITC<span className="text-azul">.</span>
            </h1>

            <p
              className="mt-6 text-lg md:text-2xl text-niebla leading-relaxed max-w-xl"
              data-aos="fade-up"
              data-aos-delay="160"
            >
              La Sociedad de Estudiantes de{' '}
              <span className="text-hielo font-medium">Ingeniería en Tecnologías Computacionales</span>{' '}
              del Tec de Monterrey — comunidad, rigor técnico y conexión real con la industria.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10" data-aos="fade-up" data-aos-delay="240">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-azul text-navy-950 font-semibold px-8 py-4 hover:bg-azul-bright transition-colors duration-200"
              >
                Únete a SEITC <span aria-hidden className="font-mono">→</span>
              </a>
              <Link
                href="/eventos"
                className="inline-flex items-center justify-center gap-2 border border-hielo/25 text-hielo font-medium px-8 py-4 hover:border-azul hover:text-azul-bright transition-colors duration-200"
              >
                Ver eventos
              </Link>
            </div>

            {/* Datos factuales, sin métricas inventadas */}
            <dl
              className="flex flex-wrap gap-x-10 gap-y-3 mt-14 font-mono text-[11px] tracking-[0.18em] uppercase text-bruma"
              data-aos="fade-up"
              data-aos-delay="320"
            >
              <div className="flex items-baseline gap-2">
                <dt className="text-azul">gestión</dt>
                <dd>2026–2027</dd>
              </div>
              <div className="flex items-baseline gap-2">
                <dt className="text-azul">direcciones</dt>
                <dd>08</dd>
              </div>
              <div className="flex items-baseline gap-2">
                <dt className="text-azul">campus</dt>
                <dd>Monterrey</dd>
              </div>
            </dl>
          </div>

          {/* Columna de foto — la toma de protesta real */}
          <div className="relative" data-aos="fade-up" data-aos-delay="200">
            <figure className="corner-ticks border border-hielo/15">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/Toma-Protesta.jpeg"
                  alt="Mesa directiva de SEITC en la toma de protesta"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  priority
                  className="object-cover"
                />
                {/* Velo tonal para integrarla al lienzo navy */}
                <div aria-hidden className="absolute inset-0 bg-navy-800/25 mix-blend-multiply" />
              </div>
              <figcaption className="flex items-center justify-between px-4 py-3 border-t border-hielo/15 font-mono text-[10px] tracking-[0.2em] uppercase text-bruma">
                <span>toma de protesta</span>
                <span className="text-azul">campus mty</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div aria-hidden className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[0.35em] uppercase text-bruma">
        scroll ↓
      </div>
    </section>
  );
}
