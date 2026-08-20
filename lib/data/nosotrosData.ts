export interface ValueItem {
  id: string;
  number: string;
  title: string;
  tag: string;
  description: string;
  iconName: string;
}

export interface MilestoneItem {
  year: string;
  period: string;
  title: string;
  tag: string;
  description: string;
  highlightMetric: string;
}

export interface SectorPoint {
  title: string;
  description: string;
  badge: string;
}

export interface CertificationBadge {
  id: string;
  code: string;
  title: string;
  entity: string;
  scope: string;
}

export const COMPANY_MISSION = {
  tag: "// DECLARACIÓN DE MISIÓN",
  heading: "Conectar a Colombia y Energizar su Desarrollo",
  content:
    "Proveer soluciones integrales de conectividad por fibra óptica y energía solar fotovoltaica de alto rendimiento para el sector público y empresarial en Colombia, asegurando los más altos estándares de disponibilidad, sostenibilidad ambiental y cumplimiento ético en cada proyecto ejecutado.",
};

export const COMPANY_VISION = {
  tag: "// VISIÓN ESTRATÉGICA 2030",
  heading: "Referente Nacional en Infraestructura Crítica",
  content:
    "Posicionarnos para el año 2030 como el aliado estratégico referente en infraestructura de conectividad y transformación energética en Colombia, reconocidos por nuestra solidez técnica, capacidad de innovación en redes inteligentes y aporte decisivo al cierre de la brecha digital y la transición energética justa del país.",
};

export const CORPORATE_VALUES: ValueItem[] = [
  {
    id: "transparencia",
    number: "01",
    title: "Transparencia & Ética Operativa",
    tag: "[ COMPLIANCE Y GOBIERNO ]",
    description:
      "Rigor estricto en la estructuración y ejecución de proyectos, garantizando rendición de cuentas, procesos transparentes y cero tolerancia al soborno o prácticas indebidas.",
    iconName: "FileCheck2",
  },
  {
    id: "excelencia",
    number: "02",
    title: "Excelencia Técnica Carrier-Grade",
    tag: "[ ESTÁNDARES INTERNACIONALES ]",
    description:
      "Implementación de equipamiento de clase mundial (routers de borde, fibra monomodo ITU-T G.652D, paneles solares Tier-1) con estricto cumplimiento de especificaciones de ingeniería y certificaciones RETIE.",
    iconName: "Award",
  },
  {
    id: "ambiente",
    number: "03",
    title: "Compromiso con la Sostenibilidad",
    tag: "[ LEY 1715 / TRANSICIÓN ]",
    description:
      "Fomento activo de fuentes no convencionales de energía renovable (FNCER) para descarbonizar la matriz energética nacional y reducir la huella de carbono de instituciones estatales y corporaciones.",
    iconName: "Leaf",
  },
  {
    id: "servicio",
    number: "04",
    title: "Vocación de Servicio & Disponibilidad NOC",
    tag: "[ SLA 99.98% / NOC 24/7 ]",
    description:
      "Acompañamiento cercano y personalizado a cada entidad usuaria, con tiempos de respuesta inmediatos ante fallas y monitoreo continuo 24/7/365 por ingenieros especializados.",
    iconName: "Headphones",
  },
];

export const TIMELINE_MILESTONES: MilestoneItem[] = [
  {
    year: "2016",
    period: "Fundación & Redes Metropolitanas",
    title: "Nacimiento de la compañía y primeros anillos ópticos",
    tag: "GÉNESIS",
    description:
      "Inicios de operaciones con despliegue de redes metropolitanas de fibra óptica corporativa en Bogotá y Cundinamarca, atendiendo a clientes del sector financiero y data centers.",
    highlightMetric: "50 km Fibra Desplegada",
  },
  {
    year: "2019",
    period: "Ingreso al Sector Público & Habilitación",
    title: "Habilitación MinTIC y expansión de proyectos nacionales",
    tag: "EXPANSIÓN NACIONAL",
    description:
      "Obtención del Registro Único TIC de MinTIC y primera gran fase de expansión para conectar alcaldías y centros de salud en la región andina.",
    highlightMetric: "25 Entidades Conectadas",
  },
  {
    year: "2022",
    period: "División Solar & Transición Energética",
    title: "Creación de la división fotovoltaica y primer parque de 2 MWp",
    tag: "ENERGÍA LIMPIA",
    description:
      "Integración de ingenieros especialistas en energía solar, certificación en RETIE y puesta en marcha del primer parque solar de autogeneración a gran escala para clientes industriales.",
    highlightMetric: "2 MWp Solar Instalado",
  },
  {
    year: "2024 - 2026",
    period: "Expansión Nacional e Infraestructura Híbrida",
    title: "Consolidación de más de 15 MWp y cobertura en 32 departamentos",
    tag: "LIDERAZGO NACIONAL",
    description:
      "Consolidación de infraestructura híbrida (telecomunicaciones de alta velocidad respaldadas por energía solar) en más de 200 municipios colombianos y 100+ proyectos ejecutados exitosamente.",
    highlightMetric: "15+ MWp & 32 Dptos",
  },
];

export const PUBLIC_SECTOR_POINTS: SectorPoint[] = [
  {
    title: "Cumplimiento de Estándares Regulados MinTIC & Ley 1341",
    description: "Solidez jurídica y técnica acreditada para operar infraestructura pública de comunicaciones y redes de alta disponibilidad a nivel nacional.",
    badge: "Habilitado MinTIC",
  },
  {
    title: "Capacidad de Otorgamiento de Pólizas y Garantías Contractuales",
    description: "Respaldo con aseguradoras de primer nivel para emitir pólizas de seriedad de oferta, cumplimiento, salarios y prestaciones sociales, y calidad del servicio.",
    badge: "100% Amparado",
  },
  {
    title: "Conectividad Social y Escuelas Rurales MinTIC",
    description: "Experiencia en despliegue de zonas Wi-Fi públicas comunitarias y conectividad de alta disponibilidad para colegios públicos y centros de salud remotos.",
    badge: "Impacto Social",
  },
];

export const ENTERPRISE_SECTOR_POINTS: SectorPoint[] = [
  {
    title: "Enlaces de Internet Simétrico 1:1 para Data Centers",
    description: "Ancho de banda dedicado sin sobresuscripción, peering BGP4 con múltiples upstream providers internacionales y latencias mínimas a la nube.",
    badge: "Simetría 1:1",
  },
  {
    title: "Proyectos de Autogeneración Solar Fotovoltaica EPC Llave en Mano",
    description: "Diseño, suministro, montaje, legalización ante Operador de Red y trámite de beneficios tributarios Ley 1715 (deducción renta 50%, IVA 0%).",
    badge: "Ahorro hasta 70%",
  },
  {
    title: "Sistemas de Respaldo Ininterrumpido con Baterías BESS",
    description: "Soluciones de almacenamiento electroquímico de litio para garantizar continuidad operativa ante fluctuaciones o cortes en la red eléctrica comercial.",
    badge: "Zero Downtime",
  },
];

export const CERTIFICATIONS_LIST: CertificationBadge[] = [
  {
    id: "mintic",
    code: "MinTIC REG-TIC",
    title: "Registro Único de Proveedores de Redes y Servicios TIC",
    entity: "Ministerio de Tecnologías de la Información y las Comunicaciones",
    scope: "Habilitación general legal para provisión de telecomunicaciones en Colombia.",
  },
  {
    id: "crc",
    code: "CRC RES 5050",
    title: "Cumplimiento Regulatorio de Calidad de Red",
    entity: "Comisión de Regulación de Comunicaciones",
    scope: "Parámetros QoS, disponibilidad de enlace y protección al usuario.",
  },
  {
    id: "iso-9001",
    code: "ISO 9001:2015",
    title: "Sistema de Gestión de la Calidad (SGC)",
    entity: "Organismo de Certificación Acreditado",
    scope: "Diseño, despliegue, operación de telecomunicaciones y proyectos solares.",
  },
  {
    id: "iso-27001",
    code: "ISO 27001:2022",
    title: "Sistema de Gestión de Seguridad de la Información (SGSI)",
    entity: "Organismo de Certificación Acreditado",
    scope: "Confidencialidad, integridad y disponibilidad en el NOC y redes de datos.",
  },
  {
    id: "retie",
    code: "RETIE CONFORMIDAD",
    title: "Reglamento Técnico de Instalaciones Eléctricas",
    entity: "Organismo de Inspección Acreditado ONAC",
    scope: "Certificación de seguridad técnica para todos los proyectos solares FV.",
  },
];
