'use client';
import { useState } from 'react';
import Link from 'next/link';

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
    const porRealizar = eventosFiltrados.filter((e) => e.estado === 'proximo');
    const realizados = eventosFiltrados
        .filter((e) => e.estado === 'pasado')
        .sort((a, b) => (b.fechaISO ?? '').localeCompare(a.fechaISO ?? ''));

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

                    {selectedSemestre === 'AD25' && <div className="mt-6 mb-4" />}

                    {/* Agenda */}
                    {selectedSemestre === 'AD25' ? (
                        <div>
                            {eventosFiltrados.map((evento) => (
                                <AgendaRow
                                    key={evento.id}
                                    evento={evento}
                                    onClick={() => setSelectedEvento(evento)}
                                />
                            ))}
                        </div>
                    ) : (
                        <>
                            {porRealizar.length > 0 && (
                                <div className="mt-8">
                                    <h2 className="text-xl font-extrabold text-tinta">Próximos</h2>
                                    <p className="text-sm text-texto-suave mt-1 mb-2">
                                        Las fechas se confirman en junta de mesa y este calendario se actualiza
                                        conforme cada evento queda confirmado.
                                    </p>
                                    {porRealizar.map((evento) => (
                                        <AgendaRow
                                            key={evento.id}
                                            evento={evento}
                                            onClick={() => setSelectedEvento(evento)}
                                        />
                                    ))}
                                </div>
                            )}
                            {realizados.length > 0 && (
                                <div className="mt-12">
                                    <h2 className="text-xl font-extrabold text-tinta">Ya realizados</h2>
                                    <p className="text-sm text-texto-suave mt-1 mb-2">
                                        Lo que ha pasado este semestre. Las fotos están en la{' '}
                                        <Link href="/galeria" className="font-semibold text-azul-oscuro underline underline-offset-4">
                                            galería
                                        </Link>
                                        .
                                    </p>
                                    {realizados.map((evento) => (
                                        <AgendaRow
                                            key={evento.id}
                                            evento={evento}
                                            onClick={() => setSelectedEvento(evento)}
                                        />
                                    ))}
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>

            <EventDialog evento={selectedEvento} onClose={() => setSelectedEvento(null)} />
        </>
    );
}
