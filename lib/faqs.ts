export interface FaqItem {
  q: string;
  a: string;
}

export const faqs: FaqItem[] = [
  {
    q: "¿Puedo utilizar mi número actual de WhatsApp?",
    a: "Sí. El sistema se vincula a tu línea actual de WhatsApp Business o corporativa mediante la API oficial. No tienes que cambiar de número ni pierdes tu historial de chats o tu base de contactos habituales.",
  },
  {
    q: "¿El asistente reemplaza a mi equipo comercial?",
    a: "No. El sistema está diseñado para asumir las tareas mecánicas y repetitivas: saludar, responder preguntas frecuentes de catálogo y precios, filtrar clientes sin presupuesto y recopilar datos básicos. Cuando el cliente está calificado o solicita hablar con una persona, la conversación se transfiere de inmediato a tu asesor para la negociación final.",
  },
  {
    q: "¿Qué ocurre si un usuario hace una pregunta que el sistema no conoce?",
    a: "El sistema no inventa información. Si una consulta sale de su base de conocimiento predefinida, orienta al usuario y notifica a tu equipo para que un asesor humano tome el control del chat y responda con precisión.",
  },
  {
    q: "¿Qué incluye exactamente el costo mensual de mantenimiento?",
    a: "Cubre los recursos de infraestructura en la nube para mantener tu asistente y tu web activos 24/7, el monitoreo operativo, copias de seguridad de datos, ajustes menores a textos o precios y soporte técnico ante cualquier eventualidad. Los consumos directos de la API de Meta por volumen de mensajes se gestionan directamente en la cuenta de cada cliente.",
  },
  {
    q: "¿Necesito conocimientos técnicos para operar el sistema?",
    a: "Ninguno. Nosotros nos encargamos de todo el desarrollo, configuración e integración técnica. Al momento de la entrega, te brindamos una sesión práctica de capacitación para que tú y tu equipo comprendan cómo visualizar prospectos, asignar chats y realizar seguimiento con total facilidad.",
  },
  {
    q: "¿Cuáles son los tiempos de entrega y cómo se formaliza el trabajo?",
    a: "Los proyectos toman entre 5 y 25 días hábiles, según el plan acordado. Formalizamos cada servicio con propuesta técnica detallada, acuerdo de alcance y pagos divididos por fases (anticipo inicial y saldo contra entrega y validación de funcionamiento).",
  },
  // TODO (Usuario): Si tienes más preguntas frecuentes de tus clientes que quieras incorporar, añádelas aquí con su respectiva respuesta.
];
