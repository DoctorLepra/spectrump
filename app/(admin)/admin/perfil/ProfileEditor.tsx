'use client'

import React, { useState } from 'react'
import { CheckCircle, AlertTriangle } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'

export function ProfileEditor({ initialData }: { initialData: any }) {
  const [formData, setFormData] = useState({
    nombre: initialData.nombre,
    celular: initialData.celular,
  })
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState<{type: 'success' | 'error', text: string} | null>(null)
  const [saving, setSaving] = useState(false)
  const supabase = createClient()

  const showToast = (type: 'success' | 'error', text: string) => {
    setMessage({ type, text })
    setTimeout(() => setMessage(null), 4000)
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setMessage(null)

    try {
      // Update profile
      const { error: profileError } = await supabase
        .from('users_profiles')
        .update({ nombre: formData.nombre, celular: formData.celular })
        .eq('id', initialData.id)

      if (profileError) throw profileError

      // Update password if provided
      if (password) {
        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/
        if (!passwordRegex.test(password)) {
          showToast('error', 'La contraseña debe tener al menos 6 caracteres, una mayúscula y un carácter especial.')
          setSaving(false)
          return
        }

        const { error: authError } = await supabase.auth.updateUser({
          password
        })
        if (authError) throw authError
        setPassword('')
      }

      showToast('success', 'Perfil actualizado correctamente.')
      window.location.reload()
    } catch (err: any) {
      showToast('error', err.message || 'Error al guardar cambios.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-sm border border-slate-200 relative">
      {message && (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] w-[90%] sm:w-auto">
          <div className={`animate-in slide-in-from-top-12 fade-in duration-300 px-6 py-4 rounded-2xl sm:rounded-full shadow-2xl flex items-center justify-center gap-3 font-semibold text-sm ${message.type === 'success' ? 'bg-emerald-600 text-white' : 'bg-red-600 text-white'}`}>
            {message.type === 'success' ? <CheckCircle className="w-5 h-5 shrink-0" /> : <AlertTriangle className="w-5 h-5 shrink-0" />}
            <span className="text-center">{message.text}</span>
          </div>
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-bold text-slate-700">Correo Electrónico</label>
          <input type="email" disabled value={initialData.email} className="w-full bg-slate-100 border border-slate-200 rounded-xl px-4 py-3 text-base sm:text-sm text-slate-500 cursor-not-allowed" />
          <p className="text-xs text-slate-400">El correo electrónico y el rol no pueden ser modificados.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-bold text-slate-700">Nombre Completo</label>
            <input required type="text" value={formData.nombre} onChange={e => setFormData({...formData, nombre: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-base sm:text-sm" />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-bold text-slate-700">Celular</label>
            <input type="text" value={formData.celular} onChange={e => setFormData({...formData, celular: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-base sm:text-sm" />
          </div>
        </div>
        
        <div className="pt-6 border-t border-slate-100 space-y-2">
          <h3 className="font-bold text-slate-800">Seguridad</h3>
          <p className="text-sm text-slate-500 mb-4">Si deseas cambiar tu contraseña, escríbela a continuación. Debe tener mínimo 6 caracteres, una mayúscula y un carácter especial.</p>
          <div className="space-y-2 max-w-sm">
            <label className="block text-sm font-bold text-slate-700">Nueva Contraseña</label>
            <input type="password" minLength={6} placeholder="Dejar en blanco para no cambiar" value={password} onChange={e => setPassword(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-base sm:text-sm" />
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <button disabled={saving} type="submit" className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold bg-blue-600 text-white hover:bg-blue-700 transition-colors disabled:opacity-50 min-h-[44px] text-center">
            {saving ? 'Guardando...' : 'Guardar Cambios'}
          </button>
        </div>
      </form>
    </div>
  )
}
