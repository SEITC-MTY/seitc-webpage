import Image from 'next/image';
import { Clock, Calendar, MapPin } from 'lucide-react';
import { Button } from 'seitc/app/_components/UI/Button2';
import { Badge } from 'seitc/app/_components/UI/Badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from 'seitc/app/_components/UI/Dialog';
import type { Evento } from './types';
import {
    getEventoIconStyle,
    getEventoIcon,
    getEventoImage,
    getEventoColor,
    getTipoLabel,
    formatFecha,
} from './eventHelpers';

interface Props {
    evento: Evento | null;
    onClose: () => void;
}

export function EventDialog({ evento, onClose }: Props) {
    return (
        <Dialog open={!!evento} onOpenChange={onClose}>
            <DialogContent className="max-w-2xl bg-white border-0 shadow-xl rounded-2xl">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-blue-800">
                        {evento?.titulo}
                    </DialogTitle>
                </DialogHeader>

                {evento && (
                    <div className="space-y-6">
                        {/* Event icon / logo */}
                        <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${getEventoIconStyle(evento.tipo).bg}`}>
                            {evento.estado === 'proximo'
                                ? getEventoIcon(evento.tipo, `w-8 h-8 ${getEventoIconStyle(evento.tipo).icon}`)
                                : <Image
                                    src={getEventoImage(evento)}
                                    alt={evento.titulo}
                                    width={48}
                                    height={48}
                                    className="w-12 h-12 object-contain"
                                  />
                            }
                        </div>

                        {/* Badges */}
                        <div className="flex items-center gap-3 flex-wrap">
                            <Badge className={getEventoColor(evento.tipo)}>
                                {getTipoLabel(evento.tipo)}
                            </Badge>
                            {evento.estado === 'pasado' && (
                                <Badge variant="outline" className="text-gray-600 border-gray-300">
                                    Evento Pasado
                                </Badge>
                            )}
                        </div>

                        {/* Description */}
                        {typeof evento.descripcion === 'object' && 'bullets' in evento.descripcion ? (
                            <>
                                <p className="text-gray-600 leading-relaxed">
                                    {evento.descripcion.texto}
                                </p>
                                <ul className="text-gray-600 leading-relaxed list-disc pl-6 space-y-2">
                                    {evento.descripcion.bullets.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </>
                        ) : (
                            <p className="text-gray-600 leading-relaxed">
                                {evento.descripcion as string}
                            </p>
                        )}

                        {/* Meta info */}
                        <div className="space-y-3 text-sm">
                            <div className="flex items-center gap-3 text-gray-600">
                                <Calendar className="h-5 w-5 text-blue-600 shrink-0" />
                                <span className="font-medium text-gray-800">
                                    {formatFecha(evento.fecha)}
                                    {evento.fechaFin && ` — ${formatFecha(evento.fechaFin)}`}
                                </span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-600">
                                <MapPin className="h-5 w-5 text-blue-600 shrink-0" />
                                <span className="font-medium text-gray-800">{evento.ubicacion}</span>
                            </div>
                            {evento.hora && (
                                <div className="flex items-center gap-3 text-gray-600">
                                    <Clock className="h-5 w-5 text-blue-600 shrink-0" />
                                    <span className="font-medium text-gray-800">{evento.hora}</span>
                                </div>
                            )}
                        </div>

                        {/* Register button — upcoming only */}
                        {evento.estado === 'proximo' && (
                            <Button
                                className="w-full bg-blue-700 hover:bg-blue-600 text-white rounded-xl py-3 font-semibold transition-all duration-300 hover:scale-105"
                                onClick={() => {
                                    if (evento.linkRegistro) {
                                        window.open(evento.linkRegistro, '_blank');
                                    } else {
                                        alert('El registro para este evento estará disponible próximamente.');
                                    }
                                }}
                            >
                                Registrarse
                            </Button>
                        )}
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
}
