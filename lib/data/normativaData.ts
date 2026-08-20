export interface LawArticle {
  id: string;
  category: "telecom" | "solar" | "habeas-data";
  badge: string;
  title: string;
  entity: string;
  description: string;
  keyPoints: string[];
  docReference: string;
}

export interface PQRChannel {
  type: string;
  detail: string;
  timing: string;
  description: string;
  iconName: string;
}

export const TELECOM_REGULATIONS: LawArticle[] = [
  {
    id: "ley-1341-1978",
    category: "telecom",
    badge: "LEY TIC MARCO",
    title: "Ley 1341 de 2009 & Ley 1978 de 2019 (Ley de Modernización TIC)",
    entity: "Congreso de la República & MinTIC",
    description:
      "Marco general para la formulación de políticas públicas del sector TIC en Colombia, garantizando la libre competencia, la neutralidad en la red, el acceso universal a las telecomunicaciones y la protección reforzada de los derechos de los usuarios.",
    keyPoints: [
      "Principio de neutralidad de red: trato no discriminatorio a los paquetes de datos.",
      "Garantía de libre competencia e interconexión eficiente de redes.",
      "Promoción prioritaria del acceso a internet en zonas rurales y apartadas del país.",
      "Vigilancia e inspección técnica por parte del Ministerio TIC y la CRC.",
    ],
    docReference: "Diario Oficial N° 51.025 / Ley 1978 de 2019",
  },
  {
    id: "crc-5050",
    category: "telecom",
    badge: "REGULACIÓN COMPILADA",
    title: "Resolución CRC 5050 de 2016",
    entity: "Comisión de Regulación de Comunicaciones (CRC)",
    description:
      "Compilación integral de normas de carácter regulatorio para redes y servicios de comunicaciones en Colombia, estableciendo el régimen de calidad, disponibilidad mínima, indicadores de latencia, jitter y compensaciones automáticas a usuarios.",
    keyPoints: [
      "Indicadores estrictos de calidad del servicio de acceso a internet (QoS).",
      "Régimen de compensación económica por indisponibilidad de enlace.",
      "Obligaciones de publicación transparente de mediciones y capacidad de ancho de banda.",
      "Estandarización de protocolos de interconexión mayorista de fibra óptica.",
    ],
    docReference: "Resolución CRC 5050 de 2016 y modificatorias vigentes",
  },
  {
    id: "rpu-crc",
    category: "telecom",
    badge: "PROTECCIÓN AL USUARIO",
    title: "Régimen de Protección al Usuario de Servicios de Comunicaciones (RPU)",
    entity: "CRC / Superintendencia de Industria y Comercio (SIC)",
    description:
      "Conjunto de derechos y deberes para la atención transparente de usuarios corporativos e institucionales, gestión de facturación clara, soporte técnico garantizado y mecanismos obligatorios de radicación de peticiones, quejas y reclamos (PQR).",
    keyPoints: [
      "Derecho a la facturación discriminada y detallada de consumo.",
      "Obligación de atender y responder PQR en un plazo máximo de 15 días hábiles.",
      "Facilidad de cesión, modificación y terminación contractual sin trabas abusivas.",
      "Garantía de canales virtuales, telefónicos y presenciales de radicación.",
    ],
    docReference: "Título II - Resolución CRC 5050 / Circular Única SIC",
  },
  {
    id: "registro-mintic",
    category: "telecom",
    badge: "HABILITACIÓN GENERAL",
    title: "Registro Único de TIC (MinTIC)",
    entity: "Ministerio de Tecnologías de la Información y las Comunicaciones",
    description:
      "Habilitación general legal otorgada a SPRECTRUMP COLOMBIA para la provisión de redes y servicios de telecomunicaciones en todo el territorio nacional, acreditando cumplimiento de contraprestaciones periódicas y solvencia técnica.",
    keyPoints: [
      "Habilitación legal para prestación de servicios portadores y de valor agregado.",
      "Cumplimiento del Fondo Único de Tecnologías de la Información y las Comunicaciones (FUTIC).",
      "Autorización para participación en procesos licitatorios y acuerdos marco de precios.",
      "Auditoría técnica periódica de seguridad de la infraestructura nacional.",
    ],
    docReference: "Registro TIC Resolución MinTIC N° 9600xxxx",
  },
];

export const SOLAR_REGULATIONS: LawArticle[] = [
  {
    id: "ley-1715-2099",
    category: "solar",
    badge: "TRANSICIÓN ENERGÉTICA",
    title: "Ley 1715 de 2014 & Ley 2099 de 2021 (Estatuto de Energías Renovables)",
    entity: "Ministerio de Minas y Energía / UPME",
    description:
      "Estatuto que promueve el desarrollo y la utilización de Fuentes No Convencionales de Energía Renovable (FNCER) en Colombia, otorgando incentivos tributarios de alto impacto financiero para proyectos corporativos y gubernamentales.",
    keyPoints: [
      "Deducción especial del 50% del valor de la inversión en el impuesto sobre la renta.",
      "Exclusión total del IVA (0%) en la adquisición de equipos, paneles solares e inversores.",
      "Exención arancelaria para importación de bienes e insumos no producidos en el país.",
      "Depreciación acelerada de activos de generación solar de hasta el 33.3% anual.",
    ],
    docReference: "Ley 1715 de 2014 / Ley 2099 de 2021 / Certificación UPME",
  },
  {
    id: "creg-174",
    category: "solar",
    badge: "AUTOGENERACIÓN & SIN",
    title: "Resolución CREG 174 de 2021",
    entity: "Comisión de Regulación de Energía y Gas (CREG)",
    description:
      "Regulación técnica y comercial de las actividades de autogeneración a pequeña escala (AGPE) y generación distribuida (GD) en el Sistema Interconectado Nacional (SIN), permitiendo la entrega y remuneración de excedentes energéticos a la red.",
    keyPoints: [
      "Procedimiento ágil de conexión simplificada para proyectos de hasta 5 MWp.",
      "Mecanismo de venta y remuneración horaria de excedentes al Operador de Red (OR).",
      "Estandarización de protecciones y medidores bidireccionales homologados.",
      "Garantía de libre acceso no discriminatorio a las redes de distribución local.",
    ],
    docReference: "Resolución CREG 174 de 2021",
  },
  {
    id: "retie",
    category: "solar",
    badge: "SEGURIDAD ELÉCTRICA",
    title: "Reglamento Técnico de Instalaciones Eléctricas (RETIE)",
    entity: "Ministerio de Minas y Energía / Organismos de Inspección Acreditados ONAC",
    description:
      "Normativa técnica de estricto cumplimiento legal que fija los requisitos de seguridad eléctrica para prevenir riesgos que puedan atentar contra la vida, la salud y el medio ambiente en todo montaje de generación solar fotovoltaica.",
    keyPoints: [
      "Certificación de conformidad de producto para paneles, inversores, protecciones y cable fotovoltaico.",
      "Inspección y dictamen de conformidad RETIE emitido por organismo acreditado ONAC.",
      "Diseño eléctrico firmado por ingenieros electricistas con matrícula profesional vigente.",
      "Sistemas de puesta a tierra (SPT) y apantallamiento contra descargas atmosféricas.",
    ],
    docReference: "Resolución MinMinas 90708 de 2013 y actualizaciones RETIE",
  },
];

export const HABEAS_DATA_POLICY = {
  title: "Tratamiento de Datos Personales y Habeas Data (Ley 1581 de 2012)",
  description:
    "SPRECTRUMP COLOMBIA S.A.S. E.S.P., en calidad de Responsable del Tratamiento de Datos Personales, garantiza el cumplimiento estricto de la Ley Estatutaria 1581 de 2012 y el Decreto Reglamentario 1377 de 2013. Los datos recolectados en nuestros canales comerciales y de soporte son tratados con confidencialidad, integridad y bajo finalidades legítimas vinculadas a la prestación de servicios, facturación y requerimientos de soporte técnico.",
  points: [
    "Los titulares tienen derecho a conocer, actualizar, rectificar y suprimir sus datos en cualquier momento.",
    "No compartimos, cedemos ni comercializamos bases de datos con terceros sin autorización expresa.",
    "Implementamos controles de seguridad física, técnica y administrativa basados en ISO 27001.",
    "Para ejercer derechos de Habeas Data, dirija su solicitud a habeasdata@spectrump.co.",
  ],
};

export const PQR_INFO = {
  title: "Atención de Peticiones, Quejas, Reclamos y Recursos (PQR)",
  description:
    "Garantizamos a todos nuestros clientes del sector público y corporativo un trámite transparente, oportuno y trazable de sus solicitudes conforme al Código de Procedimiento Administrativo y de lo Contencioso Administrativo (CPACA) y las directrices de la CRC.",
  responseTerm: "15 Días Hábiles Máximo",
  email: "pqr@spectrump.co",
  physicalOffice: "Carrera 7 # 71-21, Torre B, Piso 12, Bogotá D.C.",
  channels: [
    {
      type: "Canal Electrónico PQR",
      detail: "pqr@spectrump.co",
      timing: "Radicación 24/7 con código de radicado automático",
      description: "Recepción de documentos digitales, recursos de reposición y en subsidio de apelación ante la SIC.",
      iconName: "Mail",
    },
    {
      type: "Línea Telefónica PQR",
      detail: "+57 (601) 745-8900 / 01 8000 910 247",
      timing: "Lunes a Viernes de 8:00 AM a 6:00 PM COT",
      description: "Atención verbal con asignación inmediata de número CUN (Código Único Numérico).",
      iconName: "Phone",
    },
    {
      type: "Radicación Presencial",
      detail: "Oficina Bogotá: Carrera 7 # 71-21, Torre B, Piso 12",
      timing: "Lunes a Viernes de 8:00 AM a 5:00 PM COT",
      description: "Ventanilla única de correspondencia física para entidades estatales y empresas.",
      iconName: "Building2",
    },
  ],
};
