import React from "react";
import { NosotrosHero } from "@/components/pages/nosotros/NosotrosHero";
import { NosotrosHistoria } from "@/components/pages/nosotros/NosotrosHistoria";
import { MissionVision } from "@/components/pages/nosotros/MissionVision";
import { CasosExitoSection } from "@/components/pages/nosotros/CasosExitoSection";
import { OfficeLocationMap } from "@/components/pages/nosotros/OfficeLocationMap";
import { NormativaConceptualMap } from "@/components/pages/nosotros/NormativaConceptualMap";
import { ProteccionInfantilSection } from "@/components/pages/nosotros/ProteccionInfantilSection";
import { PreFooterBanner } from "@/components/pages/home/PreFooterBanner";
import { createClient } from "@/lib/supabase/server";

export const revalidate = 60;

async function getNosotrosPageData() {
  const supabase = createClient();
  
  // Fetch nosotros sections
  const { data: nosotrosSections } = await supabase
    .from('page_sections')
    .select('section_key, content')
    .eq('page_id', 'nosotros');

  // Fetch inicio prefooter as fallback/global
  const { data: inicioPrefooter } = await supabase
    .from('page_sections')
    .select('section_key, content')
    .eq('page_id', 'inicio')
    .eq('section_key', 'inicio_prefooter');

  const { data: sectionItems } = await supabase
    .from('section_items')
    .select('*')
    .like('section_key', 'nosotros_%')
    .eq('is_active', true)
    .order('sort_order', { ascending: true });

  const sectionsMap = (nosotrosSections || []).reduce((acc: any, curr: any) => {
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

export default async function NosotrosPage() {
  const { sections, items } = await getNosotrosPageData();

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      {/* 1. Hero Section - Sobre Nosotros */}
      <NosotrosHero data={sections['nosotros_hero']} />

      {/* 2. Historia / Presentación SPECTRUMP */}
      <NosotrosHistoria data={sections['nosotros_historia']} />

      {/* 3. Misión, Visión, Política & Valores Corporativos */}
      <MissionVision data={sections['nosotros_mision_vision']} items={items['nosotros_valores']} />

      {/* 4. Casos de Éxito y Experiencia (Accordion Gallery + DotField) */}
      <CasosExitoSection data={sections['nosotros_casos']} items={items['nosotros_casos']} />

      {/* 5. Ubicación de la Oficina Principal (mapcn / MapLibre GL) */}
      <OfficeLocationMap data={sections['nosotros_ubicacion']} />

      {/* 6. Mapa Conceptual: Protección al Usuario y Normativa */}
      <NormativaConceptualMap data={sections['nosotros_normativa']} items={items['nosotros_normativa']} />

      {/* 7. Sección de Protección Infantil (Ley 679 de 2001 & Canales de Denuncia) */}
      <ProteccionInfantilSection data={sections['nosotros_infantil']} />

      {/* 8. Pre-Footer Glassmorphic Card */}
      <PreFooterBanner data={sections['inicio_prefooter']} />
    </div>
  );
}
