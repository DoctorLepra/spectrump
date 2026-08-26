import React from "react";
import { HeroSection } from "@/components/pages/home/HeroSection";
import { HistoriaSection } from "@/components/pages/home/HistoriaSection";
import { CapacidadesGrid } from "@/components/pages/home/CapacidadesGrid";
import { EconectaSection } from "@/components/pages/home/EconectaSection";
import { ProyectosImpacto } from "@/components/pages/home/ProyectosImpacto";
import { VentajasCompetitivas } from "@/components/pages/home/VentajasCompetitivas";
import { PreFooterBanner } from "@/components/pages/home/PreFooterBanner";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      {/* 1. Hero Section with Video Background */}
      <HeroSection />

      {/* 2. Sección Historia / Presentación SPECTRUMP */}
      <HistoriaSection />

      {/* 3. Nuestras Capacidades (5-Column Grid) */}
      <CapacidadesGrid />

      {/* 4. Nuestra Solución Destacada - ECONECTA® */}
      <EconectaSection />

      {/* 5. Proyectos que Generan Impacto (3-Photo Grid) */}
      <ProyectosImpacto />

      {/* 6. Ventajas Competitivas que Marcan la Diferencia (4 Cards Grid) */}
      <VentajasCompetitivas />

      {/* 7. Pre-Footer Dark Navy Banner */}
      <PreFooterBanner />
    </div>
  );
}
