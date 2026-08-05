import type { Metadata } from "next";
import Integrantes from "seitc/app/components/integrantes/Integrantes";

export const metadata: Metadata = {
  title: "Integrantes",
  description:
    "La mesa directiva de SEITC en la gestión 2026-2027: Juan Antonio Rodríguez Reyna (Presidencia), Iván Gabriel Espinosa García (Vicepresidencia), Armando Javier Flores Salazar (Dirección de Proyectos) y el resto del equipo, junto con las gestiones anteriores.",
  keywords: [
    "mesa directiva SEITC",
    "Juan Antonio Rodríguez Reyna",
    "Iván Gabriel Espinosa García",
    "Armando Javier Flores Salazar",
    "Mariano Guerrero Flores",
    "Director de Proyectos",
    "SEITC Tec de Monterrey",
  ],
  openGraph: {
    title: "Integrantes | SEITC",
    description:
      "Conoce a la mesa directiva 2026-2027 de la Sociedad de Estudiantes de Ingeniería en Tecnologías Computacionales.",
  },
};

/* Perfil estructurado del Director de Proyectos (autor y responsable del sitio),
   enlazado con sus otros proyectos públicos. */
const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://seitc.com.mx/#armando-flores",
  name: "Armando Javier Flores Salazar",
  jobTitle: "Director de Proyectos",
  memberOf: {
    "@type": "Organization",
    name: "SEITC, Sociedad de Estudiantes de Ingeniería en Tecnologías Computacionales",
    url: "https://seitc.com.mx",
  },
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "Tecnológico de Monterrey, Campus Monterrey",
  },
  url: "https://auctorum.com.mx/about",
  sameAs: [
    "https://auctorum.com.mx",
    "https://auctorum.com.mx/about",
    "https://github.com/cocopsn",
  ],
};

export default function IntegrantesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }}
      />
      <Integrantes />
    </>
  );
}
