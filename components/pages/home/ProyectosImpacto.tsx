"use client";

import React from "react";
import { FadeContent } from "@/components/react-bits/fade-content";

const PROYECTOS = [
  {
    id: "energia-comunidades",
    title: "Energía Solar para Comunidades",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80",
    alt: "Instalación de paneles solares fotovoltaicos en comunidad rural",
  },
  {
    id: "conectividad-remota",
    title: "Conectividad en Zonas Remotas",
    image: "https://images.unsplash.com/photo-1544724793-cabc151767b4?auto=format&fit=crop&w=800&q=80",
    alt: "Torre de telecomunicaciones y antena en zona montañosa remota",
  },
  {
    id: "seguridad-integrada",
    title: "Seguridad y Tecnología Integrada",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80",
    alt: "Cámara de videovigilancia y nodo de tecnología solar en campo",
  },
];

export function ProyectosImpacto() {
  return (
    <section className="py-20 bg-white border-b border-slate-100" id="proyectos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeContent delay={0.1} duration={0.6}>
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-sans tracking-tight mb-3">
              Proyectos que generan impacto
            </h2>
            <p className="text-sm sm:text-base text-slate-500 font-sans leading-relaxed">
              Desarrollamos soluciones integrales que impulsan el desarrollo sostenible en comunidades rurales y zonas remotas.
            </p>
          </div>
        </FadeContent>

        {/* 3 Column Photo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROYECTOS.map((item, idx) => (
            <FadeContent key={item.id} delay={0.1 * idx} duration={0.6}>
              <div className="group cursor-pointer flex flex-col items-center">
                {/* Photo Frame */}
                <div className="w-full h-[220px] sm:h-[260px] rounded-2xl overflow-hidden shadow-sm border border-slate-200 mb-4 relative">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-slate-950/0 transition-colors" />
                </div>

                {/* Caption Title */}
                <h3 className="text-base font-bold text-slate-800 font-sans text-center group-hover:text-[#0052CC] transition-colors">
                  {item.title}
                </h3>
              </div>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  );
}
