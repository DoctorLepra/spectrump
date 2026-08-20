export interface ContactChannel {
  id: string;
  department: string;
  badge: string;
  description: string;
  email: string;
  phone: string;
  hours: string;
  iconName: string;
}

export interface ServiceOption {
  value: string;
  label: string;
  description: string;
}

export const SERVICE_OPTIONS: ServiceOption[] = [
  {
    value: "conectividad-institucional",
    label: "Conectividad Institucional & Sector Público",
    description: "Soluciones de internet dedicado para entidades gubernamentales y educativas",
  },
  {
    value: "internet-corporativo",
    label: "Internet Dedicado Corporativo Simétrico (1:1)",
    description: "Fibra óptica directa para empresas, data centers y sedes corporativas",
  },
  {
    value: "energia-solar",
    label: "Proyecto de Energía Solar Fotovoltaica (EPC)",
    description: "Matrices solares sobre techo o suelo con beneficios Ley 1715 y RETIE",
  },
  {
    value: "interconexion-redes",
    label: "Interconexión Multi-Sede & Enlaces Punto a Punto",
    description: "Redes MPLS, SD-WAN y transporte óptico privado nacional",
  },
  {
    value: "soporte-noc",
    label: "Soporte Técnico / Atención NOC 24/7",
    description: "Consultas técnicas de disponibilidad de servicio y contingencias",
  },
  {
    value: "otro",
    label: "Otro / Consulta General o Radicación PQR",
    description: "Consultas institucionales y trámites administrativos",
  },
];

export const DIRECT_CHANNELS: ContactChannel[] = [
  {
    id: "sector-publico",
    department: "Mesa de Atención Sector Público & Institucional",
    badge: "SECTOR PÚBLICO",
    description: "Atención técnica especializada para soluciones de conectividad e infraestructura pública.",
    email: "contacto@spectrump.co",
    phone: "+57 (601) 745-8901",
    hours: "Lunes a Viernes · 08:00 - 18:00 COT",
    iconName: "FileText",
  },
  {
    id: "comercial",
    department: "Ventas Corporativas & Proyectos Solares",
    badge: "SECTOR EMPRESARIAL",
    description: "Dimensionamiento de enlaces dedicados empresariales, auditorías energéticas y proyectos fotovoltaicos llave en mano.",
    email: "comercial@spectrump.co",
    phone: "+57 (310) 890-7766",
    hours: "Lunes a Viernes · 08:00 - 18:00 COT",
    iconName: "Briefcase",
  },
  {
    id: "noc",
    department: "Centro de Control NOC 24/7 (Soporte Técnico)",
    badge: "DISPONIBILIDAD 24/7",
    description: "Monitoreo continuo de la troncal nacional, resolución de incidentes de red y atención a fallas con MTTR garantizado.",
    email: "noc@spectrump.co",
    phone: "01 8000 910 247",
    hours: "24 Horas al Día · 365 Días al Año",
    iconName: "Server",
  },
];

export const HEADQUARTERS_LOCATION = {
  city: "Bogotá D.C., Colombia",
  address: "Carrera 7 # 71-21, Torre B, Piso 12",
  postalCode: "110231",
  phonePBX: "+57 (601) 745-8900",
  tollFreeNational: "01 8000 910 247",
  whatsapp: "+57 (310) 890-7766",
  emailGeneral: "contacto@spectrump.co",
  coordinates: {
    lat: "4.6534° N",
    long: "74.0565° W",
    altitude: "2,640 msnm",
    city: "Bogotá D.C.",
  },
  status: "🟢 Troncal Nacional 100% Operativa",
  networkPoints: [
    { city: "Bogotá D.C.", type: "Core Central & NOC", status: "Operativo 100%" },
    { city: "Medellín", type: "Nodo Troncal Noroccidente", status: "Operativo 100%" },
    { city: "Cali", type: "Nodo Troncal Suroccidente", status: "Operativo 100%" },
    { city: "Barranquilla", type: "Nodo Salida Submarina", status: "Operativo 100%" },
    { city: "Bucaramanga", type: "Nodo Troncal Oriente", status: "Operativo 100%" },
  ],
};
