export interface ServiceItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  keyPoints: string[];
  ctaLabel: string;
  ctaHref: string;
  category: "telecom" | "solar";
  highlightColor: string;
  iconName: string;
}

export interface MetricItem {
  id: string;
  value: string;
  label: string;
  detail: string;
  trend?: string;
}

export interface DifferentiatorItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  iconName: string;
  badge: string;
}

export interface ProcessStepItem {
  step: string;
  title: string;
  description: string;
  timing: string;
}

export const HERO_METRICS: MetricItem[] = [
  {
    id: "sla",
    value: "99.98%",
    label: "SLA Disponibilidad Garantizada",
    detail: "Conmutación automática BGP4 en anillo de fibra",
    trend: "+0.02% vs estándar",
  },
  {
    id: "telecom-proyectos",
    value: "100+",
    label: "Proyectos de Infraestructura Ejecutados",
    detail: "Redes de Fibra Óptica y Enlaces de Alta Capacidad",
    trend: "100% disponibilidad",
  },
  {
    id: "solar-mwp",
    value: "15+ MWp",
    label: "Potencia Solar Fotovoltaica Instalada",
    detail: "Matrices On-Grid, Off-Grid y Respaldo BESS",
    trend: "Transición Ley 1715",
  },
  {
    id: "noc",
    value: "24/7/365",
    label: "Centro de Operaciones de Red (NOC)",
    detail: "Monitoreo proactivo con MTTR menor a 2 horas",
    trend: "Atención inmediata",
  },
];

export const MAIN_SERVICES: ServiceItem[] = [
  {
    id: "internet-dedicado",
    tag: "TELECOMUNICACIONES CARRIER-GRADE",
    title: "Internet Dedicado & Redes de Alta Capacidad",
    description:
      "Conectividad simétrica 1:1 de máxima velocidad para entidades públicas, educativas y grandes corporaciones, garantizando baja latencia y soporte continuo.",
    keyPoints: [
      "Fibra óptica monomodo redundante con baja latencia nacional e internacional.",
      "Enlaces de alta capacidad con acuerdos de nivel de servicio (SLA) garantizados.",
      "Soporte NOC proactivo con tiempos de respuesta (MTTR) menores a 2 horas.",
      "Enlaces punto a punto (P2P), redes MPLS y SD-WAN corporativas.",
    ],
    ctaLabel: "Solicitar Conectividad",
    ctaHref: "/contacto?servicio=conectividad",
    category: "telecom",
    highlightColor: "#00D4FF",
    iconName: "Radio",
  },
  {
    id: "energia-solar",
    tag: "GENERACIÓN RENOVABLE & SOSTENIBILIDAD",
    title: "Sistemas Solares Fotovoltaicos a Medida",
    description:
      "Ingeniería, suministro e instalación de matrices solares corporativas e industriales (On-Grid, Off-Grid e Híbridos) con certificación RETIE.",
    keyPoints: [
      "Reducción de costos de energía operativa de hasta un 70%.",
      "Beneficios tributarios y deducciones conforme a la Ley 1715 de 2014 y Ley 2099 de 2021.",
      "Respaldo ininterrumpido BESS (Baterías de Litio) para infraestructura crítica.",
      "Monitoreo telemétrico en tiempo real de generación y ahorro de CO₂.",
    ],
    ctaLabel: "Dimensionar Proyecto Solar",
    ctaHref: "/contacto?servicio=energia-solar",
    category: "solar",
    highlightColor: "#FFB703",
    iconName: "SunMedium",
  },
];

export const DIFFERENTIATORS: DifferentiatorItem[] = [
  {
    id: "velocidad",
    tag: "[ ANCHO DE BANDA 1:1 ]",
    title: "Velocidad & Capacidad Ultrarrápida",
    description:
      "Enlaces simétricos desde 100 Mbps hasta 100 Gbps sin compartición de reuso. Peering directo con los principales IXP de Colombia (NAP Colombia) y puntos de intercambio en EE.UU. para mínima latencia.",
    iconName: "Zap",
    badge: "100 Gbps Max",
  },
  {
    id: "confiabilidad",
    tag: "[ SLA 99.98% CONTRACTUAL ]",
    title: "Confiabilidad & Resiliencia Total",
    description:
      "Arquitectura de anillo de fibra óptica con conmutación automática de rutas BGP4 ante cortes de troncal, respaldada por sistemas solares híbridos sin interrupciones operativas.",
    iconName: "ShieldCheck",
    badge: "SLA 99.98%",
  },
  {
    id: "cobertura",
    tag: "[ 32 DEPARTAMENTOS ]",
    title: "Cobertura Nacional Estratégica",
    description:
      "Presencia troncal en los principales corredores económicos del país y capacidad probada de despliegue en municipios apartados para proyectos de conectividad social y escuelas rurales.",
    iconName: "Globe",
    badge: "Presencia Nacional",
  },
  {
    id: "ahorro",
    tag: "[ LEY 1715 / INCENTIVOS ]",
    title: "Ahorro & Rentabilidad Certificada",
    description:
      "Estructuración técnica de proyectos solares con amortización acelerada, exención de aranceles de importación, exclusión de IVA y deducción de renta para optimizar el gasto de inversión CAPEX.",
    iconName: "TrendingUp",
    badge: "Hasta 70% Ahorro",
  },
];

export const PROCESS_STEPS: ProcessStepItem[] = [
  {
    step: "01",
    title: "Diagnóstico y Factibilidad",
    description:
      "Levantamiento topográfico, análisis exhaustivo de pliegos de condiciones SECOP II o estudio de radiación solar satelital y curvas de carga eléctrica.",
    timing: "Fase 1 · 24-48 Horas",
  },
  {
    step: "02",
    title: "Ingeniería de Detalle & Oferta Técnica",
    description:
      "Dimensionamiento de enlaces de datos o capacidad fotovoltaica bajo estrictas normativas CRC, RETIE y especificaciones de pliegos tipo del Estado.",
    timing: "Fase 2 · 3-5 Días Hábiles",
  },
  {
    step: "03",
    title: "Despliegue, Tendido e Interconexión",
    description:
      "Instalación de fibra óptica monomodo o montaje de paneles solares Tier-1 con personal certificado CONTE/COPNIA y protocolos de trabajo en alturas Resolución 4272.",
    timing: "Fase 3 · Según Cronograma",
  },
  {
    step: "04",
    title: "Operación, Monitoreo y Mantenimiento NOC",
    description:
      "Supervisión continua 24/7/365 en tiempo real, mantenimientos preventivos programados y respuesta ante incidentes con MTTR menor a 2 horas.",
    timing: "Fase 4 · Soporte Continuo",
  },
];
