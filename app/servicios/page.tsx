import React from "react";
import { ServiciosHero } from "@/components/pages/servicios/ServiciosHero";
import { ServiciosCatalog } from "@/components/pages/servicios/ServiciosCatalog";
import { EconectaSection } from "@/components/pages/home/EconectaSection";
import { PreFooterBanner } from "@/components/pages/home/PreFooterBanner";
import { createClient } from "@/lib/supabase/server";

export const revalidate = 60;

async function getServiciosPageData() {
  const supabase = createClient();
  const { data: sections } = await supabase
    .from('page_sections')
    .select('section_key, content')
    .in('section_key', ['servicios_hero', 'servicios_catalog', 'inicio_econecta', 'inicio_prefooter']);

  const { data: sectionItems } = await supabase
    .from('section_items')
    .select('*')
    .in('section_key', ['inicio_econecta'])
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

  return { sectionsMap, itemsMap };
}

export default async function ServiciosPage() {
  // We no longer fetch from 'services' table, using 'page_sections' instead
  const { sectionsMap, itemsMap } = await getServiciosPageData();

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      {/* 1. Hero Section - Servicios */}
      <ServiciosHero data={sectionsMap['servicios_hero']} />

      {/* 2. Catálogo Completo de Líneas de Servicio */}
      <ServiciosCatalog data={sectionsMap['servicios_catalog']} />

      {/* 3. Estaciones Integradas ECONECTA® */}
      <EconectaSection data={sectionsMap['inicio_econecta']} items={itemsMap['inicio_econecta']} />

      {/* 4. Pre-Footer Glassmorphic Call to Action Banner */}
      <PreFooterBanner data={sectionsMap['inicio_prefooter']} />
    </div>
  );
}
