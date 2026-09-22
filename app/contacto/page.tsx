import React from "react";
import type { Metadata } from "next";
import { ContactoHero } from "@/components/pages/contacto/ContactoHero";
import { ContactFormSection } from "@/components/pages/contacto/ContactFormSection";
import { OfficeLocationMap } from "@/components/pages/nosotros/OfficeLocationMap";
import { ContactoFAQSection } from "@/components/pages/contacto/ContactoFAQSection";

export const metadata: Metadata = {
  title: "Contacto | Asesoría en Telecomunicaciones y Energía Solar - SPECTRUMP",
  description:
    "Ponte en contacto con SPECTRUMP COLOMBIA SAS. Asesoría técnica en licitaciones, energía solar fotovoltaica, soluciones ECONECTA® e infraestructura de conectividad.",
};

export default function ContactoPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-slate-900">
      {/* 1. Hero Section de Contacto */}
      <ContactoHero />

      {/* 2. Canales Directos y Formulario Interactivo */}
      <ContactFormSection />

      {/* 3. Mapa Interactivo de Oficinas y Coordenadas */}
      <OfficeLocationMap />

      {/* 4. Sección de Preguntas Frecuentes */}
      <ContactoFAQSection />
    </main>
  );
}
