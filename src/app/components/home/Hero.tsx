import Image from 'next/image';
import Link from 'next/link';

const WHATSAPP_URL = 'https://chat.whatsapp.com/Ejj8hsLdqlXAuHBHQ9bJVG';

export default function Hero() {
  return (
    <section className="bg-white pt-36 pb-20 md:pt-44 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Texto principal */}
          <div>
            <p className="etiqueta mb-4">Tecnológico de Monterrey, Campus Monterrey</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-tinta leading-tight tracking-tight">
              Sociedad de Estudiantes de Ingeniería en Tecnologías Computacionales
            </h1>
            <p className="mt-6 text-lg text-texto-suave leading-relaxed max-w-xl">
              Somos el grupo estudiantil de la carrera de ITC. Organizamos talleres,
              charlas con la industria y espacios de comunidad para que aproveches tu
              paso por el Tec al máximo.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-9">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-seitc inline-flex items-center justify-center font-semibold px-7 py-3.5 rounded-md"
              >
                Únete a SEITC
              </a>
              <Link
                href="/eventos"
                className="inline-flex items-center justify-center border border-linea text-navy-850 font-semibold px-7 py-3.5 rounded-md hover:border-azul hover:text-azul-oscuro transition-colors duration-150"
              >
                Ver eventos
              </Link>
            </div>
          </div>

          {/* Fotografía de la mesa */}
          <figure className="rounded-lg overflow-hidden border border-linea shadow-sm">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/Toma-Protesta.jpeg"
                alt="Mesa directiva de SEITC en la toma de protesta"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                priority
                className="object-cover"
              />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
