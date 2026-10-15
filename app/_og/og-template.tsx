import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

// Tokens de app/globals.css (Satori no lee variables CSS).
const c = {
  paper: "#0E1013",
  card: "#16191D",
  line: "#262B31",
  ink: "#EDEFF2",
  inkSoft: "#B4BAC3",
  inkMute: "#78808C",
  signal: "#1C8A76",
  copper: "#D6924E",
};

const fontsDir = join(process.cwd(), "app/_og/fonts");

async function loadFonts() {
  const [medium, extraBold, mono] = await Promise.all([
    readFile(join(fontsDir, "PlusJakartaSans-Medium.ttf")),
    readFile(join(fontsDir, "PlusJakartaSans-ExtraBold.ttf")),
    readFile(join(fontsDir, "JetBrainsMono-Medium.ttf")),
  ]);
  return [
    { name: "Jakarta", data: medium, weight: 500 as const, style: "normal" as const },
    { name: "Jakarta", data: extraBold, weight: 800 as const, style: "normal" as const },
    { name: "Mono", data: mono, weight: 500 as const, style: "normal" as const },
  ];
}

function LogoMark({ height }: { height: number }) {
  const width = (height * 452) / 452;
  return (
    <svg width={width} height={height} viewBox="0 0 452 452" fill="none">
      <path
        d="M429.029 442.373C461.254 414.9 442.492 360.985 429.029 344.441C415.278 327.543 390.813 353.31 370.919 373.87C352.1 393.32 315.134 428.173 315.134 428.173C315.134 428.173 396.209 470.353 429.029 442.373Z"
        fill="#FF7400"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M331.596 28.5298V214.35C331.596 235.519 404.5 291.971 452 343.718V54.4035C449.184 23.5809 428.018 0.0412183 385.686 0.0412531C341.003 0.0413352 331.596 -2.3126 331.596 28.5298Z"
        fill="white"
      />
      <path
        d="M84.663 452C33.4921 452 4.70339 435.522 1.52588e-05 397.859L1.52588e-05 94.1995L124.643 223.667L124.643 419.045C124.643 449.646 129.346 452 84.663 452Z"
        fill="white"
      />
      <path
        d="M44.6832 0.041544C84.663 0.0415288 103.477 21.2272 103.477 21.2272L378.632 291.931C411.556 324.887 378.632 348.426 357.466 369.612C336.3 390.797 315.134 427.466 284.562 396.864L124.643 230.729L0 94.1996V25.935C0 25.935 0.420334 15.0339 7.05525 9.45735C17.1255 0.993414 21.1657 0.04151 44.6832 0.041544Z"
        fill="white"
      />
    </svg>
  );
}

interface OgCardProps {
  /** Etiqueta mono en cobre (categoría o descriptor). */
  eyebrow: string;
  titleLead: string;
  /** Frase final en verde señal, como los h2 del sitio. */
  titleAccent: string;
  /** Texto mono a la derecha del pie. */
  footerNote?: string;
}

export async function renderOgImage({
  eyebrow,
  titleLead,
  titleAccent,
  footerNote = "WhatsApp · Páginas web · Software",
}: OgCardProps) {
  const fonts = await loadFonts();
  const longTitle = titleLead.length + titleAccent.length > 62;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: c.paper,
          padding: "64px 72px",
          fontFamily: "Jakarta",
          color: c.ink,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <LogoMark height={40} />
          <div style={{ display: "flex", fontSize: 34, fontWeight: 500, letterSpacing: -0.5 }}>
            Nexobite
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontFamily: "Mono",
              fontSize: 22,
              letterSpacing: 2.5,
              color: c.copper,
              marginBottom: 26,
            }}
          >
            {`[ ${eyebrow.toUpperCase()} ]`}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: longTitle ? 56 : 68,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: -1.5,
            }}
          >
            <div style={{ display: "flex" }}>{titleLead}</div>
            <div style={{ display: "flex", color: c.signal }}>{titleAccent}</div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: `1px solid ${c.line}`,
            paddingTop: 24,
            fontFamily: "Mono",
            fontSize: 20,
            color: c.inkMute,
          }}
        >
          <div style={{ display: "flex", color: c.inkSoft }}>nexobite.com</div>
          <div style={{ display: "flex" }}>{footerNote}</div>
        </div>
      </div>
    ),
    { ...ogSize, fonts },
  );
}
