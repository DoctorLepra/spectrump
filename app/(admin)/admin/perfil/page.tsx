import React from 'react'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { ProfileEditor } from './ProfileEditor'

export const dynamic = 'force-dynamic'

export default async function PerfilPage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const { data: profile } = await supabase.from('users_profiles').select('*').eq('id', user.id).single()

  const userData = {
    id: user.id,
    email: user.email!,
    nombre: profile?.nombre || '',
    celular: profile?.celular || '',
    role: profile?.role || 'editor'
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-3xl mx-auto space-y-6 sm:space-y-8 animate-in fade-in">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Mi Perfil</h1>
        <p className="text-sm sm:text-base text-slate-500 mt-1">Actualiza tu información personal.</p>
      </div>

      <ProfileEditor initialData={userData} />
    </div>
  )
}
