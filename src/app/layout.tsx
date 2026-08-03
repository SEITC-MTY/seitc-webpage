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

export const metadata: Metadata = {
  title: {
    default: "SEITC | Sociedad de Estudiantes de ITC, Tec de Monterrey",
    template: "%s | SEITC",
  },
  description:
    "Sociedad de Estudiantes de Ingeniería en Tecnologías Computacionales del Tecnológico de Monterrey, Campus Monterrey.",
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
      <body suppressHydrationWarning className={`${archivo.variable} antialiased bg-white`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
