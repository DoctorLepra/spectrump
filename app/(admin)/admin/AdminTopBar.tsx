'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, UserCircle, LogOut } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

interface AdminTopBarProps {
  profile: any
  onOpenMenu: () => void
}

export function AdminTopBar({ profile, onOpenMenu }: AdminTopBarProps) {
  const router = useRouter()
  const supabase = createClient()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  return (
    <header className="lg:hidden sticky top-0 z-30 flex items-center justify-between px-4 h-16 bg-slate-900 text-white border-b border-slate-800 shadow-md shrink-0">
      {/* Botón Hamburguesa */}
      <button
        onClick={onOpenMenu}
        type="button"
        className="p-2.5 -ml-1 text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Abrir menú de navegación"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Logo Central */}
      <Link href="/admin" className="flex items-center justify-center focus:outline-none">
        <div className="relative h-9 w-36">
          <Image
            src="/logo.png"
            alt="SPECTRUMP CMS"
            fill
            priority
            className="object-contain object-center brightness-0 invert"
          />
        </div>
      </Link>

      {/* Perfil & Logout Rápido */}
      <div className="flex items-center gap-1">
        <Link
          href="/admin/perfil"
          className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center"
          title="Mi Perfil"
        >
          <UserCircle className="w-6 h-6 text-slate-300" />
        </Link>
        <button
          onClick={handleLogout}
          type="button"
          className="p-2 text-slate-400 hover:text-red-400 hover:bg-slate-800 rounded-xl transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center"
          title="Cerrar sesión"
        >
          <LogOut className="w-5 h-5" />
        </button>
      </div>
    </header>
  )
}
