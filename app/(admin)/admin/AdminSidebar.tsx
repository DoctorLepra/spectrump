'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { FileText, ShoppingBag, Users, LogOut, UserCircle } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'

export function AdminSidebar({ profile }: { profile: any }) {
  const pathname = usePathname()
  const router = useRouter()
  const supabase = createClient()

  const role = profile?.role || 'editor'
  
  const showPages = role === 'admin' || role === 'editor' || role === 'manager'
  const showProducts = role === 'admin' || role === 'almacenista' || role === 'manager'
  const showUsers = role === 'admin'

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  return (
    <aside className="w-64 bg-slate-900 text-white flex flex-col h-full">
      <div className="p-6 border-b border-slate-800 flex items-center justify-center">
        <Link href={showPages ? "/admin/pages" : showProducts ? "/admin/products" : "/admin"} className="block focus:outline-none py-2">
          <div className="relative h-12 w-52 transform scale-125 origin-center">
            <Image 
              src="/logo.png" 
              alt="SPECTRUMP CMS" 
              fill
              priority
              className="object-contain object-center hover:opacity-80 transition-opacity brightness-0 invert"
            />
          </div>
        </Link>
      </div>
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {showPages && (
          <Link href="/admin/pages" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${pathname.startsWith('/admin/pages') ? 'bg-blue-600 text-white' : 'hover:bg-slate-800 text-slate-300'}`}>
            <FileText className="w-5 h-5" />
            <span>Páginas</span>
          </Link>
        )}
        {showProducts && (
          <Link href="/admin/products" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${pathname.startsWith('/admin/products') ? 'bg-blue-600 text-white' : 'hover:bg-slate-800 text-slate-300'}`}>
            <ShoppingBag className="w-5 h-5" />
            <span>Productos</span>
          </Link>
        )}
        {showUsers && (
          <Link href="/admin/usuarios" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${pathname.startsWith('/admin/usuarios') ? 'bg-blue-600 text-white' : 'hover:bg-slate-800 text-slate-300'}`}>
            <Users className="w-5 h-5" />
            <span>Usuarios</span>
          </Link>
        )}
      </nav>

      {/* User Profile Strip */}
      <div className="p-4 border-t border-slate-800 bg-slate-950/50">
        <div className="flex items-center justify-between">
          <Link href="/admin/perfil" className="flex items-center gap-3 hover:opacity-80 transition-opacity flex-1 overflow-hidden" title="Editar mi perfil">
            <UserCircle className="w-8 h-8 text-slate-400 shrink-0" />
            <div className="flex flex-col overflow-hidden pr-2">
              <span className="text-sm font-bold truncate">{profile?.nombre || 'Usuario'}</span>
              <span className="text-xs text-slate-400 uppercase tracking-wider">{role}</span>
            </div>
          </Link>
          <button 
            onClick={handleLogout}
            className="p-2 text-slate-400 hover:text-red-400 hover:bg-slate-800 rounded-lg transition-colors shrink-0"
            title="Cerrar sesión"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>
    </aside>
  )
}
