import React from "react";
import { siteConfig } from "@/lib/site-config";
import { faqs } from "@/lib/faqs";

export function SchemaMarkup() {
  const sameAsProfiles = [
    siteConfig.social.instagram,
    siteConfig.social.linkedin,
  ].filter(Boolean);

  const postalAddress = siteConfig.contact.address.streetAddress || siteConfig.contact.address.addressLocality
    ? {
        "@type": "PostalAddress",
        ...(siteConfig.contact.address.streetAddress
          ? { streetAddress: siteConfig.contact.address.streetAddress }
          : {}),
        addressLocality: siteConfig.contact.address.addressLocality,
        addressRegion: siteConfig.contact.address.addressRegion,
        ...(siteConfig.contact.address.postalCode
          ? { postalCode: siteConfig.contact.address.postalCode }
          : {}),
        addressCountry: siteConfig.contact.address.addressCountry,
      }
    : undefined;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/nexobite-logo.png`,
    description: siteConfig.description,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    ...(postalAddress ? { address: postalAddress } : {}),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phone,
      email: siteConfig.contact.email,
      contactType: "customer service",
      availableLanguage: ["Spanish"],
    },
    sameAs: sameAsProfiles,
    areaServed: siteConfig.contact.areaServed.map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
    })),
    knowsAbout: [
      "Automatización de WhatsApp",
      "Chatbots con Inteligencia Artificial",
      "Desarrollo Web para Empresas",
      "Sistemas CRM y Pipelines de Ventas",
      "Integración de APIs Comerciales",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "es-CO",
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    description: siteConfig.description,
    sameAs: sameAsProfiles,
    ...(postalAddress ? { address: postalAddress } : {}),
    areaServed: siteConfig.contact.areaServed.map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
    })),
    priceRange: "$$",
    ...(siteConfig.contact.openingHours
      ? {
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: siteConfig.contact.openingHours.days,
            opens: siteConfig.contact.openingHours.opens,
            closes: siteConfig.contact.openingHours.closes,
          },
        }
      : {}),
  };

  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
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
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageSchema),
        }}
      />
    </>
  );
}
