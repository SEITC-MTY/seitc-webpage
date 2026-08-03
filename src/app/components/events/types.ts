export interface DescripcionCompleja {
    texto: string;
    bullets: string[];
}

export type EventoTipo =
    | 'taller'
    | 'conferencia'
    | 'competencia'
    | 'panel'
    | 'charla'
    | 'recruitment'
    | 'comunidad'
    | 'serie';

export type Semestre = 'AD25' | 'AD26';

export interface Evento {
    /** slug estable, p.ej. "bienvenida-ad26" */
    id: string;
    titulo: string;
    tipo: EventoTipo;
    estado: 'pasado' | 'proximo';
    semestre: Semestre;
    descripcion: string | DescripcionCompleja;
    ubicacion: string;
    /**
     * Fechas honestas: `fechaLabel` es SIEMPRE lo que se muestra.
     * `fechaISO` solo existe cuando hay una fecha real (historial o confirmada).
     * Un evento sin fecha definida lleva `fechaConfirmada: false` y un label
     * "Por confirmar" — NUNCA una fecha inventada.
     */
    fechaLabel: string;
    fechaConfirmada: boolean;
    /** Texto corto para la columna de fecha de la agenda (p. ej. "Agosto"). */
    fechaColumna?: string;
    fechaISO?: string;
    fechaFinISO?: string;
    hora?: string;
    linkRegistro?: string;
}
