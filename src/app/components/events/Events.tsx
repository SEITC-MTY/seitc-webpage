'use client';
import { useState } from 'react';

import type { Evento, Semestre } from './types';
import { eventos, SEMESTRE_LABELS } from './eventsData';
import { AgendaRow } from './AgendaRow';
import { EventDialog } from './EventDialog';

const SEMESTRES: { id: Semestre; nombre: string }[] = [
    { id: 'AD26', nombre: 'Semestre actual' },
    { id: 'AD25', nombre: 'Eventos pasados' },
];

export default function Events() {
    const [selectedEvento, setSelectedEvento] = useState<Evento | null>(null);
    const [selectedSemestre, setSelectedSemestre] = useState<Semestre>('AD26');

    const eventosFiltrados = eventos.filter((e) => e.semestre === selectedSemestre);

    return (
        <>
            <section className="bg-white pt-36 pb-24 min-h-screen">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Encabezado */}
                    <div className="mb-10">
                        <p className="etiqueta mb-3">Calendario</p>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-tinta tracking-tight">
                            Eventos
                        </h1>
                        <p className="text-texto-suave text-lg max-w-2xl mt-4 leading-relaxed">
                            Talleres, charlas con la industria y espacios de comunidad que
                            SEITC organiza cada semestre.
                        </p>
                    </div>

                    {/* Selector de semestre */}
                    <div className="flex gap-2 border-b border-linea mb-2">
                        {SEMESTRES.map((sem) => {
                            const active = sem.id === selectedSemestre;
                            return (
                                <button
                                    key={sem.id}
                                    onClick={() => setSelectedSemestre(sem.id)}
                                    className={`px-4 py-3 text-sm font-semibold border-b-2 -mb-px transition-colors duration-150 ${
                                        active
                                            ? 'text-azul-oscuro border-azul'
                                            : 'text-texto-suave border-transparent hover:text-navy-850'
                                    }`}
                                >
                                    {sem.nombre}
                                    <span className="hidden sm:inline">, {SEMESTRE_LABELS[sem.id].toLowerCase()}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Aviso del semestre próximo */}
                    {selectedSemestre === 'AD26' && (
                        <p className="text-sm text-texto-suave bg-superficie border border-linea rounded-md px-4 py-3 mt-6 mb-4">
                            Las fechas se confirman en junta de mesa. Este calendario se
                            actualiza conforme cada evento queda confirmado.
                        </p>
                    )}
                    {selectedSemestre === 'AD25' && <div className="mt-6 mb-4" />}

                    {/* Agenda */}
                    <div>
                        {eventosFiltrados.map((evento) => (
                            <AgendaRow
                                key={evento.id}
                                evento={evento}
                                onClick={() => setSelectedEvento(evento)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <EventDialog evento={selectedEvento} onClose={() => setSelectedEvento(null)} />
        </>
    );
}
