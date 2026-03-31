import Image from 'next/image';
import { Calendar, MapPin } from 'lucide-react';
import { Badge } from 'seitc/app/_components/UI/Badge';
import type { Evento } from './types';
import {
    getPlaceholderColor,
    getCompanyLogo,
    getEventoIcon,
    getEventoColor,
    getTipoLabel,
    truncar,
    formatFechaCorta,
} from './eventHelpers';

interface Props {
    evento: Evento;
    onClick: () => void;
}

export function EventCard({ evento, onClick }: Props) {
    const fechaObj    = new Date(evento.fecha + 'T00:00:00');
    const fechaFinObj = evento.fechaFin ? new Date(evento.fechaFin + 'T00:00:00') : null;

    return (
        <div
            className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:-translate-y-1"
            onClick={onClick}
        >
            {/* ── Image placeholder ──────────────────────────────────────── */}
            <div
                className="relative h-44 flex items-center justify-center overflow-hidden"
                style={{ backgroundColor: getPlaceholderColor(evento.tipo) }}
            >
                {/* Watermark icon */}
                <div className="opacity-[0.08]">
                    {getEventoIcon(evento.tipo, 'w-32 h-32 text-white')}
                </div>

                {/* Company logo avatar — top left */}
                <div className="absolute top-3 left-3 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center overflow-hidden border-2 border-white/70">
                    <Image
                        src={getCompanyLogo(evento)}
                        alt={evento.titulo}
                        width={32}
                        height={32}
                        className="w-7 h-7 object-contain"
                    />
                </div>

                {/* Date badge — top right */}
                <div className="absolute top-3 right-3 bg-white/90 rounded-lg px-2.5 py-1 text-center min-w-[2.75rem]">
                    <div className="text-base font-extrabold text-blue-900 leading-none">
                        {fechaFinObj
                            ? `${fechaObj.getDate()}–${fechaFinObj.getDate()}`
                            : fechaObj.getDate()
                        }
                    </div>
                    <div className="text-[10px] font-semibold text-blue-600 uppercase leading-none mt-0.5">
                        {fechaObj.toLocaleDateString('es-ES', { month: 'short' })}
                    </div>
                </div>

                {/* "Próximo" pill — bottom left */}
                {evento.estado === 'proximo' && (
                    <div className="absolute bottom-3 left-3 bg-white/20 border border-white/30 text-white text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                        Próximo
                    </div>
                )}
            </div>

            {/* ── Card footer ────────────────────────────────────────────── */}
            <div className="p-4">
                <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h3 className="text-sm font-bold text-blue-900 leading-snug flex-1">
                        {evento.titulo}
                    </h3>
                    <Badge className={`${getEventoColor(evento.tipo)} text-[10px] shrink-0 whitespace-nowrap`}>
                        {getTipoLabel(evento.tipo)}
                    </Badge>
                </div>

                <p className="text-xs text-gray-500 leading-relaxed mb-3 line-clamp-2">
                    {truncar(evento.descripcion)}
                </p>

                <div className="flex items-center gap-3 text-[11px] text-gray-400 flex-wrap">
                    <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 shrink-0" />
                        {formatFechaCorta(evento.fecha)}
                        {fechaFinObj && ` – ${formatFechaCorta(evento.fechaFin!)}`}
                    </span>
                    <span className="flex items-center gap-1 min-w-0">
                        <MapPin className="w-3 h-3 shrink-0" />
                        <span className="truncate">{evento.ubicacion}</span>
                    </span>
                </div>
            </div>
        </div>
    );
}
