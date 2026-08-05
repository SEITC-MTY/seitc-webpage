import type { Metadata } from "next";
import Integrantes from "seitc/app/components/integrantes/Integrantes";

export const metadata: Metadata = {
  title: "Integrantes",
  description:
    "La mesa directiva de SEITC en la gestión 2026-2027 y las gestiones anteriores.",
};

export default function IntegrantesPage() {
  return <Integrantes />;
}
