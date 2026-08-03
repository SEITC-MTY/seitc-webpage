import Link from 'next/link';
import { eventosProximos } from 'seitc/app/components/events/eventsData';
import { getEventoIcon, getTipoLabel } from 'seitc/app/components/events/eventHelpers';

export default function EventosTeaser() {
  const destacados = eventosProximos.slice(0, 4);

  return (
    <section className="bg-navy-900 border-y border-hielo/10 py-24 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12" data-aos="fade-up">
          <div>
            <p className="kicker mb-4">{'[04] // agenda AD26-27'}</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-hielo tracking-tight">
              Lo que viene este semestre<span className="text-azul">.</span>
            </h2>
          </div>
          <Link
            href="/eventos"
            className="shrink-0 inline-flex items-center gap-2 border border-hielo/25 text-hielo font-medium px-6 py-3 hover:border-azul hover:text-azul-bright transition-colors duration-200"
          >
            Calendario completo <span aria-hidden className="font-mono">→</span>
          </Link>
        </div>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {destacados.map((evento, i) => (
            <li key={evento.id} data-aos="fade-up" data-aos-delay={i * 70}>
              <Link
                href="/eventos"
                className="group flex flex-col gap-4 h-full bg-navy-950 border border-hielo/10 hover:border-azul/60 transition-colors duration-200 p-6"
              >
                <div className="flex items-center justify-between">
                  {getEventoIcon(evento.tipo, 'w-5 h-5 text-azul-bright')}
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-bruma">
                    {getTipoLabel(evento.tipo)}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-hielo leading-snug flex-1 group-hover:text-azul-bright transition-colors duration-200">
                  {evento.titulo}
                </h3>
                <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-bruma border-t border-hielo/10 pt-3">
                  {evento.fechaLabel}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
