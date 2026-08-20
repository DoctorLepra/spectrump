import React from "react";
import { TelecomNorms } from "@/components/pages/normativa/TelecomNorms";
import { EnergyNorms } from "@/components/pages/normativa/EnergyNorms";
import { HabeasDataNotice } from "@/components/pages/normativa/HabeasDataNotice";
import { PQRBanner } from "@/components/pages/normativa/PQRBanner";
import { FadeContent } from "@/components/react-bits/fade-content";

export default function NormativaPage() {
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
              <span>// MARCO REGULATORIO COLOMBIA // COMPLIANCE & LEGAL</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-sans leading-tight">
              Transparencia, Legalidad y{" "}
              <span className="text-gradient-electric">Cumplimiento Normativo</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#00D4FF] font-mono max-w-2xl mx-auto leading-relaxed">
              Consulte las regulaciones, leyes colombianas y estándares de calidad que rigen nuestras operaciones de telecomunicaciones ante el Ministerio TIC (MinTIC) y la Comisión de Regulación de Comunicaciones (CRC), así como el marco de energía solar y protección de datos en todo el territorio nacional.
            </p>
          </div>
        </FadeContent>
      </section>

      {/* Marco Legal de Telecomunicaciones */}
      <TelecomNorms />

      {/* Marco de Transición Energética y Solar */}
      <EnergyNorms />

      {/* Habeas Data (Ley 1581) y Neutralidad en la Red */}
      <HabeasDataNotice />

      {/* Sistema de PQR */}
      <PQRBanner />
    </main>
  );
}
