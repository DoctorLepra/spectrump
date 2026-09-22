"use client";

import React from "react";
import { Clock, Globe, ShieldCheck } from "lucide-react";
import { FadeContent } from "@/components/react-bits/fade-content";

export function ContactoHero() {
  return (
    <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center pt-28 sm:pt-36 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 text-center bg-slate-950 text-white overflow-hidden border-b border-slate-800">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80"
          alt="Contacto SPECTRUMP COLOMBIA"
          className="w-full h-full object-cover object-center scale-[1.02]"
        />
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 w-full h-full bg-slate-950/80 backdrop-blur-[1px]" />
      </div>

      {/* Radiant Glowing Accent Bulbs */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-[#0052CC]/20 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-center">
        <FadeContent delay={0.1} duration={0.8}>
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Original Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-sans tracking-tight text-white leading-tight sm:leading-tight">
              Conectemos tu Próximo Proyecto con el <span className="text-[#38BDF8]">Futuro</span>
            </h1>

            {/* Cards Preserved (No description paragraph) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left max-w-3xl mx-auto">
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="p-2 rounded-xl bg-blue-500/20 text-blue-400">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white font-sans">Respuesta Ágil</h4>
                  <p className="text-[11px] text-slate-400 font-sans">Atención en menos de 24h</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white font-sans">Cobertura Nacional</h4>
                  <p className="text-[11px] text-slate-400 font-sans">Operaciones en toda Colombia</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="p-2 rounded-xl bg-blue-500/20 text-blue-400">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white font-sans">Licitaciones & RUP</h4>
                  <p className="text-[11px] text-slate-400 font-sans">Cumplimiento normativo</p>
                </div>
              </div>
            </div>
          </div>
        </FadeContent>
      </div>
    </section>
  );
}
