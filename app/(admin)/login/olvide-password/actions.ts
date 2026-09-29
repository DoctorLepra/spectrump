'use server';

import { createAdminClient } from '@/lib/supabase/admin';
import { resend, DEFAULT_FROM_EMAIL, getAppUrl } from '@/lib/resend';
import { passwordResetTemplate, passwordResetText } from '@/lib/email/templates';

export async function sendPasswordResetEmail(email: string) {
  try {
    const cleanEmail = email.trim().toLowerCase();

    if (!cleanEmail || !cleanEmail.includes('@')) {
      return { success: false, error: 'Por favor ingresa un correo electrónico válido.' };
    }

    const supabaseAdmin = createAdminClient();

    // 1. Generar enlace seguro de recuperación
    const { data: linkData, error: linkError } = await supabaseAdmin.auth.admin.generateLink({
      type: 'recovery',
      email: cleanEmail,
      options: {
        redirectTo: `${getAppUrl()}/login/actualizar-password`,
      },
    });

    if (linkError) {
      console.warn('[OlvidePassword] Supabase generateLink warning:', linkError.message);
      // Por seguridad estándar (prevenir enumeración de usuarios), si no existe el usuario
      // informamos al usuario de forma genérica que si el correo existe, recibirá el enlace.
      return {
        success: true,
        message: 'Si el correo electrónico está registrado, recibirás un enlace de recuperación en breve.',
      };
    }

    const tokenHash = linkData?.properties?.hashed_token;
    const directResetUrl = tokenHash
      ? `${getAppUrl()}/auth/confirm?token_hash=${tokenHash}&type=recovery&next=/login/actualizar-password`
      : (linkData?.properties?.action_link || `${getAppUrl()}/login`);

    // 2. Enviar correo corporativo con Resend
    const emailHtml = passwordResetTemplate({
      email: cleanEmail,
      resetUrl: directResetUrl,
    });

    const emailText = passwordResetText({
      email: cleanEmail,
      resetUrl: directResetUrl,
    });

    const { error: resendError } = await resend.emails.send({
      from: DEFAULT_FROM_EMAIL,
      to: cleanEmail,
      subject: 'Restablecer contraseña - SPECTRUMP CMS',
      html: emailHtml,
      text: emailText,
    });

    if (resendError) {
      console.error('[OlvidePassword] Error enviando correo con Resend:', resendError);
      if (resendError.message?.includes('only send testing emails')) {
        return {
          success: false,
          error: `Resend en modo Sandbox solo permite enviar correos a la cuenta registrada (${resendError.message}).`,
        };
      }
      return {
        success: false,
        error: `No fue posible enviar el correo de recuperación: ${resendError.message}`,
      };
    }

    return {
      success: true,
      message: 'Se ha enviado un enlace de recuperación a tu correo electrónico.',
    };
  } catch (error: any) {
    console.error('[OlvidePassword] Error inesperado:', error);
    return {
      success: false,
      error: error.message || 'Ocurrió un error inesperado al procesar la solicitud.',
    };
  }
}
