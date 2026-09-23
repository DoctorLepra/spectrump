import React from "react";
import { createClient } from "@/lib/supabase/server";
import { ProductsEditor } from "./ProductsEditor";

export const metadata = {
  title: "Gestión de Productos | SPECTRUMP CMS",
};

export default async function ProductsAdminPage() {
  const supabase = createClient();
  
  const { data: products } = await supabase
    .from("products")
    .select("*")
    .order("id", { ascending: true });

  const { data: categories } = await supabase
    .from("categories")
    .select("*")
    .order("id", { ascending: true });

  return (
    <div className="p-8 space-y-6 max-w-7xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Gestión de Productos</h1>
        <p className="text-slate-600 mt-2">Agrega, edita y elimina productos del catálogo.</p>
      </div>

      <ProductsEditor initialProducts={products || []} categories={categories || []} />
    </div>
  );
}
