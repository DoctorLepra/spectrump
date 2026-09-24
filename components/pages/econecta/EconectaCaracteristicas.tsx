"use client";

import React from "react";
import * as LucideIcons from "lucide-react";
import { FadeContent } from "@/components/react-bits/fade-content";

const FALLBACK_FEATURES = [
  { icon: "SunMedium", title: "Energía Solar" },
  { icon: "Wifi", title: "Conectividad" },
  { icon: "ShieldCheck", title: "Videovigilancia" },
  { icon: "Monitor", title: "Servicios Digitales" },
];

export function EconectaCaracteristicas({ data }: { data?: any }) {
  const displayItems = data?.features_list && Array.isArray(data.features_list) && data.features_list.length > 0 
    ? data.features_list 
    : FALLBACK_FEATURES;

  return (
    <section id="caracteristicas" className="scroll-mt-24 py-12 sm:py-16 bg-white border-b border-slate-200/80 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grid with Vertical Dividers matching Style */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${displayItems.length} gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/80`}>
          {displayItems.map((item: any, idx: number) => {
            const IconComp = (LucideIcons as any)[item.icon] || LucideIcons.Monitor;

            return (
              <FadeContent key={idx} delay={0.08 * idx} duration={0.6}>
                <div className="pt-6 sm:pt-0 px-4 text-center flex flex-col items-center group cursor-pointer hover:-translate-y-1 transition-transform">
                  <div className="mb-4 p-4 rounded-2xl bg-blue-50/80 text-[#0052CC] group-hover:bg-blue-100/80 group-hover:scale-110 transition-all duration-300">
                    <IconComp className="w-8 h-8 text-[#0052CC]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 font-sans group-hover:text-[#0052CC] transition-colors">
                    {item.title}
                  </h3>
                </div>
              </FadeContent>
            );
          })}
        </div>

      </div>
    </section>
  );
}
