import React, { Suspense } from "react";
import { ProductsHero } from "@/components/pages/productos/ProductsHero";
import { ProductsCatalogView } from "@/components/pages/productos/ProductsCatalogView";
import { PreFooterBanner } from "@/components/pages/home/PreFooterBanner";

export default function ProductosPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      {/* 1. Symmetrical Hero Section */}
      <ProductsHero />

      {/* 2. Interactive Solar Products Catalog (Sidebar Filters + Products Grid) */}
      <Suspense fallback={<div className="py-20 text-center font-mono text-sm text-slate-400">Cargando catálogo de productos...</div>}>
        <ProductsCatalogView />
      </Suspense>

      {/* 3. Pre-Footer Call to Action Banner */}
      <PreFooterBanner />
    </div>
  );
}
