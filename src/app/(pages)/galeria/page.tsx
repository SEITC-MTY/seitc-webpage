import type { Metadata } from 'next';
import Galeria from 'seitc/app/components/galeria/Galeria';

export const metadata: Metadata = {
  title: 'Galería',
  description:
    'Fotografías de los eventos de SEITC en el Tec de Monterrey: Explora Ingenierías, bienvenida ITC, Finish It Friday, LeetCode & DSAs 101, Bloomberg y Duolingo.',
  alternates: { canonical: '/galeria' },
};

export default function Page() {
  return <Galeria />;
}
