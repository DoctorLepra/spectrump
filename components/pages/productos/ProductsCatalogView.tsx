"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import {
  Search,
  Filter,
  X,
  MessageSquareQuote,
  ArrowRight,
  Sun,
  Zap,
  BatteryCharging,
  Wrench,
  ShieldCheck,
  Package,
  Layers,
  Sparkles,
} from "lucide-react";
import { FadeContent } from "@/components/react-bits/fade-content";
import { cn } from "@/lib/utils";

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  "todos": Layers,
  "paneles-solares": Sun,
  "inversores": Zap,
  "controladores": Zap,
  "baterias": BatteryCharging,
  "estructuras": Wrench,
  "proteccion-y-accesorios": ShieldCheck,
  "equipos-portatiles": Package,
};

export interface CatalogCategory {
  id: string | number;
  name: string;
  slug: string;
}

export interface CatalogProduct {
  id: string;
  title: string;
  slug: string;
  brand: string;
  category: string;
  categorySlug: string;
  imageUrl: string;
  whatsappMsg: string;
}

interface ProductsCatalogViewProps {
  categories: CatalogCategory[];
  products: CatalogProduct[];
}

export function ProductsCatalogView({ categories, products }: ProductsCatalogViewProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Read initial category from URL (?cat=...)
  const initialCat = searchParams.get("cat") || "todos";

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCat);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState<boolean>(false);

  // Sync state if URL searchParams change
  useEffect(() => {
    const cat = searchParams.get("cat");
    if (cat) {
      setSelectedCategory(cat);
    } else {
      setSelectedCategory("todos");
    }
  }, [searchParams]);

  const handleCategorySelect = (catSlug: string) => {
    setSelectedCategory(catSlug);
    setIsMobileFilterOpen(false);
    if (catSlug === "todos") {
      router.push("/productos", { scroll: false });
    } else {
      router.push(`/productos?cat=${catSlug}`, { scroll: false });
    }
  };

  const handleClearFilters = () => {
    setSelectedCategory("todos");
    setSearchQuery("");
    router.push("/productos", { scroll: false });
  };

  // Filter products by category and search query
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "todos" || product.categorySlug === selectedCategory;

      const matchesSearch =
        searchQuery.trim() === "" ||
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Compute product count per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { todos: products.length };
    categories.forEach((cat) => {
      counts[cat.slug] = products.filter((p) => p.categorySlug === cat.slug).length;
    });
    return counts;
  }, []);

  return (
    <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200" id="catalogo-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Controls Bar: Search & Mobile Filter Button */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8 bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-xs">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por nombre, modelo o marca..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-9 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0052CC]/20 focus:border-[#0052CC] transition-all font-sans"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 rounded-full"
                aria-label="Borrar búsqueda"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Product Count & Mobile Filter Trigger */}
          <div className="flex items-center justify-between sm:justify-end gap-3">
            <span className="text-xs font-mono text-slate-500 font-medium">
              Mostrando <strong className="text-slate-900 font-bold">{filteredProducts.length}</strong> de {products.length} productos
            </span>

            {/* Mobile Filter Trigger Button */}
            <button
              type="button"
              onClick={() => setIsMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-1.5 bg-[#0052CC] text-white px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider shadow-sm active:scale-95 transition-all"
            >
              <Filter className="w-3.5 h-3.5" />
              <span>Filtros</span>
            </button>
          </div>
        </div>

        {/* Main Layout: Left Sidebar Filters + Right Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Desktop Left Sidebar Filters (3 Cols) */}
          <aside className="hidden lg:block lg:col-span-3 space-y-6 sticky top-28">
            <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                <div className="flex items-center gap-2 text-slate-900 font-extrabold text-sm font-sans">
                  <Filter className="w-4 h-4 text-[#0052CC]" />
                  <span>Categorías</span>
                </div>
                {(selectedCategory !== "todos" || searchQuery) && (
                  <button
                    type="button"
                    onClick={handleClearFilters}
                    className="text-[11px] font-mono text-[#0052CC] hover:underline cursor-pointer"
                  >
                    Limpiar
                  </button>
                )}
              </div>

              {/* Category Options List */}
              <div className="space-y-1">
                {/* Option: Todos */}
                <button
                  type="button"
                  onClick={() => handleCategorySelect("todos")}
                  className={cn(
                    "w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-sans transition-all text-left group",
                    selectedCategory === "todos"
                      ? "bg-[#0052CC] text-white font-bold shadow-xs"
                      : "text-slate-700 hover:bg-slate-100/80 font-medium"
                  )}
                >
                  <div className="flex items-center gap-2.5">
                    <Layers className={cn("w-4 h-4", selectedCategory === "todos" ? "text-white" : "text-slate-400 group-hover:text-[#0052CC]")} />
                    <span>Todos los productos</span>
                  </div>
                  <span className={cn("text-[11px] font-mono font-bold px-2 py-0.5 rounded-full", selectedCategory === "todos" ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500")}>
                    {categoryCounts["todos"]}
                  </span>
                </button>

                {/* Specific Categories */}
                {categories.map((cat) => {
                  const IconComp = CATEGORY_ICONS[cat.slug] || Sun;
                  const isSelected = selectedCategory === cat.slug;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => handleCategorySelect(cat.slug)}
                      className={cn(
                        "w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-sans transition-all text-left group",
                        isSelected
                          ? "bg-[#0052CC] text-white font-bold shadow-xs"
                          : "text-slate-700 hover:bg-slate-100/80 font-medium"
                      )}
                    >
                      <div className="flex items-center gap-2.5 truncate">
                        <IconComp className={cn("w-4 h-4 flex-shrink-0", isSelected ? "text-white" : "text-slate-400 group-hover:text-[#0052CC]")} />
                        <span className="truncate">{cat.name}</span>
                      </div>
                      <span className={cn("text-[11px] font-mono font-bold px-2 py-0.5 rounded-full flex-shrink-0 ml-2", isSelected ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500")}>
                        {categoryCounts[cat.slug] || 0}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Sidebar Corporate Help Callout */}
            <div className="bg-gradient-to-br from-[#061325] to-[#0A2540] text-white rounded-2xl p-5 border border-slate-800 shadow-md space-y-3">
              <span className="px-2.5 py-0.5 bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-mono font-bold uppercase rounded-md inline-block">
                Asesoría Técnica
              </span>
              <h4 className="text-sm font-extrabold font-sans">
                ¿Necesitas dimensionar tu proyecto solar?
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Nuestros ingenieros calculan la capacidad requerida y entregan cotizaciones con homologación RETIE.
              </p>
              <a
                href="https://wa.me/573209325989?text=Hola%20SPECTRUMP,%20solicito%20asesor%C3%ADa%20para%20dimensionamiento%20solar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#0052CC] hover:bg-[#0040A8] text-white text-xs font-bold uppercase tracking-wider py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-all"
              >
                <span>Contactar Ingeniero</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </aside>

          {/* Right Product Grid (9 Cols) */}
          <main className="lg:col-span-9">
            {filteredProducts.length === 0 ? (
              <div className="bg-white border border-slate-200/90 rounded-3xl p-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-slate-100 text-slate-400 mx-auto flex items-center justify-center">
                  <Search className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-extrabold text-slate-900 font-sans">
                  No se encontraron productos coincidentes
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-sans max-w-md mx-auto">
                  No hay resultados para tu búsqueda o filtro actual. Intenta con otros términos o restablece los filtros.
                </p>
                <button
                  type="button"
                  onClick={handleClearFilters}
                  className="bg-[#0052CC] hover:bg-[#0040A8] text-white text-xs font-bold uppercase tracking-wider py-3 px-6 rounded-xl transition-all shadow-sm"
                >
                  Restablecer Filtros
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product, idx) => {
                  const whatsappUrl = `https://wa.me/573209325989?text=${encodeURIComponent(product.whatsappMsg)}`;
                  return (
                    <FadeContent key={product.id} delay={Math.min(0.05 * (idx % 9), 0.3)} duration={0.5}>
                      <div className="bg-white border border-slate-200/90 rounded-2xl p-4 flex flex-col justify-between h-full hover:border-[#0052CC]/60 hover:shadow-xl transition-all duration-300 group">
                        
                        {/* Image Container */}
                        <div className="space-y-3">
                          <div className="relative w-full h-48 sm:h-52 rounded-xl overflow-hidden bg-white border border-slate-100 flex items-center justify-center">
                            <Image
                              src={product.imageUrl}
                              alt={product.title}
                              fill
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>

                          {/* Product Details */}
                          <div className="space-y-1.5 pt-1">
                            <div className="flex items-center justify-between">
                              <span className="text-[11px] font-mono font-bold text-[#0052CC] uppercase tracking-wider truncate">
                                {product.category}
                              </span>
                              <span className="text-[10px] font-mono text-slate-400">
                                {product.brand}
                              </span>
                            </div>

                            <h3 className="text-sm font-extrabold text-slate-900 font-sans leading-snug line-clamp-2 group-hover:text-[#0052CC] transition-colors" title={product.title}>
                              {product.title}
                            </h3>
                          </div>
                        </div>

                        {/* Card Bottom CTA Button */}
                        <div className="pt-4 mt-4 border-t border-slate-100">
                          <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-[#0052CC] hover:bg-[#0040A8] text-white font-sans text-xs font-bold uppercase tracking-wider py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-xs hover:shadow-md active:scale-95"
                          >
                            <MessageSquareQuote className="w-3.5 h-3.5" />
                            <span>Cotizar Producto</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                          </a>
                        </div>

                      </div>
                    </FadeContent>
                  );
                })}
              </div>
            )}
          </main>

        </div>
      </div>

      {/* Mobile Filters Drawer / Modal */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMobileFilterOpen(false)}
          />

          {/* Drawer Content */}
          <div className="relative ml-auto w-full max-w-xs bg-white h-full shadow-2xl p-6 flex flex-col justify-between overflow-y-auto z-10">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div className="flex items-center gap-2 text-slate-900 font-extrabold text-sm font-sans">
                  <Filter className="w-4 h-4 text-[#0052CC]" />
                  <span>Filtrar por Categoría</span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Category List */}
              <div className="space-y-1">
                <button
                  type="button"
                  onClick={() => handleCategorySelect("todos")}
                  className={cn(
                    "w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-sans transition-all text-left",
                    selectedCategory === "todos"
                      ? "bg-[#0052CC] text-white font-bold"
                      : "text-slate-700 hover:bg-slate-100"
                  )}
                >
                  <span>Todos los productos</span>
                  <span className="font-mono text-[11px] font-bold">{categoryCounts["todos"]}</span>
                </button>

                {categories.map((cat) => {
                  const isSelected = selectedCategory === cat.slug;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => handleCategorySelect(cat.slug)}
                      className={cn(
                        "w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-sans transition-all text-left",
                        isSelected
                          ? "bg-[#0052CC] text-white font-bold"
                          : "text-slate-700 hover:bg-slate-100"
                      )}
                    >
                      <span className="truncate">{cat.name}</span>
                      <span className="font-mono text-[11px] font-bold">{categoryCounts[cat.slug] || 0}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 mt-6 space-y-2">
              <button
                type="button"
                onClick={handleClearFilters}
                className="w-full py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl"
              >
                Limpiar Filtros
              </button>
              <button
                type="button"
                onClick={() => setIsMobileFilterOpen(false)}
                className="w-full bg-[#0052CC] text-white py-3 text-xs font-bold uppercase tracking-wider rounded-xl shadow-sm"
              >
                Ver {filteredProducts.length} Resultados
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
