import type { Metadata } from 'next';
import Events from 'seitc/app/components/events/Events';

export const metadata: Metadata = {
  title: 'Eventos',
  description:
    'Talleres, charlas con la industria y eventos de comunidad de SEITC. Calendario del semestre y eventos pasados.',
};

export default function EventosPage() {
  return <Events />;
}
