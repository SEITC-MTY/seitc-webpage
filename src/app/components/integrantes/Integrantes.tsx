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
  integrantes: Integrante[];
}

/* Mesa directiva vigente — roster oficial de la gestión 2026-2027. */
const mesaActual: Integrante[] = [
  { nombre: "Juan Antonio Rodríguez Reyna", puesto: "Presidencia" },
  { nombre: "Iván Gabriel Espinosa García", puesto: "Vicepresidencia" },
  { nombre: "Armando Javier Flores Salazar", puesto: "Dirección de Proyectos" },
  { nombre: "Mariano Guerrero Flores", puesto: "Dirección de Finanzas" },
  { nombre: "Mario Giovanni González López", puesto: "Dirección de Responsabilidad Social" },
  { nombre: "Ana Elisa Celaya Montalvo", puesto: "Dirección de Comunicación" },
  { nombre: "Daniella Vázquez Esparza", puesto: "Dirección de Vinculación" },
  { nombre: "Leonel Francisco Bailón Sifuentes", puesto: "Dirección de Educación" },
];

/* Gestiones anteriores — se preservan íntegras. */
const periodosAnteriores: Periodo[] = [
  {
    id: "2025-2026",
    titulo: "Agosto 2025 – Julio 2026",
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
    titulo: "Agosto 2024 – Julio 2025",
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

const iniciales = (nombre: string) =>
  nombre
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("");

function MemberCard({ integrante }: { integrante: Integrante }) {
  return (
    <div className="flex flex-col items-center text-center gap-3 bg-navy-900 border border-hielo/10 hover:border-azul/50 transition-colors duration-200 px-4 py-7">
      <div className="w-16 h-16 rounded-full border-2 border-azul bg-navy-850 flex items-center justify-center">
        <span className="font-display text-hielo font-bold text-lg tracking-wide">
          {iniciales(integrante.nombre)}
        </span>
      </div>
      <div>
        <p className="font-semibold text-hielo text-sm leading-snug">{integrante.nombre}</p>
        <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-azul-bright mt-1.5 leading-relaxed">
          {integrante.puesto}
        </p>
      </div>
    </div>
  );
}

export default function Integrantes() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) =>
    setOpenId((prev) => (prev === id ? null : id));

  return (
    <section className="min-h-screen bg-navy-950 grid-blueprint pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Encabezado ── */}
        <div className="mb-14" data-aos="fade-up">
          <p className="kicker mb-4">{'// la mesa directiva'}</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-hielo tracking-tight">
            Integrantes
          </h1>
          <p className="text-niebla text-base md:text-lg max-w-2xl mt-4 leading-relaxed">
            Las personas detrás de SEITC — la gestión vigente y quienes
            construyeron la sociedad antes.
          </p>
        </div>

        {/* ── Gestión 2026-2027 ── */}
        <div className="mb-20" data-aos="fade-up">
          <div className="flex items-baseline justify-between flex-wrap gap-2 mb-6">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-hielo">
              Gestión 2026–2027<span className="text-azul">.</span>
            </h2>
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-azul-bright border border-azul/40 px-2.5 py-1">
              vigente
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {mesaActual.map((integrante, i) => (
              <div key={integrante.nombre} data-aos="fade-up" data-aos-delay={Math.min(i * 50, 250)}>
                <MemberCard integrante={integrante} />
              </div>
            ))}
          </div>
        </div>

        {/* ── Gestiones anteriores ── */}
        <div data-aos="fade-up">
          <p className="kicker mb-6">{'// gestiones anteriores'}</p>
          <div className="flex flex-col gap-3">
            {periodosAnteriores.map((periodo) => {
              const isOpen = openId === periodo.id;
              return (
                <div key={periodo.id} className="border border-hielo/12 bg-navy-900">
                  <button
                    className="w-full flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-navy-850 transition-colors duration-200"
                    onClick={() => toggle(periodo.id)}
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-baseline gap-4 text-left">
                      <span className="font-mono text-xs text-azul-bright">{periodo.id}</span>
                      <span className="font-display text-hielo font-semibold text-base md:text-lg">
                        {periodo.titulo}
                      </span>
                    </span>
                    <ChevronDown
                      className={`text-bruma w-5 h-5 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 border-t border-hielo/10">
                      <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-3">
                        {periodo.integrantes.map((integrante) => (
                          <li key={integrante.nombre} className="flex items-baseline justify-between gap-4 border-b border-hielo/8 pb-2.5">
                            <span className="text-hielo text-sm font-medium">{integrante.nombre}</span>
                            <span className="font-mono text-[10px] tracking-wider uppercase text-bruma text-right">
                              {integrante.puesto}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
