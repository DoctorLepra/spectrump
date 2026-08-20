"use client";

import React from "react";
import { FadeContent } from "@/components/react-bits/fade-content";
import { AccordionGallery, AccordionGalleryItem } from "@/components/react-bits/accordion-gallery";

const ECONECTA_ITEMS: AccordionGalleryItem[] = [
  {
    label: "ESSENTIAL",
    subtitle: "• Infraestructura Solar & Conectividad Base",
    image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Estructura solar + conectividad base",
      "Paneles solares, baterías e inversor",
      "Router MikroTik y Access Point WiFi",
      "Iluminación LED, tomas AC y USB-C",
      "Bancas y mesas · instalación y garantía",
    ],
  },
  {
    label: "Smart",
    subtitle: "• Todo lo del ESSENTIAL, y además:",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Cámaras IP y monitoreo remoto",
      "Pantalla informativa y gabinete inteligente",
      "Portal cautivo y sistema de administración",
      "Analítica básica e integración con la nube",
    ],
  },
  {
    label: "CITY 1",
    subtitle: "• Todo lo del Smart, y además:",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Inteligencia Artificial y analítica avanzada",
      "Sensores ambientales y botón SOS",
      "Megafonía IP y dashboard nacional",
      "Gestión multiestación · listo para Smart City",
    ],
  },
  {
    label: "Urban Pro",
    image: "https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=1200&q=80",
    description:
      "Integra conectividad, energía solar, videovigilancia, información digital e inteligencia artificial en una única plataforma diseñada para impulsar ciudades y territorios más seguros, sostenibles y conectados.",
  },
];

export function EconectaSection() {
  return (
    <section className="py-24 bg-[#0a0a0a] border-y border-[#1e1e1e] relative overflow-hidden" id="econecta">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <FadeContent delay={0.1} duration={0.6}>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FFB703]/30 bg-[#FFB703]/10 text-[#FFB703] font-mono text-xs mb-6 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#FFB703] animate-pulse" />
              <span>Plataforma Tecnológica Unificada</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-sans leading-tight">
              ECONECTA<span className="text-[#FFB703] text-3xl sm:text-4xl align-top ml-0.5">®</span>
            </h2>

            <p className="mt-6 text-base sm:text-lg text-zinc-300 font-mono leading-relaxed">
              Línea de soluciones de infraestructura inteligente creada para atender los desafíos de conectividad, transformación digital y sostenibilidad del sector público, privado y educativo. Integra múltiples disciplinas de ingeniería en una plataforma tecnológica unificada.
            </p>
          </div>
        </FadeContent>

        {/* React Bits Accordion Gallery Component */}
        <FadeContent delay={0.2} duration={0.8}>
          <div className="w-full">
            <AccordionGallery
              items={ECONECTA_ITEMS}
              defaultIndex={0}
              height={500}
              expandRatio={0.55}
              gap={14}
              radius={20}
              trigger="hover"
              accentColor="#FFB703"
              textColor="#ffffff"
            />
          </div>
        </FadeContent>
      </div>
    </section>
  );
}
