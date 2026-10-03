import type React from "react";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SchemaMarkup } from "../components/schema-markup";
import "./globals.css";

// Tipografía oficial NexoBite optimizada con variable fonts y display swap
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: {
    default: "Automatización de WhatsApp y Páginas Web | NexoBite",
    template: "%s | NexoBite",
  },
  description:
    "Automatiza tu WhatsApp y página web para responder al instante, calificar prospectos y cerrar más ventas sin depender de tareas comerciales manuales.",
  metadataBase: new URL("https://www.nexobite.com"),
  alternates: {
    canonical: "https://www.nexobite.com",
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
    title: "Automatización de WhatsApp y Páginas Web | NexoBite",
    description:
      "Automatiza tu WhatsApp y página web para responder al instante, calificar prospectos y cerrar más ventas sin depender de tareas comerciales manuales.",
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
    title: "Automatización de WhatsApp y Páginas Web | NexoBite",
    description:
      "Automatiza tu WhatsApp y página web para responder al instante, calificar prospectos y cerrar más ventas sin depender de tareas comerciales manuales.",
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
        <SpeedInsights />
      </body>
    </html>
  );
}
