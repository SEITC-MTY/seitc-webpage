import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import Footer from "./_components/UI/footer/Footer";
import Navbar from "./_components/UI/navbar/Navbar";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://seitc.com.mx";
const SITE_DESCRIPTION =
  "Sociedad de Estudiantes de Ingeniería en Tecnologías Computacionales del Tecnológico de Monterrey, Campus Monterrey. Talleres, charlas con la industria y comunidad para la carrera de ITC.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SEITC | Sociedad de Estudiantes de ITC, Tec de Monterrey",
    template: "%s | SEITC",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "SEITC",
    "Sociedad de Estudiantes de Ingeniería en Tecnologías Computacionales",
    "ITC",
    "Ingeniería en Tecnologías Computacionales",
    "Tec de Monterrey",
    "Tecnológico de Monterrey",
    "Campus Monterrey",
    "sociedad de alumnos",
    "grupo estudiantil",
    "Armando Javier Flores Salazar",
  ],
  authors: [
    { name: "SEITC" },
    { name: "Armando Javier Flores Salazar", url: "https://auctorum.com.mx/about" },
  ],
  creator: "Armando Javier Flores Salazar",
  publisher: "SEITC, Tecnológico de Monterrey Campus Monterrey",
  alternates: {
    canonical: "./",
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: SITE_URL,
    siteName: "SEITC",
    title: "SEITC | Sociedad de Estudiantes de ITC, Tec de Monterrey",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/images/Toma-Protesta.jpeg",
        alt: "Mesa directiva de SEITC en la toma de protesta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEITC | Sociedad de Estudiantes de ITC, Tec de Monterrey",
    description: SITE_DESCRIPTION,
    images: ["/images/Toma-Protesta.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

/* Datos estructurados del sitio: la organización (con su mesa directiva) y el
   sitio web. Solo información pública que ya aparece en las páginas. */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organizacion`,
      name: "SEITC",
      alternateName:
        "Sociedad de Estudiantes de Ingeniería en Tecnologías Computacionales",
      url: SITE_URL,
      logo: `${SITE_URL}/images/Logo128x128.png`,
      description: SITE_DESCRIPTION,
      sameAs: [
        "https://www.facebook.com/share/1D97vBEgLj/?mibextid=wwXIfr",
        "https://www.tiktok.com/@seitc.mty",
        "https://www.linkedin.com/company/seitc/",
        "https://www.instagram.com/seitc.mty/",
      ],
      member: [
        { "@type": "Person", name: "Juan Antonio Rodríguez Reyna", jobTitle: "Presidencia" },
        { "@type": "Person", name: "Iván Gabriel Espinosa García", jobTitle: "Vicepresidencia" },
        {
          "@type": "Person",
          "@id": `${SITE_URL}/#armando-flores`,
          name: "Armando Javier Flores Salazar",
          jobTitle: "Director de Proyectos",
          url: "https://auctorum.com.mx/about",
          sameAs: ["https://auctorum.com.mx", "https://github.com/cocopsn"],
        },
        { "@type": "Person", name: "Mariano Guerrero Flores", jobTitle: "Dirección de Finanzas" },
        { "@type": "Person", name: "Mario Giovanni González López", jobTitle: "Dirección de Responsabilidad Social" },
        { "@type": "Person", name: "Ana Elisa Celaya Montalvo", jobTitle: "Dirección de Comunicación" },
        { "@type": "Person", name: "Daniella Vázquez Esparza", jobTitle: "Dirección de Vinculación" },
        { "@type": "Person", name: "Leonel Francisco Bailón Sifuentes", jobTitle: "Dirección de Educación" },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#sitio`,
      url: SITE_URL,
      name: "SEITC",
      inLanguage: "es-MX",
      publisher: { "@id": `${SITE_URL}/#organizacion` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body suppressHydrationWarning className={`${archivo.variable} antialiased bg-white`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
