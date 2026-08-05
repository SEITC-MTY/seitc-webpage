import type { Evento, Semestre } from './types';

export const SEMESTRE_LABELS: Record<Semestre, string> = {
    AD25: 'Agosto a diciembre de 2025',
    AD26: 'Agosto a diciembre de 2026',
};

/**
 * AD26: las fechas se confirman en junta de mesa. Solo llevan fecha los eventos
 * cuyo calendario YA fue decidido por Dirección de Proyectos; el resto queda
 * "Por confirmar" a propósito — no se inventan fechas.
 */
export const eventos: Evento[] = [
    /* ── AD26-27 · próximo semestre ─────────────────────────────────────── */
    {
        id: 'bienvenida-ad26',
        fechaColumna: 'Del 10 al 14 de agosto',
        titulo: 'Evento de Bienvenida',
        tipo: 'comunidad',
        estado: 'proximo',
        semestre: 'AD26',
        descripcion:
            'Arranque del semestre centrado en comunidad: reconectar a quienes regresan e introducir a los de nuevo ingreso a SEITC. Dinámicas, presentación de la agenda del semestre y convivencia libre.',
        ubicacion: 'Campus Monterrey, lugar por confirmar',
        fechaLabel: 'Semana del 10 de agosto, día por confirmar',
        fechaConfirmada: false,
    },
    {
        id: 'portfolio-ai-ad26',
        fechaColumna: 'Agosto',
        titulo: 'Build Your Portfolio w/ AI',
        tipo: 'taller',
        estado: 'proximo',
        semestre: 'AD26',
        descripcion:
            'Taller práctico: construye y haz deploy de tu portafolio web con herramientas de IA, listo para tu CV al salir. Sin experiencia previa requerida.',
        ubicacion: 'Campus Monterrey, sala por confirmar',
        fechaLabel: 'Agosto de 2026, fecha por confirmar',
        fechaConfirmada: false,
    },
    {
        id: 'leetcode-dsa-ad26',
        fechaColumna: '18 de agosto al 1 de octubre',
        titulo: 'Leetcode & DSAs 101',
        tipo: 'serie',
        estado: 'proximo',
        semestre: 'AD26',
        descripcion: {
            texto: 'Serie recurrente para prepararte para entrevistas técnicas con una ruta estructurada de estructuras de datos y algoritmos. Sin experiencia previa; registro por sesión.',
            bullets: [
                'Dos sesiones por semana: martes y jueves, de 18:00 a 19:30.',
                'Del 18 de agosto al 1 de octubre (la serie salta la Semana Tec).',
                'Bloques temáticos: Arrays & Hashing, Two Pointers, Stacks y Linked Lists, entre otros.',
            ],
        },
        ubicacion: 'Campus Monterrey, sala por confirmar',
        fechaLabel: 'Martes y jueves de 18:00 a 19:30, del 18 de agosto al 1 de octubre',
        fechaConfirmada: true,
        fechaISO: '2026-08-18',
        fechaFinISO: '2026-10-01',
        hora: '18:00 a 19:30',
    },
    {
        id: 'prep-to-intern-1-ad26',
        fechaColumna: 'Agosto a septiembre',
        titulo: 'Prep to Intern Reloaded #1',
        tipo: 'charla',
        estado: 'proximo',
        semestre: 'AD26',
        descripcion:
            'Profesionistas en empresas tech (SWE, Data Engineering, PM, UX, Solutions Architecture) comparten su experiencia real con la comunidad ITC. Curada para no repetir contenido de ediciones anteriores.',
        ubicacion: 'Campus Monterrey, lugar por confirmar',
        fechaLabel: 'Agosto a septiembre de 2026, fecha por confirmar',
        fechaConfirmada: false,
    },
    {
        id: 'prep-to-intern-2-ad26',
        fechaColumna: 'Octubre',
        titulo: 'Prep to Intern Reloaded #2',
        tipo: 'charla',
        estado: 'proximo',
        semestre: 'AD26',
        descripcion:
            'Segunda edición del semestre: nueva empresa invitada y contenido distinto al de la primera, con espacio de Q&A y networking al cierre.',
        ubicacion: 'Campus Monterrey, lugar por confirmar',
        fechaLabel: 'Octubre de 2026, fecha por confirmar',
        fechaConfirmada: false,
    },
    {
        id: 'interview-prep-ad26',
        fechaColumna: 'Octubre',
        titulo: 'Interview Prep',
        tipo: 'taller',
        estado: 'proximo',
        semestre: 'AD26',
        descripcion:
            'Mock interviews técnicas y de comportamiento en salas paralelas, con retroalimentación real para llegar preparado al proceso de contratación.',
        ubicacion: 'Campus Monterrey, salas por confirmar',
        fechaLabel: 'Octubre de 2026, formato y fecha por confirmar',
        fechaConfirmada: false,
    },
    {
        id: 'prep-to-intern-semestre-tec-ad26',
        fechaColumna: 'Noviembre',
        titulo: 'Prep to Intern: Enfoque Semestre Tec',
        tipo: 'charla',
        estado: 'proximo',
        semestre: 'AD26',
        descripcion:
            'Todo sobre las opciones de Semestre Tec: concentraciones, prácticas, estancias e incubación, coordinado con Directores de Entrada para decidir con información real.',
        ubicacion: 'Campus Monterrey, lugar por confirmar',
        fechaLabel: 'Noviembre de 2026, fecha por confirmar',
        fechaConfirmada: false,
    },
    {
        id: 'coffee-n-code-ad26',
        fechaColumna: 'Todo el semestre',
        titulo: "Coffee N' Code",
        tipo: 'comunidad',
        estado: 'proximo',
        semestre: 'AD26',
        descripcion:
            'Espacio recurrente de convivencia sin agenda fija: descomprimir, platicar y jugar entre la comunidad ITC. La cara relajada de SEITC.',
        ubicacion: 'Campus Monterrey, lugar por confirmar',
        fechaLabel: 'Serie recurrente, calendario por confirmar',
        fechaConfirmada: false,
    },

    /* ── AD25 · historial ───────────────────────────────────────────────── */
    {
        id: 'bloomberg-at-tec-ad25',
        fechaColumna: '27 al 29 de agosto',
        titulo: 'Bloomberg at Tec',
        tipo: 'conferencia',
        estado: 'pasado',
        semestre: 'AD25',
        descripcion:
            'Una conferencia que ofrece a los estudiantes una experiencia directa con la empresa Bloomberg, mediante una charla interactiva. El evento incluye un espacio de networking donde los asistentes podrán conocer de primera mano las tecnologías que utiliza Bloomberg, las oportunidades laborales disponibles y el perfil profesional que buscan.',
        ubicacion: 'Aulas 2, Auditorio de Biblioteca',
        fechaLabel: 'Del 27 al 29 de agosto de 2025',
        fechaConfirmada: true,
        fechaISO: '2025-08-27',
        fechaFinISO: '2025-08-29',
    },
    {
        id: 'mujeres-en-ingenieria-ad25',
        fechaColumna: '2 de septiembre',
        titulo: 'Forjando Caminos: Mujeres en Ingeniería',
        tipo: 'panel',
        estado: 'pasado',
        semestre: 'AD25',
        descripcion:
            'El panel “Forjando Caminos: Mujeres en Ingeniería” busca visibilizar y celebrar el papel de las mujeres en el ámbito de la ingeniería. A través de un espacio de diálogo y reflexión, ingenieras compartirán sus experiencias, retos y logros, inspirando a las nuevas generaciones a seguir construyendo un futuro más inclusivo e innovador.',
        ubicacion: 'Auditorio de Aulas 6 (A6 306)',
        fechaLabel: '2 de septiembre de 2025',
        fechaConfirmada: true,
        fechaISO: '2025-09-02',
        hora: '4:00 a 6:00 de la tarde',
    },
    {
        id: 'datadog-ad25',
        fechaColumna: '4 de septiembre',
        titulo: 'Datadog',
        tipo: 'recruitment',
        estado: 'pasado',
        semestre: 'AD25',
        descripcion: {
            texto: 'Este evento virtual exclusivo, organizado por Datadog en colaboración con el Tecnológico de Monterrey, está dirigido a estudiantes de Ciencias Computacionales e Ingeniería en Tecnologías Computacionales interesados en iniciar su carrera en Nueva York.',
            bullets: [
                'Conocer el programa de prácticas profesionales de Datadog y vacantes de tiempo completo para Software Engineer.',
                'Escuchar a ingenieros que comenzaron su carrera en Datadog como interns o early hires.',
                'Obtener consejos para destacar en entrevistas y entender mejor la cultura de ingeniería de la empresa.',
            ],
        },
        ubicacion: 'En línea vía Zoom',
        fechaLabel: '4 de septiembre de 2025',
        fechaConfirmada: true,
        fechaISO: '2025-09-04',
    },
    {
        id: 'itc-talks-uber-ad25',
        fechaColumna: '19 de septiembre',
        titulo: 'ITC Talks @ Uber',
        tipo: 'charla',
        estado: 'pasado',
        semestre: 'AD25',
        descripcion:
            'Una charla con David Celis Martínez, exalumno de Ingeniería en Tecnologías Computacionales y referente en la comunidad tech. Ganador del Swift Student Challenge 2023 de Apple, con dos internships en Uber en el área de ingeniería, y actualmente Software Engineer en Uber en San Francisco. David compartirá cómo fue su camino desde el ITC hasta Silicon Valley.',
        ubicacion: 'En línea vía Zoom',
        fechaLabel: '19 de septiembre de 2025',
        fechaConfirmada: true,
        fechaISO: '2025-09-19',
    },
    {
        id: 'cv-power-up-ad25',
        fechaColumna: '25 de septiembre',
        titulo: 'CV Power Up',
        tipo: 'taller',
        estado: 'pasado',
        semestre: 'AD25',
        descripcion:
            'Un taller para optimizar el currículum de estudiantes de Ingeniería en Tecnologías Computacionales, con enfoque en la industria tech y de software, logrando al menos 25 asistentes activos durante una sesión de 2 horas, y brindando retroalimentación personalizada a los participantes que traigan su CV.',
        ubicacion: 'Aula de Conferencias',
        fechaLabel: '25 de septiembre de 2025',
        fechaConfirmada: true,
        fechaISO: '2025-09-25',
    },
    {
        id: 'ingenieria-con-conciencia-ad25',
        fechaColumna: '2 de octubre',
        titulo: 'Ingeniería con Conciencia',
        tipo: 'panel',
        estado: 'pasado',
        semestre: 'AD25',
        descripcion:
            'Un evento tipo panel dirigido a estudiantes ITC y de la avenida ICT, el cual tiene como propósito discutir la relevancia de la ética profesional y tecnológica en la industria. A través de casos reales y experiencias compartidas por expertos, se busca generar un diálogo de alto impacto sobre cómo las decisiones que se toman pueden tener un efecto significativo en nuestro entorno.',
        ubicacion: 'Sala Novela, Piso 6 de Biblioteca',
        fechaLabel: '2 de octubre de 2025',
        fechaConfirmada: true,
        fechaISO: '2025-10-02',
    },
    {
        id: 'prep2intern-ad25',
        fechaColumna: '10 de diciembre',
        titulo: 'Prep2Intern',
        tipo: 'conferencia',
        estado: 'pasado',
        semestre: 'AD25',
        descripcion:
            'Una conferencia donde estudiantes de ITC que han conseguido internships en empresas reconocidas (nacionales o internacionales) comparten su experiencia en un panel conversacional, con el objetivo de inspirar y orientar a estudiantes en su camino hacia prácticas profesionales o internships en la industria tecnológica.',
        ubicacion: 'Auditorio de Aulas 6',
        fechaLabel: '10 de diciembre de 2025',
        fechaConfirmada: true,
        fechaISO: '2025-12-10',
    },
];

/** Próximos eventos (AD26) en el orden editorial del data file */
export const eventosProximos = eventos.filter((e) => e.estado === 'proximo');
