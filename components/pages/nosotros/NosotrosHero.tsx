"use client";

import React from "react";
import { Badge } from "@/components/shared/Badge";

export function NosotrosHero() {
  return (
    <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 text-center bg-black overflow-hidden">
      {/* Ambient gradient glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-gradient-to-tr from-[#0066FF]/20 to-[#00D4FF]/20 blur-[120px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <Badge variant="cyan" size="sm" dot className="mb-6">
          // IDENTIDAD CORPORATIVA
        </Badge>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-sans leading-tight">
          Ingeniería y Conectividad con{" "}
          <span className="text-gradient-electric">Compromiso de País</span>
        </h1>

        <p className="mt-6 text-base sm:text-lg text-zinc-400 font-mono max-w-2xl mx-auto leading-relaxed">
          En SPRECTRUMP COLOMBIA integramos tecnología de punta en telecomunicaciones y energías limpias para fortalecer la infraestructura estratégica de Colombia.
        </p>
      </div>
    </section>
  );
}
