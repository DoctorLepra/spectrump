import React from "react";
import { ServiciosHero } from "@/components/pages/servicios/ServiciosHero";
import { ServiciosCatalog } from "@/components/pages/servicios/ServiciosCatalog";
import { EconectaSection } from "@/components/pages/home/EconectaSection";
import { PreFooterBanner } from "@/components/pages/home/PreFooterBanner";
import { createClient } from "@/lib/supabase/server";

export const revalidate = 60;

async function getServicesData() {
  const supabase = createClient();
  const { data } = await supabase
    .from('services')
    .select('*')
    .eq('is_active', true)
    .order('sort_order', { ascending: true });
  
  return data || [];
}

async function getSharedSectionsData() {
  const supabase = createClient();
  const { data: sections } = await supabase
    .from('page_sections')
    .select('section_key, content')
    .in('section_key', ['inicio_econecta', 'inicio_prefooter']);

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

  return { sharedSections: sectionsMap, sharedItems: itemsMap };
}

export default async function ServiciosPage() {
  const services = await getServicesData();
  const { sharedSections, sharedItems } = await getSharedSectionsData();

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      {/* 1. Hero Section - Servicios */}
      <ServiciosHero />

      {/* 2. Catálogo Completo de Líneas de Servicio */}
      <ServiciosCatalog services={services} />

      {/* 3. Estaciones Integradas ECONECTA® */}
      <EconectaSection data={sharedSections['inicio_econecta']} items={sharedItems['inicio_econecta']} />

      {/* 4. Pre-Footer Glassmorphic Call to Action Banner */}
      <PreFooterBanner data={sharedSections['inicio_prefooter']} />
    </div>
  );
}
