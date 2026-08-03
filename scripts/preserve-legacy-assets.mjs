// Preserva TODAS las imágenes históricas en public/assets/legacy/ con nombres legibles.
// Instrucción de presidencia: "que no se pierdan". COPIA (no mueve): los paths originales
// siguen funcionando. Idempotente: correrlo dos veces da el mismo resultado.
import { cpSync, mkdirSync, existsSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const PUB = join(root, "public");
const LEGACY = join(PUB, "assets", "legacy");

// Mapa hash → nombre legible (identificado viendo cada clúster de fotos).
// Clústeres por timestamp: mismo minuto = mismo evento.
const RENAME = {
  // Convivencia con pizza (2024)
  "images/1709518115581.jpg": "eventos/convivencia-2024-01.jpg",
  "images/1709518115588.jpg": "eventos/convivencia-2024-02.jpg",
  // Prep2Intern oct-2024 (charlas de interns: Duolingo, etc.)
  "images/1728336503562.jpg": "eventos/prep2intern-2024-duolingo.jpg",
  "images/1728336503592.jpg": "eventos/prep2intern-2024-02.jpg",
  "images/1728336503701.jpg": "eventos/prep2intern-2024-03.jpg",
  "images/1728336504030.jpg": "eventos/prep2intern-2024-04.jpg",
  // Prep2Intern Microsoft (oct-2024)
  "images/1730295320578.jpg": "eventos/prep2intern-2024-microsoft.jpg",
  // ITC Talks con Oracle (feb-2025, aula con pastel Oracle ITC)
  "images/1740764584156.jpg": "eventos/itc-talks-oracle-2025.jpg",
  // Viaje académico NYC (mar-2025): Columbia, oficinas Microsoft/MongoDB/Meta
  "images/1742267533649.jpg": "viaje-nyc-2025/columbia-university.jpg",
  "images/1742267678346.jpg": "viaje-nyc-2025/grupo-02.jpg",
  "images/1742267680689.jpg": "viaje-nyc-2025/grupo-03.jpg",
  "images/1742267681382.jpg": "viaje-nyc-2025/grupo-04.jpg",
  "images/1742267756227.jpg": "viaje-nyc-2025/grupo-05.jpg",
  "images/1742267765436.jpg": "viaje-nyc-2025/grupo-06.jpg",
  "images/1742353000229.jpg": "viaje-nyc-2025/oficina-microsoft-01.jpg",
  "images/1742353007940.jpg": "viaje-nyc-2025/oficina-microsoft-02.jpg",
  "images/1742353275435.jpg": "viaje-nyc-2025/grupo-09.jpg",
  "images/1742353285495.jpg": "viaje-nyc-2025/grupo-10.jpg",
  "images/1742668927000.jpg": "viaje-nyc-2025/oficina-mongodb-01.jpg",
  "images/1742668929130.jpg": "viaje-nyc-2025/oficina-mongodb-02.jpg",
  "images/1742669898481.jpg": "viaje-nyc-2025/grupo-13.jpg",
  "images/1742669905021.jpg": "viaje-nyc-2025/oficina-meta-01.jpg",
  "images/1742669905524.jpg": "viaje-nyc-2025/oficina-meta-02.jpg",
  "images/1742670680141 (1).jpg": "viaje-nyc-2025/grupo-15.jpg",
  "images/1742670680141.jpg": "viaje-nyc-2025/grupo-16.jpg",
};

let copied = 0;
const cp = (from, to) => {
  mkdirSync(dirname(to), { recursive: true });
  cpSync(from, to);
  copied++;
};

// 1) Los hash-renombrados
for (const [src, dst] of Object.entries(RENAME)) {
  const from = join(PUB, src);
  if (!existsSync(from)) { console.warn("FALTA:", src); continue; }
  cp(from, join(LEGACY, dst));
}

// 2) El resto de public/images (nombres ya legibles) tal cual
for (const f of readdirSync(join(PUB, "images"))) {
  if (RENAME[`images/${f}`]) continue;
  cp(join(PUB, "images", f), join(LEGACY, "marca-y-otros", f));
}

// 3) Todo public/congreso (ponentes/empresas de la edición 2026 — nombres ya legibles)
cpSync(join(PUB, "congreso"), join(LEGACY, "congreso-2026"), { recursive: true });

// 4) SVGs sueltos del template Next en la raíz de public
for (const f of readdirSync(PUB)) {
  if (f.endsWith(".svg")) cp(join(PUB, f), join(LEGACY, "template-next", f));
}

console.log(`OK: ${copied}+congreso/ archivos preservados en public/assets/legacy/`);
