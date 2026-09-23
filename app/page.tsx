import React from "react";
import { HeroSection } from "@/components/pages/home/HeroSection";
import { HistoriaSection } from "@/components/pages/home/HistoriaSection";
import { CapacidadesGrid } from "@/components/pages/home/CapacidadesGrid";
import { EconectaSection } from "@/components/pages/home/EconectaSection";
import { ProyectosImpacto } from "@/components/pages/home/ProyectosImpacto";
import { VentajasCompetitivas } from "@/components/pages/home/VentajasCompetitivas";
import { PreFooterBanner } from "@/components/pages/home/PreFooterBanner";
import { createClient } from "@/lib/supabase/server";

export const revalidate = 60;

async function getHomePageData() {
  const supabase = createClient();
  const { data: sections } = await supabase
    .from('page_sections')
    .select('section_key, content')
    .eq('page_id', 'inicio');

  const { data: sectionItems } = await supabase
    .from('section_items')
    .select('*')
    .like('section_key', 'inicio_%')
    .eq('is_active', true)
    .order('sort_order', { ascending: true });

  const sectionsMap = (sections || []).reduce((acc: any, curr: any) => {
    acc[curr.section_key] = curr.content;
    return acc;
  }, {});

  const itemsMap = (sectionItems || []).reduce((acc: any, curr: any) => {
    if (!acc[curr.section_key]) acc[curr.section_key] = [];
    acc[curr.section_key].push(curr);
    return acc;
  }, {});

  return { sections: sectionsMap, items: itemsMap };
}

export default async function HomePage() {
  const { sections, items } = await getHomePageData();

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      {/* 1. Hero Section with Video Background */}
      <HeroSection data={sections['inicio_hero']} />

      {/* 2. Sección Historia / Presentación SPECTRUMP */}
      <HistoriaSection data={sections['inicio_historia']} />

      {/* 3. Nuestras Capacidades (5-Column Grid) */}
      <CapacidadesGrid data={sections['inicio_capacidades']} items={items['inicio_capacidades']} />

      {/* 4. Nuestra Solución Destacada - ECONECTA® */}
      <EconectaSection data={sections['inicio_econecta']} items={items['inicio_econecta']} />

      {/* 5. Proyectos que Generan Impacto (3-Photo Grid) */}
      <ProyectosImpacto data={sections['inicio_proyectos']} items={items['inicio_proyectos']} />

      {/* 6. Ventajas Competitivas que Marcan la Diferencia (4 Cards Grid) */}
      <VentajasCompetitivas data={sections['inicio_ventajas']} items={items['inicio_ventajas']} />

      {/* 7. Pre-Footer Dark Navy Banner */}
      <PreFooterBanner data={sections['inicio_prefooter']} />
    </div>
  );
}
