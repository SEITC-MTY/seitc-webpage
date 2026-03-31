export interface DescripcionCompleja {
    texto: string;
    bullets: string[];
}

export interface Evento {
    id: number;
    titulo: string;
    fecha: string;
    fechaFin?: string;
    tipo: 'taller' | 'evento' | 'conferencia' | 'competencia' | 'panel' | 'charla' | 'Recruitment';
    estado: 'pasado' | 'proximo';
    semestre: string;
    descripcion: string | DescripcionCompleja;
    ubicacion: string;
    hora?: string;
    cupos?: number;
    inscritos?: number;
    linkRegistro?: string;
}
