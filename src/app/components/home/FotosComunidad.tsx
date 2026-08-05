import Image from 'next/image';

/* Fotografías reales de la comunidad (archivo histórico del repositorio). */
const fotos = [
  {
    src: '/assets/legacy/viaje-nyc-2025/columbia-university.jpg',
    alt: 'Estudiantes de SEITC durante el viaje académico en Columbia University',
  },
  {
    src: '/assets/legacy/viaje-nyc-2025/oficina-microsoft-01.jpg',
    alt: 'Visita de SEITC a las oficinas de Microsoft en Nueva York',
  },
  {
    src: '/assets/legacy/eventos/prep2intern-2024-duolingo.jpg',
    alt: 'Charla Prep2Intern con un estudiante que hizo internship en Duolingo',
  },
  {
    src: '/assets/legacy/viaje-nyc-2025/oficina-meta-01.jpg',
    alt: 'Visita de SEITC a las oficinas de Meta en Nueva York',
  },
  {
    src: '/assets/legacy/eventos/itc-talks-oracle-2025.jpg',
    alt: 'Sesión de ITC Talks con Oracle en el campus',
  },
  {
    src: '/assets/legacy/viaje-nyc-2025/oficina-mongodb-01.jpg',
    alt: 'Visita de SEITC a las oficinas de MongoDB en Nueva York',
  },
];

export default function FotosComunidad() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <p className="etiqueta mb-3">La comunidad</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-tinta leading-tight tracking-tight">
            Del campus a la industria
          </h2>
          <p className="mt-4 text-texto-suave text-lg leading-relaxed">
            Talleres, charlas con empresas y viajes académicos. Esto es parte de
            lo que la comunidad ITC ha vivido con SEITC.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {fotos.map((foto) => (
            <div key={foto.src} className="relative aspect-[3/2] rounded-lg overflow-hidden border border-linea">
              <Image
                src={foto.src}
                alt={foto.alt}
                fill
                sizes="(min-width: 1024px) 33vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
