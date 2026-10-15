import type { IconType } from "react-icons";
import {
  FaClock,
  FaCopy,
  FaMoon,
  FaFolderMinus,
  FaChartLine,
  FaMobileAlt,
  FaSearch,
  FaBell,
  FaTable,
  FaPuzzlePiece,
  FaCoins,
  FaClipboardList,
  FaCogs,
  FaCheckDouble,
  FaGlobe,
  FaWhatsapp,
  FaCode,
} from "react-icons/fa";
import { faqs } from "@/lib/faqs";
import type { FaqItem } from "@/lib/faqs";

export type ServiceSlug =
  | "automatizacion-whatsapp"
  | "paginas-web-para-empresas"
  | "integracion-de-herramientas"
  | "software-a-medida";

export type MockupKind = "whatsapp" | "web" | "integraciones" | "software";

interface IconItem {
  icon: IconType;
  title: string;
  description: string;
}

export interface Service {
  slug: ServiceSlug;
  /** Nombre corto para tarjetas, enlaces y migas de pan. */
  shortName: string;
  /** Etiqueta mono de la categoría (la misma que en la tarjeta de la landing). */
  category: string;
  icon: IconType;
  /** Resumen de una línea para tarjetas de "otros servicios". */
  summary: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    titleLead: string;
    titleAccent: string;
    lead: string;
    badges: { label: string; tone: "active" | "completed" | "waiting" }[];
    ctaLabel: string;
    ctaMessage: string;
    mockup: MockupKind;
  };
  problem: {
    titleLead: string;
    titleAccent: string;
    intro: string;
    items: IconItem[];
  };
  includes: {
    titleLead: string;
    titleAccent: string;
    intro: string;
    items: { title: string; description: string }[];
  };
  process: {
    intro: string;
    steps: {
      chip: string;
      icon: IconType;
      title: string;
      description: string;
      deliverable: string;
    }[];
  };
  /** `plans`: muestra los planes de la landing. `quote`: explica cómo se cotiza. */
  pricing: "plans" | "quote";
  faqs: FaqItem[];
  finalCta: {
    titleLead: string;
    titleAccent: string;
    description: string;
    message: string;
  };
}

const faq = (index: number): FaqItem => faqs[index];

export const services: Service[] = [
  {
    slug: "automatizacion-whatsapp",
    shortName: "Asistente para WhatsApp",
    category: "ATENDER CLIENTES",
    icon: FaWhatsapp,
    summary:
      "Un asistente en tu WhatsApp que responde al instante, atiende de noche y detecta quién quiere comprar.",
    metaTitle: "Automatización de WhatsApp para Empresas en Colombia",
    metaDescription:
      "Asistente en tu WhatsApp que responde al instante, atiende de noche y detecta quién quiere comprar. Conexión oficial o económica. Planes en COP.",
    hero: {
      titleLead: "Atención automática en WhatsApp con",
      titleAccent: "un asistente que trabaja por ti",
      lead: "Un asistente en tu WhatsApp, con conexión oficial o económica. Responde las preguntas de siempre, atiende de noche y averigua quién quiere comprar antes de pasarle el chat a tus asesores.",
      badges: [
        { label: "Contesta de noche y fines de semana", tone: "active" },
        { label: "Detecta quién sí quiere comprar", tone: "completed" },
        { label: "Funciona con tu número actual", tone: "waiting" },
      ],
      ctaLabel: "Hablar por WhatsApp",
      ctaMessage:
        "Hola NexoBite. Vi la página del asistente para WhatsApp y quiero revisar si sirve para mi negocio.",
      mockup: "whatsapp",
    },
    problem: {
      titleLead: "Cada mensaje sin responder es",
      titleAccent: "una venta en riesgo",
      intro:
        "Atender los chats a mano agota a tu equipo y hace que se te escapen clientes todos los días.",
      items: [
        {
          icon: FaClock,
          title: "Respuestas que llegan tarde",
          description:
            "Quien responde primero suele quedarse con la venta. Si tu cliente espera, es probable que ya haya escrito a tu competencia.",
        },
        {
          icon: FaCopy,
          title: "Las mismas preguntas todo el día",
          description:
            "Precios, ubicación, horarios y catálogos. Tu equipo pasa horas copiando y pegando en lugar de hablar con quien sí quiere comprar.",
        },
        {
          icon: FaMoon,
          title: "Consultas de noche y fines de semana",
          description:
            "Muchos clientes escriben cuando nadie atiende. Sin respuesta, el interés se enfría antes de que abras.",
        },
      ],
    },
    includes: {
      titleLead: "Lo que hace el asistente",
      titleAccent: "por tu negocio",
      intro: "Todo configurado por nosotros, con tu información y tu forma de hablar.",
      items: [
        {
          title: "Funciona con tu número",
          description:
            "Conectamos tu número actual de WhatsApp, por la vía oficial o la económica. No tienes que cambiar de número.",
        },
        {
          title: "Responde lo de siempre",
          description:
            "Catálogos, horarios, precios y preguntas frecuentes contestados al instante, a cualquier hora.",
        },
        {
          title: "Detecta quién quiere comprar",
          description:
            "Averigua presupuesto y necesidad antes de pasarte el chat, para que tu equipo hable con quien sí va a comprar.",
        },
        {
          title: "Pasa el chat a una persona",
          description:
            "Cuando el cliente está listo o lo pide, el chat llega a tu asesor con todo lo que ya conversaron.",
        },
        {
          title: "Todo queda guardado",
          description:
            "El historial de cada conversación y cada cliente interesado queda en la cuenta de tu empresa.",
        },
        {
          title: "Capacitación para tu equipo",
          description:
            "Te enseñamos a usar la pantalla de control, a asignar chats y a hacer seguimiento.",
        },
      ],
    },
    process: {
      intro:
        "Nosotros nos encargamos de todo. Tu equipo solo recibe a los clientes que están listos para comprar.",
      steps: [
        {
          chip: "Día 1 a 3",
          icon: FaClipboardList,
          title: "Entendemos tu negocio y planeamos las conversaciones",
          description:
            "Vemos cómo te escriben tus clientes, cuáles son las preguntas de siempre y qué necesitas saber para confirmar una venta.",
          deliverable: "Guion de conversaciones y lista de respuestas",
        },
        {
          chip: "Día 4 a 10",
          icon: FaCogs,
          title: "Lo armamos y lo probamos",
          description:
            "Preparamos las respuestas, conectamos el asistente a tu WhatsApp y dejamos que cada cliente interesado se guarde solo.",
          deliverable: "Todo conectado y probado contigo",
        },
        {
          chip: "Día 11+",
          icon: FaCheckDouble,
          title: "Lo activamos y capacitamos a tu equipo",
          description:
            "Empezamos a usarlo en tu día a día y vigilamos que funcione bien para mejorar las respuestas.",
          deliverable: "Capacitación práctica + vigilancia continua",
        },
      ],
    },
    pricing: "plans",
    faqs: [faq(0), faq(1), faq(2), faq(3), faq(5)],
    finalCta: {
      titleLead: "Revisemos cómo responde tu negocio hoy y dónde",
      titleAccent: "puedes recuperar tiempo y ventas",
      description:
        "Conversemos por WhatsApp. Revisamos cómo atiendes hoy a tus clientes y te mostramos cómo solucionarlo, antes de que tomes cualquier decisión.",
      message:
        "Hola NexoBite. Estuve en la página del asistente para WhatsApp y quiero coordinar una revisión de 15 minutos para mi negocio.",
    },
  },
  {
    slug: "paginas-web-para-empresas",
    shortName: "Páginas Web",
    category: "CONSEGUIR CLIENTES",
    icon: FaGlobe,
    summary:
      "Páginas web rápidas, con textos que convencen y botones que llevan al cliente directo a tu WhatsApp.",
    metaTitle: "Páginas Web para Empresas que Convierten Visitas en Clientes",
    metaDescription:
      "Páginas web rápidas, hechas a tu medida, con textos que convencen y botones directos a tu WhatsApp. Listas para el celular y para Google.",
    hero: {
      titleLead: "Una página web hecha para que",
      titleAccent: "tus visitas te escriban por WhatsApp",
      lead: "Páginas web rápidas y claras, con textos que convencen y pensadas para que quien te visita te escriba directo por WhatsApp.",
      badges: [
        { label: "Diseño a tu medida", tone: "active" },
        { label: "Carga rápido en el celular", tone: "completed" },
        { label: "Lista para Google", tone: "waiting" },
      ],
      ctaLabel: "Cotizar página web por WhatsApp",
      ctaMessage:
        "Hola NexoBite. Vi la página de desarrollo web y quiero cotizar una página para mi negocio.",
      mockup: "web",
    },
    problem: {
      titleLead: "Una página que no vende",
      titleAccent: "es solo una tarjeta bonita",
      intro:
        "Tener web no es lo mismo que conseguir clientes con ella. Estos son los tres problemas más comunes.",
      items: [
        {
          icon: FaChartLine,
          title: "Visitas que no se vuelven clientes",
          description:
            "La gente entra, mira y se va porque no encuentra qué hacer. Sin un camino claro hacia tu WhatsApp, el interés se pierde.",
        },
        {
          icon: FaMobileAlt,
          title: "Una web lenta o difícil en el celular",
          description:
            "La mayoría de tus clientes te visita desde el teléfono. Si tarda en cargar o se ve mal, se van antes de leer.",
        },
        {
          icon: FaSearch,
          title: "Nadie te encuentra en Google",
          description:
            "Sin una base técnica bien hecha, tu negocio no aparece cuando alguien busca lo que tú ofreces.",
        },
      ],
    },
    includes: {
      titleLead: "Lo que incluye tu",
      titleAccent: "página web",
      intro: "Una web pensada para atraer, convencer y llevar al cliente al chat.",
      items: [
        {
          title: "Diseño a tu medida",
          description: "Sin plantillas genéricas ni moldes lentos. Se ve como tu negocio.",
        },
        {
          title: "Carga rápido en el celular",
          description: "Pensada primero para el teléfono, donde está la mayoría de tus clientes.",
        },
        {
          title: "Textos que convencen",
          description: "Mensajes claros, escritos para atraer y vender, no para llenar espacio.",
        },
        {
          title: "Botones directos a tu WhatsApp",
          description: "Cada botón y formulario abre el chat con el mensaje listo, sin pasos de más.",
        },
        {
          title: "Dirección web propia y alojamiento",
          description: "Tu dirección web, candado de seguridad y el alojamiento resueltos por nosotros.",
        },
        {
          title: "Lista para que te encuentren",
          description: "Base técnica para Google y medición de cuánta gente te escribe desde tu web.",
        },
      ],
    },
    process: {
      intro: "Un proceso corto y acompañado, donde tú apruebas cada decisión importante.",
      steps: [
        {
          chip: "Entender",
          icon: FaClipboardList,
          title: "Conocemos tu negocio y definimos el mensaje",
          description:
            "Hablamos de lo que vendes, a quién y qué quieres que haga quien te visita. De ahí sale la estructura de la página.",
          deliverable: "Estructura y mensajes de la página aprobados",
        },
        {
          chip: "Construir",
          icon: FaCogs,
          title: "Diseñamos y armamos tu web",
          description:
            "Creamos el diseño, escribimos los textos y conectamos los botones a tu WhatsApp. Revisas el avance antes de publicar.",
          deliverable: "Página lista y revisada contigo",
        },
        {
          chip: "Lanzar",
          icon: FaCheckDouble,
          title: "La publicamos y la dejamos midiendo",
          description:
            "Publicamos con tu dirección web, verificamos que se vea bien en celular y medimos cuánta gente te escribe desde ella.",
          deliverable: "Web publicada y medición activa",
        },
      ],
    },
    pricing: "quote",
    faqs: [
      {
        q: "¿La página incluye dirección web y alojamiento?",
        a: "Sí, nos encargamos de la dirección web propia, el candado de seguridad y el alojamiento. En el Plan Scale el primer año de alojamiento ya va incluido; para una página contratada sola, lo dejamos escrito en la propuesta.",
      },
      {
        q: "¿Se ve bien en el celular?",
        a: "Sí. La diseñamos pensando primero en el teléfono y la probamos antes de publicarla, porque ahí está la mayoría de tus clientes.",
      },
      {
        q: "¿Puedo pedir solo la página, sin el asistente de WhatsApp?",
        a: "Sí. Puedes contratar solo lo que necesitas hoy y sumar más cuando tu negocio crezca. Si quieres la web conectada al asistente y al registro de clientes, el Plan Scale lo incluye todo en uno.",
      },
      {
        q: "¿Cómo sé si la página me está trayendo clientes?",
        a: "Medimos cuánta gente te escribe a tu WhatsApp desde la web, para que veas con datos si la página está funcionando.",
      },
      faq(5),
    ],
    finalCta: {
      titleLead: "Cuéntanos de tu negocio y te decimos",
      titleAccent: "cómo debería verse tu página",
      description:
        "Conversemos por WhatsApp. Revisamos lo que ofreces, cómo te encuentran hoy tus clientes y qué necesita tu web para que te escriban más.",
      message:
        "Hola NexoBite. Estuve en la página de desarrollo web y quiero coordinar una revisión de 15 minutos para mi página.",
    },
  },
  {
    slug: "integracion-de-herramientas",
    shortName: "Conectamos tus herramientas",
    category: "ORDEN Y AUTOMATIZACIÓN",
    icon: FaCogs,
    summary:
      "Unimos tus chats y tus ventas con las herramientas que ya usas, para que no pases datos a mano.",
    metaTitle: "Conexión de Herramientas y Automatización de Ventas",
    metaDescription:
      "Conectamos tus chats, tu calendario y tu registro de clientes para que cada cliente interesado se guarde solo y tu equipo se entere al instante.",
    hero: {
      titleLead: "Tus chats y tus ventas conectados,",
      titleAccent: "sin pasar datos a mano",
      lead: "Unimos tus chats y tus ventas con las herramientas que ya usas, para que cada cliente interesado quede guardado y tu equipo se entere al instante.",
      badges: [
        { label: "Cada cliente se guarda solo", tone: "active" },
        { label: "Avisos a tu equipo", tone: "completed" },
        { label: "Con las herramientas que ya usas", tone: "waiting" },
      ],
      ctaLabel: "Hablar por WhatsApp",
      ctaMessage:
        "Hola NexoBite. Vi la página de conexión de herramientas y quiero revisar cómo conectar mis chats y mis ventas.",
      mockup: "integraciones",
    },
    problem: {
      titleLead: "Cuando las herramientas no se hablan,",
      titleAccent: "tu equipo hace de puente",
      intro:
        "Pasar datos de un lado a otro a mano consume tiempo y deja huecos por donde se pierden clientes.",
      items: [
        {
          icon: FaTable,
          title: "Datos copiados a mano",
          description:
            "Del chat a una hoja, de la hoja a otra herramienta. Cada paso manual es tiempo perdido y una oportunidad de error.",
        },
        {
          icon: FaFolderMinus,
          title: "Clientes que se pierden entre aplicaciones",
          description:
            "Si cada cliente queda en un lugar distinto, nadie sabe en qué punto está ni quién debe escribirle.",
        },
        {
          icon: FaBell,
          title: "Tu equipo se entera tarde",
          description:
            "Un cliente listo para comprar espera horas porque nadie vio el mensaje a tiempo.",
        },
      ],
    },
    includes: {
      titleLead: "Lo que conectamos",
      titleAccent: "para ti",
      intro: "Trabajamos con lo que ya usas. No tienes que cambiar tus herramientas.",
      items: [
        {
          title: "Cada cliente se guarda al instante",
          description:
            "Cuando alguien escribe y muestra interés, queda registrado con sus datos y su conversación.",
        },
        {
          title: "Avisos a tu equipo",
          description:
            "Tu equipo recibe una notificación por chat o correo cuando llega un cliente que hay que atender.",
        },
        {
          title: "Confirmaciones automáticas",
          description:
            "Mensajes de confirmación enviados solos, sin que nadie tenga que acordarse.",
        },
        {
          title: "Seguimiento a los interesados",
          description:
            "Si el cliente no compra de inmediato, se le vuelve a escribir a tiempo para retomar la conversación.",
        },
        {
          title: "Conexión entre tus herramientas",
          description:
            "Unimos tu calendario, tus hojas de cálculo o tu sistema de ventas con tus chats.",
        },
        {
          title: "Vigilancia continua",
          description:
            "Revisamos que todo siga funcionando y te ayudamos cuando algo se presente.",
        },
      ],
    },
    process: {
      intro: "Primero entendemos cómo trabajas hoy; después conectamos solo lo que tiene sentido.",
      steps: [
        {
          chip: "Entender",
          icon: FaClipboardList,
          title: "Revisamos cómo trabajas hoy",
          description:
            "Vemos por dónde entran tus clientes, qué herramientas usas y en qué puntos tu equipo pasa datos a mano.",
          deliverable: "Mapa de lo que se conecta y en qué orden",
        },
        {
          chip: "Conectar",
          icon: FaCogs,
          title: "Conectamos y probamos contigo",
          description:
            "Unimos las herramientas, configuramos los avisos y probamos con casos reales de tu negocio.",
          deliverable: "Conexiones funcionando y probadas",
        },
        {
          chip: "Vigilar",
          icon: FaCheckDouble,
          title: "Lo activamos y lo vigilamos",
          description:
            "Dejamos todo en marcha, capacitamos a tu equipo y revisamos que nada falle con el tiempo.",
          deliverable: "Capacitación y vigilancia continua",
        },
      ],
    },
    pricing: "quote",
    faqs: [
      {
        q: "¿Qué herramientas se pueden conectar?",
        a: "Tus chats con tu calendario, tus hojas de cálculo, tu sistema de ventas y los canales de mensajes que ya uses. En la revisión inicial vemos cuáles conviene conectar primero según tu caso.",
      },
      {
        q: "¿Tengo que cambiar las herramientas que ya uso?",
        a: "No. Trabajamos con lo que ya tienes y solo agregamos las conexiones necesarias para que no pases datos a mano.",
      },
      {
        q: "¿Qué pasa si una conexión falla?",
        a: "Vigilamos que todo funcione y te ayudamos cuando algo se presente. Esa vigilancia hace parte del mantenimiento mensual.",
      },
      {
        q: "¿Puedo contratarlo sin el asistente de WhatsApp?",
        a: "Sí. Puedes contratar solo lo que necesitas hoy y sumar más cuando tu negocio crezca.",
      },
      faq(4),
    ],
    finalCta: {
      titleLead: "Mostremos dónde tu equipo pierde tiempo y",
      titleAccent: "cómo conectarlo todo",
      description:
        "Conversemos por WhatsApp. Revisamos cómo trabajas hoy y te decimos qué conexiones te ahorran más tiempo primero.",
      message:
        "Hola NexoBite. Estuve en la página de conexión de herramientas y quiero coordinar una revisión de 15 minutos.",
    },
  },
  {
    slug: "software-a-medida",
    shortName: "Software a medida",
    category: "A TU MEDIDA",
    icon: FaCode,
    summary:
      "Aplicaciones web para cuando las herramientas comunes no alcanzan: cotizadores, pantallas para clientes y sistemas de reservas.",
    metaTitle: "Software a Medida para Empresas en Colombia",
    metaDescription:
      "Programas hechos para tu negocio: cotizadores, pantallas para tus clientes y sistemas de reservas, con seguridad, copias de respaldo y soporte.",
    hero: {
      titleLead: "Un programa hecho",
      titleAccent: "a la medida de cómo trabaja tu negocio",
      lead: "Aplicaciones web para cuando las herramientas comunes no alcanzan: cotizadores, pantallas para tus clientes o sistemas de reservas, adaptados a tu forma de trabajar.",
      badges: [
        { label: "Adaptado a tu forma de trabajar", tone: "active" },
        { label: "Crece contigo y es tuyo", tone: "completed" },
        { label: "Soporte dedicado", tone: "waiting" },
      ],
      ctaLabel: "Hablar por WhatsApp",
      ctaMessage:
        "Hola NexoBite. Vi la página de software a medida y quiero contarles lo que necesita mi negocio.",
      mockup: "software",
    },
    problem: {
      titleLead: "Cuando las herramientas comunes no alcanzan,",
      titleAccent: "tu negocio se adapta a ellas",
      intro:
        "Un programa hecho a medida se adapta a cómo trabajas tú, no al revés.",
      items: [
        {
          icon: FaPuzzlePiece,
          title: "Herramientas que no encajan",
          description:
            "Terminas forzando tu forma de trabajar para que quepa en un programa pensado para todos y para nadie en particular.",
        },
        {
          icon: FaTable,
          title: "Procesos en hojas y mensajes sueltos",
          description:
            "Cotizaciones, reservas o pedidos manejados entre hojas de cálculo y chats, donde cuesta tener todo claro.",
        },
        {
          icon: FaCoins,
          title: "Pagar por lo que no usas",
          description:
            "Planes llenos de funciones que nunca abres mientras te falta justo la que necesitas.",
        },
      ],
    },
    includes: {
      titleLead: "Lo que podemos construir",
      titleAccent: "para ti",
      intro: "Cada proyecto parte de tu proceso real, no de una plantilla.",
      items: [
        {
          title: "Cotizadores",
          description: "Tus clientes calculan o piden su cotización solos, con tus reglas y tus precios.",
        },
        {
          title: "Pantallas para tus clientes",
          description: "Un espacio donde tus clientes ven su información, su estado o sus pedidos.",
        },
        {
          title: "Sistemas de reservas",
          description: "Reservas y agendas organizadas según cómo funciona tu negocio.",
        },
        {
          title: "Tecnología moderna y confiable",
          description: "Construido con herramientas actuales, pensado para durar y poder crecer.",
        },
        {
          title: "Es tuyo y crece contigo",
          description: "Se adapta a la forma de trabajar de tu negocio y se amplía cuando lo necesites.",
        },
        {
          title: "Seguridad y soporte",
          description: "Seguridad, copias de respaldo y soporte dedicado después de la entrega.",
        },
      ],
    },
    process: {
      intro: "Construimos contigo y te mostramos avances para que nada te sorprenda al final.",
      steps: [
        {
          chip: "Entender",
          icon: FaClipboardList,
          title: "Entendemos tu proceso y lo que necesitas resolver",
          description:
            "Revisamos cómo trabajas hoy, dónde se complica y qué debería hacer el programa. Todo queda definido por escrito.",
          deliverable: "Propuesta con alcance, plazo y valor",
        },
        {
          chip: "Construir",
          icon: FaCogs,
          title: "Lo diseñamos y lo construimos contigo",
          description:
            "Desarrollamos el programa y te vamos mostrando avances para ajustar a tiempo.",
          deliverable: "Programa funcionando y revisado contigo",
        },
        {
          chip: "Entregar",
          icon: FaCheckDouble,
          title: "Lo entregamos y te acompañamos",
          description:
            "Lo ponemos en marcha, capacitamos a tu equipo y te damos soporte para que siga funcionando bien.",
          deliverable: "Capacitación, copias de respaldo y soporte",
        },
      ],
    },
    pricing: "quote",
    faqs: [
      {
        q: "¿Qué tipo de programas construyen?",
        a: "Aplicaciones web para cuando las herramientas comunes no alcanzan: cotizadores, pantallas para tus clientes o sistemas de reservas. Si tu necesidad es distinta, cuéntanosla y vemos si tiene sentido construirla.",
      },
      {
        q: "¿El programa es mío?",
        a: "Sí. Se construye para tu negocio, crece contigo y es tuyo. Los términos quedan escritos en la propuesta.",
      },
      {
        q: "¿Cuánto cuesta y cuánto se demora?",
        a: "Depende de lo que necesites. Después de revisar tu caso recibes una propuesta por escrito con lo que incluye, el plazo y el valor, y el pago se divide en un anticipo al empezar y el saldo cuando recibas todo funcionando.",
      },
      {
        q: "¿Qué pasa después de entregarlo?",
        a: "Incluimos seguridad, copias de respaldo y soporte dedicado, para que el programa siga funcionando y puedas pedir ajustes cuando lo necesites.",
      },
      faq(4),
    ],
    finalCta: {
      titleLead: "Cuéntanos qué necesita tu negocio y vemos si",
      titleAccent: "un programa a medida es la salida",
      description:
        "Conversemos por WhatsApp. Escuchamos tu proceso y te decimos con honestidad si necesitas algo a medida o una herramienta más simple.",
      message:
        "Hola NexoBite. Estuve en la página de software a medida y quiero coordinar una revisión de 15 minutos.",
    },
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
