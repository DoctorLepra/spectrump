import React from "react";
import type { Metadata } from "next";
import { EconectaHero } from "@/components/pages/econecta/EconectaHero";
import { EconectaCaracteristicas } from "@/components/pages/econecta/EconectaCaracteristicas";
import { EconectaDescripcion } from "@/components/pages/econecta/EconectaDescripcion";
import { EconectaModelos } from "@/components/pages/econecta/EconectaModelos";
import { EconectaCierreDescripcion } from "@/components/pages/econecta/EconectaCierreDescripcion";
import { PreFooterBanner } from "@/components/pages/home/PreFooterBanner";
import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "ECONECTA® | Estructuras Inteligentes de Energía y Conectividad - SPECTRUMP",
  description:
    "Descubre ECONECTA®, la infraestructura inteligente y autosostenible de SPECTRUMP que integra energía solar, conectividad, videovigilancia y servicios digitales.",
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

  return (
    <main className="min-h-screen flex flex-col bg-white text-slate-900">
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
