import React from "react";
import { createClient } from "@/lib/supabase/server";
import { ServicesEditor } from "./ServicesEditor";

export const metadata = {
  title: "Gestión de Servicios | SPECTRUMP CMS",
};

export default async function ServicesAdminPage() {
  const supabase = createClient();
  
  const { data: services } = await supabase
    .from("services")
    .select("*")
    .order("sort_order", { ascending: true });

  return (
    <div className="p-8 space-y-6 max-w-7xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Gestión de Servicios</h1>
        <p className="text-slate-600 mt-2">Agrega, edita y elimina servicios de tu catálogo.</p>
      </div>

      <ServicesEditor initialServices={services || []} />
    </div>
  );
}
