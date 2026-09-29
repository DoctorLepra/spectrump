/**
 * Plantillas HTML corporativas para envíos de correo con Resend.
 * Estilo visual alineado a SPECTRUMP COLOMBIA S.A.S.
 */

interface ContactNotificationParams {
  nombre: string;
  email: string;
  telefono?: string;
  organizacion?: string;
  tipoEntidad?: string;
  servicio?: string;
  mensaje: string;
}

export function contactNotificationTemplate(data: ContactNotificationParams): string {
  const { nombre, email, telefono, organizacion, tipoEntidad, servicio, mensaje } = data;

  const entidadLabelMap: Record<string, string> = {
    'empresa-privada': 'Empresa Privada',
    'entidad-publica': 'Entidad Pública',
    'comunidad-ong': 'Comunidad / ONG',
    'persona-natural': 'Persona Natural',
  };

  const servicioLabelMap: Record<string, string> = {
    'licitaciones': 'Licitaciones Públicas y Privadas',
    'energia-solar': 'Energía Solar Fotovoltaica',
    'econecta': 'Soluciones ECONECTA®',
    'conectividad-rural': 'Conectividad e Infraestructura Rural',
    'consultoria-tecnica': 'Consultoría Técnica y Diseños',
    'otro': 'Otro Requerimiento',
  };

  const entidadLabel = tipoEntidad ? (entidadLabelMap[tipoEntidad] || tipoEntidad) : 'No especificada';
  const servicioLabel = servicio ? (servicioLabelMap[servicio] || servicio) : 'General';

  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nuevo requerimiento de contacto</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #0f172a;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f1f5f9; padding: 40px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05); border: 1px solid #e2e8f0;">
          <!-- Header -->
          <tr>
            <td style="background-color: #ffffff; padding: 36px 36px 24px 36px; text-align: center; border-bottom: 1px solid #e2e8f0;">
              <img src="https://spectrumpcolombia.com/logo.png" alt="SPECTRUMP COLOMBIA" width="280" style="display: block; margin: 0 auto; width: 280px; max-width: 100%; height: auto; border: 0;" />
              <p style="margin: 12px 0 0 0; color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em;">
                Portal Web Oficial &bull; Requerimiento de Contacto
              </p>
            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td style="padding: 36px;">
              <div style="background-color: #eff6ff; border-left: 4px solid #2563eb; padding: 16px 20px; border-radius: 8px; margin-bottom: 28px;">
                <p style="margin: 0; color: #1e40af; font-size: 14px; font-weight: 600;">
                  Has recibido un nuevo mensaje desde el formulario de contacto web.
                </p>
              </div>

              <h2 style="font-size: 16px; font-weight: 700; color: #0f172a; margin: 0 0 16px 0; text-transform: uppercase; letter-spacing: 0.03em;">
                Datos del Interesado
              </h2>

              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom: 24px;">
                <tr>
                  <td style="padding: 8px 0; color: #64748b; font-size: 13px; width: 140px; font-weight: 600;">Nombre:</td>
                  <td style="padding: 8px 0; color: #0f172a; font-size: 14px; font-weight: 600;">${nombre}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #64748b; font-size: 13px; font-weight: 600;">Correo:</td>
                  <td style="padding: 8px 0; color: #2563eb; font-size: 14px; font-weight: 600;">
                    <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #64748b; font-size: 13px; font-weight: 600;">Teléfono / Celular:</td>
                  <td style="padding: 8px 0; color: #0f172a; font-size: 14px;">${telefono || 'No registrado'}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #64748b; font-size: 13px; font-weight: 600;">Organización:</td>
                  <td style="padding: 8px 0; color: #0f172a; font-size: 14px;">${organizacion || 'No registrada'}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #64748b; font-size: 13px; font-weight: 600;">Tipo de Entidad:</td>
                  <td style="padding: 8px 0; color: #0f172a; font-size: 14px;">${entidadLabel}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #64748b; font-size: 13px; font-weight: 600;">Servicio de Interés:</td>
                  <td style="padding: 8px 0; color: #0f172a; font-size: 14px; font-weight: 600;">
                    <span style="display: inline-block; background-color: #f1f5f9; padding: 4px 10px; border-radius: 6px; border: 1px solid #e2e8f0;">
                      ${servicioLabel}
                    </span>
                  </td>
                </tr>
              </table>

              <h2 style="font-size: 16px; font-weight: 700; color: #0f172a; margin: 24px 0 12px 0; text-transform: uppercase; letter-spacing: 0.03em;">
                Mensaje o Requerimiento
              </h2>

              <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap;">
${mensaje}
              </div>

              <div style="text-align: center; margin-top: 32px;">
                <a href="mailto:${email}?subject=Respuesta a su solicitud en SPECTRUMP COLOMBIA" style="display: inline-block; background-color: #2563eb; color: #ffffff; text-decoration: none; font-size: 14px; font-weight: 600; padding: 14px 32px; border-radius: 10px; box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.2);">
                  Responder Directamente a ${nombre}
                </a>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 24px; text-align: center; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8;">
              <p style="margin: 0 0 6px 0;">Este es un mensaje automático generado por el sitio web de SPECTRUMP COLOMBIA S.A.S.</p>
              <p style="margin: 0;">&copy; ${new Date().getFullYear()} SPECTRUMP COLOMBIA S.A.S. Todos los derechos reservados.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

interface UserInvitationParams {
  nombre: string;
  email: string;
  role: string;
  inviteUrl: string;
}

export function userInvitationTemplate(data: UserInvitationParams): string {
  const { nombre, email, role, inviteUrl } = data;

  const roleNameMap: Record<string, string> = {
    admin: 'Administrador (Acceso Total)',
    editor: 'Editor de Páginas',
    almacenista: 'Almacenista de Productos',
    manager: 'Manager (Páginas y Productos)',
  };

  const roleLabel = roleNameMap[role] || role;

  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Invitación a SPECTRUMP CMS</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #0f172a;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f1f5f9; padding: 40px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); border: 1px solid #e2e8f0;">
          <!-- Header -->
          <tr>
            <td style="background-color: #ffffff; padding: 36px 36px 24px 36px; text-align: center; border-bottom: 1px solid #e2e8f0;">
              <img src="https://spectrumpcolombia.com/logo.png" alt="SPECTRUMP COLOMBIA" width="280" style="display: block; margin: 0 auto; width: 280px; max-width: 100%; height: auto; border: 0;" />
              <p style="margin: 12px 0 0 0; color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em;">
                Gestión de Contenido &bull; SPECTRUMP CMS
              </p>
            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td style="padding: 40px 36px;">
              <h2 style="font-size: 20px; font-weight: 700; color: #0f172a; margin: 0 0 16px 0;">
                ¡Hola, ${nombre || 'Colaborador'}!
              </h2>

              <p style="font-size: 15px; line-height: 1.6; color: #475569; margin: 0 0 24px 0;">
                Has sido invitado a formar parte del equipo de gestión de contenidos de <strong>SPECTRUMP COLOMBIA</strong>.
              </p>

              <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 32px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                  <tr>
                    <td style="color: #64748b; font-size: 13px; font-weight: 600; padding-bottom: 8px; width: 120px;">Correo:</td>
                    <td style="color: #0f172a; font-size: 14px; font-weight: 600; padding-bottom: 8px;">${email}</td>
                  </tr>
                  <tr>
                    <td style="color: #64748b; font-size: 13px; font-weight: 600;">Rol Asignado:</td>
                    <td style="color: #2563eb; font-size: 14px; font-weight: 700;">${roleLabel}</td>
                  </tr>
                </table>
              </div>

              <p style="font-size: 14px; line-height: 1.6; color: #475569; margin: 0 0 32px 0;">
                Para activar tu cuenta y establecer tu contraseña de acceso por primera vez, haz clic en el siguiente botón:
              </p>

              <div style="text-align: center; margin-bottom: 36px;">
                <a href="${inviteUrl}" style="display: inline-block; background-color: #2563eb; color: #ffffff; text-decoration: none; font-size: 15px; font-weight: 700; padding: 16px 36px; border-radius: 10px; box-shadow: 0 4px 10px rgba(37, 99, 235, 0.25);">
                  Aceptar Invitación y Crear Contraseña
                </a>
              </div>

              <div style="border-top: 1px solid #f1f5f9; padding-top: 20px;">
                <p style="font-size: 12px; color: #94a3b8; margin: 0 0 8px 0;">
                  Si el botón anterior no funciona, copia y pega el siguiente enlace en tu navegador:
                </p>
                <p style="font-size: 11px; color: #64748b; word-break: break-all; margin: 0; background-color: #f8fafc; padding: 10px; border-radius: 6px; border: 1px solid #e2e8f0;">
                  ${inviteUrl}
                </p>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 24px; text-align: center; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8;">
              <p style="margin: 0 0 4px 0;">Este enlace de invitación es personal y de un solo uso.</p>
              <p style="margin: 0;">&copy; ${new Date().getFullYear()} SPECTRUMP COLOMBIA S.A.S.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

interface PasswordResetParams {
  email: string;
  resetUrl: string;
}

export function passwordResetTemplate(data: PasswordResetParams): string {
  const { email, resetUrl } = data;

  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Restablecer Contraseña - SPECTRUMP CMS</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #0f172a;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f1f5f9; padding: 40px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); border: 1px solid #e2e8f0;">
          <!-- Header -->
          <tr>
            <td style="background-color: #ffffff; padding: 36px 36px 24px 36px; text-align: center; border-bottom: 1px solid #e2e8f0;">
              <img src="https://spectrumpcolombia.com/logo.png" alt="SPECTRUMP COLOMBIA" width="280" style="display: block; margin: 0 auto; width: 280px; max-width: 100%; height: auto; border: 0;" />
              <p style="margin: 12px 0 0 0; color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em;">
                Seguridad &bull; Restablecimiento de Credenciales
              </p>
            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td style="padding: 40px 36px;">
              <h2 style="font-size: 20px; font-weight: 700; color: #0f172a; margin: 0 0 16px 0;">
                Recuperación de Contraseña
              </h2>

              <p style="font-size: 15px; line-height: 1.6; color: #475569; margin: 0 0 20px 0;">
                Hemos recibido una solicitud para restablecer la contraseña asociada a tu cuenta <strong>${email}</strong> en SPECTRUMP CMS.
              </p>

              <div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 14px 18px; border-radius: 8px; margin-bottom: 28px;">
                <p style="margin: 0; color: #92400e; font-size: 13px; font-weight: 600;">
                  Por tu seguridad, este enlace es temporal y expirará automáticamente.
                </p>
              </div>

              <div style="text-align: center; margin: 32px 0;">
                <a href="${resetUrl}" style="display: inline-block; background-color: #2563eb; color: #ffffff; text-decoration: none; font-size: 15px; font-weight: 700; padding: 16px 36px; border-radius: 10px; box-shadow: 0 4px 10px rgba(37, 99, 235, 0.25);">
                  Restablecer Mi Contraseña
                </a>
              </div>

              <div style="border-top: 1px solid #f1f5f9; padding-top: 20px; margin-top: 28px;">
                <p style="font-size: 12px; color: #94a3b8; margin: 0 0 8px 0;">
                  Si el botón no funciona, copia y pega este enlace en tu navegador:
                </p>
                <p style="font-size: 11px; color: #64748b; word-break: break-all; margin: 0; background-color: #f8fafc; padding: 10px; border-radius: 6px; border: 1px solid #e2e8f0;">
                  ${resetUrl}
                </p>
              </div>

              <p style="font-size: 12px; color: #94a3b8; margin: 28px 0 0 0; line-height: 1.5;">
                Si tú no solicitaste este cambio, puedes ignorar este mensaje de forma segura. Tu contraseña actual no será modificada.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 24px; text-align: center; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8;">
              <p style="margin: 0;">&copy; ${new Date().getFullYear()} SPECTRUMP COLOMBIA S.A.S. Todos los derechos reservados.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

export function contactNotificationText(data: ContactNotificationParams): string {
  return `
SPECTRUMP COLOMBIA - NUEVO REQUERIMIENTO DE CONTACTO
====================================================
Has recibido un nuevo mensaje desde el formulario web de contacto:

- Nombre: ${data.nombre}
- Correo: ${data.email}
- Teléfono: ${data.telefono || 'No registrado'}
- Organización: ${data.organizacion || 'No registrada'}
- Tipo de Entidad: ${data.tipoEntidad || 'No especificada'}
- Servicio: ${data.servicio || 'General'}

MENSAJE:
${data.mensaje}
----------------------------------------------------
Para responder a este mensaje, escribe directamente a ${data.email}
  `.trim();
}

export function userInvitationText(data: UserInvitationParams): string {
  return `
SPECTRUMP CMS - INVITACIÓN DE EQUIPO
====================================
Hola ${data.nombre || 'Colaborador'},

Has sido invitado a colaborar en la plataforma de gestión de contenidos SPECTRUMP CMS con el rol: ${data.role}.

Para activar tu cuenta y establecer tu contraseña de acceso, ingresa al siguiente enlace seguro:
${data.inviteUrl}

(Este enlace es personal y de un solo uso).

SPECTRUMP COLOMBIA S.A.S.
  `.trim();
}

export function passwordResetText(data: PasswordResetParams): string {
  return `
SPECTRUMP CMS - RECUPERACIÓN DE CONTRASEÑA
==========================================
Hemos recibido una solicitud para restablecer la contraseña de tu cuenta (${data.email}) en SPECTRUMP CMS.

Para establecer una nueva contraseña, ingresa al siguiente enlace seguro:
${data.resetUrl}

(Por seguridad, este enlace expirará en breve. Si tú no solicitaste este cambio, puedes ignorar este mensaje).

SPECTRUMP COLOMBIA S.A.S.
  `.trim();
}

