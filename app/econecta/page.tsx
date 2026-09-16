import React from "react";
import type { Metadata } from "next";
import { EconectaHero } from "@/components/pages/econecta/EconectaHero";
import { EconectaCaracteristicas } from "@/components/pages/econecta/EconectaCaracteristicas";
import { EconectaDescripcion } from "@/components/pages/econecta/EconectaDescripcion";
import { EconectaModelos } from "@/components/pages/econecta/EconectaModelos";
import { EconectaCierreDescripcion } from "@/components/pages/econecta/EconectaCierreDescripcion";
import { PreFooterBanner } from "@/components/pages/home/PreFooterBanner";

export const metadata: Metadata = {
  title: "ECONECTA® | Estructuras Inteligentes de Energía y Conectividad - SPECTRUMP",
  description:
    "Descubre ECONECTA®, la infraestructura inteligente y autosostenible de SPECTRUMP que integra energía solar, conectividad, videovigilancia y servicios digitales.",
};

export default function EconectaPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-slate-900">
      {/* 1. Hero Section con Video e Impacto Visual */}
      <EconectaHero />

      {/* 2. Sección de Características en Fila (4 Pilares) */}
      <EconectaCaracteristicas />

      {/* 3. Sección de Descripción Institucional (Fondo Slate-50) */}
      <EconectaDescripcion />

      {/* 4. Sección de Modelos de ECONECTA® */}
      <EconectaModelos />

      {/* 5. Segunda Sección de Descripción (Fondo Slate-50) */}
      <EconectaCierreDescripcion />

      {/* 6. Card CTA de Contacto */}
      <PreFooterBanner />
    </main>
  );
}
