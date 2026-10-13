export interface FaqItem {
  q: string;
  a: string;
}

export const faqs: FaqItem[] = [
  {
    q: "¿Puedo utilizar mi número actual de WhatsApp?",
    a: "Sí. Conectamos el asistente a tu número actual de WhatsApp, sin que tengas que cambiarlo. Hay dos formas: la conexión oficial de WhatsApp (la más segura y la que recomendamos si tus ventas dependen del chat; requiere verificar tu negocio y WhatsApp cobra aparte por conversación) o una conexión económica que se hace escaneando un código, sin esos cobros, pero que no es la vía oficial y por eso WhatsApp podría limitar tu número. Antes de elegir te explicamos con calma los pros y contras de cada una.",
  },
  {
    q: "¿El asistente reemplaza a mi equipo comercial?",
    a: "No. El asistente se encarga de lo repetitivo: saludar, responder las preguntas de siempre sobre precios y catálogo, detectar quién no tiene presupuesto y pedir los datos básicos. Cuando el cliente está listo para comprar o pide hablar con una persona, el chat pasa de inmediato a tu asesor para cerrar la venta.",
  },
  {
    q: "¿Qué ocurre si un usuario hace una pregunta que el sistema no conoce?",
    a: "El asistente no inventa respuestas. Si le preguntan algo que no sabe, orienta al cliente con amabilidad y avisa a tu equipo para que una persona tome el chat y responda con precisión.",
  },
  {
    q: "¿Qué incluye exactamente el costo mensual de mantenimiento?",
    a: "Cubre mantener tu asistente y tu página web funcionando todos los días, vigilar que nada falle, guardar copias de seguridad de tu información, cambios pequeños en textos o precios y ayuda cuando algo se presente. Lo que cobra WhatsApp por los mensajes se paga aparte, directamente en tu cuenta.",
  },
  {
    q: "¿Necesito conocimientos técnicos para operar el sistema?",
    a: "Ninguno. Nosotros nos encargamos de dejar todo listo y funcionando. Al entregarte, hacemos una sesión práctica para que tú y tu equipo aprendan a ver a los clientes interesados, asignar chats y hacer seguimiento con facilidad.",
  },
  {
    q: "¿Cuáles son los tiempos de entrega y cómo se formaliza el trabajo?",
    a: "Los proyectos toman entre 5 y 25 días hábiles, según el plan que elijas. Todo queda por escrito en una propuesta detallada con lo que incluye, y el pago se divide en dos partes: un anticipo al empezar y el saldo cuando recibas todo funcionando y lo hayas revisado.",
  },
  // TODO (Usuario): Si tienes más preguntas frecuentes de tus clientes que quieras incorporar, añádelas aquí con su respectiva respuesta.
];
