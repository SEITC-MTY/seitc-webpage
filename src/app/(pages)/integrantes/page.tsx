import type { Metadata } from "next";
import Integrantes from "seitc/app/components/integrantes/Integrantes";

export const metadata: Metadata = {
  title: "Integrantes",
  description:
    "La mesa directiva de SEITC — gestión 2026-2027 y las gestiones que construyeron la sociedad.",
};

export default function IntegrantesPage() {
  return <Integrantes />;
}
