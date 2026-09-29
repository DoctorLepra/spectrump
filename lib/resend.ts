import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;

if (!resendApiKey) {
  console.warn('[Resend] Advertencia: RESEND_API_KEY no está definida en las variables de entorno.');
}

export const resend = new Resend(resendApiKey);

/**
 * Devuelve la URL base de la aplicación según el entorno.
 * En desarrollo: http://localhost:3000
 * En Vercel: https://...
 */
export function getAppUrl(): string {
  if (process.env.NEXT_PUBLIC_APP_URL) {
    return process.env.NEXT_PUBLIC_APP_URL.replace(/\/$/, '');
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return 'http://localhost:3000';
}

/**
 * Remitente por defecto.
 * En sandbox de Resend: 'SPECTRUMP <onboarding@resend.dev>'
 * Con dominio verificado: configurable vía RESEND_FROM_EMAIL
 */
export const DEFAULT_FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL || 'SPECTRUMP <onboarding@resend.dev>';

/**
 * Correo de destino para notificaciones del formulario de contacto.
 */
export const DEFAULT_CONTACT_DESTINATION =
  process.env.CONTACT_DESTINATION_EMAIL || 'admin@spectrumpcolombia.com';
