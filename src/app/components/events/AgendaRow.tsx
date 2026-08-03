import Image from 'next/image';
import type { Evento } from './types';
import { getEventoFoto, getEventoLogo, getTipoLabel, truncar } from './eventHelpers';

interface Props {
    evento: Evento;
    onClick: () => void;
}

/**
 * Fila de agenda: columna de fecha, imagen y contenido.
 * En pantallas chicas la fecha pasa arriba del contenido.
 */
export function AgendaRow({ evento, onClick }: Props) {
    const foto = getEventoFoto(evento);
    const logo = getEventoLogo(evento);

    return (
        <button
            type="button"
            onClick={onClick}
            className="group w-full text-left grid md:grid-cols-[190px_1fr] gap-4 md:gap-8 py-7 border-b border-linea hover:bg-superficie transition-colors duration-150 px-3 md:px-4 rounded-md"
        >
            {/* Columna de fecha */}
            <div className="md:pt-1">
                <p className="text-sm font-bold text-navy-850 leading-snug">
                    {evento.fechaColumna ?? evento.fechaLabel}
                </p>
                {evento.estado === 'proximo' && !evento.fechaConfirmada && (
                    <p className="inline-block text-xs font-semibold text-texto-suave bg-superficie border border-linea rounded-full px-3 py-1 mt-2 group-hover:bg-white transition-colors duration-150">
                        Fecha por confirmar
                    </p>
                )}
                {evento.hora && evento.fechaConfirmada && (
                    <p className="text-xs text-texto-suave mt-1.5">{evento.hora}</p>
                )}
            </div>

            {/* Imagen y contenido */}
            <div className="flex gap-5 items-start">
                {foto ? (
                    <div className="relative w-28 h-20 md:w-40 md:h-27 shrink-0 rounded-md overflow-hidden border border-linea">
                        <Image src={foto} alt="" fill sizes="160px" className="object-cover" />
                    </div>
                ) : logo ? (
                    <div className="w-20 h-20 shrink-0 rounded-md border border-linea bg-white flex items-center justify-center p-3">
                        <Image src={logo} alt="" width={56} height={56} className="max-h-14 w-auto object-contain" />
                    </div>
                ) : null}

                <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-wide text-azul-oscuro mb-1">
                        {getTipoLabel(evento.tipo)}
                    </p>
                    <h3 className="text-lg md:text-xl font-bold text-tinta leading-snug group-hover:text-azul-oscuro transition-colors duration-150">
                        {evento.titulo}
                    </h3>
                    <p className="text-sm text-texto-suave leading-relaxed mt-1.5 hidden sm:block">
                        {truncar(evento.descripcion)}
                    </p>
                    <p className="text-sm font-medium text-texto mt-2">{evento.ubicacion}</p>
                </div>
            </div>
        </button>
    );
}
