import Image from 'next/image';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from 'seitc/app/_components/UI/Dialog';
import type { Evento } from './types';
import { getEventoFoto, getEventoLogo, getTipoLabel } from './eventHelpers';

interface Props {
    evento: Evento | null;
    onClose: () => void;
}

export function EventDialog({ evento, onClose }: Props) {
    const foto = evento ? getEventoFoto(evento) : null;
    const logo = evento ? getEventoLogo(evento) : null;

    return (
        <Dialog open={!!evento} onOpenChange={onClose}>
            <DialogContent className="max-w-xl bg-white border border-linea text-texto rounded-lg p-0 overflow-hidden max-h-[85dvh] overflow-y-auto">
                {evento && (
                    <>
                        {/* Imagen de cabecera */}
                        {foto ? (
                            <div className="relative aspect-[2/1] w-full">
                                <Image src={foto} alt="" fill sizes="640px" className="object-cover" />
                            </div>
                        ) : logo ? (
                            <div className="flex items-center justify-center bg-superficie border-b border-linea py-8">
                                <Image src={logo} alt="" width={96} height={96} className="max-h-20 w-auto object-contain" />
                            </div>
                        ) : null}

                        <div className="p-7">
                            <DialogHeader className="space-y-2">
                                <p className="text-xs font-bold uppercase tracking-wide text-azul-oscuro">
                                    {getTipoLabel(evento.tipo)}
                                    {evento.estado === 'pasado' && ', evento pasado'}
                                </p>
                                <DialogTitle className="text-2xl font-extrabold text-tinta leading-tight">
                                    {evento.titulo}
                                </DialogTitle>
                            </DialogHeader>

                            <div className="mt-5 space-y-5">
                                {/* Descripción */}
                                {typeof evento.descripcion === 'object' && 'bullets' in evento.descripcion ? (
                                    <>
                                        <p className="text-texto leading-relaxed">{evento.descripcion.texto}</p>
                                        <ul className="space-y-2 list-disc pl-5 text-texto leading-relaxed">
                                            {evento.descripcion.bullets.map((item, idx) => (
                                                <li key={idx}>{item}</li>
                                            ))}
                                        </ul>
                                    </>
                                ) : (
                                    <p className="text-texto leading-relaxed">{evento.descripcion as string}</p>
                                )}

                                {/* Datos del evento */}
                                <dl className="border-t border-linea pt-5 space-y-2.5 text-sm">
                                    <div className="flex gap-3">
                                        <dt className="w-16 shrink-0 font-bold text-navy-850">Fecha</dt>
                                        <dd className="text-texto">{evento.fechaLabel}</dd>
                                    </div>
                                    <div className="flex gap-3">
                                        <dt className="w-16 shrink-0 font-bold text-navy-850">Lugar</dt>
                                        <dd className="text-texto">{evento.ubicacion}</dd>
                                    </div>
                                    {evento.hora && (
                                        <div className="flex gap-3">
                                            <dt className="w-16 shrink-0 font-bold text-navy-850">Horario</dt>
                                            <dd className="text-texto">{evento.hora}</dd>
                                        </div>
                                    )}
                                </dl>

                                {/* Registro: solo con enlace real */}
                                {evento.estado === 'proximo' &&
                                    (evento.linkRegistro ? (
                                        <a
                                            href={evento.linkRegistro}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block w-full text-center bg-azul text-white font-semibold py-3.5 rounded-md hover:bg-azul-oscuro transition-colors duration-150"
                                        >
                                            Registrarse
                                        </a>
                                    ) : (
                                        <p className="text-sm text-texto-suave bg-superficie border border-linea rounded-md px-4 py-3 text-center">
                                            El registro se abre cuando el evento se confirma en junta de mesa.
                                        </p>
                                    ))}
                            </div>
                        </div>
                    </>
                )}
            </DialogContent>
        </Dialog>
    );
}
