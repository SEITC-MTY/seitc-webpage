import { Wrench, CalendarDays, Mic2, Trophy, Users, MessageCircle, Briefcase } from 'lucide-react';
import type { Evento, DescripcionCompleja } from './types';

import bloombergLogo from '../../../../public/images/bloomberg.png';
import cvLogo        from '../../../../public/images/Logo2.svg';
import prepLogo      from '../../../../public/images/Logo4.png';
import datadogLogo   from '../../../../public/images/datadog.png';
import panelmujeres  from '../../../../public/images/panel_mujeres.jpeg';
import uber          from '../../../../public/images/uber.png';

// ── Colors ────────────────────────────────────────────────────────────────────

/** Solid flat background for the card placeholder image — no gradients */
export const getPlaceholderColor = (tipo: string): string => {
    switch (tipo) {
        case 'taller':      return '#15803d';
        case 'evento':      return '#6d28d9';
        case 'conferencia': return '#b45309';
        case 'competencia': return '#b91c1c';
        case 'panel':       return '#4338ca';
        case 'charla':      return '#0f766e';
        case 'Recruitment': return '#1746A2';
        default:            return '#1e3a8a';
    }
};

/** Tailwind classes for badge color */
export const getEventoColor = (tipo: string): string => {
    switch (tipo) {
        case 'taller':      return 'bg-green-100 text-green-800 border border-green-200';
        case 'evento':      return 'bg-purple-100 text-purple-800 border border-purple-200';
        case 'conferencia': return 'bg-yellow-100 text-yellow-800 border border-yellow-200';
        case 'competencia': return 'bg-red-100 text-red-800 border border-red-200';
        case 'panel':       return 'bg-indigo-100 text-indigo-800 border border-indigo-200';
        case 'charla':      return 'bg-teal-100 text-teal-800 border border-teal-200';
        case 'Recruitment': return 'bg-[#1746A2] text-white border border-blue-700';
        default:            return 'bg-blue-100 text-blue-800 border border-blue-200';
    }
};

/** Tailwind classes for icon container in the dialog */
export const getEventoIconStyle = (tipo: string): { bg: string; icon: string } => {
    switch (tipo) {
        case 'taller':      return { bg: 'bg-green-100',  icon: 'text-green-700'  };
        case 'evento':      return { bg: 'bg-purple-100', icon: 'text-purple-700' };
        case 'conferencia': return { bg: 'bg-yellow-100', icon: 'text-yellow-700' };
        case 'competencia': return { bg: 'bg-red-100',    icon: 'text-red-700'    };
        case 'panel':       return { bg: 'bg-indigo-100', icon: 'text-indigo-700' };
        case 'charla':      return { bg: 'bg-teal-100',   icon: 'text-teal-700'   };
        case 'Recruitment': return { bg: 'bg-blue-100',   icon: 'text-blue-700'   };
        default:            return { bg: 'bg-gray-100',   icon: 'text-gray-600'   };
    }
};

// ── Icons ─────────────────────────────────────────────────────────────────────

export const getEventoIcon = (tipo: string, className: string) => {
    switch (tipo) {
        case 'taller':      return <Wrench className={className} />;
        case 'evento':      return <CalendarDays className={className} />;
        case 'conferencia': return <Mic2 className={className} />;
        case 'competencia': return <Trophy className={className} />;
        case 'panel':       return <Users className={className} />;
        case 'charla':      return <MessageCircle className={className} />;
        case 'Recruitment': return <Briefcase className={className} />;
        default:            return <CalendarDays className={className} />;
    }
};

// ── Images ────────────────────────────────────────────────────────────────────

/** Small company / event logo shown in the avatar circle on the card */
export const getCompanyLogo = (evento: Evento) => {
    switch (evento.titulo) {
        case 'Bloomberg at Tec':                        return bloombergLogo;
        case 'Forjando Caminos: Mujeres en Ingenieria': return panelmujeres;
        case 'Datadog':                                 return datadogLogo;
        case 'ITC Talks @ Uber':                        return uber;
        case 'Prep2Intern':                             return prepLogo;
        default:                                        return cvLogo;
    }
};

/** Logo / image shown in the dialog header */
export const getEventoImage = (evento: Evento) => {
    switch (evento.titulo) {
        case 'Bloomberg at Tec':                        return bloombergLogo;
        case 'Forjando Caminos: Mujeres en Ingenieria': return panelmujeres;
        case 'Datadog':                                 return datadogLogo;
        case 'ITC Talks @ Uber':                        return uber;
        case 'CV Power Up':                             return cvLogo;
        case 'Ingeniería con Conciencia':               return cvLogo;
        case 'Prep2Intern':                             return prepLogo;
        default:                                        return cvLogo;
    }
};

// ── Text / date ───────────────────────────────────────────────────────────────

/** Truncate a description (string or complex) to `max` characters */
export const truncar = (desc: string | DescripcionCompleja, max = 120): string => {
    const text = typeof desc === 'string' ? desc : desc.texto;
    return text.length > max ? text.slice(0, max) + '…' : text;
};

export const formatFecha = (fechaStr: string): string =>
    new Date(fechaStr + 'T00:00:00').toLocaleDateString('es-ES', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
    });

export const formatFechaCorta = (fechaStr: string): string =>
    new Date(fechaStr + 'T00:00:00').toLocaleDateString('es-ES', {
        day: 'numeric', month: 'short',
    });

/** Human-readable badge label for an event type */
export const getTipoLabel = (tipo: string): string =>
    tipo === 'Recruitment'
        ? 'Recruitment'
        : tipo.charAt(0).toUpperCase() + tipo.slice(1);
