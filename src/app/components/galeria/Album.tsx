'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import type { AlbumGaleria } from './galeriaData';

/**
 * Álbum: encabezado a la izquierda (fecha, título, resumen) y fotografías en
 * columnas que respetan la proporción original. Al abrir una foto se navega
 * con las flechas del teclado y se cierra con Escape.
 */
export default function Album({ album }: { album: AlbumGaleria }) {
  const [abierta, setAbierta] = useState<number | null>(null);
  const total = album.fotos.length;

  const mover = useCallback(
    (d: number) => setAbierta((i) => (i === null ? i : (i + d + total) % total)),
    [total],
  );

  useEffect(() => {
    if (abierta === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setAbierta(null);
      if (e.key === 'ArrowRight') mover(1);
      if (e.key === 'ArrowLeft') mover(-1);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [abierta, mover]);

  const actual = abierta !== null ? album.fotos[abierta] : null;

  return (
    <article
      id={album.id}
      className="grid lg:grid-cols-[260px_1fr] gap-6 lg:gap-12 py-12 border-t border-linea scroll-mt-28"
    >
      <header className="lg:sticky lg:top-28 self-start">
        <p className="etiqueta mb-2">{album.fecha}</p>
        <h2 className="text-2xl font-extrabold text-tinta leading-tight tracking-tight">{album.titulo}</h2>
        <p className="text-sm text-texto-suave leading-relaxed mt-3">{album.resumen}</p>
        <p className="text-xs text-texto-suave mt-3">{total} fotografías</p>
      </header>

      <div className="columns-2 md:columns-3 gap-3 [&>button]:mb-3">
        {album.fotos.map((foto, i) => (
          <button
            key={foto.src}
            type="button"
            onClick={() => setAbierta(i)}
            aria-label={`Ampliar: ${foto.alt}`}
            className="block w-full break-inside-avoid overflow-hidden rounded-md border border-linea bg-superficie focus-visible:outline-2 focus-visible:outline-azul"
          >
            <Image
              src={foto.src}
              alt={foto.alt}
              width={foto.w}
              height={foto.h}
              sizes="(min-width: 1024px) 280px, (min-width: 768px) 30vw, 46vw"
              className="w-full h-auto"
            />
          </button>
        ))}
      </div>

      {actual && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={album.titulo}
          className="fixed inset-0 z-[60] bg-navy-950/95 flex flex-col"
          onClick={() => setAbierta(null)}
        >
          <div
            className="flex items-center justify-between px-4 sm:px-6 py-4 text-white/80 text-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <span>
              {album.titulo}, {abierta! + 1} de {total}
            </span>
            <button type="button" onClick={() => setAbierta(null)} className="font-semibold hover:text-white">
              Cerrar
            </button>
          </div>
          <div className="relative flex-1 min-h-0 mx-4 sm:mx-16" onClick={(e) => e.stopPropagation()}>
            <Image src={actual.src} alt={actual.alt} fill sizes="100vw" className="object-contain" priority />
          </div>
          <p className="text-center text-white/80 text-sm px-6 py-4" onClick={(e) => e.stopPropagation()}>
            {actual.alt}
          </p>
          <button
            type="button"
            aria-label="Foto anterior"
            onClick={(e) => {
              e.stopPropagation();
              mover(-1);
            }}
            className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl px-3 py-6"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Foto siguiente"
            onClick={(e) => {
              e.stopPropagation();
              mover(1);
            }}
            className="absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl px-3 py-6"
          >
            ›
          </button>
        </div>
      )}
    </article>
  );
}
