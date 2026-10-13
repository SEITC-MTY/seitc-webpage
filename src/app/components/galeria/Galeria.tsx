import Album from './Album';
import { albumes } from './galeriaData';

export default function Galeria() {
  const total = albumes.reduce((n, a) => n + a.fotos.length, 0);

  return (
    <section className="bg-white pt-36 pb-24 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="etiqueta mb-3">Archivo fotográfico</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-tinta tracking-tight">Galería</h1>
          <p className="text-texto-suave text-lg max-w-2xl mt-4 leading-relaxed">
            Un recorrido por lo que hemos hecho este semestre: {albumes.length} eventos y {total} fotografías,
            en orden cronológico.
          </p>
          <nav aria-label="Álbumes" className="flex flex-wrap gap-x-5 gap-y-2 mt-6 text-sm">
            {albumes.map((a) => (
              <a
                key={a.id}
                href={`#${a.id}`}
                className="font-semibold text-azul-oscuro hover:underline underline-offset-4"
              >
                {a.titulo}
              </a>
            ))}
          </nav>
        </div>

        {albumes.map((album) => (
          <Album key={album.id} album={album} />
        ))}
      </div>
    </section>
  );
}
