"use client";

import React from "react";
import { FadeContent } from "@/components/react-bits/fade-content";

export function HistoriaSection() {
  return (
    <section className="py-16 sm:py-20 bg-white w-full relative overflow-hidden" id="historia">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeContent delay={0.1} duration={0.8}>
          {/* 2-Column Row (Subtítulo y Párrafo en la misma fila) */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Subtítulo con Texto Destacado */}
            <div className="lg:col-span-5 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-sans tracking-tight leading-tight border-l-4 border-[#0052CC] pl-4">
                Infraestructura inteligente para{" "}
                <span className="text-[#0052CC]">comunidades conectadas</span>
              </h2>
            </div>

            {/* Right Column: Párrafo Informativo */}
            <div className="lg:col-span-7 text-left">
              <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed text-justify">
                En <strong>SPECTRUMP COLOMBIA S.A.S.</strong> transformamos los territorios mediante la implementación de redes de alta velocidad y sistemas de energía solar de alta confiabilidad. Contamos con amplia trayectoria ejecutando proyectos de conectividad de gran envergadura en zonas apartadas, cerrando la brecha digital y mejorando la calidad de vida de las comunidades.
              </p>
            </div>
          </div>

          {/* Centered 60% Width Divider Line */}
          <div className="w-[60%] mx-auto h-[1px] bg-slate-200/80 mt-10 sm:mt-12" aria-hidden="true" />
        </FadeContent>
      </div>
    </section>
  );
}
