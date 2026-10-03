/**
 * Configuración central del sitio y datos de contacto oficiales de NexoBite.
 * 
 * IMPORTANTE PARA EL USUARIO:
 * Para maximizar el SEO local y la coherencia NAP (Name, Address, Phone),
 * los datos aquí configurados deben coincidir EXACTAMENTE con los registrados
 * en el Perfil de Google Business (Google Business Profile - GBP).
 * 
 * Deja en blanco o edita los campos marcados con TODO según los datos de tu empresa.
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
    // TODO (Usuario): Completa la dirección exactamente como figura en tu Perfil de Google Business
    address: {
      streetAddress: string; // TODO: ej. "Cra. 43A # 1-50, El Poblado" (dejar vacío si es área de servicio sin oficina pública)
      addressLocality: string; // TODO: ej. "Medellín"
      addressRegion: string; // TODO: ej. "Antioquia"
      postalCode: string; // TODO: ej. "050021"
      addressCountry: string; // Código ISO de dos letras: "CO"
    };
    areaServed: string[];
    openingHours?: {
      days: string[];
      opens: string;
      closes: string;
    };
  };
  social: {
    instagram: string;
    linkedin: string; // TODO (Usuario): Enlace oficial a la página de LinkedIn de la empresa
  };
}

export const siteConfig: SiteConfig = {
  name: "NexoBite",
  legalName: "NexoBite",
  url: "https://www.nexobite.com",
  description:
    "Automatiza tu WhatsApp y página web para responder al instante, calificar prospectos y cerrar más ventas sin depender de tareas comerciales manuales.",
  contact: {
    // Correo oficial de contacto
    email: "contacto@nexobite.com",
    // Teléfono de atención
    phone: "+573009459026",
    phoneDisplay: "+57 (300) 945-9026",
    whatsappUrl: "https://wa.me/+573009459026",
    address: {
      // TODO: Completar con la dirección física exacta de Google Business Profile si aplica
      streetAddress: "",
      // TODO: Confirmar si la sede principal es Medellín o Bogotá
      addressLocality: "Medellín",
      addressRegion: "Antioquia",
      postalCode: "",
      addressCountry: "CO",
    },
    areaServed: ["Colombia", "Medellín", "Bogotá"],
    openingHours: {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  },
  social: {
    instagram: "https://instagram.com/nexobite",
    // TODO: Completar con el enlace oficial de LinkedIn de NexoBite cuando esté disponible
    linkedin: "",
  },
};
