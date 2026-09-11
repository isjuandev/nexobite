import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import { AnimatedSection } from "@/components/animated-section";
import { ParticleField } from "@/components/particle-field";
import { FaFileAlt, FaBriefcase, FaCreditCard, FaExclamationTriangle, FaCopyright, FaShieldAlt, FaBalanceScale, FaWhatsapp } from "react-icons/fa";

export default function CondicionesDelServicio() {

    const sections = [
        {
            id: "aceptacion",
            title: "1. Aceptación de los Términos",
            icon: <FaFileAlt className="h-5 w-5 text-signal" />,
            content: (
                <div className="space-y-4 text-ink-soft leading-relaxed text-sm">
                    <p>
                        Al acceder y utilizar los servicios proporcionados por <strong className="text-ink">NEXOBITE</strong> (&quot;la Agencia&quot;, &quot;nosotros&quot;, &quot;nuestro&quot;), usted (&quot;el Cliente&quot;, &quot;usted&quot;) acepta estar sujeto a estos Términos y Condiciones de Servicio.
                    </p>
                    <p>
                        Si no está de acuerdo con alguna parte de estos términos, le rogamos que no utilice nuestros servicios ni nuestra plataforma web. Estos términos constituyen un acuerdo legal vinculante entre usted y <strong className="text-ink">NEXOBITE</strong>.
                    </p>
                </div>
            )
        },
        {
            id: "descripcion",
            title: "2. Descripción de los Servicios",
            icon: <FaBriefcase className="h-5 w-5 text-signal" />,
            content: (
                <div className="space-y-4 text-ink-soft leading-relaxed text-sm">
                    <p>
                        <strong className="text-ink">NEXOBITE</strong> ofrece servicios de consultoría, diseño, desarrollo tecnológico, inteligencia artificial, automatizaciones y marketing digital (&quot;los Servicios&quot;).
                    </p>
                    <p>
                        Los detalles específicos, entregables, plazos y costos de cada proyecto se definirán en una <strong className="text-ink">Propuesta Comercial</strong> o <strong className="text-ink">Contrato de Servicio</strong> individual, el cual deberá ser aprobado por escrito (o vía digital) por el Cliente antes del inicio de cualquier trabajo.
                    </p>
                </div>
            )
        },
        {
            id: "obligaciones",
            title: "3. Obligaciones del Cliente",
            icon: <FaShieldAlt className="h-5 w-5 text-signal" />,
            content: (
                <div className="space-y-4 text-ink-soft leading-relaxed text-sm">
                    <p>
                        Para garantizar el éxito del proyecto, el Cliente se compromete a:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Proporcionar de manera oportuna la información, recursos, accesos y retroalimentación necesarios para el desarrollo de los Servicios.</li>
                        <li>Asegurar que cualquier material proporcionado (textos, imágenes, logos, bases de datos) no infringe derechos de autor ni leyes de terceros.</li>
                        <li>Cumplir con los plazos de revisión y aprobación estipulados en la Propuesta Comercial. Los retrasos por parte del Cliente pueden extender significativamente los plazos de entrega y generar recargos.</li>
                    </ul>
                </div>
            )
        },
        {
            id: "pagos",
            title: "4. Pagos y Facturación",
            icon: <FaCreditCard className="h-5 w-5 text-signal" />,
            content: (
                <div className="space-y-4 text-ink-soft leading-relaxed text-sm">
                    <p>
                        Las condiciones de pago estándar (a menos que se especifique lo contrario en la Propuesta) requieren un <strong className="text-ink">anticipo del 50%</strong> para iniciar el proyecto, y el <strong className="text-ink">50% restante</strong> contra entrega y aprobación final.
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong className="text-ink">NEXOBITE</strong> se reserva el derecho de suspender o cancelar los Servicios si los pagos no se realizan en los plazos acordados.</li>
                        <li>Para servicios de suscripción o mantenimiento recurrente, la facturación será mensual o anual, según corresponda, y requerirá pago por adelantado.</li>
                        <li>Los pagos no son reembolsables, salvo incumplimiento directo de <strong className="text-ink">NEXOBITE</strong> demostrable mediante la Propuesta Comercial.</li>
                    </ul>
                </div>
            )
        },
        {
            id: "propiedad-intelectual",
            title: "5. Propiedad Intelectual",
            icon: <FaCopyright className="h-5 w-5 text-signal" />,
            content: (
                <div className="space-y-4 text-ink-soft leading-relaxed text-sm">
                    <p>
                        Al liquidar el 100% del pago acordado, los derechos de propiedad y uso de los entregables finales (código fuente desarrollado específicamente, diseños y contenido) se transfieren al Cliente.
                    </p>
                    <p>
                        Sin embargo, <strong className="text-ink">NEXOBITE</strong> retiene los derechos sobre el código libre, plugins de terceros, herramientas propietarias subyacentes, y arquitecturas base utilizadas. Asimismo, nos reservamos el derecho de incluir extractos del proyecto en nuestro portafolio digital, a menos que se firme un Acuerdo de Confidencialidad (NDA).
                    </p>
                </div>
            )
        },
        {
            id: "limitacion",
            title: "6. Limitación de Responsabilidad",
            icon: <FaExclamationTriangle className="h-5 w-5 text-signal" />,
            content: (
                <div className="space-y-4 text-ink-soft leading-relaxed text-sm">
                    <p>
                        <strong className="text-ink">NEXOBITE</strong> no será responsable por daños indirectos, pérdida de ganancias, fallas operativas o pérdida de datos que el Cliente pueda experimentar como resultado del uso de nuestros Servicios o productos.
                    </p>
                    <p>
                        El Cliente es responsable de mantener pruebas de seguridad, respaldos periódicos y configuraciones adecuadas de servidores posteriores a nuestra entrega, a menos que nos haya contratado explícitamente un plan de mantenimiento continuo.
                    </p>
                </div>
            )
        },
        {
            id: "modificaciones",
            title: "7. Modificaciones a los Términos",
            icon: <FaBalanceScale className="h-5 w-5 text-signal" />,
            content: (
                <div className="space-y-4 text-ink-soft leading-relaxed text-sm">
                    <p>
                        <strong className="text-ink">NEXOBITE</strong> se reserva el derecho de actualizar, modificar o reemplazar cualquier parte de estas Condiciones del Servicio sin previo aviso. Es responsabilidad del Cliente revisar esta página periódicamente para verificar cambios.
                    </p>
                    <p>
                        El uso continuo de nuestros servicios tras la publicación de cualquier cambio constituye la aceptación de dichas modificaciones.
                    </p>
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
                                <span className="eyebrow">00 · TÉRMINOS LEGALES</span>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={100}>
                            <h1 className="mb-4 text-3xl md:text-5xl font-semibold tracking-tight text-ink">
                                Condiciones del <span className="text-signal">Servicio</span>
                            </h1>
                            <p className="text-sm text-ink-soft font-mono">
                                nexobite.dev/terms · rev.02
                            </p>
                        </AnimatedSection>
                    </div>
                </Container>
            </section>

            {/* Main Content Sections */}
            <section className="grow py-16 relative z-10">
                <Container>
                    <div className="max-w-4xl mx-auto space-y-6">
                        {sections.map((section, index) => (
                            <AnimatedSection key={section.id} delay={100 + (index * 50)}>
                                <div className="relative bg-card rounded-md p-6 md:p-8 border border-line shadow-xs">
                                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-line">
                                        <div className="w-9 h-9 rounded-sm bg-signal-soft border border-signal/30 flex items-center justify-center">
                                            {section.icon}
                                        </div>
                                        <h2 className="text-lg font-semibold text-ink">
                                            {section.title}
                                        </h2>
                                    </div>

                                    <div>
                                        {section.content}
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}

                        {/* Contact Box */}
                        <AnimatedSection delay={700} className="mt-12">
                            <div className="instrument relative overflow-hidden rounded-md bg-card border border-line p-8 md:p-12 text-center shadow-xs">
                                <div className="max-w-xl mx-auto space-y-4">
                                    <h3 className="text-xl md:text-2xl font-semibold text-ink">¿Tienes alguna pregunta sobre nuestros términos?</h3>
                                    <p className="text-sm text-ink-soft">Estamos disponibles para resolver cualquier inquietud antes de comenzar un proyecto juntos.</p>

                                    <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-4">
                                        <a
                                            href="https://wa.me/+573009459026?text=Hola!%20Tengo%20una%20duda%20sobre%20las%20condiciones%20del%20servicio%20de%20NexoBite."
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-5 py-2.5 rounded-sm bg-signal text-paper font-medium text-xs hover:bg-signal-hover transition-colors flex items-center gap-2"
                                        >
                                            <FaWhatsapp className="w-4 h-4" />
                                            Contactar Asesor
                                        </a>
                                        <a
                                            href="mailto:contacto@nexobite.com"
                                            className="px-5 py-2.5 rounded-sm bg-canvas border border-line text-ink font-medium text-xs hover:border-line-strong transition-colors"
                                        >
                                            contacto@nexobite.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </Container>
            </section>

            <Footer />
        </main>
    );
}
