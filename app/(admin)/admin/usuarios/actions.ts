'use server'

import { createAdminClient } from '@/lib/supabase/admin'
import { revalidatePath } from 'next/cache'
import { resend, DEFAULT_FROM_EMAIL, getAppUrl } from '@/lib/resend'
import { userInvitationTemplate } from '@/lib/email/templates'

export async function inviteUser(data: { email: string, nombre: string, celular: string, role: string }) {
  const supabaseAdmin = createAdminClient()
  const cleanEmail = data.email.trim().toLowerCase()

  // 1. Generar enlace seguro de invitación con Supabase Admin
  const { data: linkData, error: linkError } = await supabaseAdmin.auth.admin.generateLink({
    type: 'invite',
    email: cleanEmail,
    options: {
      redirectTo: `${getAppUrl()}/login/actualizar-password`,
      data: {
        nombre: data.nombre,
        role: data.role,
      }
    }
  })

  if (linkError) {
    throw new Error(`Error de Supabase: ${linkError.message}`)
  }

  const userId = linkData.user?.id
  const inviteUrl = linkData.properties?.action_link

  // 2. Asegurar datos en el perfil
  if (userId) {
    await supabaseAdmin
      .from('users_profiles')
      .upsert({
        id: userId,
        nombre: data.nombre,
        celular: data.celular || null,
        role: data.role,
      })
  }

  // 3. Enviar correo corporativo con Resend
  if (inviteUrl) {
    const emailHtml = userInvitationTemplate({
      nombre: data.nombre,
      email: cleanEmail,
      role: data.role,
      inviteUrl: inviteUrl,
    })

    const { error: resendError } = await resend.emails.send({
      from: DEFAULT_FROM_EMAIL,
      to: cleanEmail,
      subject: 'Invitación a colaborar en SPECTRUMP CMS',
      html: emailHtml,
    })

    if (resendError) {
      console.error('[Usuarios] Error enviando correo de invitación con Resend:', resendError)
      // Si estamos en sandbox y el correo no es el autorizado
      if (resendError.message?.includes('only send testing emails') || resendError.message?.includes('validation_error')) {
        throw new Error(
          `Usuario creado, pero Resend en modo Sandbox solo permite enviar correos a tu cuenta registrada (${resendError.message}). Para enviar a terceros, verifica tu dominio en Resend.`
        )
      }
      throw new Error(`Usuario registrado pero falló el envío de correo: ${resendError.message}`)
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
