"use client";

import React, { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Plus, Edit2, Trash2, CheckCircle, AlertTriangle, X } from "lucide-react";

export function ProductsEditor({ initialProducts, categories }: { initialProducts: any[], categories: any[] }) {
  const supabase = createClient();
  const [products, setProducts] = useState(initialProducts);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState<any>({});
  const [message, setMessage] = useState<{type: 'success' | 'error', text: string} | null>(null);
  const [saving, setSaving] = useState(false);

  const startEdit = (product: any) => {
    setEditingId(product.id);
    setFormData({ ...product, features: product.features ? product.features.join('\n') : '' });
  };

  const startNew = () => {
    setEditingId(-1);
    setFormData({
      title: "",
      description: "",
      badge: "NUEVO",
      category: categories[0]?.id || "",
      features: "",
      image: "/images/products/default.jpg",
      status: "active"
    });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setFormData({});
  };

  const handleDelete = async (id: number) => {
    if (!confirm("¿Estás seguro de que deseas eliminar este producto?")) return;
    
    try {
      const { error } = await supabase.from('products').delete().eq('id', id);
      if (error) throw error;
      setProducts(products.filter(p => p.id !== id));
      setMessage({ type: 'success', text: 'Producto eliminado.' });
    } catch (e: any) {
      setMessage({ type: 'error', text: e.message || 'Error al eliminar.' });
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage(null);

    try {
      const featuresArray = formData.features.split('\n').map((f: string) => f.trim()).filter(Boolean);
      const payload = {
        title: formData.title,
        description: formData.description,
        badge: formData.badge,
        category: formData.category,
        features: featuresArray,
        image: formData.image,
        status: formData.status
      };

      if (editingId === -1) {
        // Create new
        const { data, error } = await supabase.from('products').insert([payload]).select();
        if (error) throw error;
        setProducts([...products, data[0]]);
        setMessage({ type: 'success', text: 'Producto creado correctamente.' });
      } else {
        // Update
        const { error } = await supabase.from('products').update(payload).eq('id', editingId);
        if (error) throw error;
        setProducts(products.map(p => p.id === editingId ? { ...p, ...payload } : p));
        setMessage({ type: 'success', text: 'Producto actualizado correctamente.' });
      }
      setEditingId(null);
    } catch (e: any) {
      setMessage({ type: 'error', text: e.message || 'Error al guardar.' });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      {message && (
        <div className={`p-4 rounded-xl flex items-center gap-3 ${message.type === 'success' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
          {message.type === 'success' ? <CheckCircle className="w-5 h-5" /> : <AlertTriangle className="w-5 h-5" />}
          <span>{message.text}</span>
        </div>
      )}

      {editingId !== null ? (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm animate-in fade-in">
          <div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-4">
            <h2 className="text-xl font-bold text-slate-800">
              {editingId === -1 ? 'Nuevo Producto' : 'Editar Producto'}
            </h2>
            <button onClick={cancelEdit} className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-50">
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSave} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-700">Título</label>
                <input required type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5" />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-700">Categoría</label>
                <select required value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5">
                  {categories.map(c => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-700">Badge (Etiqueta)</label>
                <input type="text" value={formData.badge} onChange={e => setFormData({...formData, badge: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5" />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-700">URL de Imagen</label>
                <input required type="text" value={formData.image} onChange={e => setFormData({...formData, image: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="block text-sm font-bold text-slate-700">Descripción</label>
                <textarea required rows={3} value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="block text-sm font-bold text-slate-700">Características (una por línea)</label>
                <textarea rows={5} value={formData.features} onChange={e => setFormData({...formData, features: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5" placeholder="Característica 1&#10;Característica 2" />
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
          <div className="p-6 border-b border-slate-200 flex justify-between items-center bg-slate-50">
            <h2 className="font-bold text-slate-800">Catálogo de Productos ({products.length})</h2>
            <button onClick={startNew} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2 text-sm transition-colors">
              <Plus className="w-4 h-4" />
              Nuevo Producto
            </button>
          </div>
          <div className="divide-y divide-slate-100">
            {products.map(product => (
              <div key={product.id} className="p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-6 hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <div className="w-16 h-16 rounded-xl bg-slate-200 overflow-hidden shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{product.title}</h3>
                    <p className="text-sm text-slate-500">{categories.find(c => c.id === product.category)?.name || product.category}</p>
                    <span className="inline-block mt-1 text-[10px] uppercase font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                      {product.badge}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                  <button onClick={() => startEdit(product)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Editar">
                    <Edit2 className="w-5 h-5" />
                  </button>
                  <button onClick={() => handleDelete(product.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Eliminar">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
            {products.length === 0 && (
              <div className="p-12 text-center text-slate-500">
                No hay productos registrados. Haz clic en "Nuevo Producto" para comenzar.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
