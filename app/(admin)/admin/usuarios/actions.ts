'use server'

import { createAdminClient } from '@/lib/supabase/admin'
import { revalidatePath } from 'next/cache'

export async function inviteUser(data: { email: string, nombre: string, celular: string, role: string }) {
  const supabaseAdmin = createAdminClient()

  // 1. Invite user via Supabase Auth
  const { data: authData, error: authError } = await supabaseAdmin.auth.admin.inviteUserByEmail(data.email, {
    data: {
      nombre: data.nombre,
      role: data.role,
    }
  })

  if (authError) {
    throw new Error(authError.message)
  }

  // Note: the trigger `handle_new_user` we created in SQL will automatically insert into `users_profiles`.
  // BUT we need to update the `celular` because the trigger might not capture it, or we can just update the profile now.
  
  if (authData.user) {
    const { error: profileError } = await supabaseAdmin
      .from('users_profiles')
      .update({ celular: data.celular })
      .eq('id', authData.user.id)

    if (profileError) {
      console.error("Error updating profile with celular", profileError)
    }
  }

  revalidatePath('/admin/usuarios')
  return { success: true }
}

export async function updateUser(id: string, data: { nombre: string, celular: string, role: string }) {
  const supabaseAdmin = createAdminClient()
  
  const { error } = await supabaseAdmin
    .from('users_profiles')
    .update({ nombre: data.nombre, celular: data.celular, role: data.role })
    .eq('id', id)

  if (error) {
    throw new Error(error.message)
  }

  // Also update metadata if needed
  await supabaseAdmin.auth.admin.updateUserById(id, {
    user_metadata: { nombre: data.nombre, role: data.role }
  })

  revalidatePath('/admin/usuarios')
  return { success: true }
}

export async function deleteUser(id: string) {
  const supabaseAdmin = createAdminClient()
  
  const { error } = await supabaseAdmin.auth.admin.deleteUser(id)
  
  if (error) {
    throw new Error(error.message)
  }

  revalidatePath('/admin/usuarios')
  return { success: true }
}
