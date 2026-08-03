// DRAFT: pendiente de confirmación oficial de Iván.
// Los cinco puntos del propósito están tomados textualmente de la junta
// fundacional de la mesa (palabras de la presidencia). No editar sin confirmar.
const propositos = [
  'Generar una comunidad ITC unida.',
  'Elevar el rigor técnico de los eventos.',
  'Conectar a los estudiantes con empresas y organizaciones que impulsen su futuro profesional.',
  'Crear proyectos de valor con impacto real.',
  'Generar impacto social.',
];

export default function QueEsSeitc() {
  return (
    <section id="que-es-seitc" className="bg-superficie border-y border-linea py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Qué es */}
          <div>
            <p className="etiqueta mb-3">Qué es SEITC</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-tinta leading-tight tracking-tight">
              El grupo estudiantil de la carrera
            </h2>
            <p className="mt-5 text-texto-suave text-lg leading-relaxed">
              SEITC es la sociedad de alumnos de Ingeniería en Tecnologías
              Computacionales del Tecnológico de Monterrey, Campus Monterrey.
              Es el punto de encuentro entre los estudiantes de la carrera, la
              industria y los proyectos que nacen de la comunidad.
            </p>
            <p className="mt-4 text-texto-suave text-lg leading-relaxed">
              La sociedad está dirigida por estudiantes y trabaja cada semestre
              en beneficio de toda la comunidad ITC.
            </p>
          </div>

          {/* Propósito */}
          <div>
            <p className="etiqueta mb-3">Nuestro propósito</p>
            <ul className="mt-2 space-y-4">
              {propositos.map((texto, i) => (
                <li key={i} className="flex items-start gap-4 bg-white border border-linea rounded-lg px-5 py-4">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-azul-claro text-azul-oscuro text-sm font-bold">
                    {i + 1}
                  </span>
                  <p className="text-texto leading-relaxed">{texto}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
