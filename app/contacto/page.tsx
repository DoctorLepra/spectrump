import React from "react";
import type { Metadata } from "next";
import { ContactoHero } from "@/components/pages/contacto/ContactoHero";
import { ContactFormSection } from "@/components/pages/contacto/ContactFormSection";
import { OfficeLocationMap } from "@/components/pages/nosotros/OfficeLocationMap";
import { ContactoFAQSection } from "@/components/pages/contacto/ContactoFAQSection";
import { createClient } from "@/lib/supabase/server";

import { JsonLd, generateBreadcrumbSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Contacto | Atención Comercial y Soporte de Ingeniería",
  description:
    "Comunícate con SPECTRUMP COLOMBIA S.A.S.: asesoría técnica en licitaciones, energía solar fotovoltaica, estaciones ECONECTA® e infraestructura de telecomunicaciones en Colombia.",
  alternates: {
    canonical: "/contacto",
  },
  openGraph: {
    title: "Contacto | SPECTRUMP COLOMBIA S.A.S.",
    description:
      "Canales directos de atención para proyectos de ingeniería, conectividad rural, telecomunicaciones y energía solar en Colombia.",
    url: "/contacto",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto | SPECTRUMP COLOMBIA S.A.S.",
    description:
      "Canales directos de atención para proyectos de ingeniería, conectividad rural, telecomunicaciones y energía solar en Colombia.",
  },
};

export const revalidate = 60;

async function getContactoPageData() {
  const supabase = createClient();
  
  const { data: pageSections } = await supabase
    .from('page_sections')
    .select('section_key, content')
    .eq('page_id', 'contacto');

  const { data: nosotrosUbicacion } = await supabase
    .from('page_sections')
    .select('section_key, content')
    .eq('page_id', 'nosotros')
    .eq('section_key', 'nosotros_ubicacion');

  const { data: sectionItems } = await supabase
    .from('section_items')
    .select('*')
    .like('section_key', 'contacto_%')
    .eq('is_active', true)
    .order('sort_order', { ascending: true });

  const sectionsMap = (pageSections || []).reduce((acc: any, curr: any) => {
    acc[curr.section_key] = curr.content;
    return acc;
  }, {});

  if (nosotrosUbicacion && nosotrosUbicacion[0]) {
    sectionsMap['nosotros_ubicacion'] = nosotrosUbicacion[0].content;
  }

  const itemsMap = (sectionItems || []).reduce((acc: any, curr: any) => {
    if (!acc[curr.section_key]) acc[curr.section_key] = [];
    acc[curr.section_key].push(curr);
    return acc;
  }, {});

  return { sections: sectionsMap, items: itemsMap };
}

export default async function ContactoPage() {
  const { sections } = await getContactoPageData();

  return (
    <main className="min-h-screen flex flex-col bg-white text-slate-900">
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Inicio", item: "/" },
          { name: "Contacto", item: "/contacto" },
        ])}
      />
      {/* 1. Hero Section de Contacto */}
      <ContactoHero data={sections['contacto_hero']} />

      {/* 2. Canales Directos y Formulario Interactivo */}
      <ContactFormSection 
        descripcionData={sections['contacto_descripcion']} 
        datosData={sections['contacto_datos']} 
      />

      {/* 3. Mapa Interactivo de Oficinas y Coordenadas */}
      <OfficeLocationMap data={sections['nosotros_ubicacion']} />

      {/* 4. Sección de Preguntas Frecuentes (Removed from schema but kept in UI if needed, else removed) */}
      {/* <ContactoFAQSection data={sections['contacto_faq']} items={items['contacto_faq']} /> */}
    </main>
  );
}
