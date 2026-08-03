import Image from 'next/image';
import { CalendarClock, MapPin } from 'lucide-react';
import type { Evento } from './types';
import { getEventoIcon, getEventoImage, getTipoLabel, truncar } from './eventHelpers';

interface Props {
    evento: Evento;
    onClick: () => void;
}

export function EventCard({ evento, onClick }: Props) {
    const logo = evento.estado === 'pasado' ? getEventoImage(evento) : null;

    return (
        <button
            type="button"
            onClick={onClick}
            className="group w-full text-left bg-navy-900 border border-hielo/10 hover:border-azul/60 transition-colors duration-200 corner-ticks focus-visible:border-azul"
        >
            <div className="p-6 flex flex-col gap-4 h-full">
                {/* Encabezado: icono + tipo + estado de fecha */}
                <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                        <div className="w-10 h-10 shrink-0 border border-azul/40 bg-navy-850 flex items-center justify-center overflow-hidden">
                            {logo ? (
                                <Image src={logo} alt="" width={28} height={28} className="w-7 h-7 object-contain" />
                            ) : (
                                getEventoIcon(evento.tipo, 'w-5 h-5 text-azul-bright')
                            )}
                        </div>
                        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-azul-bright">
                            {getTipoLabel(evento.tipo)}
                        </span>
                    </div>

                    {evento.estado === 'proximo' && !evento.fechaConfirmada && (
                        <span className="shrink-0 font-mono text-[10px] tracking-widest uppercase text-niebla border border-dashed border-bruma/60 px-2 py-1">
                            Por confirmar
                        </span>
                    )}
                </div>

                {/* Título + descripción */}
                <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold text-hielo leading-snug group-hover:text-azul-bright transition-colors duration-200">
                        {evento.titulo}
                    </h3>
                    <p className="text-sm text-niebla leading-relaxed mt-2 line-clamp-3">
                        {truncar(evento.descripcion)}
                    </p>
                </div>

                {/* Meta */}
                <div className="flex flex-col gap-1.5 text-[12px] text-bruma font-mono pt-3 border-t border-hielo/8">
                    <span className="flex items-center gap-2">
                        <CalendarClock className="w-3.5 h-3.5 shrink-0 text-azul" />
                        {evento.fechaLabel}
                    </span>
                    <span className="flex items-center gap-2 min-w-0">
                        <MapPin className="w-3.5 h-3.5 shrink-0 text-azul" />
                        <span className="truncate">{evento.ubicacion}</span>
                    </span>
                </div>
            </div>
        </button>
    );
}
