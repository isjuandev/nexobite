/**
 * Configuración central del sitio y datos de contacto oficiales de NexoBite.
 * 
 * IMPORTANTE PARA EL USUARIO:
 * Para maximizar el SEO local y la coherencia NAP (Name, Address, Phone),
 * los datos aquí configurados deben coincidir EXACTAMENTE con los registrados
 * en el Perfil de Google Business (Google Business Profile - GBP).
 * 
 */

export interface SiteConfig {
  name: string;
  legalName: string;
  url: string;
  description: string;
  contact: {
    email: string;
    phone: string; // Formato E.164 (+573009459026)
    phoneDisplay: string; // Formato visual legible (+57 300 945 9026)
    whatsappUrl: string;
    address: {
      streetAddress: string;
      addressLocality: string;
      addressRegion: string;
      postalCode: string;
      addressCountry: string; // Código ISO de dos letras: "CO"
    };
    areaServed: string[];
    openingHours?: {
      days: string[];
      opens: string;
      closes: string;
    };
  };
  /** Panel de la plataforma (inicio de sesión de clientes). */
  appLoginUrl: string;
  social: {
    instagram: string;
    linkedin: string; // Vacío: NexoBite no tiene página de LinkedIn
  };
}

export const siteConfig: SiteConfig = {
  name: "NexoBite",
  legalName: "NexoBite",
  url: "https://www.nexobite.com",
  description:
    "Automatiza tu WhatsApp y página web para responder al instante, saber quién quiere comprar y cerrar más ventas sin pasar el día contestando mensajes.",
  contact: {
    // Correo oficial de contacto
    email: "contacto@nexobite.com",
    // Teléfono de atención
    phone: "+573009459026",
    phoneDisplay: "+57 (300) 945-9026",
    whatsappUrl: "https://wa.me/+573009459026",
    // Debe coincidir exactamente con el Perfil de Google Business (coherencia NAP)
    address: {
      streetAddress: "Calle 32 #24-43, Piso 3",
      addressLocality: "Armenia",
      addressRegion: "Quindío",
      postalCode: "63001",
      addressCountry: "CO",
    },
    // Presencial en el Eje Cafetero; el resto del país, de forma remota
    areaServed: ["Colombia", "Eje Cafetero", "Armenia", "Pereira", "Manizales", "Quindío", "Risaralda", "Caldas"],
    openingHours: {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  },
  appLoginUrl: "https://app.nexobite.com/login",
  social: {
    instagram: "https://instagram.com/nexobite",
    linkedin: "",
  },
};
