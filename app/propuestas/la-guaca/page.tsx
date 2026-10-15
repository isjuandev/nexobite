import type { Metadata } from "next";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { GuacaDeck } from "./guaca-deck";

export const metadata: Metadata = {
  title: "Propuesta para Motel La Guaca",
  description:
    "Propuesta de posicionamiento y catálogo digital automatizado para Motel La Guaca, por NexoBite.",
  robots: { index: false, follow: false },
};

// El marcado de la presentación vive en `deck.html`; para actualizar el contenido se edita ese archivo.
const deckHtml = readFileSync(join(process.cwd(), "app/propuestas/la-guaca/deck.html"), "utf8");

export default function PropuestaLaGuacaPage() {
  return <GuacaDeck html={deckHtml} />;
}
