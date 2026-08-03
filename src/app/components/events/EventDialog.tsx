import Image from 'next/image';
import { Clock, CalendarClock, MapPin } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from 'seitc/app/_components/UI/Dialog';
import type { Evento } from './types';
import { getEventoIcon, getEventoImage, getTipoLabel } from './eventHelpers';

interface Props {
    evento: Evento | null;
    onClose: () => void;
}

export function EventDialog({ evento, onClose }: Props) {
    const logo = evento && evento.estado === 'pasado' ? getEventoImage(evento) : null;

    return (
        <Dialog open={!!evento} onOpenChange={onClose}>
            <DialogContent className="max-w-2xl bg-navy-900 border border-hielo/15 text-hielo p-8 max-h-[85dvh] overflow-y-auto">
                {evento && (
                    <>
                        <DialogHeader className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 shrink-0 border border-azul/40 bg-navy-850 flex items-center justify-center overflow-hidden">
                                    {logo ? (
                                        <Image src={logo} alt="" width={36} height={36} className="w-9 h-9 object-contain" />
                                    ) : (
                                        getEventoIcon(evento.tipo, 'w-6 h-6 text-azul-bright')
                                    )}
                                </div>
                                <div className="flex items-center gap-2 flex-wrap">
                                    <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-azul-bright border border-azul/40 px-2 py-1">
                                        {getTipoLabel(evento.tipo)}
                                    </span>
                                    {evento.estado === 'pasado' ? (
                                        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-bruma border border-bruma/40 px-2 py-1">
                                            Evento pasado
                                        </span>
                                    ) : !evento.fechaConfirmada ? (
                                        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-niebla border border-dashed border-bruma/60 px-2 py-1">
                                            Fecha por confirmar
                                        </span>
                                    ) : null}
                                </div>
                            </div>
                            <DialogTitle className="font-display text-2xl md:text-3xl font-bold text-hielo leading-tight">
                                {evento.titulo}
                            </DialogTitle>
                        </DialogHeader>

                        <div className="space-y-6 mt-2">
                            {/* Descripción */}
                            {typeof evento.descripcion === 'object' && 'bullets' in evento.descripcion ? (
                                <>
                                    <p className="text-niebla leading-relaxed">{evento.descripcion.texto}</p>
                                    <ul className="text-niebla leading-relaxed space-y-2">
                                        {evento.descripcion.bullets.map((item, idx) => (
                                            <li key={idx} className="flex gap-3">
                                                <span aria-hidden className="font-mono text-azul shrink-0">{'>'}</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            ) : (
                                <p className="text-niebla leading-relaxed">{evento.descripcion as string}</p>
                            )}

                            {/* Meta */}
                            <div className="space-y-2.5 font-mono text-sm border-t border-hielo/10 pt-5">
                                <div className="flex items-center gap-3">
                                    <CalendarClock className="h-4 w-4 text-azul shrink-0" />
                                    <span className="text-hielo">{evento.fechaLabel}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MapPin className="h-4 w-4 text-azul shrink-0" />
                                    <span className="text-hielo">{evento.ubicacion}</span>
                                </div>
                                {evento.hora && (
                                    <div className="flex items-center gap-3">
                                        <Clock className="h-4 w-4 text-azul shrink-0" />
                                        <span className="text-hielo">{evento.hora}</span>
                                    </div>
                                )}
                            </div>

                            {/* Registro: solo si existe un link REAL; sin placebos */}
                            {evento.estado === 'proximo' &&
                                (evento.linkRegistro ? (
                                    <a
                                        href={evento.linkRegistro}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full text-center bg-azul text-navy-950 font-semibold py-3.5 hover:bg-azul-bright transition-colors duration-200"
                                    >
                                        Registrarse <span aria-hidden className="font-mono">→</span>
                                    </a>
                                ) : (
                                    <p className="font-mono text-[11px] tracking-wider text-bruma border border-dashed border-bruma/40 px-4 py-3 text-center uppercase">
                                        Registro disponible cuando se confirme en junta de mesa
                                    </p>
                                ))}
                        </div>
                    </>
                )}
            </DialogContent>
        </Dialog>
    );
}
