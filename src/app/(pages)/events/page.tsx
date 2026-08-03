import { redirect } from 'next/navigation';

/** Ruta legacy: el sitio anterior usaba /events. */
export default function EventsLegacyRedirect() {
  redirect('/eventos');
}
