import type { Metadata } from "next";
import { Archivo, Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./_components/UI/footer/Footer";
import Navbar from "./_components/UI/navbar/Navbar";
import AOSProvider from "./_components/AOSProvider";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SEITC — Sociedad de Estudiantes de ITC · Tec de Monterrey",
    template: "%s · SEITC",
  },
  description:
    "Sociedad de Estudiantes de Ingeniería en Tecnologías Computacionales del Tecnológico de Monterrey, Campus Monterrey. Comunidad, rigor técnico y conexión con la industria.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        suppressHydrationWarning
        className={`${archivo.variable} ${bricolage.variable} ${jetbrains.variable} antialiased bg-navy-950 text-hielo`}
      >
        <AOSProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </AOSProvider>
      </body>
    </html>
  );
}
