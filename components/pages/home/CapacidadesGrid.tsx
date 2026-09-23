"use client";

import React from "react";
import * as LucideIcons from "lucide-react";
import { FadeContent } from "@/components/react-bits/fade-content";

const CAPACIDADES = [
  {
    id: "energia",
    title: "Energía",
    description: "Soluciones de energía solar fotovoltaica para un futuro más limpio.",
    icon: <LucideIcons.SunMedium className="w-8 h-8 text-[#0052CC]" />,
  },
  {
    id: "conectividad",
    title: "Conectividad",
    description: "Infraestructura de telecomunicaciones confiable y de alto rendimiento.",
    icon: <LucideIcons.Wifi className="w-8 h-8 text-[#0052CC]" />,
  },
  {
    id: "ingenieria",
    title: "Ingeniería",
    description: "Diseño, implementación y supervisión de proyectos de ingeniería con los más altos estándares.",
    icon: <LucideIcons.Settings className="w-8 h-8 text-[#0052CC]" />,
  },
  {
    id: "seguridad",
    title: "Seguridad",
    description: "Sistemas de seguridad física y electrónica para proteger lo que más importa.",
    icon: <LucideIcons.ShieldCheck className="w-8 h-8 text-[#0052CC]" />,
  },
  {
    id: "tecnologia",
    title: "Tecnología",
    description: "Soluciones tecnológicas innovadoras que optimizan operaciones y generan valor.",
    icon: <LucideIcons.Monitor className="w-8 h-8 text-[#0052CC]" />,
  },
];

export function CapacidadesGrid({ data, items }: { data?: any, items?: any[] }) {
  const title = data?.title || "Nuestras capacidades";
  
  // Prefer JSON items from data (CMS editor) over legacy section_items
  const customItems = data?.items && Array.isArray(data.items) && data.items.length > 0 ? data.items : null;
  const dbItems = items && items.length > 0 ? items : null;
  
  const displayItems = customItems || dbItems || CAPACIDADES;

  return (
    <section className="pt-10 sm:pt-12 pb-20 sm:pb-24 bg-white border-b border-slate-200/80 w-full" id="servicios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Blue Underline Accent */}
        <FadeContent delay={0.1} duration={0.6}>
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-sans tracking-tight">
              {title}
            </h2>
            <div className="w-12 h-1 bg-[#0052CC] mx-auto mt-3 rounded-full" />
          </div>
        </FadeContent>

        {/* 5 Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {displayItems.map((cap: any, idx: number) => {
            // Determine if it's from CMS JSON or DB Items
            const isJsonItem = !!cap.icon && typeof cap.icon === 'string';
            const isDbItem = 'title' in cap && !('icon' in cap && typeof cap.icon !== 'string') && !isJsonItem;
            
            // Resolve icon
            let FinalIcon = null;
            if (isJsonItem) {
              const IconComp = (LucideIcons as any)[cap.icon] || LucideIcons.Zap;
              FinalIcon = <IconComp className="w-8 h-8 text-[#0052CC]" />;
            } else if (isDbItem && cap.metadata?.icon) {
              const IconComp = (LucideIcons as any)[cap.metadata.icon] || LucideIcons.Settings;
              FinalIcon = <IconComp className="w-8 h-8 text-[#0052CC]" />;
            } else {
              FinalIcon = cap.icon; // fallback to hardcoded JSX
            }

            return (
              <FadeContent key={cap.id || idx} delay={0.1 * idx} duration={0.6}>
                <div className="pt-6 sm:pt-0 px-4 text-center flex flex-col items-center group cursor-pointer hover:-translate-y-1 transition-transform">
                  <div className="mb-4 p-3 rounded-2xl bg-blue-50/60 text-[#0052CC] group-hover:scale-110 transition-transform">
                    {FinalIcon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 font-sans mb-2 break-words w-full">
                    {cap.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-sans leading-relaxed break-words w-full">
                    {cap.description}
                  </p>
                </div>
              </FadeContent>
            );
          })}
        </div>
      </div>
    </section>
  );
}
