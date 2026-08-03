import {
    Wrench,
    Mic2,
    Trophy,
    Users,
    MessageCircle,
    Briefcase,
    Coffee,
    Repeat,
    CalendarDays,
} from 'lucide-react';
import type { StaticImageData } from 'next/image';
import type { Evento, DescripcionCompleja, EventoTipo } from './types';

import bloombergLogo from '../../../../public/images/bloomberg.png';
import seitcLogo from '../../../../public/images/Logo2.svg';
import prepLogo from '../../../../public/images/Logo4.png';
import datadogLogo from '../../../../public/images/datadog.png';
import panelMujeres from '../../../../public/images/panel_mujeres.jpeg';
import uberLogo from '../../../../public/images/uber.png';

/* Un solo acento (azul SEITC) — la diferenciación por tipo es por ICONO y
   etiqueta mono, no por arcoíris de colores de template. */

export const getEventoIcon = (tipo: EventoTipo | string, className: string) => {
    switch (tipo) {
        case 'taller':      return <Wrench className={className} />;
        case 'conferencia': return <Mic2 className={className} />;
        case 'competencia': return <Trophy className={className} />;
        case 'panel':       return <Users className={className} />;
        case 'charla':      return <MessageCircle className={className} />;
        case 'recruitment': return <Briefcase className={className} />;
        case 'comunidad':   return <Coffee className={className} />;
        case 'serie':       return <Repeat className={className} />;
        default:            return <CalendarDays className={className} />;
    }
};

export const getTipoLabel = (tipo: EventoTipo | string): string => {
    switch (tipo) {
        case 'recruitment': return 'Recruitment';
        case 'serie':       return 'Serie';
        case 'comunidad':   return 'Comunidad';
        default:            return tipo.charAt(0).toUpperCase() + tipo.slice(1);
    }
};

/** Logo de empresa/evento para el historial (solo eventos pasados con logo real) */
export const getEventoImage = (evento: Evento): StaticImageData | null => {
    switch (evento.id) {
        case 'bloomberg-at-tec-ad25':       return bloombergLogo;
        case 'mujeres-en-ingenieria-ad25':  return panelMujeres;
        case 'datadog-ad25':                return datadogLogo;
        case 'itc-talks-uber-ad25':         return uberLogo;
        case 'prep2intern-ad25':            return prepLogo;
        case 'cv-power-up-ad25':
        case 'ingenieria-con-conciencia-ad25':
            return seitcLogo;
        default:
            return null;
    }
};

/** Recorta una descripción (simple o compleja) a `max` caracteres */
export const truncar = (desc: string | DescripcionCompleja, max = 150): string => {
    const text = typeof desc === 'string' ? desc : desc.texto;
    return text.length > max ? text.slice(0, max) + '…' : text;
};
