'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function ActualizarPasswordPage() {
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState<{type: 'success' | 'error', text: string} | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)

    // Password complexity check
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/
    if (!passwordRegex.test(password)) {
      setMessage({ type: 'error', text: 'La contraseña debe tener al menos 6 caracteres, una mayúscula y un carácter especial.' })
      setLoading(false)
      return
    }
    
    const { error } = await supabase.auth.updateUser({
      password: password
    })

    if (error) {
      setMessage({ type: 'error', text: error.message })
      setLoading(false)
    } else {
      setMessage({ type: 'success', text: 'Contraseña actualizada correctamente. Redirigiendo...' })
      setTimeout(() => {
        router.push('/admin')
      }, 2000)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-slate-100">
        <div className="mb-8 text-center flex flex-col items-center">
          <div className="relative h-20 w-72 mb-4">
            <Image 
              src="/logo.png" 
              alt="SPECTRUMP CMS" 
              fill
              priority
              className="object-contain object-center"
            />
          </div>
          <h1 className="text-2xl font-bold text-slate-900">Establecer Contraseña</h1>
          <p className="text-slate-500 mt-2 text-sm">Ingresa tu nueva contraseña para acceder al sistema. Debe tener mínimo 6 caracteres, una mayúscula y un carácter especial.</p>
        </div>
        
        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Nueva Contraseña</label>
            <input 
              type="password" 
              required
              minLength={6}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          {message && (
            <div className={`p-3 text-sm rounded-lg border ${message.type === 'success' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 'bg-red-50 text-red-600 border-red-100'}`}>
              {message.text}
            </div>
          )}

          <button 
            type="submit" 
            disabled={loading || message?.type === 'success'}
            className="w-full bg-slate-900 text-white font-medium py-2.5 rounded-lg hover:bg-slate-800 transition-colors disabled:opacity-50"
          >
            {loading ? 'Guardando...' : 'Guardar y Entrar'}
          </button>
        </form>
      </div>
    </div>
  )
}
