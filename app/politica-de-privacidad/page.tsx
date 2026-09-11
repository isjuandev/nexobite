import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import { ParticleField } from "@/components/particle-field";
import { AnimatedSection } from "@/components/animated-section";
import { FaShieldAlt, FaLock, FaEye, FaCheckCircle, FaShareAlt, FaUserCheck, FaSync, FaWhatsapp } from "react-icons/fa";

export default function PoliticaDePrivacidad() {

  const sections = [
    {
      title: "1. Información General",
      icon: <FaShieldAlt className="w-6 h-6 text-secondary-foreground" />,
      content: (
        <p>
          En NexoBite, valoramos y respetamos tu privacidad. Esta política de privacidad y seguridad describe cómo recopilamos, utilizamos, protegemos y compartimos la información personal de nuestros usuarios y clientes que visitan nuestro sitio web y utilizan nuestros servicios tecnológicos, de desarrollo web, chatbots, redes sociales, fotografía y video.
        </p>
      )
    },
    {
      title: "2. Recopilación de Información",
      icon: <FaEye className="w-6 h-6 text-secondary-foreground" />,
      content: (
        <>
          <p className="mb-4">Podemos recopilar información personal que nos proporcionas directamente cuando:</p>
          <ul className="space-y-3">
            {[
              "Te pones en contacto con nosotros a través de formularios o WhatsApp.",
              "Solicitas información sobre nuestros servicios o adquieres algún paquete.",
              "Interactúas con nuestro Chatbot con IA.",
              "Nos proporcionas datos como tu nombre, número de teléfono, correo electrónico o detalles de tu empresa para la prestación del servicio."
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-ink-soft group">
                <FaCheckCircle className="w-4 h-4 text-signal shrink-0 mt-1" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </>
      )
    },
    {
      title: "3. Uso de la Información",
      icon: <FaSync className="w-5 h-5 text-signal" />,
      content: (
        <>
          <p className="mb-4">La información recopilada es utilizada para:</p>
          <ul className="space-y-3">
            {[
              "Proveer, operar y mantener nuestros servicios y productos.",
              "Mejorar, personalizar y expandir nuestra oferta digital.",
              "Comprender y analizar cómo utilizas nuestro sitio web y servicios, para mejorar la experiencia de usuario.",
              "Comunicarnos contigo, directamente o a través de uno de nuestros canales (como WhatsApp), para enviarte actualizaciones, asistencia técnica o información promocional (siempre con tu consentimiento previo).",
              "Detectar y prevenir posibles fraudes u otras actividades ilícitas."
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-ink-soft group">
                <FaCheckCircle className="w-4 h-4 text-signal shrink-0 mt-1" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </>
      )
    },
    {
      title: "4. Protección y Seguridad de los Datos",
      icon: <FaLock className="w-5 h-5 text-signal" />,
      content: (
        <div className="space-y-4">
          <p>
            En NexoBite implementamos medidas técnicas y organizativas de seguridad para proteger tu información personal contra el acceso no autorizado, alteración, divulgación o destrucción. Empleamos protocolos de cifrado estándar de la industria y garantizamos que la información almacenada en nuestras bases de datos está asegurada mediante tecnologías confiables.
          </p>
          <p className="p-4 rounded-sm bg-card border border-line-strong text-xs text-ink-soft font-mono">
            // Nota de seguridad: ninguna transmisión en red es 100% invulnerable; sin embargo, implementamos estándares estrictos de cifrado y aislamiento por tenant_id.
          </p>
        </div>
      )
    },
    {
      title: "5. Compartición de Información",
      icon: <FaShareAlt className="w-5 h-5 text-signal" />,
      content: (
        <>
          <p className="mb-4">
            No vendemos, comercializamos ni alquilamos tu información personal a terceros. Solo podríamos compartir información en los siguientes casos:
          </p>
          <ul className="space-y-4">
            <li className="p-4 rounded-sm border border-line bg-card">
              <strong className="block text-ink text-sm mb-1">Proveedores de Servicios:</strong>
              <span className="text-xs text-ink-soft">Empresas externas que empleamos para facilitar nuestros servicios (como hosting, integraciones de IA o procesadores de pago), las cuales están obligadas a resguardar la confidencialidad de tus datos.</span>
            </li>
            <li className="p-4 rounded-sm border border-line bg-card">
              <strong className="block text-ink text-sm mb-1">Cumplimiento de la Ley:</strong>
              <span className="text-xs text-ink-soft">Cuando creemos de buena fe que es necesario para cumplir con un requerimiento legal o proteger nuestros derechos, propiedad o seguridad.</span>
            </li>
          </ul>
        </>
      )
    },
    {
      title: "6. Derechos del Usuario",
      icon: <FaUserCheck className="w-5 h-5 text-signal" />,
      content: (
        <>
          <p className="mb-4">Tienes el derecho a:</p>
          <ul className="space-y-3 mb-6">
            {[
              "Acceder, actualizar o solicitar la eliminación de tu información personal de nuestros registros.",
              "Oponerte al procesamiento de tus datos si sientes que vulnera tu privacidad de alguna manera.",
              "Retirar en cualquier momento el consentimiento previamente otorgado para recibir comunicaciones de marketing o contacto comercial."
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-ink-soft group">
                <FaCheckCircle className="w-4 h-4 text-signal shrink-0 mt-1" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-ink text-sm font-medium">
            Para ejercer estos derechos, simplemente envíanos un mensaje a través de nuestros canales oficiales de atención por WhatsApp o correo electrónico.
          </p>
        </>
      )
    },
    {
      title: "7. Contacto y Cambios",
      icon: <FaWhatsapp className="w-5 h-5 text-signal" />,
      content: (
        <div className="space-y-4">
          <p className="text-sm text-ink-soft">
            NexoBite se reserva el derecho de actualizar o modificar esta política de privacidad en cualquier momento. Notificaremos cualquier cambio importante publicando la nueva versión en esta misma página.
          </p>
          <div className="mt-6 p-6 rounded-md bg-card border border-line flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-semibold text-ink mb-1">¿Tienes preguntas sobre el tratamiento de datos?</h4>
              <p className="text-xs text-ink-mute">Estamos disponibles para responder cualquier duda técnica o legal.</p>
            </div>
            <a
              href="https://wa.me/+573009459026?text=Hola!%20Tengo%20una%20duda%20sobre%20la%20pol%C3%ADtica%20de%20privacidad%20de%20NexoBite."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-sm bg-signal text-paper font-medium text-xs hover:bg-signal-deep transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              <FaWhatsapp className="w-3.5 h-3.5" />
              Contactar Soporte
            </a>
          </div>
        </div>
      )
    }
  ];

  return (
    <main className="min-h-screen bg-paper flex flex-col relative overflow-hidden">
      <Header />
      <ParticleField variant="subtle" density="low" speed="slow" />

      {/* Header Section */}
      <section className="relative pt-32 pb-14 border-b border-line">
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <div className="mb-3 flex justify-center">
                <span className="eyebrow">00 · LEGAL Y SEGURIDAD</span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <h1 className="mb-4 text-3xl md:text-5xl font-semibold tracking-tight text-ink">
                Política de Privacidad y <span className="text-signal">Seguridad</span>
              </h1>
              <p className="text-sm text-ink-soft font-mono">
                nexobite.dev/legal · rev.02
              </p>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Main Content Sections inside instrument-style cards */}
      <section className="grow py-16 relative z-10">
        <Container>
          <div className="max-w-4xl mx-auto space-y-6">
            {sections.map((section, index) => (
              <AnimatedSection key={index} delay={100 + (index * 50)}>
                <div className="relative bg-card rounded-md p-6 md:p-8 border border-line shadow-xs">
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-line">
                      <div className="w-9 h-9 rounded-sm bg-signal-soft border border-signal/30 flex items-center justify-center">
                        {section.icon}
                      </div>
                      <h2 className="text-lg font-semibold text-ink">
                        {section.title}
                      </h2>
                    </div>

                    <div className="text-sm text-ink-soft leading-relaxed">
                      {section.content}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
