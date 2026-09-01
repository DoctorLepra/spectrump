"use client";

import React from "react";
import AccordionGallery, { AccordionGalleryItem } from "@/components/AccordionGallery";
import { FadeContent } from "@/components/react-bits/fade-content";
import DotField from "@/components/react-bits/dot-field";

const CASOS_EXITO_ITEMS: AccordionGalleryItem[] = [
  {
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    label: "CONECTIVIDAD RURAL",
    subtitle: "Más de 350 Escuelas Conectadas",
    description:
      "Despliegue de infraestructura de fibra óptica y soluciones satelitales en zonas de difícil acceso para instituciones educativas en municipios apartados de Colombia.",
    features: ["Ancho de banda 1:1", "Alta disponibilidad 99.9%", "Soporte técnico 24/7"],
  },
  {
    image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
    label: "ENERGÍA SOLAR",
    subtitle: "Sistemas Fotovoltaicos Off-Grid",
    description:
      "Diseño e instalación de sistemas solares híbridos y parques fotovoltaicos autónomos para la energización ininterrumpida de torres de telecomunicaciones.",
    features: ["Baterías de Litio avanzadas", "Inversores de alta eficiencia", "Cero emisiones de CO2"],
  },
  {
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=80",
    label: "ECONECTA® STATIONS",
    subtitle: "Refugios de Conectividad y Seguridad",
    description:
      "Implementación de estaciones inteligentes comunitarias con energía solar, Wi-Fi libre de alta velocidad, videovigilancia y cargadores USB.",
    features: ["Puntos de carga solar", "Cámaras con Analítica de IA", "Botón de pánico de emergencia"],
  },
  {
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
    label: "REDES DE FIBRA",
    subtitle: "Infraestructura Troncal Nacional",
    description:
      "Construcción de anillos de fibra óptica con conmutación automática de rutas BGP4 para enlaces de alta capacidad en el sector empresarial y público.",
    features: ["Capacidad hasta 100 Gbps", "Peering directo IXP", "Resiliencia ante cortes"],
  },
  {
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80",
    label: "SEGURIDAD INTEGRAL",
    subtitle: "Videovigilancia Urbana & C4",
    description:
      "Integración de centros de control, cámaras de seguridad de alta definición y sensores de seguridad física para el resguardo de activos estratégicos.",
    features: ["Reconocimiento facial y de placas", "Integración con centros C4", "Cifrado de datos de punta a punta"],
  },
];

export function CasosExitoSection() {
  return (
    <section className="py-20 sm:py-24 bg-slate-950 text-white relative overflow-hidden border-b border-slate-800" id="experiencia">
      {/* Interactive DotField Background from React Bits */}
      <div className="absolute inset-0 w-full h-full pointer-events-auto opacity-60 z-0">
        <DotField
          dotRadius={1.5}
          dotSpacing={16}
          bulgeStrength={70}
          glowRadius={180}
          sparkle={false}
          waveAmplitude={0}
          gradientFrom="rgba(0, 136, 255, 0.45)"
          gradientTo="rgba(56, 189, 248, 0.25)"
          glowColor="rgba(0, 136, 255, 0.2)"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeContent delay={0.1} duration={0.8}>
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-[#38BDF8] font-sans text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              CASOS DE ÉXITO Y EXPERIENCIA
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-sans tracking-tight">
              Proyectos Realizados que Impulsan el Desarrollo
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
              Conoce nuestras ejecuciones más destacadas en conectividad, energía solar e infraestructura inteligente en Colombia.
            </p>
          </div>
        </FadeContent>

        <FadeContent delay={0.2} duration={0.8}>
          <div className="w-full">
            <AccordionGallery
              items={CASOS_EXITO_ITEMS}
              accentColor="#0088FF"
              overlayColor="#020617"
              height={540}
              radius={20}
              trigger="hover"
            />
          </div>
        </FadeContent>
      </div>
    </section>
  );
}
