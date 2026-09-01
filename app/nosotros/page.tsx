import React from "react";
import { NosotrosHero } from "@/components/pages/nosotros/NosotrosHero";
import { NosotrosHistoria } from "@/components/pages/nosotros/NosotrosHistoria";
import { MissionVision } from "@/components/pages/nosotros/MissionVision";
import { CasosExitoSection } from "@/components/pages/nosotros/CasosExitoSection";
import { OfficeLocationMap } from "@/components/pages/nosotros/OfficeLocationMap";
import { NormativaConceptualMap } from "@/components/pages/nosotros/NormativaConceptualMap";
import { ProteccionInfantilSection } from "@/components/pages/nosotros/ProteccionInfantilSection";
import { PreFooterBanner } from "@/components/pages/home/PreFooterBanner";

export default function NosotrosPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      {/* 1. Hero Section - Sobre Nosotros */}
      <NosotrosHero />

      {/* 2. Historia / Presentación SPECTRUMP */}
      <NosotrosHistoria />

      {/* 3. Misión, Visión, Política & Valores Corporativos */}
      <MissionVision />

      {/* 4. Casos de Éxito y Experiencia (Accordion Gallery + DotField) */}
      <CasosExitoSection />

      {/* 5. Ubicación de la Oficina Principal (mapcn / MapLibre GL) */}
      <OfficeLocationMap />

      {/* 6. Mapa Conceptual: Protección al Usuario y Normativa */}
      <NormativaConceptualMap />

      {/* 7. Sección de Protección Infantil (Ley 679 de 2001 & Canales de Denuncia) */}
      <ProteccionInfantilSection />

      {/* 8. Pre-Footer Glassmorphic Card */}
      <PreFooterBanner />
    </div>
  );
}
