'use server';

import { createClient } from '@/lib/supabase/server';
import { resend, DEFAULT_FROM_EMAIL, DEFAULT_CONTACT_DESTINATION } from '@/lib/resend';
import { contactNotificationTemplate, contactNotificationText } from '@/lib/email/templates';

export interface ContactFormData {
  nombre: string;
  email: string;
  telefono?: string;
  organizacion?: string;
  tipoEntidad?: string;
  servicio?: string;
  mensaje: string;
}

export async function submitContactForm(data: ContactFormData) {
  try {
    // 1. Validaciones básicas en servidor
    if (!data.nombre || !data.nombre.trim()) {
      return { success: false, error: 'Por favor ingresa tu nombre completo.' };
    }
    if (!data.email || !data.email.trim() || !data.email.includes('@')) {
      return { success: false, error: 'Por favor ingresa un correo electrónico válido.' };
    }
    if (!data.mensaje || !data.mensaje.trim()) {
      return { success: false, error: 'Por favor escribe el detalle de tu requerimiento.' };
    }

    // 2. Guardar copia de seguridad en Supabase (auditoría anti-pérdida)
    const supabase = createClient();
    const { error: dbError } = await supabase.from('contact_messages').insert({
      nombre: data.nombre.trim(),
      email: data.email.trim().toLowerCase(),
      telefono: data.telefono?.trim() || null,
      organizacion: data.organizacion?.trim() || null,
      tipo_entidad: data.tipoEntidad || null,
      servicio: data.servicio || null,
      mensaje: data.mensaje.trim(),
      status: 'unread',
    });

    if (dbError) {
      console.error('[Contacto] Error guardando mensaje en base de datos:', dbError);
      // Continuamos con el envío del correo incluso si falla la inserción
    }

    // 3. Enviar correo de notificación a la administración con Resend
    const contactParams = {
      nombre: data.nombre.trim(),
      email: data.email.trim(),
      telefono: data.telefono?.trim(),
      organizacion: data.organizacion?.trim(),
      tipoEntidad: data.tipoEntidad,
      servicio: data.servicio,
      mensaje: data.mensaje.trim(),
    };

    const htmlContent = contactNotificationTemplate(contactParams);
    const textContent = contactNotificationText(contactParams);

    const subject = `[Contacto Web] ${data.nombre.trim()} - ${data.servicio || 'General'}`;

    const { data: resendData, error: resendError } = await resend.emails.send({
      from: DEFAULT_FROM_EMAIL,
      to: DEFAULT_CONTACT_DESTINATION,
      replyTo: data.email.trim(),
      subject: subject,
      html: htmlContent,
      text: textContent,
    });

    if (resendError) {
      console.error('[Contacto] Error enviando correo con Resend:', resendError);
      return {
        success: false,
        error: `No fue posible enviar el mensaje por correo: ${resendError.message}`,
      };
    }

    return { success: true, emailId: resendData?.id };
  } catch (error: any) {
    console.error('[Contacto] Error inesperado en submitContactForm:', error);
    return {
      success: false,
      error: error.message || 'Ocurrió un error inesperado al procesar tu solicitud.',
    };
  }
}
