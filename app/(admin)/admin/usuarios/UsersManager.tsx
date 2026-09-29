'use client'

import React, { useState } from 'react'
import { Plus, Edit2, Trash2, CheckCircle, AlertTriangle, X } from 'lucide-react'
import { inviteUser, updateUser, deleteUser } from './actions'

type UserData = {
  id: string
  email: string
  nombre: string
  celular: string
  role: string
}

export function UsersManager({ initialUsers }: { initialUsers: UserData[] }) {
  const [users, setUsers] = useState<UserData[]>(initialUsers)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState<any>({})
  const [message, setMessage] = useState<{type: 'success' | 'error', text: string} | null>(null)
  const [saving, setSaving] = useState(false)

  const showToast = (type: 'success' | 'error', text: string) => {
    setMessage({ type, text })
    setTimeout(() => setMessage(null), 4000)
  }

  const startNew = () => {
    setEditingId('new')
    setFormData({
      email: '',
      nombre: '',
      celular: '',
      role: 'editor'
    })
  }

  const startEdit = (user: UserData) => {
    setEditingId(user.id)
    setFormData({
      nombre: user.nombre,
      celular: user.celular,
      role: user.role
    })
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setMessage(null)

    try {
      if (editingId === 'new') {
        await inviteUser({
          email: formData.email,
          nombre: formData.nombre,
          celular: formData.celular,
          role: formData.role
        })
        showToast('success', 'Usuario invitado correctamente. Revisa el correo.')
        // Note: For full realism, we'd refetch from server, but refreshing the page is fine, server action revalidates.
        window.location.reload()
      } else {
        await updateUser(editingId!, {
          nombre: formData.nombre,
          celular: formData.celular,
          role: formData.role
        })
        showToast('success', 'Usuario actualizado correctamente.')
        setUsers(users.map(u => u.id === editingId ? { ...u, ...formData } : u))
        setEditingId(null)
      }
    } catch (err: any) {
      showToast('error', err.message || 'Error al guardar usuario')
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('¿Estás seguro de eliminar este usuario del sistema?')) return
    try {
      await deleteUser(id)
      setUsers(users.filter(u => u.id !== id))
      showToast('success', 'Usuario eliminado.')
    } catch (err: any) {
      showToast('error', err.message || 'Error al eliminar')
    }
  }

  return (
    <div className="space-y-6 relative">
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
              {editingId === 'new' ? 'Invitar Nuevo Usuario' : 'Editar Usuario'}
            </h2>
            <button onClick={() => setEditingId(null)} className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-50">
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSave} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {editingId === 'new' && (
                <div className="space-y-2 md:col-span-2">
                  <label className="block text-sm font-bold text-slate-700">Correo Electrónico</label>
                  <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5" />
                  <p className="text-xs text-slate-500">Se le enviará un correo con un enlace para establecer su contraseña.</p>
                </div>
              )}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-700">Nombre Completo</label>
                <input required type="text" value={formData.nombre} onChange={e => setFormData({...formData, nombre: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5" />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-700">Celular</label>
                <input type="text" value={formData.celular} onChange={e => setFormData({...formData, celular: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="block text-sm font-bold text-slate-700">Rol</label>
                <select required value={formData.role} onChange={e => setFormData({...formData, role: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5">
                  <option value="admin">Administrador (Acceso total)</option>
                  <option value="editor">Editor (Solo Páginas)</option>
                  <option value="almacenista">Almacenista (Solo Productos)</option>
                  <option value="manager">Manager (Páginas y Productos)</option>
                </select>
              </div>
            </div>
            
            <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
              <button type="button" onClick={() => setEditingId(null)} className="px-5 py-2.5 rounded-xl font-bold text-slate-600 hover:bg-slate-100 transition-colors">
                Cancelar
              </button>
              <button disabled={saving} type="submit" className="px-5 py-2.5 rounded-xl font-bold bg-blue-600 text-white hover:bg-blue-700 transition-colors disabled:opacity-50">
                {saving ? 'Guardando...' : editingId === 'new' ? 'Enviar Invitación' : 'Guardar Cambios'}
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-4 sm:p-6 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
            <h2 className="font-bold text-slate-800 text-lg">Directorio ({users.length})</h2>
            <button onClick={startNew} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2 text-sm transition-colors">
              <Plus className="w-4 h-4" />
              Invitar Usuario
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-sm font-semibold text-slate-600">
                  <th className="p-4">Usuario</th>
                  <th className="p-4">Celular</th>
                  <th className="p-4">Rol</th>
                  <th className="p-4 text-right">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {users.map(u => (
                  <tr key={u.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-4">
                      <div className="font-bold text-slate-900">{u.nombre || 'Sin nombre'}</div>
                      <div className="text-sm text-slate-500">{u.email}</div>
                    </td>
                    <td className="p-4 text-sm text-slate-600">{u.celular || '-'}</td>
                    <td className="p-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-slate-800 uppercase tracking-wide">
                        {u.role}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button onClick={() => startEdit(u)} className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button onClick={() => handleDelete(u.id)} className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {users.length === 0 && (
                  <tr>
                    <td colSpan={4} className="p-8 text-center text-slate-500">
                      No hay usuarios registrados.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
