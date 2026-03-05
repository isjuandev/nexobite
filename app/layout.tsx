import type React from "react";
import type { Metadata } from "next";
import { Poppins, Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SchemaMarkup } from "../components/schema-markup";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

// Tipografías oficiales nexobite DIGITAL
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
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
      "NexoBite — Agencia de Marketing Digital, Chatbots IA y Desarrollo Web en Colombia",
    template: "%s | NexoBite",
  },
  description:
    "Somos una agencia boutique de soluciones digitales para PYMEs en Colombia. Chatbots inteligentes con IA para WhatsApp, desarrollo web moderno, gestión de redes sociales y automatización. Resultados medibles, equipo directo, sin terceros.",
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
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <SchemaMarkup />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
