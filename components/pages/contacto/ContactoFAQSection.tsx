"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FadeContent } from "@/components/react-bits/fade-content";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    question: "¿Cómo solicitar una cotización formal para procesos de licitación pública?",
    answer:
      "Puedes enviarnos los términos de referencia o pliegos de condiciones a través de nuestro formulario de contacto o directamente al correo contacto@spectrump.com.co. Nuestro departamento de ingeniería y licitaciones evaluará los requerimientos técnicos y presentará la propuesta económica y técnica ajustada a los estándares normativos de Colombia.",
  },
  {
    question: "¿SPECTRUMP cuenta con cobertura en zonas rurales y apartadas del país?",
    answer:
      "Sí. SPECTRUMP COLOMBIA está especializada en el despliegue de infraestructura de conectividad e instalaciones solares fotovoltaicas en zonas rurales, Zonas No Interconectadas (ZNI) y territorios de difícil acceso en todo el territorio nacional.",
  },
  {
    question: "¿Qué garantía y soporte técnico incluyen las estaciones inteligentes ECONECTA®?",
    answer:
      "Todas nuestras soluciones ECONECTA® incluyen garantía integral sobre estructura física, paneles solares, banco de baterías y equipos de telecomunicaciones, además de servicio de monitoreo remoto continuo, soporte técnico y planes de mantenimiento preventivo y correctivo.",
  },
  {
    question: "¿Ofrecen venta y despacho de equipos individuales de energía solar?",
    answer:
      "Sí. Disponemos de un catálogo de más de 235 referencias en paneles solares, inversores, controladores MPPT, baterías de litio/gel y accesorios de montaje para entrega a nivel nacional.",
  },
];

export function ContactoFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((current) => (current === idx ? null : idx));
  };

  return (
    <section className="py-20 sm:py-24 bg-white relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeContent delay={0.1} duration={0.8}>
          <div className="text-center space-y-3 mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-sans tracking-tight">
              Respuestas Rápidas para tus Proyectos
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-sans">
              Resolvemos tus dudas sobre contratación, plazos de entrega y soluciones tecnológicas.
            </p>
          </div>
        </FadeContent>

        <FadeContent delay={0.2} duration={0.8}>
          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/90 overflow-hidden bg-white shadow-xs transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-sans font-bold text-slate-900 text-sm sm:text-base hover:text-[#0052CC] transition-colors focus:outline-none cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 text-slate-400 transition-transform duration-300 flex-shrink-0",
                        isOpen && "rotate-180 text-[#0052CC]"
                      )}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-sm text-slate-600 font-sans leading-relaxed border-t border-slate-100 pt-4 animate-in fade-in duration-200">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </FadeContent>
      </div>
    </section>
  );
}
