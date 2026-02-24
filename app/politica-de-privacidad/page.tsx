import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import { ChatbotWidget } from "@/components/chatbot-widget";
import { ParticleField } from "@/components/particle-field";
import { AnimatedSection } from "@/components/animated-section";
import { Shield, Lock, Eye, CheckCircle2, Share2, UserCheck, RefreshCw, MessageCircle } from "lucide-react";

export default function PoliticaDePrivacidad() {

  const sections = [
    {
      title: "1. Información General",
      icon: <Shield className="w-6 h-6 text-accent" />,
      content: (
        <p>
          En NexoBite, valoramos y respetamos tu privacidad. Esta política de privacidad y seguridad describe cómo recopilamos, utilizamos, protegemos y compartimos la información personal de nuestros usuarios y clientes que visitan nuestro sitio web y utilizan nuestros servicios tecnológicos, de desarrollo web, chatbots, redes sociales, fotografía y video.
        </p>
      )
    },
    {
      title: "2. Recopilación de Información",
      icon: <Eye className="w-6 h-6 text-accent" />,
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
              <li key={i} className="flex items-start gap-3 text-muted-foreground group">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 transition-transform group-hover:scale-110 group-hover:text-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </>
      )
    },
    {
      title: "3. Uso de la Información",
      icon: <RefreshCw className="w-6 h-6 text-accent" />,
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
              <li key={i} className="flex items-start gap-3 text-muted-foreground group">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 transition-transform group-hover:scale-110 group-hover:text-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </>
      )
    },
    {
      title: "4. Protección y Seguridad de los Datos",
      icon: <Lock className="w-6 h-6 text-accent" />,
      content: (
        <div className="space-y-4">
          <p>
            En NexoBite implementamos medidas técnicas y organizativas de seguridad para proteger tu información personal contra el acceso no autorizado, alteración, divulgación o destrucción. Empleamos protocolos de cifrado estándar de la industria y garantizamos que la información almacenada en nuestras bases de datos está asegurada mediante tecnologías confiables.
          </p>
          <p className="p-4 rounded-lg bg-primary/5 border border-primary/10 text-sm italic">
            Sin embargo, debes tener en cuenta que ninguna transmisión de datos a través de Internet o almacenamiento electrónico es 100% segura, por lo que no podemos garantizar su seguridad absoluta, aunque nos esforzamos en protegerla con herramientas modernas e infraestructura de primer nivel.
          </p>
        </div>
      )
    },
    {
      title: "5. Compartición de Información",
      icon: <Share2 className="w-6 h-6 text-accent" />,
      content: (
        <>
          <p className="mb-4">
            No vendemos, comercializamos ni alquilamos tu información personal a terceros. Solo podríamos compartir información en los siguientes casos:
          </p>
          <ul className="space-y-4">
            <li className="p-4 rounded-xl border border-border/50 bg-background hover-lift transition-all">
              <strong className="block text-primary mb-1">Proveedores de Servicios:</strong>
              <span className="text-muted-foreground">Empresas externas que empleamos para facilitar nuestros servicios (como hosting, integraciones de IA o procesadores de pago), las cuales están obligadas a resguardar la confidencialidad de tus datos.</span>
            </li>
            <li className="p-4 rounded-xl border border-border/50 bg-background hover-lift transition-all">
              <strong className="block text-primary mb-1">Cumplimiento de la Ley:</strong>
              <span className="text-muted-foreground">Cuando creemos de buena fe que es necesario para cumplir con un requerimiento legal o proteger nuestros derechos, propiedad o seguridad.</span>
            </li>
          </ul>
        </>
      )
    },
    {
      title: "6. Derechos del Usuario",
      icon: <UserCheck className="w-6 h-6 text-accent" />,
      content: (
        <>
          <p className="mb-4">Tienes el derecho a:</p>
          <ul className="space-y-3 mb-6">
            {[
              "Acceder, actualizar o solicitar la eliminación de tu información personal de nuestros registros.",
              "Oponerte al procesamiento de tus datos si sientes que vulnera tu privacidad de alguna manera.",
              "Retirar en cualquier momento el consentimiento previamente otorgado para recibir comunicaciones de marketing o contacto comercial."
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-muted-foreground group">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 transition-transform group-hover:scale-110 group-hover:text-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-primary font-medium">
            Para ejercer estos derechos, simplemente envíanos un mensaje a través de nuestros canales oficiales de atención por WhatsApp o correo electrónico.
          </p>
        </>
      )
    },
    {
      title: "7. Contacto y Cambios",
      icon: <MessageCircle className="w-6 h-6 text-accent" />,
      content: (
        <div className="space-y-4">
          <p>
            NexoBite se reserva el derecho de actualizar o modificar esta política de privacidad en cualquier momento. Notificaremos cualquier cambio importante publicando la nueva versión en esta misma página.
          </p>
          <div className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-accent/5 flex flex-col sm:flex-row items-center justify-between gap-4 border border-primary/10">
            <div>
              <h4 className="font-display font-semibold text-primary mb-1">¿Tienes más dudas?</h4>
              <p className="text-sm text-muted-foreground">Estamos aquí para ayudarte a entender cómo protegemos tu información.</p>
            </div>
            <a
              href="https://wa.me/+573009459026"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-primary text-white hover-glow transition-all flex items-center gap-2 whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Oficial
            </a>
          </div>
        </div>
      )
    }
  ];

  return (
    <main className="min-h-screen bg-background flex flex-col relative overflow-hidden">
      <Header />
      <ParticleField variant="primary" density="high" speed="medium" />

      {/* Premium Hero Header Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-secondary/50 px-4 py-1.5 backdrop-blur-sm">
                <Shield className="w-4 h-4 text-accent animate-pulse" />
                <span className="text-sm font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Legal y Seguridad
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight text-primary">
                Política de Privacidad y <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Seguridad</span>
              </h1>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Main Content Sections inside premium cards */}
      <section className="flex-grow pb-24 relative z-10">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section, index) => (
              <AnimatedSection key={index} delay={100 + (index * 50)}>
                <div className="group relative bg-secondary/10 rounded-2xl p-6 md:p-8 shadow-sm border border-border/50 backdrop-blur-sm hover-lift hover:border-accent/30 transition-all duration-300">
                  {/* Subtle glow effect on hover behind the card */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center border border-primary/10 group-hover:bg-accent/10 transition-colors">
                        {section.icon}
                      </div>
                      <h2 className="font-display text-2xl font-bold text-primary">
                        {section.title}
                      </h2>
                    </div>

                    <div className="prose prose-slate dark:prose-invert max-w-none font-sans text-foreground/90 leading-relaxed">
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
      <ChatbotWidget />
    </main>
  );
}
