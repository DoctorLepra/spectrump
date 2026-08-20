export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  credentials: string;
  bio: string;
  specialties: string[];
  certifications: string[];
  avatarPlaceholder: string;
  linkedinUrl?: string;
  emailContact?: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "carlos-montoya",
    name: "Ing. Carlos Eduardo Montoya",
    role: "Director General / Chief Executive Officer (CEO)",
    department: "Dirección Ejecutiva",
    credentials: "Ingeniero Electrónico — Magíster en Telecomunicaciones (Universidad Nacional de Colombia)",
    bio: "Más de 18 años de trayectoria en el sector TIC colombiano. Ha liderado la estructuración y entrega de macroproyectos de conectividad en más de 20 departamentos, articulando soluciones de transporte óptico para entidades del Estado y corporaciones multinacionales.",
    specialties: [
      "Estrategia TIC",
      "Licitaciones Estatales",
      "Redes Carrier-Class",
      "Alianzas Público-Privadas",
    ],
    certifications: ["Magíster UNAL", "Liderazgo Estratégico", "COPNIA"],
    avatarPlaceholder: "CEM",
    linkedinUrl: "https://linkedin.com",
    emailContact: "carlos.montoya@spectrump.co",
  },
  {
    id: "valeria-restrepo",
    name: "Dra. Valeria Restrepo Mejía",
    role: "Directora Jurídica & Asuntos Regulatorios",
    department: "Asuntos Legales y Cumplimiento",
    credentials: "Abogada — Especialista en Derecho Administrativo y Contratación Estatal (Universidad del Rosario)",
    bio: "Experta en pliegos de condiciones SECOP II, régimen de telecomunicaciones de la Comisión de Regulación de Comunicaciones (CRC) y estructuración contractual de acuerdos marco de precios MinTIC para entidades gubernamentales.",
    specialties: [
      "SECOP II & Ley 80",
      "Derecho Regulatorio TIC",
      "Compliance Estatal",
      "Protección Habeas Data",
    ],
    certifications: ["Esp. Derecho Administrativo", "Contratación Pública", "Regulación CRC"],
    avatarPlaceholder: "VRM",
    linkedinUrl: "https://linkedin.com",
    emailContact: "valeria.restrepo@spectrump.co",
  },
  {
    id: "felipe-sarmiento",
    name: "Ing. Felipe Andrés Sarmiento",
    role: "Director de Ingeniería & Proyectos de Energía Solar",
    department: "División Solar & Transición Energética",
    credentials: "Ingeniero Eléctrico — Especialista en Energías Renovables y Smart Grids (Universidad de los Andes)",
    bio: "Más de 12 años diseñando parques fotovoltaicos industriales y techos solares corporativos. Ha supervisado la instalación y puesta en marcha de más de 25 MWp en Colombia bajo estricta conformidad RETIE y CREG 174.",
    specialties: [
      "Diseños RETIE",
      "Sistemas Fotovoltaicos BESS",
      "Incentivos Ley 1715",
      "Interconexión CREG 174",
    ],
    certifications: ["Matrícula CONTE / COPNIA", "Especialista Solar", "Inspector RETIE"],
    avatarPlaceholder: "FAS",
    linkedinUrl: "https://linkedin.com",
    emailContact: "felipe.sarmiento@spectrump.co",
  },
  {
    id: "andrea-castro",
    name: "Ing. Andrea Marcela Castro",
    role: "Líder de Centro de Operaciones de Red (NOC) & Ciberseguridad",
    department: "Operaciones de Red & Ciberseguridad",
    credentials: "Ingeniera de Sistemas — Certificada CISSP, CCIE Enterprise Infrastructure (Pontificia Universidad Javeriana)",
    bio: "Responsable de la operatividad 24/7/365 de la troncal nacional de fibra óptica, mitigación proactiva de ataques volumétricos DDoS, seguridad perimetral y protocolos de alta disponibilidad de enrutamiento BGP4 multi-homing.",
    specialties: [
      "Monitoreo NOC 24/7",
      "Ciberseguridad CISSP",
      "Enrutamiento BGP4 & MPLS",
      "Mitigación DDoS",
    ],
    certifications: ["CISSP", "CCIE Enterprise", "ISO 27001 Auditor"],
    avatarPlaceholder: "AMC",
    linkedinUrl: "https://linkedin.com",
    emailContact: "andrea.castro@spectrump.co",
  },
  {
    id: "david-gomez",
    name: "Ing. David Santiago Gómez",
    role: "Gerente de Planta Externa & Despliegue de Fibra",
    department: "Infraestructura & Planta Externa",
    credentials: "Ingeniero de Telecomunicaciones — Certificado PMP® (Project Management Professional)",
    bio: "Lidera cuadrillas técnicas especializadas en tendido aéreo sobre postes, canalizaciones subterráneas y microtúneles de fibra óptica monomodo en entornos urbanos y rurales de alta complejidad geográfica en Colombia.",
    specialties: [
      "Planta Externa",
      "Redes GPON / DWDM",
      "Despliegue Nacional",
      "Gestión de Proyectos PMP",
    ],
    certifications: ["PMP® Certified", "FOA Certified CFOT", "Resolución 4272 Alturas"],
    avatarPlaceholder: "DSG",
    linkedinUrl: "https://linkedin.com",
    emailContact: "david.gomez@spectrump.co",
  },
  {
    id: "mariana-torres",
    name: "Lic. Mariana Torres Duque",
    role: "Gerente de Experiencia al Cliente Corporativo & Calidad ISO",
    department: "Calidad, SLA & Experiencia de Usuario",
    credentials: "Administradora de Empresas — Auditora Líder Certificada ISO 9001:2015 & ISO 27001",
    bio: "Asegura el cumplimiento riguroso de los acuerdos de nivel de servicio (SLA) contractuales y lidera la atención personalizada VIP para clientes corporativos, gobernaciones y ministerios conectados a la red.",
    specialties: [
      "Gestión Contractual SLA",
      "Auditoría ISO 9001/27001",
      "Mesa de Ayuda VIP",
      "Mejora Continua ITIL",
    ],
    certifications: ["Auditora Líder ISO", "ITIL v4 Foundation", "Gestión de Calidad"],
    avatarPlaceholder: "MTD",
    linkedinUrl: "https://linkedin.com",
    emailContact: "mariana.torres@spectrump.co",
  },
];

export const CULTURE_HIGHLIGHTS = {
  title: "Cultura de Seguridad y Respaldo Profesional",
  description:
    "Todo nuestro equipo técnico y de campo cuenta con certificaciones vigentes de trabajo seguro en alturas (Resolución 4272 de 2021 del Ministerio del Trabajo), matrícula profesional avalada por CONTE y COPNIA, y constante capacitación en estándares internacionales IEEE, ITU-T y RETIE.",
  badges: [
    "Resolución 4272 de 2021 (Trabajo en Alturas)",
    "Matrícula Profesional CONTE / COPNIA",
    "Estándares ITU-T & IEEE",
    "Políticas de Cero Accidentes SISO",
  ],
};
