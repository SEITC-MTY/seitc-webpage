import type { Metadata } from 'next';
import Events from 'seitc/app/components/events/Events';

export const metadata: Metadata = {
  title: 'Eventos',
  description:
    'Talleres, charlas con la industria y eventos de comunidad de SEITC en el Tec de Monterrey, Campus Monterrey. Calendario del semestre y eventos pasados, organizados por la Dirección de Proyectos.',
  keywords: [
    'eventos SEITC',
    'eventos ITC Tec de Monterrey',
    'talleres de programación Monterrey',
    'Leetcode Tec de Monterrey',
    'Prep to Intern',
    'Dirección de Proyectos SEITC',
    'Armando Javier Flores Salazar',
  ],
  openGraph: {
    title: 'Eventos | SEITC',
    description:
      'Calendario de talleres, charlas con la industria y comunidad de la Sociedad de Estudiantes de ITC.',
  },
};

export default function EventosPage() {
  return <Events />;
}
