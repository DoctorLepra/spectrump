export interface HotlineItem {
  id: string;
  name: string;
  entity: string;
  badge: string;
  description: string;
  channelUrl?: string;
  channelDisplayUrl?: string;
  phone?: string;
  socialHandle?: string;
  appNotice?: string;
  iconType: "police" | "icbf" | "teprotejo" | "fiscalia";
}

export interface ProtectionLaw {
  id: string;
  title: string;
  badge: string;
  entity: string;
  description: string;
  keyObligations: string[];
}

export interface BestPracticeItem {
  number: string;
  title: string;
  description: string;
  category: "familia" | "escuela" | "tecnica";
}

export const LEGAL_FRAMEWORK: ProtectionLaw[] = [
  {
    id: "ley-679-2001",
    title: "Ley 679 de 2001 (Estatuto de Prevención y Lucha contra la Explotación Infantil)",
    badge: "LEY OBLIGATORIA ISP",
    entity: "Congreso de la República de Colombia",
    description:
      "Estatuto legal de orden público que expide medidas de protección contra la explotación, la pornografía, el turismo sexual y demás formas de abuso con menores de edad mediante el uso de redes globales de información e internet.",
    keyObligations: [
      "Obligación ineludible de todos los proveedores de servicios de internet (ISP) de implementar filtros técnicos y bloqueos de dominios y URLs ilegales.",
      "Deber legal de denunciar de manera inmediata ante la Fiscalía General y la Policía Nacional cualquier hallazgo o indicio de material de abuso infantil.",
      "Incorporación obligatoria de advertencias e información sobre los canales de denuncia en los portales corporativos.",
      "Sanciones administrativas, civiles y penales severas por incumplimiento o negligencia en la aplicación de medidas de bloqueo.",
    ],
  },
  {
    id: "decreto-1524-2002",
    title: "Decreto 1524 de 2002 & Decreto 067 de 2003",
    badge: "REGLAMENTACIÓN TÉCNICA",
    entity: "Ministerio de Comunicaciones (MinTIC)",
    description:
      "Reglamenta los procedimientos y directrices técnicas que los operadores de redes de telecomunicaciones e ISP deben aplicar para prevenir la difusión de material alusivo a la explotación sexual de menores en medios electrónicos.",
    keyObligations: [
      "Implementación de listas negras automatizadas provistas por las autoridades judiciales competentes.",
      "Conservación de registros técnicos estrictos respetando la intimidad de los usuarios conforme a la ley.",
      "Disposición de mecanismos de filtrado a disposición de los usuarios y clientes corporativos e institucionales.",
    ],
  },
  {
    id: "ley-1336-2009",
    title: "Ley 1336 de 2009 (Adición y Fortalecimiento de la Ley 679)",
    badge: "PROTECCIÓN REFORZADA",
    entity: "Congreso de la República de Colombia",
    description:
      "Endurecimiento de las penas y medidas administrativas para robustecer la prevención y sanción de la explotación sexual comercial de niños, niñas y adolescentes en plataformas y entornos digitales.",
    keyObligations: [
      "Aumento drástico de penas privativas de la libertad para infractores y facilitadores tecnológicos.",
      "Responsabilidad extendida a prestadores de servicios turísticos y de alojamiento digital.",
      "Fomento activo de campañas pedagógicas permanentes de ciberseguridad en la comunidad educativa.",
    ],
  },
];

export const TECHNICAL_MEASURES = [
  {
    id: "dns-filtering",
    title: "Filtrado DNS y Bloqueo Automatizado de Dominios",
    tag: "BLOQUEO AUTOMATIZADO",
    description:
      "Sincronización en tiempo real con las bases de datos de bloqueo del Centro Cibernético Policial (DIJIN) y organizaciones internacionales para denegar el acceso inmediato a servidores que alojen material ilícito.",
    detail: "Tiempo de propagación de bloqueo inferior a 15 minutos en toda la troncal nacional.",
  },
  {
    id: "law-enforcement",
    title: "Articulación Directa con Fiscalía y Policía Nacional",
    tag: "COORDINACIÓN JUDICIAL",
    description:
      "Protocolo de enlace seguro 24/7 con el Grupo de Investigaciones Tecnológicas de la Fiscalía General de la Nación para remitir reportes y colaborar en investigaciones forenses digitales.",
    detail: "Canal seguro de interoperabilidad interinstitucional con la DIJIN.",
  },
  {
    id: "parental-controls",
    title: "Suministro de Filtros y Guías de Control Parental",
    tag: "HERRAMIENTAS & EDUCACIÓN",
    description:
      "Asesoría técnica y configuración de perfiles seguros en routers corporativos y educativos para colegios, gobernaciones y empresas, restringiendo contenidos para adultos.",
    detail: "Políticas DNS SafeSearch obligatorias para redes escolares y bibliotecas públicas.",
  },
];

export const OFFICIAL_HOTLINES: HotlineItem[] = [
  {
    id: "cai-virtual",
    name: "CAI Virtual — Policía Nacional de Colombia",
    entity: "Centro Cibernético Policial (DIJIN)",
    badge: "POLICÍA NACIONAL",
    description:
      "Centro especializado para la recepción y trámite en tiempo real de denuncias ciudadanas sobre delitos informáticos, pornografía infantil, acoso digital y amenazas en internet.",
    channelUrl: "https://caivirtual.policia.gov.co",
    channelDisplayUrl: "caivirtual.policia.gov.co",
    socialHandle: "@CaiVirtual (X / Twitter)",
    phone: "Línea Directa 123",
    iconType: "police",
  },
  {
    id: "te-protejo",
    name: "Te Protejo Colombia",
    entity: "Red PaPaz / MinTIC / ICBF",
    badge: "REPORTE CIUDADANO",
    description:
      "Línea virtual de reporte confidencial y anónimo contra la explotación sexual comercial de niños, niñas y adolescentes, ciberacoso y contenidos inapropiados en línea.",
    channelUrl: "https://www.teprotejo.org",
    channelDisplayUrl: "teprotejo.org",
    appNotice: "Disponible en Google Play y App Store",
    iconType: "teprotejo",
  },
  {
    id: "icbf-141",
    name: "Línea Gratuita Nacional 141 — ICBF",
    entity: "Instituto Colombiano de Bienestar Familiar",
    badge: "EMERGENCIAS ICBF",
    description:
      "Canal telefónico gratuito nacional de atención a emergencias, denuncias de vulneración de derechos, violencia y maltrato contra niños, niñas y adolescentes.",
    phone: "Marcación gratuita 141 (Celular o Fijo)",
    channelDisplayUrl: "icbf.gov.co",
    channelUrl: "https://www.icbf.gov.co",
    iconType: "icbf",
  },
  {
    id: "fiscalia-122",
    name: "Fiscalía General de la Nación — Canal 'A Denunciar'",
    entity: "Fiscalía General & Policía Nacional",
    badge: "DENUNCIA PENAL",
    description:
      "Plataforma conjunta del Estado colombiano para radicación formal de denuncias penales por delitos sexuales, grooming, extorsión y abusos a menores en plataformas virtuales.",
    phone: "Línea Gratuita 122 (Desde celular)",
    channelUrl: "https://adenunciar.policia.gov.co",
    channelDisplayUrl: "adenunciar.policia.gov.co",
    iconType: "fiscalia",
  },
];

export const SAFETY_RECOMMENDATIONS: BestPracticeItem[] = [
  {
    number: "01",
    title: "Acompañamiento Activo en la Navegación",
    description:
      "Conozca las plataformas, redes sociales, videojuegos y aplicaciones que frecuentan los menores. Mantenga una conversación abierta y empática sobre los hábitos digitales.",
    category: "familia",
  },
  {
    number: "02",
    title: "Activación de SafeSearch y Búsqueda Segura",
    description:
      "Configure los motores de búsqueda (Google, Bing, YouTube) en modo estricto y active los filtros de contenido a nivel del navegador o del enrutador de red.",
    category: "tecnica",
  },
  {
    number: "03",
    title: "Protección de la Privacidad e Información Personal",
    description:
      "Enseñe a nunca compartir nombres completos, dirección del hogar, colegio, números de teléfono, fotografías íntimas ni ubicación en tiempo real en redes públicas.",
    category: "familia",
  },
  {
    number: "04",
    title: "Detección Temprana de Grooming y Ciberacoso",
    description:
      "Advierta que las personas en línea pueden usar identidades falsas. Fomente la confianza para que acudan a un adulto ante mensajes incómodos o solicitudes sospechosas.",
    category: "familia",
  },
  {
    number: "05",
    title: "Gestión Saludable del Tiempo en Pantalla",
    description:
      "Establezca horarios claros para el uso de dispositivos digitales, reservando espacios libres de pantallas durante las comidas familiares y horas de descanso nocturno.",
    category: "familia",
  },
  {
    number: "06",
    title: "Configuración de Contraseñas Fuertes y 2FA",
    description:
      "Promueva el uso de contraseñas robustas y la autenticación de dos factores en cuentas de correo y videojuegos para evitar el robo de cuentas e identidad digital.",
    category: "tecnica",
  },
  {
    number: "07",
    title: "Políticas de Uso Seguro en Redes Escolares",
    description:
      "Para directivos de colegios y escuelas: implementar segmentación de redes Wi-Fi de alumnos y docentes con políticas estrictas de filtrado de contenidos por DNS.",
    category: "escuela",
  },
  {
    number: "08",
    title: "No Descargar Archivos de Fuentes Desconocidas",
    description:
      "Instruya sobre los riesgos de malware, troyanos y enlaces fraudulentos enviados por chats de mensajería instantánea o foros de descargas ilegales.",
    category: "tecnica",
  },
  {
    number: "09",
    title: "Fomentar el Pensamiento Crítico Digital",
    description:
      "Ayude a los jóvenes a discernir información verídica de noticias falsas (fake news), retos virales peligrosos y ofertas engañosas que circulan en la red.",
    category: "escuela",
  },
  {
    number: "10",
    title: "Reportar y Denunciar Sin Temor",
    description:
      "Recuerde que el silencio favorece a los delincuentes. Ante cualquier amenaza, sospecha o vulneración, recurra de inmediato a las líneas 141, 122 o CAI Virtual.",
    category: "familia",
  },
];
