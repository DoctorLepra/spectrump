import React from 'react'
import type { Metadata } from 'next'
import { createClient } from '@/lib/supabase/server'
import { AdminShell } from './AdminShell'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: "Panel Administrativo",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    redirect('/login')
  }

  const { data: profile } = await supabase.from('users_profiles').select('*').eq('id', user.id).single()

  return (
    <AdminShell profile={profile}>
      {children}
    </AdminShell>
  )
}
