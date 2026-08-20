import React from "react";
import { LegalFramework } from "@/components/pages/proteccion/LegalFramework";
import { SecurityMeasures } from "@/components/pages/proteccion/SecurityMeasures";
import { HotlineGrid } from "@/components/pages/proteccion/HotlineGrid";
import { SafetyBestPractices } from "@/components/pages/proteccion/SafetyBestPractices";
import { FadeContent } from "@/components/react-bits/fade-content";

export default function ProteccionInfantilPage() {
  return (
    <main className="min-h-screen flex flex-col bg-black text-white relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8 text-center bg-black overflow-hidden">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-gradient-to-tr from-[#0066FF]/20 to-[#00D4FF]/20 blur-[120px] pointer-events-none rounded-full animate-pulse"
          style={{ animationDuration: "9s" }}
          aria-hidden="true"
        />

        <FadeContent delay={0.1} duration={0.8}>
          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#00D4FF]/30 bg-[#00D4FF]/10 text-[#00D4FF] font-mono text-xs mb-6 uppercase shadow-[0_0_15px_rgba(0,212,255,0.15)]">
              <span className="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse" />
              <span>// LEY 679 DE 2001 // PROTECCIÓN A MENORES // CIBERSEGURIDAD</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-sans leading-tight">
              Compromiso Firme con la{" "}
              <span className="text-gradient-electric">Seguridad Digital Infantil</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-zinc-400 font-mono max-w-2xl mx-auto leading-relaxed">
              En SPRECTRUMP COLOMBIA asumimos un compromiso institucional ineludible contra la explotación, pornografía y violencia infantil en redes globales, aplicando medidas tecnológicas preventivas y facilitando canales directos de denuncia para la protección integral de niños, niñas y adolescentes.
            </p>
          </div>
        </FadeContent>
      </section>

      {/* Marco Legal Obligatorio */}
      <LegalFramework />

      {/* Mecanismos Técnicos y Acciones de Mitigación */}
      <SecurityMeasures />

      {/* Canales Oficiales de Denuncia */}
      <HotlineGrid />

      {/* Decálogo de Recomendaciones y Guía de Prevención */}
      <SafetyBestPractices />
    </main>
  );
}
