import React from 'react'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { UsersManager } from './UsersManager'

export const dynamic = 'force-dynamic'

export default async function UsuariosPage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  // Double check admin role
  const { data: profile } = await supabase.from('users_profiles').select('role').eq('id', user.id).single()
  if (profile?.role !== 'admin') {
    redirect('/admin')
  }

  // Fetch users using admin client to get emails
  const { createAdminClient } = await import('@/lib/supabase/admin')
  const supabaseAdmin = createAdminClient()
  const { data: authUsers, error: authError } = await supabaseAdmin.auth.admin.listUsers()
  
  const { data: profiles, error: profileError } = await supabase.from('users_profiles').select('*')

  const combinedUsers = authUsers?.users.map(u => {
    const profile = profiles?.find(p => p.id === u.id)
    return {
      id: u.id,
      email: u.email || '',
      nombre: profile?.nombre || u.user_metadata?.nombre || '',
      celular: profile?.celular || '',
      role: profile?.role || 'editor',
      created_at: profile?.created_at || u.created_at
    }
  }) || []
    
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in">
      <div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Gestión de Usuarios</h1>
        <p className="text-slate-500 mt-2">Administra los roles y el acceso de tu equipo al CMS.</p>
      </div>

      <UsersManager initialUsers={combinedUsers} />
    </div>
  )
}
