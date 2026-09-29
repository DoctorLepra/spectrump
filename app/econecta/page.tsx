import React from "react";
import type { Metadata } from "next";
import { EconectaHero } from "@/components/pages/econecta/EconectaHero";
import { EconectaCaracteristicas } from "@/components/pages/econecta/EconectaCaracteristicas";
import { EconectaDescripcion } from "@/components/pages/econecta/EconectaDescripcion";
import { EconectaModelos } from "@/components/pages/econecta/EconectaModelos";
import { EconectaCierreDescripcion } from "@/components/pages/econecta/EconectaCierreDescripcion";
import { PreFooterBanner } from "@/components/pages/home/PreFooterBanner";
import { createClient } from "@/lib/supabase/server";

import { JsonLd, generateBreadcrumbSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "ECONECTA® | Estaciones Inteligentes y Autosostenibles",
  description:
    "Descubre ECONECTA® de SPECTRUMP: solución integral de infraestructura inteligente que combina energía solar, conectividad comunitaria Wi-Fi, videovigilancia con IA y carga digital.",
  alternates: {
    canonical: "/econecta",
  },
  openGraph: {
    title: "ECONECTA® | Estaciones Inteligentes Autosostenibles - SPECTRUMP",
    description:
      "Infraestructura modular con energía solar fotovoltaica, conectividad de alta velocidad y seguridad para municipios y proyectos en Colombia.",
    url: "/econecta",
    type: "website",
    images: [
      {
        url: "/econecta.png",
        width: 1200,
        height: 630,
        alt: "Estación Inteligente ECONECTA®",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ECONECTA® | Estaciones Inteligentes Autosostenibles - SPECTRUMP",
    description:
      "Infraestructura modular con energía solar fotovoltaica, conectividad de alta velocidad y seguridad para municipios y proyectos en Colombia.",
    images: ["/econecta.png"],
  },
};

export const revalidate = 60;

async function getEconectaPageData() {
  const supabase = createClient();
  
  const { data: pageSections } = await supabase
    .from('page_sections')
    .select('section_key, content')
    .eq('page_id', 'econecta');

  const { data: inicioPrefooter } = await supabase
    .from('page_sections')
    .select('section_key, content')
    .eq('page_id', 'inicio')
    .eq('section_key', 'inicio_prefooter');

  const { data: sectionItems } = await supabase
    .from('section_items')
    .select('*')
    .like('section_key', 'econecta_%')
    .eq('is_active', true)
    .order('sort_order', { ascending: true });

  const sectionsMap = (pageSections || []).reduce((acc: any, curr: any) => {
    acc[curr.section_key] = curr.content;
    return acc;
  }, {});

  if (inicioPrefooter && inicioPrefooter[0]) {
    sectionsMap['inicio_prefooter'] = inicioPrefooter[0].content;
  }

  const itemsMap = (sectionItems || []).reduce((acc: any, curr: any) => {
    if (!acc[curr.section_key]) acc[curr.section_key] = [];
    acc[curr.section_key].push(curr);
    return acc;
  }, {});

  return { sections: sectionsMap, items: itemsMap };
}

export default async function EconectaPage() {
  const { sections, items } = await getEconectaPageData();

  const econectaProductSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "ECONECTA® - Estación Inteligente Autosostenible",
    image: "https://spectrumpcolombia.com/econecta.png",
    description:
      "Infraestructura modular inteligente que integra energía solar fotovoltaica, conectividad Wi-Fi comunitaria de alta capacidad, videovigilancia y puertos de carga.",
    brand: {
      "@type": "Brand",
      name: "ECONECTA® by SPECTRUMP",
    },
    manufacturer: {
      "@type": "Organization",
      name: "SPECTRUMP COLOMBIA S.A.S.",
    },
    category: "Infraestructura Inteligente y Energía Solar",
    offers: {
      "@type": "Offer",
      priceCurrency: "COP",
      availability: "https://schema.org/InStock",
      url: "https://spectrumpcolombia.com/econecta",
    },
  };

  return (
    <main className="min-h-screen flex flex-col bg-white text-slate-900">
      <JsonLd
        data={[
          generateBreadcrumbSchema([
            { name: "Inicio", item: "/" },
            { name: "ECONECTA®", item: "/econecta" },
          ]),
          econectaProductSchema,
        ]}
      />
      {/* 1. Hero Section con Video e Impacto Visual */}
      <EconectaHero data={sections['econecta_hero']} />

      {/* 2. Sección de Características en Fila (4 Pilares) */}
      <EconectaCaracteristicas data={sections['econecta_caracteristicas']} />

      {/* 3. Sección de Descripción Institucional (Fondo Slate-50) */}
      <EconectaDescripcion data={sections['econecta_historia']} />

      {/* 4. Sección de Modelos de ECONECTA® */}
      <EconectaModelos data={sections['econecta_modelos']} />

      {/* 5. Segunda Sección de Descripción (Fondo Slate-50) */}
      <EconectaCierreDescripcion data={sections['econecta_detalle']} />

      {/* 6. Card CTA de Contacto */}
      <PreFooterBanner data={sections['inicio_prefooter']} />
    </main>
  );
}
