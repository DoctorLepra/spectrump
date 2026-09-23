import React, { Suspense } from "react";
import { ProductsHero } from "@/components/pages/productos/ProductsHero";
import { ProductsCatalogView } from "@/components/pages/productos/ProductsCatalogView";
import { PreFooterBanner } from "@/components/pages/home/PreFooterBanner";
import { createClient } from "@/lib/supabase/server";

export const revalidate = 60; // Revalidate cache every 60 seconds

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

  return { categories, products };
}

export default async function ProductosPage() {
  const { categories, products } = await getProductsData();

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      {/* 1. Symmetrical Hero Section */}
      <ProductsHero />

      {/* 2. Interactive Solar Products Catalog (Sidebar Filters + Products Grid) */}
      <Suspense fallback={<div className="py-20 text-center font-mono text-sm text-slate-400">Cargando catálogo de productos...</div>}>
        <ProductsCatalogView categories={categories} products={products} />
      </Suspense>

      {/* 3. Pre-Footer Call to Action Banner */}
      <PreFooterBanner />
    </div>
  );
}
