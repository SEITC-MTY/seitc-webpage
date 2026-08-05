import Image from 'next/image';
import Link from 'next/link';
import { eventosProximos } from 'seitc/app/components/events/eventsData';
import { getEventoFoto, getTipoLabel } from 'seitc/app/components/events/eventHelpers';

export default function EventosTeaser() {
  const destacados = eventosProximos.slice(0, 3);

  return (
    <section className="bg-superficie border-y border-linea py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="etiqueta mb-3">Eventos</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-tinta leading-tight tracking-tight">
              Lo que viene este semestre
            </h2>
          </div>
          <Link
            href="/eventos"
            className="shrink-0 inline-flex items-center justify-center border border-linea bg-white text-navy-850 font-semibold px-6 py-3 rounded-md hover:border-azul hover:text-azul-oscuro transition-colors duration-150"
          >
            Ver calendario completo
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {destacados.map((evento) => {
            const foto = getEventoFoto(evento);
            return (
              <Link
                key={evento.id}
                href="/eventos"
                className="group bg-white border border-linea rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200"
              >
                {foto && (
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={foto}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-wide text-azul-oscuro mb-2">
                    {getTipoLabel(evento.tipo)}
                  </p>
                  <h3 className="text-lg font-bold text-tinta leading-snug group-hover:text-azul-oscuro transition-colors duration-150">
                    {evento.titulo}
                  </h3>
                  <p className="text-sm text-texto-suave mt-2">{evento.fechaLabel}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
