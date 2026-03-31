"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Integrante {
  nombre: string;
  puesto: string;
}

interface Periodo {
  id: string;
  titulo: string;
  subtitulo: string;
  integrantes: Integrante[];
}

const periodos: Periodo[] = [
  {
    id: "2025-2026",
    titulo: "AGOSTO 2025 - JULIO 2026",
    subtitulo: "AGOSTO 2025 - JULIO 2026",
    integrantes: [
      { nombre: "Diego García", puesto: "Presidente" },
      { nombre: "Marcelo Sias", puesto: "Vicepresidente" },
      { nombre: "Emily Castillo", puesto: "Directora de Responsabilidad Social" },
      { nombre: "Oliver Vazquez", puesto: "Director de Marketing" },
      { nombre: "Barbara Martínez", puesto: "Directora de Finanzas" },
      { nombre: "Alejandra Coeto", puesto: "Directora de Tecnología" },
      { nombre: "Javier Castillo", puesto: "Director de Vinculación" },
      { nombre: "Grecia Saucedo", puesto: "Directora de Proyectos" },
    ],
  },
  {
    id: "2024-2025",
    titulo: "AGOSTO 2024 - JULIO 2025",
    subtitulo: "AGOSTO 2024 - JULIO 2025",
    integrantes: [
      { nombre: "Jose Guerrero", puesto: "Presidente" },
      { nombre: "Felipe Alonzo", puesto: "Vicepresidente" },
      { nombre: "Brenda Sofia", puesto: "Directora de Marketing" },
      { nombre: "Alejandra Nuñez", puesto: "Directora de Finanzas" },
      { nombre: "Regina Cavazos", puesto: "Directora de Proyectos" },
      { nombre: "Andres Quintanar", puesto: "Director de Responsabilidad Social" },
    ],
  },
];

export default function Integrantes() {
  const [openId, setOpenId] = useState<string | null>(periodos[0].id);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0a0e2e] via-[#0d1a5c] to-[#1a2a7a] pt-28 pb-20 px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
          INTEGRANTES
        </h1>
        <p className="text-white/70 text-base md:text-lg">
          Conoce a las personas que han formado parte de nuestra comunidad
        </p>
        <div className="mt-4 mx-auto w-24 h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      </div>

      {/* Accordion Cards */}
      <div className="max-w-3xl mx-auto flex flex-col gap-4 mb-8">
        {periodos.map((periodo) => {
          const isOpen = openId === periodo.id;
          return (
            <div
              key={periodo.id}
              className="rounded-2xl overflow-hidden border border-white/40 shadow-md"
            >
              {/* Card Header*/}
              <button
                className="w-full flex items-center justify-between px-6 py-5 bg-gradient-to-r from-[#0d1a5c] to-[#1a3a8a] hover:from-[#102070] hover:to-[#1e45a0] transition-all duration-300 cursor-pointer"
                onClick={() => toggle(periodo.id)}
                aria-expanded={isOpen}
              >
                <div className="text-left">
                  <p className="text-white font-extrabold text-lg md:text-xl tracking-wide">
                    {periodo.titulo}
                  </p>
                  <p className="text-white/50 text-xs mt-0.5 font-medium tracking-wider">
                    {periodo.subtitulo}
                  </p>
                </div>
                <ChevronDown
                  className={`text-white/70 w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              {/* Accordion Body */}
              <div
                className={`bg-white transition-all duration-500 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 py-8">
                <div className="flex flex-col gap-6">
                    {Array.from({ length: Math.ceil(periodo.integrantes.length / 4) }, (_, rowIdx) =>
                      periodo.integrantes.slice(rowIdx * 4, rowIdx * 4 + 4)
                    ).map((fila, rowIdx) => (
                      <div key={rowIdx} className="flex justify-center gap-6 w-full">
                        {fila.map((integrante, idx) => (
                          <div
                            key={idx}
                            className="flex flex-col items-center text-center gap-2"
                            style={{ width: "calc(25% - 18px)" }}
                          >
                            {/* Avatar placeholder*/}
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 border-2 border-blue-900/30 flex items-center justify-center flex-shrink-0">
                              <span className="text-blue-900 font-bold text-lg">
                                {integrante.nombre
                                  .split(" ")
                                  .slice(0, 2)
                                  .map((n) => n[0])
                                  .join("")}
                              </span>
                            </div>
                            <div>
                              <p className="font-bold text-gray-900 text-sm leading-tight">
                                {integrante.nombre}
                              </p>
                              <p className="text-gray-500 text-xs mt-0.5 leading-tight">
                                {integrante.puesto}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Card */}
      <div className="max-w-3xl mx-auto">
        <div className="bg-white/95 rounded-2xl shadow-lg px-8 py-8 flex flex-col items-center text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-1">
            ¿Quieres formar parte de{" "}
            <span className="text-blue-700">SEITC</span>?
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Únete a nuestra comunidad e impulsa tu carrera en tecnología
          </p>
          <a
            href="https://chat.whatsapp.com/Ejj8hsLdqlXAuHBHQ9bJVG"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl px-8 py-4 font-semibold text-white text-base bg-gradient-to-r from-[#0C2748] via-[#0C3A6A] to-[#0B89D0] shadow-[0_10px_30px_rgba(14,113,200,.35)] hover:brightness-110 transition-all"
          >
            Únete ahora
          </a>
        </div>
      </div>
    </section>
  );
}