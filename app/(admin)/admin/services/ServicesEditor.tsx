"use client";

import React, { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Plus, Edit2, Trash2, CheckCircle, AlertTriangle, X } from "lucide-react";

export function ServicesEditor({ initialServices }: { initialServices: any[] }) {
  const supabase = createClient();
  const [services, setServices] = useState(initialServices);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState<any>({});
  const [message, setMessage] = useState<{type: 'success' | 'error', text: string} | null>(null);
  const [saving, setSaving] = useState(false);

  const startEdit = (service: any) => {
    setEditingId(service.id);
    setFormData(service);
  };

  const startNew = () => {
    setEditingId(-1);
    setFormData({
      title: "",
      short_description: "",
      full_description: "",
      icon: "Cpu",
      target_audience: "Público General",
      is_active: true
    });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setFormData({});
  };

  const handleDelete = async (id: number) => {
    if (!confirm("¿Estás seguro de que deseas eliminar este servicio?")) return;
    
    try {
      const { error } = await supabase.from('services').delete().eq('id', id);
      if (error) throw error;
      setServices(services.filter(s => s.id !== id));
      setMessage({ type: 'success', text: 'Servicio eliminado.' });
    } catch (e: any) {
      setMessage({ type: 'error', text: e.message || 'Error al eliminar.' });
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage(null);

    try {
      const payload = {
        title: formData.title,
        short_description: formData.short_description,
        full_description: formData.full_description,
        icon: formData.icon,
        target_audience: formData.target_audience,
        is_active: formData.is_active
      };

      if (editingId === -1) {
        // Create new
        const { data, error } = await supabase.from('services').insert([payload]).select();
        if (error) throw error;
        setServices([...services, data[0]]);
        setMessage({ type: 'success', text: 'Servicio creado correctamente.' });
      } else {
        // Update
        const { error } = await supabase.from('services').update(payload).eq('id', editingId);
        if (error) throw error;
        setServices(services.map(s => s.id === editingId ? { ...s, ...payload } : s));
        setMessage({ type: 'success', text: 'Servicio actualizado correctamente.' });
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
              {editingId === -1 ? 'Nuevo Servicio' : 'Editar Servicio'}
            </h2>
            <button onClick={cancelEdit} className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-50">
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSave} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-700">Título del Servicio</label>
                <input required type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5" />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-700">Ícono (nombre Lucide)</label>
                <input required type="text" value={formData.icon} onChange={e => setFormData({...formData, icon: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5" placeholder="Ej: SunMedium, Network, Wifi" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="block text-sm font-bold text-slate-700">Público Objetivo (Badge)</label>
                <input type="text" value={formData.target_audience} onChange={e => setFormData({...formData, target_audience: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="block text-sm font-bold text-slate-700">Descripción Corta</label>
                <textarea required rows={2} value={formData.short_description} onChange={e => setFormData({...formData, short_description: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="block text-sm font-bold text-slate-700">Descripción Completa</label>
                <textarea rows={4} value={formData.full_description || ''} onChange={e => setFormData({...formData, full_description: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5" />
              </div>
            </div>
            
            <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
              <button type="button" onClick={cancelEdit} className="px-5 py-2.5 rounded-xl font-bold text-slate-600 hover:bg-slate-100 transition-colors">
                Cancelar
              </button>
              <button disabled={saving} type="submit" className="px-5 py-2.5 rounded-xl font-bold bg-blue-600 text-white hover:bg-blue-700 transition-colors disabled:opacity-50">
                {saving ? 'Guardando...' : 'Guardar Servicio'}
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200 flex justify-between items-center bg-slate-50">
            <h2 className="font-bold text-slate-800">Directorio de Servicios ({services.length})</h2>
            <button onClick={startNew} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2 text-sm transition-colors">
              <Plus className="w-4 h-4" />
              Nuevo Servicio
            </button>
          </div>
          <div className="divide-y divide-slate-100">
            {services.map(service => (
              <div key={service.id} className="p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-6 hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs shrink-0 border border-blue-100">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{service.title}</h3>
                    <p className="text-sm text-slate-500 line-clamp-1">{service.short_description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto justify-end shrink-0">
                  <button onClick={() => startEdit(service)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Editar">
                    <Edit2 className="w-5 h-5" />
                  </button>
                  <button onClick={() => handleDelete(service.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Eliminar">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
            {services.length === 0 && (
              <div className="p-12 text-center text-slate-500">
                No hay servicios registrados. Haz clic en "Nuevo Servicio" para comenzar.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
