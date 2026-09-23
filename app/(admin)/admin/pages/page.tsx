import React from "react";
import Link from "next/link";
import { Home, Users, ShoppingBag, Settings, Sun, Phone, ArrowRight } from "lucide-react";
import { createClient } from "@/lib/supabase/server";

export const metadata = {
  title: "Gestión de Páginas | SPECTRUMP CMS",
};

export default async function PagesIndexPage() {
  const supabase = createClient();
  
  const pages = [
    { id: "inicio", title: "Inicio", icon: Home },
    { id: "nosotros", title: "Nosotros", icon: Users },
    { id: "productos", title: "Productos", icon: ShoppingBag },
    { id: "servicios", title: "Servicios", icon: Settings },
    { id: "econecta", title: "Econecta", icon: Sun },
    { id: "contacto", title: "Contacto", icon: Phone },
  ];

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Páginas del Sitio</h1>
        <p className="text-slate-600 mt-2">Selecciona una página para editar su contenido (textos, imágenes, videos).</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pages.map((page) => {
          const Icon = page.icon;
          return (
            <Link 
              key={page.id} 
              href={`/admin/pages/${page.id}`}
              className="relative overflow-hidden bg-[#0B2545] p-8 rounded-3xl border border-slate-700/60 shadow-xl hover:shadow-2xl hover:border-[#0052CC]/50 transition-all flex flex-col justify-between min-h-[200px] group"
            >
              {/* Large Faded Icon Aligned to the Left Background */}
              <div className="absolute -left-8 top-1/2 -translate-y-1/2 pointer-events-none opacity-[0.07] group-hover:opacity-10 transition-opacity text-white select-none">
                <Icon className="w-56 h-56" strokeWidth={1.5} />
              </div>

              {/* Subtle Gradient Glow in Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0052CC]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full justify-between gap-6">
                <h3 className="text-2xl font-extrabold text-white font-sans tracking-tight">
                  {page.title}
                </h3>
                
                <div className="self-end pt-4">
                  <div className="inline-flex items-center gap-2 bg-[#0052CC] text-white font-sans text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full shadow-lg group-hover:bg-[#0040A8] transition-all">
                    <span>EDITAR</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
