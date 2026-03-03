import React from "react";

export function SchemaMarkup() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "NexoBite",
        url: "https://www.nexobite.com",
        logo: "https://www.nexobite.com/nexobite-logo.png",
        description:
            "Agencia boutique de soluciones digitales para PYMEs en Colombia. Marketing digital, chatbots con IA, desarrollo web y automatización.",
        contactPoint: {
            "@type": "ContactPoint",
            telephone: "+57-300-945-9026",
            contactType: "sales",
            availableLanguage: "Spanish",
        },
        sameAs: ["https://instagram.com/nexobite"],
        areaServed: {
            "@type": "Country",
            name: "Colombia",
        },
        knowsAbout: [
            "Marketing Digital",
            "Chatbots con Inteligencia Artificial",
            "Desarrollo Web",
            "Automatización de Procesos",
            "Community Management",
        ],
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "NexoBite",
        url: "https://www.nexobite.com",
        description:
            "Agencia de marketing digital, chatbots IA y desarrollo web para PYMEs en Colombia.",
        inLanguage: "es",
    };

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "NexoBite",
        url: "https://www.nexobite.com",
        telephone: "+573009459026",
        description:
            "Agencia boutique de soluciones digitales: chatbots con IA, desarrollo web, marketing digital y automatización para PYMEs colombianas.",
        areaServed: "Colombia",
        priceRange: "$$",
        openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
            ],
            opens: "08:00",
            closes: "18:00",
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(websiteSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(localBusinessSchema),
                }}
            />
        </>
    );
}
