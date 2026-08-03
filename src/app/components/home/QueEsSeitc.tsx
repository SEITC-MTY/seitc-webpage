// DRAFT: pendiente de confirmación oficial de Iván.
// Los 5 pilares están tomados VERBATIM de la junta fundacional de la mesa
// (palabras de Juan Antonio, presidencia) — no editar sin confirmación.
const pilares = [
  {
    n: '01',
    titulo: 'Comunidad ITC unida',
    texto: 'Generar una comunidad ITC unida.',
  },
  {
    n: '02',
    titulo: 'Rigor técnico',
    texto: 'Elevar el rigor técnico de los eventos.',
  },
  {
    n: '03',
    titulo: 'Conexión con la industria',
    texto: 'Conectar a los estudiantes con empresas y organizaciones que impulsen su futuro profesional.',
  },
  {
    n: '04',
    titulo: 'Proyectos de valor',
    texto: 'Crear proyectos de valor con impacto real.',
  },
  {
    n: '05',
    titulo: 'Impacto social',
    texto: 'Generar impacto social.',
  },
];

export default function QueEsSeitc() {
  return (
    <section id="que-es-seitc" className="bg-navy-900 border-y border-hielo/10 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-14 lg:gap-20">

          {/* Columna izquierda: qué es */}
          <div data-aos="fade-up">
            <p className="kicker mb-5">{'[01] // qué es seitc'}</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-hielo leading-tight tracking-tight">
              El grupo estudiantil de la carrera<span className="text-azul">.</span>
            </h2>
            <p className="mt-6 text-niebla text-lg leading-relaxed">
              SEITC es la sociedad de alumnos de Ingeniería en Tecnologías
              Computacionales del Tecnológico de Monterrey, Campus Monterrey:
              el punto de encuentro de la carrera con su comunidad, su industria
              y sus proyectos.
            </p>
            <p className="mt-4 font-mono text-[11px] tracking-[0.2em] uppercase text-bruma">
              {'>'} dirigida por estudiantes, para estudiantes
            </p>
          </div>

          {/* Columna derecha: propósito (borrador de la junta fundacional) */}
          {/* DRAFT: pendiente de confirmación oficial de Iván — texto tomado
              verbatim de la junta fundacional de la mesa (Juan Antonio, presidencia). */}
          <div>
            <p className="kicker mb-6" data-aos="fade-up">{'[02] // nuestro propósito'}</p>
            <ol className="flex flex-col">
              {pilares.map((p, i) => (
                <li
                  key={p.n}
                  className="group grid grid-cols-[auto_1fr] gap-5 md:gap-8 py-5 border-b border-hielo/10 first:border-t"
                  data-aos="fade-up"
                  data-aos-delay={i * 70}
                >
                  <span className="font-mono text-sm text-azul pt-1.5 tracking-widest">{p.n}</span>
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-semibold text-hielo group-hover:text-azul-bright transition-colors duration-200">
                      {p.titulo}
                    </h3>
                    <p className="text-niebla leading-relaxed mt-1.5">{p.texto}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
