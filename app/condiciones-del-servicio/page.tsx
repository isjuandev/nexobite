import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import { ChatbotWidget } from "@/components/chatbot-widget";
import { AnimatedSection } from "@/components/animated-section";
import { ParticleField } from "@/components/particle-field";
import { FileText, Briefcase, CreditCard, ShieldAlert, Copyright, AlertTriangle, ShieldCheck, Scale, MessageCircle } from "lucide-react";

export default function CondicionesDelServicio() {

    const sections = [
        {
            id: "aceptacion",
            title: "1. Aceptación de los Términos",
            icon: <FileText className="h-6 w-6 text-primary" />,
            content: (
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                        Al acceder y utilizar los servicios proporcionados por <strong><strong>NEXOBITE</strong></strong> ("la Agencia", "nosotros", "nuestro"), usted ("el Cliente", "usted") acepta estar sujeto a estos Términos y Condiciones de Servicio.
                    </p>
                    <p>
                        Si no está de acuerdo con alguna parte de estos términos, le rogamos que no utilice nuestros servicios ni nuestra plataforma web. Estos términos constituyen un acuerdo legal vinculante entre usted y <strong>NEXOBITE</strong>.
                    </p>
                </div>
            )
        },
        {
            id: "descripcion",
            title: "2. Descripción de los Servicios",
            icon: <Briefcase className="h-6 w-6 text-primary" />,
            content: (
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                        <strong><strong>NEXOBITE</strong></strong> ofrece servicios de consultoría, diseño, desarrollo tecnológico, inteligencia artificial, automatizaciones y marketing digital ("los Servicios").
                    </p>
                    <p>
                        Los detalles específicos, entregables, plazos y costos de cada proyecto se definirán en una <strong>Propuesta Comercial</strong> o <strong>Contrato de Servicio</strong> individual, el cual deberá ser aprobado por escrito (o vía digital) por el Cliente antes del inicio de cualquier trabajo.
                    </p>
                </div>
            )
        },
        {
            id: "obligaciones",
            title: "3. Obligaciones del Cliente",
            icon: <ShieldCheck className="h-6 w-6 text-primary" />,
            content: (
                <div className="space-y-4 text-muted-foreground leading-relaxed">
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
            icon: <CreditCard className="h-6 w-6 text-primary" />,
            content: (
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                        Las condiciones de pago estándar (a menos que se especifique lo contrario en la Propuesta) requieren un <strong>anticipo del 50%</strong> para iniciar el proyecto, y el <strong>50% restante</strong> contra entrega y aprobación final.
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>NEXOBITE</strong> se reserva el derecho de suspender o cancelar los Servicios si los pagos no se realizan en los plazos acordados.</li>
                        <li>Para servicios de suscripción o mantenimiento recurrente, la facturación será mensual o anual, según corresponda, y requerirá pago por adelantado.</li>
                        <li>Los pagos no son reembolsables, salvo incumplimiento directo de <strong>NEXOBITE</strong> demostrable mediante la Propuesta Comercial.</li>
                    </ul>
                </div>
            )
        },
        {
            id: "propiedad-intelectual",
            title: "5. Propiedad Intelectual",
            icon: <Copyright className="h-6 w-6 text-primary" />,
            content: (
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                        Al liquidar el 100% del pago acordado, los derechos de propiedad y uso de los entregables finales (código fuente desarrollado específicamente, diseños y contenido) se transfieren al Cliente.
                    </p>
                    <p>
                        Sin embargo, <strong>NEXOBITE</strong> retiene los derechos sobre el código libre, plugins de terceros, herramientas propietarias subyacentes, y arquitecturas base utilizadas. Asimismo, nos reservamos el derecho de incluir extractos del proyecto en nuestro portafolio digital, a menos que se firme un Acuerdo de Confidencialidad (NDA).
                    </p>
                </div>
            )
        },
        {
            id: "limitacion",
            title: "6. Limitación de Responsabilidad",
            icon: <AlertTriangle className="h-6 w-6 text-primary" />,
            content: (
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                        <strong>NEXOBITE</strong> no será responsable por daños indirectos, pérdida de ganancias, fallas operativas o pérdida de datos que el Cliente pueda experimentar como resultado del uso de nuestros Servicios o productos.
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
            icon: <Scale className="h-6 w-6 text-primary" />,
            content: (
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                        <strong>NEXOBITE</strong> se reserva el derecho de actualizar, modificar o reemplazar cualquier parte de estas Condiciones del Servicio sin previo aviso. Es responsabilidad del Cliente revisar esta página periódicamente para verificar cambios.
                    </p>
                    <p>
                        El uso continuo de nuestros servicios tras la publicación de cualquier cambio constituye la aceptación de dichas modificaciones.
                    </p>
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
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <AnimatedSection>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-4">
                                <ShieldAlert className="w-5 h-5" />
                                <span className="text-sm font-semibold tracking-wider uppercase">Aspectos Legales</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-mdx font-bold tracking-tight mb-4">
                                Condiciones del <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Servicio</span>
                            </h1>
                        </AnimatedSection>
                    </div>
                </Container>
            </section>

            {/* Content Section */}
            <section className="py-12 relative z-10 flex-grow">
                <Container>
                    <div className="max-w-4xl mx-auto">

                        <div className="grid gap-12">
                            {sections.map((section, index) => (
                                <AnimatedSection
                                    key={section.id}
                                    delay={index * 100}
                                    className="relative group"
                                >
                                    {/* Decorative line connecting sections */}
                                    {index !== sections.length - 1 && (
                                        <div className="absolute left-8 top-16 bottom-[-3rem] w-px bg-gradient-to-b from-primary/20 to-transparent group-hover:from-primary/40 transition-colors duration-500 hidden md:block" />
                                    )}

                                    <div className="flex flex-col md:flex-row gap-6">
                                        <div className="flex-shrink-0">
                                            <div className="w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center shadow-lg group-hover:shadow-primary/20 group-hover:border-primary/30 transition-all duration-300 relative z-10">
                                                {section.icon}
                                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            </div>
                                        </div>

                                        <div className="flex-grow pt-2">
                                            <h2 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                                                {section.title}
                                            </h2>
                                            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8 hover:bg-card/80 transition-colors duration-300 shadow-sm">
                                                {section.content}
                                            </div>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>

                        {/* Contact Box */}
                        <AnimatedSection delay={800} className="mt-16">
                            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-card to-card/50 border border-border p-8 md:p-12 text-center shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 pointer-events-none" />
                                <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                                    <h3 className="text-2xl md:text-3xl font-bold">¿Tienes alguna pregunta sobre nuestros términos?</h3>
                                    <p className="text-lg text-muted-foreground">Estamos aquí para resolver cualquier inquietud antes de comenzar un proyecto juntos.</p>

                                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                                        <a
                                            href="https://wa.me/+573009459026"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover-glow transition-all flex items-center gap-2 group"
                                        >
                                            <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                            Contactar Asesor
                                        </a>
                                        <a
                                            href="mailto:contacto@nexobite.com"
                                            className="px-8 py-4 rounded-full bg-secondary text-secondary-foreground font-semibold hover:bg-secondary/80 transition-all"
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
            <ChatbotWidget />
        </main>
    );
}
