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

/* Mesa directiva vigente, gestión 2026-2027. */
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

/* Gestiones anteriores, preservadas íntegras. */
const periodosAnteriores: Periodo[] = [
  {
    id: "2025-2026",
    titulo: "Agosto 2025 a julio 2026",
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
    titulo: "Agosto 2024 a julio 2025",
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

/* Tarjeta de integrante. El avatar con iniciales es un marcador de posición:
   se sustituye por la fotografía de cada integrante cuando esté disponible. */
function MemberCard({ integrante }: { integrante: Integrante }) {
  return (
    <div className="flex flex-col items-center text-center gap-3 h-full bg-white border border-linea rounded-lg px-4 py-7">
      <div className="w-20 h-20 rounded-full bg-azul-claro border border-linea flex items-center justify-center">
        <span className="text-azul-oscuro font-bold text-xl">{iniciales(integrante.nombre)}</span>
      </div>
      <div>
        <p className="font-bold text-tinta text-sm leading-snug">{integrante.nombre}</p>
        <p className="text-xs text-texto-suave mt-1.5 leading-relaxed">{integrante.puesto}</p>
      </div>
    </div>
  );
}

export default function Integrantes() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section className="bg-white pt-36 pb-24 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Encabezado */}
        <div className="mb-12">
          <p className="etiqueta mb-3">Mesa directiva</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-tinta tracking-tight">
            Integrantes
          </h1>
          <p className="text-texto-suave text-lg max-w-2xl mt-4 leading-relaxed">
            Las personas que dirigen SEITC en la gestión vigente y quienes
            construyeron la sociedad en gestiones anteriores.
          </p>
        </div>

        {/* Gestión vigente */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-2xl font-extrabold text-tinta">Gestión 2026 a 2027</h2>
            <span className="text-xs font-bold uppercase tracking-wide text-azul-oscuro bg-azul-claro rounded-full px-3 py-1">
              Vigente
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {mesaActual.map((integrante) => (
              <MemberCard key={integrante.nombre} integrante={integrante} />
            ))}
          </div>
        </div>

        {/* Gestiones anteriores */}
        <div>
          <h2 className="text-2xl font-extrabold text-tinta mb-6">Gestiones anteriores</h2>
          <div className="flex flex-col gap-3">
            {periodosAnteriores.map((periodo) => {
              const isOpen = openId === periodo.id;
              return (
                <div key={periodo.id} className="border border-linea rounded-lg overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between px-6 py-4 bg-superficie hover:bg-azul-claro transition-colors duration-150"
                    onClick={() => toggle(periodo.id)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-navy-850">{periodo.titulo}</span>
                    <ChevronDown
                      className={`text-texto-suave w-5 h-5 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-1 px-6 py-5 bg-white">
                      {periodo.integrantes.map((integrante) => (
                        <li
                          key={integrante.nombre}
                          className="flex items-baseline justify-between gap-4 border-b border-linea/70 py-2.5"
                        >
                          <span className="text-tinta text-sm font-semibold">{integrante.nombre}</span>
                          <span className="text-xs text-texto-suave text-right">{integrante.puesto}</span>
                        </li>
                      ))}
                    </ul>
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
