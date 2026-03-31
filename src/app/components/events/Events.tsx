'use client';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import type { Evento } from './types';
import { eventos, SEMESTRE_LABELS } from './eventsData';
import { EventCard } from './EventCard';
import { EventDialog } from './EventDialog';

const SEMESTRES = Array.from(new Set(eventos.map(e => e.semestre)));

export default function Events() {
    const [selectedEvento, setSelectedEvento]     = useState<Evento | null>(null);
    const [selectedSemestre, setSelectedSemestre] = useState<string>('FJ26');

    useEffect(() => {
        AOS.init({ duration: 800, easing: 'ease-out-cubic', once: true, offset: 80 });
    }, []);

    // Refresh animations when the semester tab changes
    useEffect(() => { AOS.refresh(); }, [selectedSemestre]);

    const eventosFiltrados = eventos.filter(e => e.semestre === selectedSemestre);

    return (
        <>
            <section className="py-20 bg-blue-900 min-h-screen">

                {/* ── Page header ─────────────────────────────────────────── */}
                <div className="text-center pt-12 pb-4 px-4" data-aos="fade-down">
                    <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                        EVENTOS
                    </h1>
                    <p className="text-white/50 text-base md:text-lg max-w-xl mx-auto mt-3">
                        Descubre todas las oportunidades de aprendizaje y networking que tenemos para ti
                    </p>
                    <div className="w-32 h-px bg-white/20 mx-auto mt-6" />
                </div>

                {/* ── Semester tab switcher ────────────────────────────────── */}
                <div className="flex justify-center items-end gap-10 md:gap-20 px-4 mt-10 mb-4">
                    {SEMESTRES.map(sem => {
                        const active = sem === selectedSemestre;
                        return (
                            <button
                                key={sem}
                                onClick={() => setSelectedSemestre(sem)}
                                className={`group flex flex-col items-center transition-all duration-300 focus:outline-none ${
                                    active ? 'cursor-default' : 'cursor-pointer'
                                }`}
                            >
                                <span
                                    className={`font-black tracking-tight leading-none transition-all duration-300 select-none
                                        text-[clamp(2.5rem,9vw,5.5rem)]
                                        ${active
                                            ? 'text-white'
                                            : 'text-white/25 hover:text-white/50'
                                        }`}
                                >
                                    {sem}
                                </span>
                                {/* Active underline */}
                                <span
                                    className={`block h-px mt-2 transition-all duration-300 ${
                                        active ? 'w-full bg-white/60' : 'w-0 bg-transparent'
                                    }`}
                                />
                            </button>
                        );
                    })}
                </div>

                {/* Semester subtitle */}
                <p className="text-center text-white/35 text-[11px] uppercase tracking-[0.3em] mb-14 font-medium">
                    {SEMESTRE_LABELS[selectedSemestre]}
                </p>

                {/* ── Timeline ─────────────────────────────────────────────── */}
                <div className="relative max-w-5xl mx-auto px-4 sm:px-6 md:px-8">

                    {/* Center line — desktop */}
                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/15" />

                    {/* Left line — mobile */}
                    <div className="md:hidden absolute left-[1.25rem] top-0 bottom-0 w-px bg-white/15" />

                    <div className="flex flex-col gap-14 md:gap-16">
                        {eventosFiltrados.map((evento, index) => {
                            const isLeft = index % 2 === 0;
                            const anim   = isLeft ? 'fade-right' : 'fade-left';

                            return (
                                <div key={evento.id} className="relative" data-aos={anim}>

                                    {/* Mobile: left-indented single column */}
                                    <div className="md:hidden pl-12 relative">
                                        <div className="absolute left-[0.85rem] top-5 w-4 h-4 rounded-full bg-white border-4 border-blue-900 z-10 shadow" />
                                        <EventCard
                                            evento={evento}
                                            onClick={() => setSelectedEvento(evento)}
                                        />
                                    </div>

                                    {/* Desktop: alternating timeline */}
                                    <div className="hidden md:flex items-start">
                                        <div className="w-1/2 pr-10 flex justify-end">
                                            {isLeft && (
                                                <EventCard
                                                    evento={evento}
                                                    onClick={() => setSelectedEvento(evento)}
                                                />
                                            )}
                                        </div>
                                        {/* Center dot */}
                                        <div className="absolute left-1/2 -translate-x-1/2 top-5 w-4 h-4 rounded-full bg-white border-4 border-blue-900 z-10 shadow-md" />
                                        <div className="w-1/2 pl-10">
                                            {!isLeft && (
                                                <EventCard
                                                    evento={evento}
                                                    onClick={() => setSelectedEvento(evento)}
                                                />
                                            )}
                                        </div>
                                    </div>

                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <EventDialog
                evento={selectedEvento}
                onClose={() => setSelectedEvento(null)}
            />
        </>
    );
}