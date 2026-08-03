const WHATSAPP_URL = 'https://chat.whatsapp.com/Ejj8hsLdqlXAuHBHQ9bJVG';

export default function UneteCta() {
  return (
    <section className="bg-navy-900 py-20 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight tracking-tight">
          Forma parte de SEITC
        </h2>
        <p className="text-white/75 text-lg leading-relaxed mt-5">
          Si estudias Ingeniería en Tecnologías Computacionales en el Campus
          Monterrey, únete al grupo de WhatsApp de la comunidad para enterarte
          de todos los eventos del semestre.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-azul text-white font-semibold text-lg px-9 py-4 rounded-md mt-8 hover:bg-azul-oscuro transition-colors duration-150"
        >
          Únete a SEITC
        </a>
      </div>
    </section>
  );
}
