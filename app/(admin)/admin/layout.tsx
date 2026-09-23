import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FileText, ShoppingBag, Briefcase } from 'lucide-react'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen bg-slate-50 flex overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col">
        <div className="p-6 border-b border-slate-800 flex items-center justify-center">
          <Link href="/admin/pages" className="block focus:outline-none py-2">
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
        <nav className="flex-1 p-4 space-y-2">
          <Link href="/admin/pages" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800 transition-colors">
            <FileText className="w-5 h-5" />
            <span>Páginas</span>
          </Link>
          <Link href="/admin/products" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800 transition-colors">
            <ShoppingBag className="w-5 h-5" />
            <span>Productos</span>
          </Link>
          <Link href="/admin/services" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800 transition-colors">
            <Briefcase className="w-5 h-5" />
            <span>Servicios</span>
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  )
}
