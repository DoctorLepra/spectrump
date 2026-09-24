"use client";

import React from "react";
import * as LucideIcons from "lucide-react";
import { FadeContent } from "@/components/react-bits/fade-content";
import { ArrowUpRight } from "lucide-react";

export function ServiciosCatalog({ data }: { data?: any }) {
  const title = data?.title || "Soluciones diseñadas para grandes retos";
  const subtitle = data?.subtitle || "Ofrecemos capacidades técnicas de ingeniería y operación adaptadas a los estándares exigidos por el Estado colombiano y el sector corporativo.";

  const defaultServices = [
    { badge: 'INFRAESTRUCTURA', title: 'Infraestructura Tecnológica', description: 'Centros de datos, conectividad de largo alcance, y sistemas de red empresarial avanzados.', icon: 'Network' },
    { badge: 'ENERGÍA', title: 'Soluciones Solares Autonómas', description: 'Sistemas de alimentación ininterrumpida y postes solares inteligentes Econecta.', icon: 'Sun' },
    { badge: 'TELECOM', title: 'Servicios de Internet Dedicado', description: 'Conectividad satelital y enlaces dedicados para zonas de difícil acceso e instituciones.', icon: 'Wifi' },
    { badge: 'SEGURIDAD', title: 'Ciberseguridad y Monitoreo', description: 'Gestión de firewalls, filtrado DNS, y auditoría de seguridad informática 24/7.', icon: 'ShieldCheck' }
  ];

  const services = data?.services_list && Array.isArray(data.services_list) && data.services_list.length > 0 ? data.services_list : defaultServices;

  return (
    <section className="py-20 sm:py-24 bg-white relative overflow-hidden border-b border-slate-200/80" id="catalogo-servicios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <FadeContent delay={0.1} duration={0.8}>
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-sans tracking-tight">
              {title}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed text-justify sm:text-center">
              {subtitle}
            </p>
          </div>
        </FadeContent>

        {/* Services Grid (2x2 Cards or up to 10) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {services.map((service: any, index: number) => {
            const IconComponent = (LucideIcons as any)[service.icon] || LucideIcons.Zap;
            return (
              <FadeContent key={index} delay={0.15 * (index + 1)} duration={0.6}>
                <div className="bg-slate-50/80 border border-slate-200/90 rounded-3xl p-7 sm:p-9 flex flex-col justify-between h-full hover:border-blue-300 hover:shadow-xl transition-all group">
                  <div className="space-y-6">
                    {/* Top Pill & Icon Header */}
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-white border border-slate-200 text-slate-700 text-xs font-mono font-bold uppercase tracking-wider rounded-lg shadow-xs">
                        {service.badge}
                      </span>
                      <div className="p-3 rounded-2xl bg-blue-50 border border-blue-100 text-[#0052CC] group-hover:bg-[#0052CC] group-hover:text-white transition-colors">
                        <IconComponent className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Title & Subtitle */}
                    <div className="space-y-2">
                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-sans group-hover:text-[#0052CC] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-slate-600 font-sans leading-relaxed text-justify">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Bottom Bar */}
                  <div className="pt-6 border-t border-slate-200/80 mt-6 flex items-center justify-between">
                    <a
                      href={`https://wa.me/573209325989?text=${encodeURIComponent(`Quisiera conocer más información acerca del servicio de ${service.title}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold font-sans text-slate-900 group-hover:text-[#0052CC] flex items-center gap-1 uppercase tracking-wider"
                    >
                      <span>Cotizar Servicio</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </FadeContent>
            );
          })}
        </div>

      </div>
    </section>
  );
}
