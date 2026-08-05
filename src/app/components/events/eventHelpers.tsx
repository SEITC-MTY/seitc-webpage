import type { StaticImageData } from 'next/image';
import type { Evento, DescripcionCompleja, EventoTipo } from './types';

import bloombergLogo from '../../../../public/images/bloomberg.png';
import seitcLogo from '../../../../public/images/Logo2.svg';
import prepLogo from '../../../../public/images/Logo4.png';
import datadogLogo from '../../../../public/images/datadog.png';
import panelMujeres from '../../../../public/images/panel_mujeres.jpeg';
import uberLogo from '../../../../public/images/uber.png';

export const getTipoLabel = (tipo: EventoTipo | string): string => {
    switch (tipo) {
        case 'recruitment': return 'Reclutamiento';
        case 'serie':       return 'Serie del semestre';
        case 'comunidad':   return 'Comunidad';
        default:            return tipo.charAt(0).toUpperCase() + tipo.slice(1);
    }
};

/**
 * Fotografía ilustrativa para eventos PRÓXIMOS.
 * Imágenes de Pixabay (Licencia de Contenido de Pixabay: uso libre, sin
 * atribución requerida). Fuentes en public/images/eventos/_manifest.json.
 */
export const getEventoFoto = (evento: Evento): string | null => {
    switch (evento.id) {
        case 'bienvenida-ad26':                  return '/images/eventos/bienvenida.jpg';
        case 'portfolio-ai-ad26':                return '/images/eventos/taller.jpg';
        case 'leetcode-dsa-ad26':                return '/images/eventos/leetcode.jpg';
        case 'prep-to-intern-1-ad26':            return '/images/eventos/charla.jpg';
        case 'prep-to-intern-2-ad26':            return '/images/eventos/panel.jpg';
        case 'interview-prep-ad26':              return '/images/eventos/interview.jpg';
        case 'prep-to-intern-semestre-tec-ad26': return '/images/eventos/semestre-tec.jpg';
        case 'coffee-n-code-ad26':               return '/images/eventos/coffee.jpg';
        default:                                 return null;
    }
};

/** Logotipo o imagen real para el HISTORIAL de eventos pasados. */
export const getEventoLogo = (evento: Evento): StaticImageData | null => {
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

/** Recorta una descripción al final de palabra más cercano a `max`. */
export const truncar = (desc: string | DescripcionCompleja, max = 160): string => {
    const text = typeof desc === 'string' ? desc : desc.texto;
    if (text.length <= max) return text;
    const cut = text.slice(0, max);
    return cut.slice(0, cut.lastIndexOf(' ')) + '…';
};
