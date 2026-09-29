'use server'

import { createAdminClient } from '@/lib/supabase/admin'
import { revalidatePath } from 'next/cache'
import { resend, DEFAULT_FROM_EMAIL, getAppUrl } from '@/lib/resend'
import { userInvitationTemplate, userInvitationText } from '@/lib/email/templates'

export async function inviteUser(data: { email: string, nombre: string, celular: string, role: string }) {
  try {
    const supabaseAdmin = createAdminClient()
    const cleanEmail = data.email.trim().toLowerCase()

    if (!cleanEmail || !cleanEmail.includes('@')) {
      return { success: false, error: 'Por favor ingresa un correo electrónico válido.' }
    }

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
      console.error('[inviteUser] linkError:', linkError)
      return { success: false, error: `Error de Supabase: ${linkError.message}` }
    }

    const userId = linkData?.user?.id
    const tokenHash = linkData?.properties?.hashed_token
    const directInviteUrl = tokenHash
      ? `${getAppUrl()}/auth/confirm?token_hash=${tokenHash}&type=invite&next=/login/actualizar-password`
      : (linkData?.properties?.action_link || `${getAppUrl()}/login`)

    // 2. Asegurar datos en el perfil
    if (userId) {
      const { error: upsertError } = await supabaseAdmin
        .from('users_profiles')
        .upsert({
          id: userId,
          nombre: data.nombre,
          celular: data.celular || null,
          role: data.role,
        })

      if (upsertError) {
        console.error('[inviteUser] upsertError:', upsertError)
      }
    }

    // 3. Enviar correo corporativo con Resend
    if (directInviteUrl) {
      const emailHtml = userInvitationTemplate({
        nombre: data.nombre,
        email: cleanEmail,
        role: data.role,
        inviteUrl: directInviteUrl,
      })

      const emailText = userInvitationText({
        nombre: data.nombre,
        email: cleanEmail,
        role: data.role,
        inviteUrl: directInviteUrl,
      })

      const { error: resendError } = await resend.emails.send({
        from: DEFAULT_FROM_EMAIL,
        to: cleanEmail,
        subject: 'Invitación a colaborar en SPECTRUMP CMS',
        html: emailHtml,
        text: emailText,
      })

      if (resendError) {
        console.error('[Usuarios] Error enviando correo de invitación con Resend:', resendError)
        if (resendError.message?.includes('only send testing emails') || resendError.message?.includes('validation_error')) {
          return {
            success: false,
            error: `Usuario creado en el sistema, pero Resend en modo Sandbox solo permite enviar correos a tu cuenta registrada (${resendError.message}). Para enviar a terceros, verifica tu dominio en Resend.`,
          }
        }
        return {
          success: false,
          error: `Usuario registrado pero falló el envío de correo: ${resendError.message}`,
        }
      }
    }

    revalidatePath('/admin/usuarios')
    return { success: true }
  } catch (err: any) {
    console.error('[inviteUser] Unhandled error:', err)
    return { success: false, error: err.message || 'Error inesperado al invitar usuario.' }
  }
}

export async function updateUser(id: string, data: { nombre: string, celular: string, role: string }) {
  try {
    const supabaseAdmin = createAdminClient()
    
    const { error } = await supabaseAdmin
      .from('users_profiles')
      .update({ nombre: data.nombre, celular: data.celular, role: data.role })
      .eq('id', id)

    if (error) {
      return { success: false, error: error.message }
    }

    await supabaseAdmin.auth.admin.updateUserById(id, {
      user_metadata: { nombre: data.nombre, role: data.role }
    })

    revalidatePath('/admin/usuarios')
    return { success: true }
  } catch (err: any) {
    return { success: false, error: err.message || 'Error al actualizar usuario.' }
  }
}

export async function deleteUser(id: string) {
  try {
    const supabaseAdmin = createAdminClient()
    
    const { error } = await supabaseAdmin.auth.admin.deleteUser(id)
    
    if (error) {
      return { success: false, error: error.message }
    }

    revalidatePath('/admin/usuarios')
    return { success: true }
  } catch (err: any) {
    return { success: false, error: err.message || 'Error al eliminar usuario.' }
  }
}
