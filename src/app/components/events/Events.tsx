'use client';
import { useState } from 'react';

import type { Evento, Semestre } from './types';
import { eventos, SEMESTRE_LABELS } from './eventsData';
import { EventCard } from './EventCard';
import { EventDialog } from './EventDialog';

const SEMESTRES: Semestre[] = ['AD26', 'AD25'];

export default function Events() {
    const [selectedEvento, setSelectedEvento] = useState<Evento | null>(null);
    const [selectedSemestre, setSelectedSemestre] = useState<Semestre>('AD26');

    const eventosFiltrados = eventos.filter((e) => e.semestre === selectedSemestre);

    return (
        <>
            <section className="min-h-screen bg-navy-950 pt-32 pb-24 grid-blueprint">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* ── Encabezado ── */}
                    <div className="mb-14" data-aos="fade-up">
                        <p className="kicker mb-4">{'// calendario de la sociedad'}</p>
                        <h1 className="font-display text-5xl md:text-7xl font-bold text-hielo tracking-tight">
                            Eventos
                        </h1>
                        <p className="text-niebla text-base md:text-lg max-w-2xl mt-4 leading-relaxed">
                            Talleres, charlas con la industria y comunidad — todo lo que SEITC
                            organiza para la carrera, semestre por semestre.
                        </p>
                    </div>

                    {/* ── Switcher de semestre ── */}
                    <div className="flex items-end gap-8 md:gap-12 mb-4" data-aos="fade-up">
                        {SEMESTRES.map((sem) => {
                            const active = sem === selectedSemestre;
                            return (
                                <button
                                    key={sem}
                                    onClick={() => setSelectedSemestre(sem)}
                                    className={`group flex flex-col items-start transition-colors duration-300 ${
                                        active ? 'cursor-default' : 'cursor-pointer'
                                    }`}
                                >
                                    <span
                                        className={`font-display font-bold tracking-tight leading-none select-none text-[clamp(2.6rem,8vw,4.8rem)] transition-colors duration-300 ${
                                            active ? 'text-azul-bright' : 'text-hielo/20 hover:text-hielo/45'
                                        }`}
                                    >
                                        {sem}
                                    </span>
                                    <span
                                        className={`block h-0.5 mt-3 transition-all duration-300 ${
                                            active ? 'w-full bg-azul' : 'w-0 bg-transparent'
                                        }`}
                                    />
                                </button>
                            );
                        })}
                    </div>

                    <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-bruma mb-6">
                        {SEMESTRE_LABELS[selectedSemestre]}
                        {selectedSemestre === 'AD25' && ' · historial'}
                    </p>

                    {/* Nota de honestidad para el semestre próximo */}
                    {selectedSemestre === 'AD26' && (
                        <p
                            className="font-mono text-[11px] leading-relaxed tracking-wider text-niebla border-l-2 border-azul pl-4 py-1 mb-12 max-w-2xl"
                            data-aos="fade-up"
                        >
                            Las fechas marcadas «por confirmar» se definen en junta de mesa;
                            este calendario se actualiza conforme se confirmen.
                        </p>
                    )}
                    {selectedSemestre === 'AD25' && <div className="mb-12" />}

                    {/* ── Grid de eventos ── */}
                    <div className="grid md:grid-cols-2 gap-5">
                        {eventosFiltrados.map((evento, index) => (
                            <div key={evento.id} data-aos="fade-up" data-aos-delay={Math.min(index * 60, 240)}>
                                <EventCard evento={evento} onClick={() => setSelectedEvento(evento)} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <EventDialog evento={selectedEvento} onClose={() => setSelectedEvento(null)} />
        </>
    );
}
