"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Clock, MapPin, Calendar, User } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

interface Ponente {
  nombre: string;
  cargo: string;
  foto?: string;
}

interface Panel {
  id: string;
  horaInicio: string;
  horaFin: string;
  titulo: string;
  ubicacion: string;
  tags: string[];
  descripcion: string;
  ponentes: Ponente[];
  logoEmpresa?: string;
}


const INFO_CONGRESO = {
  titulo: "Congreso SEITC 2026",
  fecha: "9 de Abril, 2026",
  ubicacion: "Campus Monterrey",
};

const paneles: Panel[] = [
  {
    id: "panel-1",
    horaInicio: "09:00",
    horaFin: "10:00",
    titulo: "Available",
    ubicacion: "Campus Monterrey",
    // Add as many tags are required "Tag 1", "Tag2"...
    tags: ["Tag 1"],
    descripcion:
      "Description",
    ponentes: [
      { nombre: "Nombre Ponente", cargo: "Cargo — Empresa" },
    ],
  },
  {
    id: "panel-2",
    horaInicio: "10:00",
    horaFin: "11:00",
    titulo: "Machine Learning & AI Director at Banregio",
    ubicacion: "Campus Monterrey",
    tags: ["Machine Learning", "Artificial Intelligence"],
    descripcion:
      "Explora cómo el machine learning y la inteligencia artificial están transformando la industria financiera.",
    ponentes: [
      { nombre: "Gabriel Macias", cargo: "Banregio", foto: "/congreso/ponentes/GabrielMacias.jpeg" },
    ],
    logoEmpresa: "/congreso/ponentes/empresas/banregio.png",
  },
  {
    id: "panel-3",
    horaInicio: "11:00",
    horaFin: "12:00",
    titulo: "Data & AI Technical Specialist at IBM México",
    ubicacion: "Campus Monterrey",
    tags: ["Data Science", "Artificial Intelligence"],
    descripcion:
      "Explora cómo la ciencia de datos y la inteligencia artificial impulsan la innovación, el análisis avanzado y la creación de soluciones basadas en datos.",
    ponentes: [
      { nombre: "Arnulfo Cavazos", cargo: "IBM México", foto:"/congreso/ponentes/ArnulfoCavazos.jpeg" },
    ],
    logoEmpresa: "/congreso/ponentes/empresas/ibm.png",
  },
  {
    id: "panel-4",
    horaInicio: "12:00",
    horaFin: "13:00",
    titulo: "Available",
    ubicacion: "Campus Monterrey",
    // Add as many tags are required "Tag 1", "Tag2"...
    tags: ["Tag 1"],
    descripcion:
      "Description",
    ponentes: [
      { nombre: "Nombre Ponente", cargo: "Cargo — Empresa" },
    ],
  },
  {
    id: "panel-5",
    horaInicio: "13:00",
    horaFin: "14:00",
    titulo: "Data Analytics & AI Solutions Engineer at Snowflake",
    ubicacion: "Campus Monterrey",
    // Add as many tags are required "Tag 1", "Tag2"...
    tags: ["Data Analytics", "Artificial Intelligence", "AI Solutions"],
    descripcion:
      "Aprende cómo los datos y la inteligencia artificial pueden integrarse para resolver problemas complejos, identificar oportunidades y construir soluciones con impacto real.",
    ponentes: [
      { nombre: "Rodolfo Flores", cargo: "Snowflake", foto: "/congreso/ponentes/RodolfoFlores.jpeg" },
    ],
    logoEmpresa: "/congreso/ponentes/empresas/snowflake.png",
  },
  {
    id: "panel-6",
    horaInicio: "14:00",
    horaFin: "15:00",
    titulo: "NVIDIA Campus Ambassador",
    ubicacion: "Campus Monterrey",
    // Add as many tags are required "Tag 1", "Tag2"...
    tags: ["Edge Computing", "Artificial Intelligence", "Community"],
    descripcion:
      "Una sesión enfocada en el ecosistema de NVIDIA, las tecnologías Edge y la experiencia detrás de un reciente hackathon, explorando cómo estas herramientas impulsan la innovación y el desarrollo de soluciones tecnológicas.",
    ponentes: [
      { nombre: "Alberto Muñoz", cargo: "NVIDIA Ambassador", foto:"/congreso/ponentes/AlbertoMunoz.jpeg" },
    ],
    logoEmpresa: "/congreso/ponentes/empresas/nvidia.png",
  },
  {
    id: "panel-7",
    horaInicio: "15:00",
    horaFin: "16:00",
    titulo: "Available",
    ubicacion: "Campus Monterrey",
    // Add as many tags are required "Tag 1", "Tag2"...
    tags: ["Tag 1"],
    descripcion:
      "Description",
    ponentes: [
      { nombre: "Nombre", cargo: "Cargo" },
    ],
  },
];


const TAG_COLORS = [
  "bg-yellow-200 text-yellow-800",
  "bg-blue-200 text-blue-800",
  "bg-green-200 text-green-800",
  "bg-purple-200 text-purple-800",
  "bg-pink-200 text-pink-800",
];


export default function Congreso() {
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    AOS.init({ duration: 700, easing: "ease-out-cubic", once: true, offset: 80 });
  }, []);

  const toggle = (id: string) =>
    setOpenId((prev) => (prev === id ? null : id));

  return (
    <section className="min-h-screen bg-gradient-to-r from-[#0a1628] to-[#1a3a5c] pt-28 pb-20 px-4">

      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
          CONGRESO SEITC
        </h1>
        <p className="text-white/70 text-base md:text-lg max-w-xl mx-auto">
          Descubre las conferencias y paneles de discusión con expertos en
          diferentes áreas de la ingeniería
        </p>
        <div className="flex justify-center mt-6">
          <div className="w-150 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
        </div>
      </div>

      <div className="max-w-3xl mx-auto flex flex-col gap-6">

        {/* Info card del evento */}
        <div data-aos="fade-up" data-aos-delay="100" className="bg-white rounded-2xl shadow-md px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-gray-900 font-bold text-lg">{INFO_CONGRESO.titulo}</p>
            <div className="flex items-center gap-1.5 text-gray-500 text-sm mt-1">
              <Calendar className="w-4 h-4" />
              <span>{INFO_CONGRESO.fecha}</span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-400 text-sm mt-1">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span>{INFO_CONGRESO.ubicacion}</span>
            </div>
          </div>
          <a
            href="https://forms.gle/SeGtaisEyAimsPWe7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 font-semibold text-white text-sm bg-gradient-to-r from-[#0C2748] via-[#0C3A6A] to-[#0B89D0] shadow-[0_8px_24px_rgba(14,113,200,.35)] hover:brightness-110 transition-all whitespace-nowrap flex-shrink-0"
          >
            Registrarse
          </a>
        </div>

        {/* Agenda */}
        <h2 data-aos="fade-up" data-aos-delay="150" className="text-white font-bold text-2xl -mb-2">Agenda del Día</h2>

        {paneles.map((panel, panelIdx) => {
          const isOpen = openId === panel.id;
          return (
            <div
              key={panel.id}
              data-aos="fade-up"
              data-aos-delay={200 + panelIdx * 100}
              className="rounded-2xl overflow-hidden border border-white/40 shadow-md"
            >
              {/* Header del acordeón */}
              <button
                className="relative w-full text-left px-6 py-5 bg-gradient-to-r from-[#1a3560] to-[#2a5888] hover:from-[#20406e] hover:to-[#326498] transition-all duration-300"
                onClick={() => toggle(panel.id)}
                aria-expanded={isOpen}
              >
                {/* Fila 1: hora + tags + chevron */}
                <div className="flex items-center justify-between gap-3 mb-2">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="flex items-center gap-1 text-white/70 text-sm font-medium">
                      <Clock className="w-4 h-4" />
                      {panel.horaInicio} - {panel.horaFin}
                    </span>
                    {panel.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`px-3 py-0.5 rounded-full text-xs font-semibold ${TAG_COLORS[i % TAG_COLORS.length]}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ChevronDown
                    className={`text-white/70 w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </div>

                {/* Fila 2: título */}
                <p className="text-white font-bold text-lg leading-snug pr-28">
                  {panel.titulo}
                </p>

                {/* Fila 3: ubicación */}
                <p className="text-white/50 text-sm mt-1 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {panel.ubicacion}
                </p>

                {/* Logo — absoluto, centrado vertical, a la derecha del chevron */}
                {panel.logoEmpresa && (
                  <img
                    src={panel.logoEmpresa}
                    alt="logo empresa"
                    className="absolute right-16 top-1/2 -translate-y-1/2 h-16 w-auto object-contain rounded-lg opacity-90 pointer-events-none"
                  />
                )}
              </button>

              {/* Cuerpo expandido */}
              <div
                className={`bg-white transition-all duration-500 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 py-6 space-y-5">

                  {/* Descripción */}
                  <div>
                    <h3 className="text-gray-800 font-semibold text-sm uppercase tracking-wide mb-1">
                      Descripción
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {panel.descripcion}
                    </p>
                  </div>

                  {/* Ponentes */}
                  {panel.ponentes.length > 0 && (
                    <div>
                      <h3 className="text-gray-800 font-semibold text-sm uppercase tracking-wide mb-3">
                        Ponentes
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {panel.ponentes.map((ponente, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2.5 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5"
                          >
                            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border border-gray-200">
                              {ponente.foto
                                ? <img src={ponente.foto} alt={ponente.nombre} className="w-full h-full object-cover" />
                                : <div className="w-full h-full bg-blue-100 flex items-center justify-center">
                                    <User className="w-4 h-4 text-blue-700" />
                                  </div>
                              }
                            </div>
                            <div>
                              <p className="text-gray-900 font-semibold text-sm leading-tight">
                                {ponente.nombre}
                              </p>
                              <p className="text-gray-500 text-xs leading-tight">
                                {ponente.cargo}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Detalles */}
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 border-t pt-4">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-blue-500" />
                      {panel.horaInicio} – {panel.horaFin}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-blue-500" />
                      {panel.ubicacion}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Card */}
      <div data-aos="fade-up" data-aos-delay="200" className="max-w-3xl mx-auto mt-8">
        <div className="bg-white/95 rounded-2xl shadow-lg px-8 py-8 flex flex-col items-center text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-1">
            ¿Listo para vivir el{" "}
            <span className="text-blue-700">Congreso SEITC</span>?
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Conecta con la industria y lleva tu carrera al siguiente nivel ¡No te lo pierdas!
          </p>
          <a
            href="https://forms.gle/SeGtaisEyAimsPWe7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl px-8 py-4 font-semibold text-white text-base bg-gradient-to-r from-[#0C2748] via-[#0C3A6A] to-[#0B89D0] shadow-[0_10px_30px_rgba(14,113,200,.35)] hover:brightness-110 transition-all"
          >
            Registrarse al evento
          </a>
        </div>
      </div>
    </section>
  );
}