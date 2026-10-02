import type React from "react";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SchemaMarkup } from "../components/schema-markup";
import "./globals.css";

// Tipografía oficial NexoBite — Variante "Instrumento"
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "Automatización de WhatsApp y Páginas Web para Empresas | NexoBite",
    template: "%s | NexoBite",
  },
  description:
    "Automatiza tu WhatsApp y tus canales de captación para responder al instante, calificar prospectos y cerrar más ventas sin depender de tareas manuales.",
  metadataBase: new URL("https://www.nexobite.com"),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "automatizacion whatsapp colombia",
    "chatbot whatsapp empresas medellin bogota",
    "desarrollo web conversion pymes",
    "crm whatsapp colombia",
    "atencion al cliente automatizada",
    "NexoBite",
  ],
  authors: [{ name: "NexoBite", url: "https://www.nexobite.com" }],
  creator: "NexoBite",
  publisher: "NexoBite",
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://www.nexobite.com",
    siteName: "NexoBite",
    title:
      "NexoBite — Sistemas Comerciales para WhatsApp y Desarrollo Web",
    description:
      "Tu negocio debería vender, no pasar el día respondiendo mensajes. Automatización de WhatsApp, páginas web y CRM para empresas.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NexoBite - Soluciones Digitales para PYMEs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NexoBite — Chatbots IA + Marketing Digital para PYMEs",
    description:
      "Agencia boutique de soluciones digitales en Colombia. Desarrollo web, chatbots WhatsApp con IA, redes sociales y automatización.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon-dark-32x32.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} font-sans antialiased`}
        style={{ ["--font-display" as string]: "var(--font-sans)" }}
      >
        <SchemaMarkup />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
