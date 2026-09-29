'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { FileText, ShoppingBag, Users, LogOut, UserCircle, X } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'

interface AdminSidebarProps {
  profile: any
  isOpen?: boolean
  onClose?: () => void
}

export function AdminSidebar({ profile, isOpen = false, onClose }: AdminSidebarProps) {
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

  const handleLinkClick = () => {
    if (onClose) onClose()
  }

  return (
    <>
      {/* Backdrop oscuro para móvil */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-40 lg:hidden animate-in fade-in duration-200"
          aria-hidden="true"
        />
      )}

      {/* Barra Lateral / Drawer */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 w-72 bg-slate-900 text-white flex flex-col h-full
          transform transition-transform duration-300 ease-in-out
          lg:static lg:w-64 lg:translate-x-0 lg:z-auto
          ${isOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Cabecera del Sidebar con Logo y Botón de Cerrar en móvil */}
        <div className="p-5 sm:p-6 border-b border-slate-800 flex items-center justify-between">
          <Link
            href={showPages ? "/admin/pages" : showProducts ? "/admin/products" : "/admin"}
            onClick={handleLinkClick}
            className="block focus:outline-none py-1"
          >
            <div className="relative h-10 w-44 sm:h-12 sm:w-52">
              <Image 
                src="/logo.png" 
                alt="SPECTRUMP CMS" 
                fill
                priority
                className="object-contain object-left sm:object-center hover:opacity-80 transition-opacity brightness-0 invert"
              />
            </div>
          </Link>

          {/* Botón cerrar para móviles */}
          <button
            onClick={onClose}
            type="button"
            className="lg:hidden p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center"
            aria-label="Cerrar menú"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Enlaces de Navegación */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {showPages && (
            <Link
              href="/admin/pages"
              onClick={handleLinkClick}
              className={`flex items-center gap-3 px-4 py-3.5 rounded-xl font-medium transition-colors text-sm sm:text-base ${
                pathname.startsWith('/admin/pages')
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'hover:bg-slate-800 text-slate-300'
              }`}
            >
              <FileText className="w-5 h-5 shrink-0" />
              <span>Páginas</span>
            </Link>
          )}

          {showProducts && (
            <Link
              href="/admin/products"
              onClick={handleLinkClick}
              className={`flex items-center gap-3 px-4 py-3.5 rounded-xl font-medium transition-colors text-sm sm:text-base ${
                pathname.startsWith('/admin/products')
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'hover:bg-slate-800 text-slate-300'
              }`}
            >
              <ShoppingBag className="w-5 h-5 shrink-0" />
              <span>Productos</span>
            </Link>
          )}

          {showUsers && (
            <Link
              href="/admin/usuarios"
              onClick={handleLinkClick}
              className={`flex items-center gap-3 px-4 py-3.5 rounded-xl font-medium transition-colors text-sm sm:text-base ${
                pathname.startsWith('/admin/usuarios')
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'hover:bg-slate-800 text-slate-300'
              }`}
            >
              <Users className="w-5 h-5 shrink-0" />
              <span>Usuarios</span>
            </Link>
          )}
        </nav>

        {/* Franja de Perfil de Usuario en el fondo */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/60 pb-safe">
          <div className="flex items-center justify-between gap-2">
            <Link
              href="/admin/perfil"
              onClick={handleLinkClick}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity flex-1 overflow-hidden p-1.5 rounded-xl hover:bg-slate-800/50"
              title="Editar mi perfil"
            >
              <UserCircle className="w-8 h-8 text-slate-400 shrink-0" />
              <div className="flex flex-col overflow-hidden pr-2">
                <span className="text-sm font-bold truncate text-white">{profile?.nombre || 'Usuario'}</span>
                <span className="text-xs text-slate-400 uppercase tracking-wider">{role}</span>
              </div>
            </Link>

            <button 
              onClick={handleLogout}
              className="p-2.5 text-slate-400 hover:text-red-400 hover:bg-slate-800 rounded-xl transition-colors shrink-0 min-w-[40px] min-h-[40px] flex items-center justify-center"
              title="Cerrar sesión"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}
