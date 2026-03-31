"use client";

import { useState } from "react";
import { ChevronDown, Clock, MapPin, Calendar, User } from "lucide-react";

interface Ponente {
  nombre: string;
  cargo: string;
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
    horaFin: "10:30",
    titulo: "Título del Panel 1",
    ubicacion: "Auditorio Principal",
    tags: ["Tag 1", "Tag 2"],
    descripcion:
      "Descripción breve del panel. Aquí se explica de qué trata la sesión, cuáles son los temas principales que se abordarán y qué aprenderá el asistente al participar.",
    ponentes: [
      { nombre: "Nombre Ponente", cargo: "Cargo — Empresa" },
      { nombre: "Nombre Ponente", cargo: "Cargo — Empresa" },
    ],
  },
  {
    id: "panel-2",
    horaInicio: "11:00",
    horaFin: "12:30",
    titulo: "Título del Panel 2",
    ubicacion: "Sala de Conferencias A",
    tags: ["Tag 1", "Tag 2"],
    descripcion:
      "Descripción breve del panel. Aquí se explica de qué trata la sesión, cuáles son los temas principales que se abordarán y qué aprenderá el asistente al participar.",
    ponentes: [
      { nombre: "Nombre Ponente", cargo: "Cargo — Empresa" },
    ],
  },
  {
    id: "panel-3",
    horaInicio: "13:30",
    horaFin: "15:00",
    titulo: "Título del Panel 3",
    ubicacion: "Aula Magna",
    tags: ["Tag 1"],
    descripcion:
      "Descripción breve del panel. Aquí se explica de qué trata la sesión, cuáles son los temas principales que se abordarán y qué aprenderá el asistente al participar.",
    ponentes: [
      { nombre: "Nombre Ponente", cargo: "Cargo — Empresa" },
      { nombre: "Nombre Ponente", cargo: "Cargo — Empresa" },
      { nombre: "Nombre Ponente", cargo: "Cargo — Empresa" },
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
        <div className="bg-white rounded-2xl shadow-md px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <p className="text-gray-900 font-bold text-lg">{INFO_CONGRESO.titulo}</p>
            <div className="flex items-center gap-1.5 text-gray-500 text-sm mt-1">
              <Calendar className="w-4 h-4" />
              <span>{INFO_CONGRESO.fecha}</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-gray-400 text-sm">
            <MapPin className="w-4 h-4 flex-shrink-0" />
            <span>{INFO_CONGRESO.ubicacion}</span>
          </div>
        </div>

        {/* Agenda */}
        <h2 className="text-white font-bold text-2xl -mb-2">Agenda del Día</h2>

        {paneles.map((panel, panelIdx) => {
          const isOpen = openId === panel.id;
          return (
            <div
              key={panel.id}
              className="rounded-2xl overflow-hidden border border-white/40 shadow-md"
            >
              {/* Header del acordeón */}
              <button
                className="w-full text-left px-6 py-5 bg-gradient-to-r from-[#1a3560] to-[#2a5888] hover:from-[#20406e] hover:to-[#326498] transition-all duration-300"
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
                <p className="text-white font-bold text-lg leading-snug">
                  {panel.titulo}
                </p>

                {/* Fila 3: ubicación */}
                <p className="text-white/50 text-sm mt-1 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {panel.ubicacion}
                </p>
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
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                              <User className="w-4 h-4 text-blue-700" />
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

                  {/* Detalles rápidos */}
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
    </section>
  );
}