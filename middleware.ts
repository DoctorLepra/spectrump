import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value,
            ...options,
          })
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          })
          response.cookies.set({
            name,
            value,
            ...options,
          })
        },
        remove(name: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value: '',
            ...options,
          })
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          })
          response.cookies.set({
            name,
            value: '',
            ...options,
          })
        },
      },
    }
  )

  // This will refresh session if expired
  const { data: { user } } = await supabase.auth.getUser()

  const { pathname } = request.nextUrl

  // Protect /admin routes
  if (pathname.startsWith('/admin')) {
    if (!user) {
      return NextResponse.redirect(new URL('/login', request.url))
    }

    // Get user role from profiles
    const { data: profile } = await supabase
      .from('users_profiles')
      .select('role')
      .eq('id', user.id)
      .single()

    const role = profile?.role

    // Role-based access control
    // Admin: full access
    // Editor: only Pages (/admin/pages)
    // Almacenista: only Products (/admin/products)
    // Manager: Pages and Products

    if (role === 'editor' && !pathname.startsWith('/admin/pages') && pathname !== '/admin' && !pathname.startsWith('/admin/perfil')) {
      return NextResponse.redirect(new URL('/admin', request.url))
    }

    if (role === 'almacenista' && !pathname.startsWith('/admin/products') && pathname !== '/admin' && !pathname.startsWith('/admin/perfil')) {
      return NextResponse.redirect(new URL('/admin', request.url))
    }

    if (role === 'manager' && !pathname.startsWith('/admin/pages') && !pathname.startsWith('/admin/products') && pathname !== '/admin' && !pathname.startsWith('/admin/perfil')) {
      return NextResponse.redirect(new URL('/admin', request.url))
    }

    if (pathname.startsWith('/admin/usuarios') && role !== 'admin') {
      return NextResponse.redirect(new URL('/admin', request.url))
    }
  }

  // If user is logged in and tries to access /login, redirect to /admin
  if (user && pathname.startsWith('/login')) {
    return NextResponse.redirect(new URL('/admin', request.url))
  }

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
