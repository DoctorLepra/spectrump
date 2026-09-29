'use client'

import React, { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { AdminTopBar } from './AdminTopBar'
import { AdminSidebar } from './AdminSidebar'

interface AdminShellProps {
  profile: any
  children: React.ReactNode
}

export function AdminShell({ profile, children }: AdminShellProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Cerrar el menú móvil automáticamente al navegar
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Cerrar al presionar la tecla Escape y bloquear scroll del body en móvil
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMobileMenuOpen])

  return (
    <div className="min-h-screen lg:h-screen bg-slate-50 flex flex-col lg:flex-row overflow-hidden">
      {/* Barra superior fija en móviles y tablets */}
      <AdminTopBar
        profile={profile}
        onOpenMenu={() => setIsMobileMenuOpen(true)}
      />

      {/* Menú lateral (Sidebar fijo en escritorio, Drawer animado en móvil) */}
      <AdminSidebar
        profile={profile}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Contenido principal con scroll vertical fluido */}
      <main className="flex-1 overflow-y-auto overflow-x-hidden min-w-0">
        {children}
      </main>
    </div>
  )
}
