import React, { Suspense } from "react";
import type { Metadata } from "next";
import { ProductsHero } from "@/components/pages/productos/ProductsHero";
import { ProductsCatalogView } from "@/components/pages/productos/ProductsCatalogView";
import { PreFooterBanner } from "@/components/pages/home/PreFooterBanner";
import { createClient } from "@/lib/supabase/server";

import { JsonLd, generateBreadcrumbSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Catálogo de Productos y Suministros Tecnológicos",
  description:
    "Catálogo de suministros tecnológicos y energéticos de SPECTRUMP: módulos solares fotovoltaicos, baterías de litio, inversores, antenas y componentes de telecomunicaciones en Colombia.",
  alternates: {
    canonical: "/productos",
  },
  openGraph: {
    title: "Catálogo de Productos y Suministros Tecnológicos | SPECTRUMP Colombia",
    description:
      "Equipos homologados y suministros de alta fiabilidad para proyectos de energía solar, telecomunicaciones y conectividad en Colombia.",
    url: "/productos",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Catálogo de Productos y Suministros Tecnológicos | SPECTRUMP Colombia",
    description:
      "Equipos homologados y suministros de alta fiabilidad para proyectos de energía solar, telecomunicaciones y conectividad en Colombia.",
  },
};

export const dynamic = 'force-dynamic';

async function getProductsData() {
  const supabase = createClient();
  
  // Fetch categories
  const { data: categoriesData } = await supabase
    .from('categories')
    .select('id, name, slug')
    .order('name');
    
  // Fetch products
  const { data: productsData } = await supabase
    .from('products')
    .select(`
      id,
      name,
      slug,
      description,
      image_url,
      categories (
        name,
        slug
      )
    `)
    .eq('is_active', true)
    .order('sort_order', { ascending: true })
    .order('created_at', { ascending: false });

  // Fetch page sections
  const { data: sectionsData } = await supabase
    .from('page_sections')
    .select('section_key, content')
    .in('section_key', ['productos_hero', 'inicio_prefooter']);

  const sectionsMap = (sectionsData || []).reduce((acc: any, curr: any) => {
    acc[curr.section_key] = curr.content;
    return acc;
  }, {});

  const categories = categoriesData || [];
  
  const products = (productsData || []).map((p: any) => ({
    id: p.id,
    title: p.name,
    slug: p.slug,
    brand: p.description?.replace('Marca: ', '') || 'SPECTRUMP',
    category: p.categories?.name || 'Uncategorized',
    categorySlug: p.categories?.slug || 'uncategorized',
    imageUrl: p.image_url,
    whatsappMsg: `Hola SPECTRUMP, quisiera cotizar el producto: ${p.name}`
  }));

  return { categories, products, sectionsMap };
}

export default async function ProductosPage() {
  const { categories, products, sectionsMap } = await getProductsData();

  return (
    <main className="min-h-screen flex flex-col bg-white text-slate-900">
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Inicio", item: "/" },
          { name: "Productos", item: "/productos" },
        ])}
      />
      {/* 1. Symmetrical Hero Section */}
      <ProductsHero data={sectionsMap['productos_hero']} />

      {/* 2. Interactive Solar Products Catalog (Sidebar Filters + Products Grid) */}
      <Suspense fallback={<div className="py-20 text-center font-mono text-sm text-slate-400">Cargando catálogo de productos...</div>}>
        <ProductsCatalogView categories={categories} products={products} />
      </Suspense>

      {/* 3. Pre-Footer Call to Action Banner */}
      <PreFooterBanner data={sectionsMap['inicio_prefooter']} />
    </main>
  );
}
