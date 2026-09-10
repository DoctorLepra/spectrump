"use client";

import React from "react";
import {
  Wifi,
  Sun,
  Network,
  Zap,
  CheckCircle2,
  Building2,
  FileCheck,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import { FadeContent } from "@/components/react-bits/fade-content";

const SERVICES_DATA = [
  {
    id: "licitaciones-internet",
    category: "LICITACIONES & GOBIERNO",
    title: "Venta de Internet por Licitación Pública y Empresarial",
    subtitle: "Conectividad dedicada de alta disponibilidad para entidades estatales y corporativas.",
    icon: Wifi,
    color: "blue",
    features: [
      "Pliegos de licitación pública SECOP II y contratación estatal",
      "Enlaces dedicados simétricos (1:1) con SLA del 99.9%",
      "Conectividad rural e institucional en zonas de difícil acceso",
      "Monitoreo proactivo 24/7/365 desde Centro de Operaciones (NOC)",
      "Redes híbridas (Fibra Óptica + Enlaces de Microondas + Satelital)",
    ],
    highlight: "SLA 99.9% Garantizado",
  },
  {
    id: "energia-solar",
    category: "ENERGÍA RENOVABLE",
    title: "Sistemas de Energía Solar Fotovoltaica",
    subtitle: "Autogeneración solar limpia, sistemas aislados y microrredes para comunidades e industrias.",
    icon: Sun,
    color: "amber",
    features: [
      "Sistemas aislados de la red (OFF-GRID) con almacenamiento en baterías",
      "Sistemas de autogeneración conectados a red (ON-GRID / Híbridos)",
      "Cumplimiento normativo RETIE y resoluciones CREG 030 / 174",
      "Estudio de factibilidad técnica y optimización de beneficios tributarios UPME",
      "Mantenimiento preventivo y monitoreo telemétrico de generación",
    ],
    highlight: "Cumplimiento RETIE & UPME",
  },
  {
    id: "fibra-optica",
    category: "INFRAESTRUCTURA DE RED",
    title: "Redes de Fibra Óptica & Planta Externa",
    subtitle: "Diseño, tendido y fusión de redes de alta capacidad FTTH, GPON y backbones urbanos/rurales.",
    icon: Network,
    color: "emerald",
    features: [
      "Tendido aéreo y canalizado de fibra óptica monomodo/multimodo",
      "Empalmes por fusión, certificación OTDR y medición de potencia",
      "Montaje de gabinetes outdoor, nodos de distribución y salas de equipos",
      "Mantenimiento correctivo de emergencia con tiempos de respuesta SLA",
      "Obras civiles e ingeniería pasiva de telecomunicaciones",
    ],
    highlight: "Certificación OTDR",
  },
  {
    id: "ingenieria-econecta",
    category: "SOLUCIONES INTEGRALES",
    title: "Estaciones Integradas ECONECTA® & Soluciones Especiales",
    subtitle: "Infraestructura autónoma que combina generación solar con nodos de internet comunitario.",
    icon: Zap,
    color: "cyan",
    features: [
      "Kioskos solares de conectividad comunitaria para zonas rurales apartadas",
      "Puntos de recarga de energía solar para movilidad y dispositivos",
      "Sistemas de respaldo de energía ininterrumpida (UPS Industrial)",
      "Integración de sistemas de videovigilancia CCTV solar autónomo",
      "Proyectos llave en mano (EPC: Ingeniería, Procura y Construcción)",
    ],
    highlight: "Energía + Internet Autónomo",
  },
];

export function ServiciosCatalog() {
  return (
    <section className="py-20 sm:py-24 bg-white relative overflow-hidden border-b border-slate-200/80" id="catalogo-servicios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <FadeContent delay={0.1} duration={0.8}>
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-sans tracking-tight">
              Soluciones diseñadas para grandes retos
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed text-justify sm:text-center">
              Ofrecemos capacidades técnicas de ingeniería y operación adaptadas a los estándares exigidos por el Estado colombiano y el sector corporativo.
            </p>
          </div>
        </FadeContent>

        {/* Services Grid (2x2 Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {SERVICES_DATA.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <FadeContent key={service.id} delay={0.15 * (index + 1)} duration={0.6}>
                <div className="bg-slate-50/80 border border-slate-200/90 rounded-3xl p-7 sm:p-9 flex flex-col justify-between h-full hover:border-blue-300 hover:shadow-xl transition-all group">
                  <div className="space-y-6">
                    {/* Top Pill & Icon Header */}
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-white border border-slate-200 text-slate-700 text-xs font-mono font-bold uppercase tracking-wider rounded-lg shadow-xs">
                        {service.category}
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
                        {service.subtitle}
                      </p>
                    </div>

                    {/* Feature Checkmarks List */}
                    <div className="space-y-2.5 pt-2 border-t border-slate-200/80 font-sans">
                      {service.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-[#16A34A] flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom Bar */}
                  <div className="pt-6 border-t border-slate-200/80 mt-6 flex items-center justify-between">
                    <span className="px-3 py-1 bg-blue-100/70 text-[#0052CC] rounded-full text-xs font-bold font-sans">
                      {service.highlight}
                    </span>
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
