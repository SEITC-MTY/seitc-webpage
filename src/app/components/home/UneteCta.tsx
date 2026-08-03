const WHATSAPP_URL = 'https://chat.whatsapp.com/Ejj8hsLdqlXAuHBHQ9bJVG';

export default function UneteCta() {
  return (
    <section className="bg-navy-950 grid-blueprint-fine py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
        <p className="kicker mb-6">{'[05] // súmate'}</p>
        <h2 className="font-display text-4xl md:text-6xl font-bold text-hielo tracking-tight leading-tight">
          ¿Estudias ITC?<br />
          Esta es tu sociedad<span className="text-azul">.</span>
        </h2>
        <p className="text-niebla text-lg leading-relaxed max-w-xl mx-auto mt-6">
          Entra al grupo de WhatsApp de la comunidad y entérate primero de
          talleres, charlas y todo lo que viene en el semestre.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-azul text-navy-950 font-semibold text-lg px-10 py-4 mt-10 hover:bg-azul-bright transition-colors duration-200"
        >
          Únete a SEITC <span aria-hidden className="font-mono">→</span>
        </a>
        <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-bruma mt-8">
          {'>'} sin costo · abierto a toda la carrera
        </p>
      </div>
    </section>
  );
}
