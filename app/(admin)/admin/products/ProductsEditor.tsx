"use client";

import React, { useState, useMemo } from "react";
import { createClient } from "@/lib/supabase/client";
import { Plus, Edit2, Trash2, CheckCircle, AlertTriangle, X, Search, Filter, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";
import { revalidateProducts } from "./actions";
import { CldUploadWidget } from 'next-cloudinary';

export function ProductsEditor({ initialProducts, categories }: { initialProducts: any[], categories: any[] }) {
  const supabase = createClient();
  const [products, setProducts] = useState(initialProducts);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<any>({});
  const [message, setMessage] = useState<{type: 'success' | 'error', text: string} | null>(null);
  const [saving, setSaving] = useState(false);

  // Filters & Pagination state
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const showToast = (type: 'success' | 'error', text: string) => {
    setMessage({ type, text });
    setTimeout(() => {
      setMessage(null);
    }, 4000);
  };

  const startEdit = (product: any) => {
    setEditingId(product.id);
    setFormData({ 
      name: product.name || "",
      description: product.description ? product.description.replace(/^Marca:\s*/i, '').trim() : "",
      category_id: product.category_id || categories[0]?.id || "",
      features: product.features && Array.isArray(product.features) ? product.features.join('\n') : '',
      image_url: product.image_url || "",
      is_active: product.is_active !== undefined ? product.is_active : true,
      sort_order: product.sort_order || 0
    });
  };

  const startNew = () => {
    setEditingId("new");
    setFormData({
      name: "",
      description: "",
      category_id: categories[0]?.id || "",
      features: "",
      image_url: "",
      is_active: true,
      sort_order: 0
    });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setFormData({});
  };

  const handleDelete = async (id: string) => {
    if (!confirm("¿Estás seguro de que deseas eliminar este producto?")) return;
    
    try {
      const { error } = await supabase.from('products').delete().eq('id', id);
      if (error) throw error;
      setProducts(products.filter(p => p.id !== id));
      await revalidateProducts();
      showToast('success', 'Producto eliminado exitosamente.');
    } catch (e: any) {
      showToast('error', e.message || 'Error al eliminar el producto.');
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage(null);

    try {
      const slug = formData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '') + '-' + Math.floor(Math.random() * 10000);
      const finalDescription = formData.description?.trim() ? `Marca: ${formData.description.trim()}` : '';
      
      const payload = {
        name: formData.name,
        description: finalDescription,
        category_id: parseInt(formData.category_id, 10),
        features: [],
        image_url: formData.image_url,
        is_active: formData.is_active,
        sort_order: 0
      };

      if (editingId === "new") {
        const { data, error } = await supabase.from('products').insert([{ ...payload, slug }]).select();
        if (error) throw error;
        setProducts([...products, data[0]]);
        showToast('success', 'Producto creado correctamente.');
      } else {
        const { error } = await supabase.from('products').update(payload).eq('id', editingId);
        if (error) throw error;
        setProducts(products.map(p => p.id === editingId ? { ...p, ...payload } : p));
        showToast('success', 'Producto actualizado correctamente.');
      }
      await revalidateProducts();
      setEditingId(null);
    } catch (e: any) {
      showToast('error', e.message || 'Error al guardar los cambios.');
    } finally {
      setSaving(false);
    }
  };

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // Name search
      const matchesSearch = searchQuery === "" || p.name?.toLowerCase().includes(searchQuery.toLowerCase());
      // Category filter
      const matchesCategory = categoryFilter === "all" || p.category_id?.toString() === categoryFilter;
      // Status filter
      const matchesStatus = statusFilter === "all" || (statusFilter === "active" ? p.is_active : !p.is_active);

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [products, searchQuery, categoryFilter, statusFilter]);

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentItems = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Reset page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, categoryFilter, statusFilter]);

  return (
    <div className="space-y-6 relative">
      {/* Toast Notification */}
      {message && (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 z-[100]">
          <div className={`animate-in slide-in-from-top-12 fade-in duration-300 px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 font-semibold ${message.type === 'success' ? 'bg-emerald-600 text-white' : 'bg-red-600 text-white'}`}>
            {message.type === 'success' ? <CheckCircle className="w-5 h-5" /> : <AlertTriangle className="w-5 h-5" />}
            <span>{message.text}</span>
          </div>
        </div>
      )}

      {editingId !== null ? (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm animate-in fade-in">
          <div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-4">
            <h2 className="text-xl font-bold text-slate-800">
              {editingId === "new" ? 'Nuevo Producto' : 'Editar Producto'}
            </h2>
            <button onClick={cancelEdit} className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-50">
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSave} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-700">Nombre del Producto</label>
                <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5" />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-700">Categoría</label>
                <select required value={formData.category_id} onChange={e => setFormData({...formData, category_id: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5">
                  {categories.map(c => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-700">Estado</label>
                <select required value={formData.is_active ? "true" : "false"} onChange={e => setFormData({...formData, is_active: e.target.value === "true"})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5">
                  <option value="true">Activo</option>
                  <option value="false">Inactivo</option>
                </select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="block text-sm font-bold text-slate-700">Imagen del producto</label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input type="text" value={formData.image_url} onChange={e => setFormData({...formData, image_url: e.target.value})} className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5" placeholder="https://..." />
                  <CldUploadWidget 
                    signatureEndpoint="/api/cloudinary/sign"
                    options={{ sources: ['local', 'url'], multiple: false, resourceType: 'image' }}
                    onSuccess={(result: any) => {
                      const url = result.info.secure_url;
                      const optimizedUrl = result.info.format !== 'svg' ? url.replace('/upload/', '/upload/q_auto,f_auto/') : url;
                      setFormData({...formData, image_url: optimizedUrl});
                    }}
                  >
                    {({ open }) => (
                      <button
                        type="button"
                        onClick={() => open()}
                        className="bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-600 border border-slate-200 hover:border-blue-200 px-4 py-2.5 rounded-xl font-bold transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                      >
                        <ImageIcon className="w-4 h-4" />
                        Subir Imagen
                      </button>
                    )}
                  </CldUploadWidget>
                </div>
                <p className="text-xs text-slate-500 mt-1">Recomendaciones: Tamaño sugerido 800x800px. Formato PNG con fondo transparente o fondo blanco puro para mejor visualización en el catálogo.</p>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-700">Marca</label>
                <input type="text" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5" placeholder="Ej. Hoymiles" />
              </div>
            </div>
            
            <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
              <button type="button" onClick={cancelEdit} className="px-5 py-2.5 rounded-xl font-bold text-slate-600 hover:bg-slate-100 transition-colors">
                Cancelar
              </button>
              <button disabled={saving} type="submit" className="px-5 py-2.5 rounded-xl font-bold bg-blue-600 text-white hover:bg-blue-700 transition-colors disabled:opacity-50">
                {saving ? 'Guardando...' : 'Guardar Producto'}
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          
          {/* Header & Action bar */}
          <div className="p-4 sm:p-6 border-b border-slate-200 bg-slate-50 space-y-4 sm:space-y-0 sm:flex sm:items-center sm:justify-between">
            <h2 className="font-bold text-slate-800 text-lg">Catálogo de Productos ({filteredProducts.length})</h2>
            <button onClick={startNew} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2 text-sm transition-colors w-full sm:w-auto justify-center">
              <Plus className="w-4 h-4" />
              Nuevo Producto
            </button>
          </div>

          {/* Filters bar */}
          <div className="p-4 border-b border-slate-100 bg-white grid grid-cols-1 sm:grid-cols-12 gap-4">
            <div className="sm:col-span-6 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar por nombre..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="sm:col-span-3">
              <select 
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">Todas las Categorías</option>
                {categories.map(c => (
                  <option key={c.id} value={c.id.toString()}>{c.name}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-3">
              <select 
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">Todos los Estados</option>
                <option value="active">Activos</option>
                <option value="inactive">Inactivos</option>
              </select>
            </div>
          </div>

          {/* List */}
          <div className="divide-y divide-slate-100">
            {currentItems.map(product => (
              <div key={product.id} className="p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-6 hover:bg-slate-50/50 transition-colors">
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <div className="w-16 h-16 rounded-xl bg-slate-200 overflow-hidden shrink-0 border border-slate-200">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    {product.image_url ? (
                      <img src={product.image_url} alt={product.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-400 text-xs text-center p-2 leading-tight bg-slate-100">Sin img</div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 leading-snug">{product.name}</h3>
                    <p className="text-sm text-slate-500">{categories.find(c => c.id === product.category_id)?.name || "Categoría desconocida"}</p>
                    <div className="mt-1.5 flex gap-2">
                      <span className={`inline-flex items-center text-[10px] uppercase font-bold px-2 py-0.5 rounded ${product.is_active ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-600'}`}>
                        {product.is_active ? 'Activo' : 'Inactivo'}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                  <button onClick={() => startEdit(product)} className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors border border-transparent hover:border-blue-200" title="Editar">
                    <Edit2 className="w-5 h-5" />
                  </button>
                  <button onClick={() => handleDelete(product.id)} className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors border border-transparent hover:border-red-200" title="Eliminar">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
            {currentItems.length === 0 && (
              <div className="p-16 text-center text-slate-500">
                No se encontraron productos que coincidan con la búsqueda.
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
              <span className="text-sm text-slate-500">
                Mostrando {((currentPage - 1) * itemsPerPage) + 1} a {Math.min(currentPage * itemsPerPage, filteredProducts.length)} de {filteredProducts.length} productos
              </span>
              <div className="flex items-center gap-1">
                <button 
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg hover:bg-slate-200 disabled:opacity-50 disabled:hover:bg-transparent text-slate-700 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-sm font-medium px-4">
                  {currentPage} / {totalPages}
                </span>
                <button 
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg hover:bg-slate-200 disabled:opacity-50 disabled:hover:bg-transparent text-slate-700 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
