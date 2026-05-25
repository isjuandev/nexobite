import type React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SchemaMarkup } from "../components/schema-markup";
import "./globals.css";

// Tipografías oficiales nexobite DIGITAL
const satoshiSans = localFont({
  src: [
    {
      path: "../public/fonts/satoshi/fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/satoshi/fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/satoshi/fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});

const satoshiDisplay = localFont({
  src: [
    {
      path: "../public/fonts/satoshi/fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/satoshi/fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/satoshi/fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "Chatbots para WhatsApp y Automatización de Ventas | Nexobite",
    template: "%s | NexoBite",
  },
  description:
    "Automatiza tu WhatsApp y convierte más conversaciones en ventas. Chatbots para negocios, automatización y desarrollo web enfocado en resultados.",
  metadataBase: new URL("https://www.nexobite.com"),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "agencia marketing digital Colombia",
    "chatbot WhatsApp IA",
    "desarrollo web pymes",
    "automatización inteligente",
    "NexoBite",
    "marketing digital pymes Colombia",
    "chatbot inteligente para empresas",
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
      "NexoBite — Agencia de Marketing Digital, Chatbots IA y Desarrollo Web",
    description:
      "Transformamos la presencia digital de PYMEs colombianas. Chatbots con IA, desarrollo web, redes sociales y automatización. Todo en un solo equipo.",
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
    <html lang="es">
      <body
        className={`${satoshiSans.variable} ${satoshiDisplay.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <SchemaMarkup />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
