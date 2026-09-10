import React from "react";
import { ServiciosHero } from "@/components/pages/servicios/ServiciosHero";
import { ServiciosCatalog } from "@/components/pages/servicios/ServiciosCatalog";
import { EconectaSection } from "@/components/pages/home/EconectaSection";
import { PreFooterBanner } from "@/components/pages/home/PreFooterBanner";

export default function ServiciosPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      {/* 1. Hero Section - Servicios */}
      <ServiciosHero />

      {/* 2. Catálogo Completo de Líneas de Servicio */}
      <ServiciosCatalog />

      {/* 3. Estaciones Integradas ECONECTA® */}
      <EconectaSection />

      {/* 4. Pre-Footer Glassmorphic Call to Action Banner */}
      <PreFooterBanner />
    </div>
  );
}
