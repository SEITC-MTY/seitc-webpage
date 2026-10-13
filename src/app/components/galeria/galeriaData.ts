export interface FotoGaleria {
  src: string;
  w: number;
  h: number;
  alt: string;
}

export interface AlbumGaleria {
  id: string;
  fecha: string;
  titulo: string;
  resumen: string;
  fotos: FotoGaleria[];
}

/* Fechas tomadas de los metadatos de las fotografías. */
export const albumes: AlbumGaleria[] = [
  {
    id: "explora",
    fecha: "25 de agosto de 2026",
    titulo: "Explora Ingenierías",
    resumen: "SEITC recibió a los estudiantes de nuevo ingreso con un stand de ITC.",
    fotos: [
      { src: "/images/galeria/explora/01.jpg", w: 1400, h: 788, alt: "Estudiantes de nuevo ingreso en el stand de ITC" },
      { src: "/images/galeria/explora/02.jpg", w: 1400, h: 1050, alt: "Stand de ITC en Explora Ingenierías" },
      { src: "/images/galeria/explora/03.jpg", w: 1400, h: 1050, alt: "Integrantes de SEITC atendiendo el stand" },
      { src: "/images/galeria/explora/04.jpg", w: 1050, h: 1400, alt: "ITC en el pasillo de Explora Ingenierías" },
    ],
  },
  {
    id: "bienvenida",
    fecha: "27 de agosto de 2026",
    titulo: "Bienvenida ITC",
    resumen: "Arranque del semestre con la generación de nuevo ingreso: presentación de la carrera, dinámicas y convivencia.",
    fotos: [
      { src: "/images/galeria/bienvenida/01.jpg", w: 1400, h: 1050, alt: "Apertura de la bienvenida a la generación de nuevo ingreso" },
      { src: "/images/galeria/bienvenida/02.jpg", w: 1400, h: 1050, alt: "Integrantes de SEITC presentan qué es ITC" },
      { src: "/images/galeria/bienvenida/03.jpg", w: 1400, h: 1050, alt: "Dinámica “¿Qué significa ser ITC?” con los asistentes" },
      { src: "/images/galeria/bienvenida/04.jpg", w: 1400, h: 1050, alt: "Los asistentes participan en la dinámica “¿Quién de aquí…?”" },
      { src: "/images/galeria/bienvenida/05.jpg", w: 1400, h: 1050, alt: "Anuncio del viaje a Austin 2027" },
      { src: "/images/galeria/bienvenida/06.jpg", w: 1400, h: 1050, alt: "Salón lleno durante la bienvenida" },
      { src: "/images/galeria/bienvenida/07.jpg", w: 1400, h: 1050, alt: "Convivencia entre integrantes y estudiantes" },
      { src: "/images/galeria/bienvenida/08.jpg", w: 1050, h: 1400, alt: "Presentación de Finish It Friday" },
      { src: "/images/galeria/bienvenida/09.jpg", w: 1400, h: 1050, alt: "La mesa directiva de SEITC frente al grupo" },
      { src: "/images/galeria/bienvenida/10.jpg", w: 1400, h: 1148, alt: "Integrantes de SEITC con los asistentes" },
    ],
  },
  {
    id: "finish-it-friday",
    fecha: "28 de agosto de 2026",
    titulo: "Finish It Friday #1",
    resumen: "Una sesión abierta para trabajar en comunidad y avanzar en proyectos pendientes.",
    fotos: [
      { src: "/images/galeria/finish-it-friday/01.jpg", w: 1400, h: 1050, alt: "Sesión de trabajo con laptop" },
      { src: "/images/galeria/finish-it-friday/02.jpg", w: 1400, h: 1020, alt: "Un asistente durante Finish It Friday" },
      { src: "/images/galeria/finish-it-friday/03.jpg", w: 1400, h: 1154, alt: "Trabajo en parejas" },
      { src: "/images/galeria/finish-it-friday/04.jpg", w: 1400, h: 1050, alt: "Una asistente concentrada en su proyecto" },
      { src: "/images/galeria/finish-it-friday/05.jpg", w: 1400, h: 1031, alt: "Estudiantes trabajando juntos" },
      { src: "/images/galeria/finish-it-friday/06.jpg", w: 1400, h: 1050, alt: "Integrantes de SEITC al cierre de la sesión" },
    ],
  },
  {
    id: "leetcode",
    fecha: "Agosto a octubre de 2026",
    titulo: "LeetCode & DSAs 101",
    resumen: "La serie de sesiones para prepararse para entrevistas técnicas, desde arrays hasta estructuras más avanzadas.",
    fotos: [
      { src: "/images/galeria/leetcode/01.jpg", w: 1400, h: 1050, alt: "Sesión 1 de LeetCode & DSAs 101: Arrays" },
      { src: "/images/galeria/leetcode/02.jpg", w: 1400, h: 1050, alt: "Un integrante de SEITC explica el problema frente al grupo" },
      { src: "/images/galeria/leetcode/03.jpg", w: 1400, h: 1050, alt: "Los asistentes levantan la mano para participar" },
      { src: "/images/galeria/leetcode/04.jpg", w: 1050, h: 1400, alt: "Asistentes con laptop durante la sesión" },
      { src: "/images/galeria/leetcode/05.jpg", w: 1050, h: 1400, alt: "El grupo sigue la explicación" },
      { src: "/images/galeria/leetcode/06.jpg", w: 1400, h: 1050, alt: "Dos integrantes de SEITC explican ante el grupo" },
      { src: "/images/galeria/leetcode/07.jpg", w: 1050, h: 1400, alt: "Presentación con logotipos de empresas durante la sesión" },
      { src: "/images/galeria/leetcode/08.jpg", w: 1400, h: 1050, alt: "Integrante de SEITC explicando a la clase" },
    ],
  },
  {
    id: "bloomberg",
    fecha: "22 y 23 de septiembre de 2026",
    titulo: "Bloomberg Engineering Workshop",
    resumen: "Dos días de taller con ingenieros de Bloomberg sobre el proceso de entrevistas y diseño de sistemas.",
    fotos: [
      { src: "/images/galeria/bloomberg/01.jpg", w: 1400, h: 933, alt: "Día 1: panorama de Bloomberg Engineering" },
      { src: "/images/galeria/bloomberg/02.jpg", w: 1400, h: 933, alt: "Ponente de Bloomberg frente al grupo" },
      { src: "/images/galeria/bloomberg/03.jpg", w: 1400, h: 933, alt: "Asistentes atentos durante el taller" },
      { src: "/images/galeria/bloomberg/04.jpg", w: 1400, h: 933, alt: "Ponente de Bloomberg explica el proceso de entrevistas" },
      { src: "/images/galeria/bloomberg/05.jpg", w: 1400, h: 1050, alt: "Dos ponentes presentan el tema de diseño de sistemas" },
      { src: "/images/galeria/bloomberg/06.jpg", w: 1400, h: 933, alt: "Estudiantes conversan con los ponentes" },
      { src: "/images/galeria/bloomberg/07.jpg", w: 1140, h: 911, alt: "Día 2: ponente explica un diagrama de diseño de sistemas" },
      { src: "/images/galeria/bloomberg/08.jpg", w: 1400, h: 1050, alt: "Ponentes y asistentes en la foto del día 2" },
      { src: "/images/galeria/bloomberg/09.jpg", w: 1400, h: 1050, alt: "Una ponente reparte material a los equipos" },
      { src: "/images/galeria/bloomberg/10.jpg", w: 1400, h: 1050, alt: "Diseño de sistemas en el pizarrón" },
      { src: "/images/galeria/bloomberg/11.jpg", w: 1400, h: 1050, alt: "Un asistente dibuja su solución en el pizarrón" },
      { src: "/images/galeria/bloomberg/12.jpg", w: 1400, h: 1050, alt: "Equipos trabajando el ejercicio de diseño" },
      { src: "/images/galeria/bloomberg/13.jpg", w: 1400, h: 1050, alt: "Foto de grupo al cierre del taller" },
    ],
  },
  {
    id: "duolingo",
    fecha: "30 de septiembre de 2026",
    titulo: "Duolingo",
    resumen: "Sesión con el equipo de Duolingo para la comunidad ITC, con dinámicas y preguntas del público.",
    fotos: [
      { src: "/images/galeria/duolingo/01.jpg", w: 1400, h: 1050, alt: "Asistentes al evento de Duolingo" },
      { src: "/images/galeria/duolingo/02.jpg", w: 1400, h: 788, alt: "Presentadora durante la dinámica" },
      { src: "/images/galeria/duolingo/03.jpg", w: 1400, h: 788, alt: "Entrega de playeras entre los asistentes" },
      { src: "/images/galeria/duolingo/04.jpg", w: 1400, h: 933, alt: "Presentación del internship en Duolingo" },
      { src: "/images/galeria/duolingo/05.jpg", w: 1400, h: 933, alt: "Asistentes saludan a cámara" },
      { src: "/images/galeria/duolingo/06.jpg", w: 1400, h: 933, alt: "Sesión de preguntas y respuestas" },
      { src: "/images/galeria/duolingo/07.jpg", w: 1400, h: 933, alt: "Presentadora con el peluche del búho de Duolingo" },
      { src: "/images/galeria/duolingo/08.jpg", w: 1050, h: 1400, alt: "Registro con código QR a la entrada" },
      { src: "/images/galeria/duolingo/09.jpg", w: 1400, h: 1050, alt: "Foto de grupo con los asistentes" },
    ],
  },
];
