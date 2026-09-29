import React from "react";

type JsonLdProps = {
  data: Record<string, any> | Array<Record<string, any>>;
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function generateOrganizationSchema(baseUrl: string = "https://spectrumpcolombia.com") {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: "SPECTRUMP COLOMBIA S.A.S.",
    legalName: "SPECTRUMP COLOMBIA S.A.S.",
    url: baseUrl,
    logo: {
      "@type": "ImageObject",
      url: `${baseUrl}/logo.png`,
      caption: "SPECTRUMP COLOMBIA S.A.S.",
    },
    image: `${baseUrl}/logo.png`,
    description:
      "Soluciones integrales de ingeniería, conectividad, telecomunicaciones, energía solar fotovoltaica e infraestructura tecnológica inteligente en Colombia.",
    email: "contacto@spectrump.com.co",
    address: {
      "@type": "PostalAddress",
      addressCountry: "CO",
      addressLocality: "Bogotá",
      addressRegion: "Cundinamarca",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "Customer Support",
        email: "contacto@spectrump.com.co",
        availableLanguage: ["Spanish", "es"],
      },
    ],
    knowsAbout: [
      "Telecomunicaciones",
      "Energía Solar Fotovoltaica",
      "Infraestructura Inteligente",
      "Conectividad Rural",
      "ECONECTA®",
      "Ingeniería Eléctrica y Redes",
    ],
  };
}

export function generateWebSiteSchema(baseUrl: string = "https://spectrumpcolombia.com") {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: baseUrl,
    name: "SPECTRUMP COLOMBIA S.A.S.",
    description:
      "Infraestructura tecnológica, energía renovable y conectividad estratégica en Colombia.",
    publisher: {
      "@id": `${baseUrl}/#organization`,
    },
    inLanguage: "es-CO",
  };
}

export function generateBreadcrumbSchema(
  items: Array<{ name: string; item: string }>,
  baseUrl: string = "https://spectrumpcolombia.com"
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((crumb, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: crumb.name,
      item: crumb.item.startsWith("http") ? crumb.item : `${baseUrl}${crumb.item}`,
    })),
  };
}
