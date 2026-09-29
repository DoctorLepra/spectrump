import React from 'react'
import type { Metadata } from 'next'
import { createClient } from '@/lib/supabase/server'
import { AdminSidebar } from './AdminSidebar'
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
    <div className="h-screen bg-slate-50 flex overflow-hidden">
      {/* Sidebar Component */}
      <AdminSidebar profile={profile} />

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  )
}
