"use client";

import React, { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { Save, CheckCircle, AlertTriangle, FileText, Type, Image as ImageIcon, Video, AlignLeft, Phone, Clock, Mail, Zap, Shield, Globe, Cpu, Wifi, Battery, Server, Cloud, Activity, Award, Briefcase, Settings, Wrench, Lightbulb, Trash2, Plus, Sun, ShieldCheck, Monitor, Leaf, ArrowLeft, TrendingUp, ChevronDown, ChevronUp, Headphones, Target, Compass, Users, BookOpen, Radio, Gavel, Network, ClipboardList, Scale, Landmark, Receipt, MapPin, BarChart3, Gauge, Sliders, FileCode, FileCheck, Baby } from "lucide-react";
import { CldUploadWidget } from 'next-cloudinary';

const PAGE_SCHEMAS: Record<string, { key: string, label: string, fields: { key: string, label: string, type: 'text' | 'textarea' | 'image' | 'video' | 'capabilities' | 'qualities' | 'project_list' | 'advantages' | 'values_list' | 'divider' | 'casos_exito_list' | 'info' | 'normativas_list' | 'features_list' | 'canales_list', placeholder?: string, fullWidth?: boolean, allowedFormats?: string[] }[] }[]> = {
  inicio: [
    {
      key: 'inicio_hero',
      label: 'Presentación',
      fields: [
        { key: 'title_part_1', label: 'Título Parte 1', type: 'text', placeholder: 'Tecnología que' },
        { key: 'shiny_1', label: 'Texto Brillante 1', type: 'text', placeholder: 'conecta' },
        { key: 'title_part_2', label: 'Título Parte 2', type: 'text', placeholder: 'energía que' },
        { key: 'shiny_2', label: 'Texto Brillante 2', type: 'text', placeholder: 'transforma.' },
        { key: 'description', label: 'Descripción', type: 'textarea', placeholder: 'Soluciones integrales de ingeniería, conectividad, energía y tecnología para proyectos que generan impacto y construyen un futuro más sostenible.' },
        { key: 'video_url', label: 'Video de fondo', type: 'video' }
      ]
    },
    {
      key: 'inicio_historia',
      label: 'Sección de Descripción',
      fields: [
        { key: 'subtitle_part_1', label: 'Título Parte 1', type: 'text', placeholder: 'Infraestructura inteligente para' },
        { key: 'subtitle_part_2', label: 'Texto Brillante Parte 2', type: 'text', placeholder: 'comunidades conectadas' },
        { key: 'paragraph', label: 'Párrafo', type: 'textarea', placeholder: 'En SPECTRUMP COLOMBIA S.A.S. transformamos los territorios mediante la implementación de redes de alta velocidad y sistemas de energía solar de alta confiabilidad. Contamos con amplia trayectoria ejecutando proyectos de conectividad de gran envergadura en zonas apartadas, cerrando la brecha digital y mejorando la calidad de vida de las comunidades.' }
      ]
    },
    {
      key: 'inicio_capacidades',
      label: 'Nuestras Capacidades',
      fields: [
        { key: 'title', label: 'Título', type: 'text', placeholder: 'Nuestras Capacidades', fullWidth: true },
        { key: 'items', label: 'Lista de Capacidades', type: 'capabilities', fullWidth: true }
      ]
    },
    {
      key: 'inicio_econecta',
      label: 'Sección Econecta',
      fields: [
        { key: 'badge_text', label: 'Etiqueta', type: 'text', placeholder: 'NUESTRA SOLUCIÓN DESTACADA', fullWidth: true },
        { key: 'logo_url', label: 'Logo de Econecta (PNG o SVG)', type: 'image', allowedFormats: ['png', 'svg'] },
        { key: 'paragraph', label: 'Descripción', type: 'textarea', placeholder: 'ECONECTA es una estructura inteligente que integra energía solar, conectividad, seguridad, tecnología y servicios digitales para llevar soluciones sostenibles a comunidades y espacios que necesitan estar conectados.' },
        { key: 'button_text', label: 'Texto del Botón', type: 'text', placeholder: 'CONOCE ECONECTA', fullWidth: true },
        { key: 'video_url', label: 'Video de fondo', type: 'video' },
        { key: 'items', label: 'Cualidades', type: 'qualities', fullWidth: true }
      ]
    },
    {
      key: 'inicio_proyectos',
      label: 'Proyectos de Impacto',
      fields: [
        { key: 'title', label: 'Título', type: 'text', placeholder: 'Proyectos que generan impacto' },
        { key: 'subtitle', label: 'Descripción', type: 'text', placeholder: 'Desarrollamos soluciones integrales que impulsan el desarrollo sostenible en comunidades rurales y zonas remotas.' },
        { key: 'items', label: 'Lista de Proyectos', type: 'project_list', fullWidth: true }
      ]
    },
    {
      key: 'inicio_ventajas',
      label: 'Ventajas Competitivas',
      fields: [
        { key: 'badge_text', label: 'Etiqueta', type: 'text', placeholder: '¿POR QUÉ ELEGIR SPECTRUMP?', fullWidth: true },
        { key: 'title_part_1', label: 'Título Parte 1', type: 'text', placeholder: 'Ventajas Competitivas que' },
        { key: 'title_part_2', label: 'Título Parte 2', type: 'text', placeholder: 'Marcan la Diferencia' },
        { key: 'subtitle', label: 'Descripción', type: 'text', placeholder: 'Garantías contractuales, robustez de ingeniería y beneficios financieros estructurados para maximizar el retorno de inversión.', fullWidth: true },
        { key: 'items', label: 'Lista de Ventajas', type: 'advantages', fullWidth: true }
      ]
    },
    {
      key: 'inicio_prefooter',
      label: 'Tarjeta CTA',
      fields: [
        { key: 'title', label: 'Título', type: 'text', placeholder: 'Trabajamos juntos por un futuro más conectado y sostenible.', fullWidth: true },
        { key: 'subtitle', label: 'Descripción', type: 'textarea', placeholder: '¿Listo para llevar conectividad, seguridad e infraestructura de energía solar a donde más se necesita?', fullWidth: true },
        { key: 'button_text', label: 'Texto del Botón', type: 'text', placeholder: 'CONTÁCTANOS', fullWidth: true }
      ]
    }
  ],
  nosotros: [
    {
      key: 'nosotros_hero',
      label: 'Presentación',
      fields: [
        { key: 'title_part_1', label: 'Título Parte 1', type: 'text', placeholder: 'Ingeniería y Conectividad con' },
        { key: 'shiny_text', label: 'Texto Brillante', type: 'text', placeholder: 'Compromiso de País' },
        { key: 'image_url', label: 'Imagen de fondo', type: 'image' }
      ]
    },
    {
      key: 'nosotros_historia',
      label: 'Historia',
      fields: [
        { key: 'logo_url', label: 'Logo', type: 'image' },
        { key: 'paragraph', label: 'Descripción', type: 'textarea', placeholder: 'Somos una empresa privada que está conformada por un grupo de ingenieros y especialistas en Telecomunicaciones y Energías renovables, brindando los mejores estándares de calidad y servicios. Ofrecemos soluciones a nivel corporativo y gubernamental, consolidándonos como un aliado estratégico en el sector de la ingeniería, las comunicaciones y energía solar.' }
      ]
    },
    {
      key: 'nosotros_mision_vision',
      label: 'Misión, Visión y Política',
      fields: [
        { key: 'div_mision', label: 'Nuestra Misión', type: 'divider', fullWidth: true },
        { key: 'mision', label: 'Texto Misión', type: 'textarea', placeholder: 'Diseñar, fabricar e implementar soluciones de infraestructura tecnológica que integren conectividad, energía renovable, seguridad electrónica y servicios digitales, contribuyendo al desarrollo sostenible de las comunidades.', fullWidth: true },
        { key: 'mision_tag1', label: 'Etiqueta Auxiliar 1', type: 'text', placeholder: 'Infraestructura Sostenible' },
        { key: 'mision_tag2', label: 'Etiqueta Auxiliar 2', type: 'text', placeholder: 'Desarrollo Comunitario' },
        
        { key: 'div_vision', label: 'Nuestra Visión', type: 'divider', fullWidth: true },
        { key: 'vision', label: 'Texto Visión', type: 'textarea', placeholder: 'Posicionarnos para el año 2030 como el aliado estratégico referente en infraestructura de conectividad y transformación energética en Colombia, reconocidos por nuestra solidez técnica, capacidad de innovación en redes inteligentes y aporte decisivo al cierre de la brecha digital y la transición energética justa del país.', fullWidth: true },
        { key: 'vision_tag1', label: 'Etiqueta Auxiliar 1', type: 'text', placeholder: 'Meta Estratégica 2030' },
        { key: 'vision_tag2', label: 'Etiqueta Auxiliar 2', type: 'text', placeholder: 'Transición Energética' },
        
        { key: 'div_politica', label: 'Nuestra Política', type: 'divider', fullWidth: true },
        { key: 'politica', label: 'Texto Política', type: 'textarea', placeholder: 'Prestar y ofrecer servicios de diseño, construcción y mantenimiento en las áreas de Ingeniería, Telecomunicaciones y Energías Renovables, óptima en el cumplimiento del tiempo, normas vigentes, satisfaciendo eficazmente los requerimientos y necesidades de nuestros clientes garantizando la entrega de un servicio de calidad.', fullWidth: true },
        { key: 'politica_tag1', label: 'Etiqueta Auxiliar 1', type: 'text', placeholder: 'Calidad Certificada' },
        { key: 'politica_tag2', label: 'Etiqueta Auxiliar 2', type: 'text', placeholder: 'Cumplimiento Garantizado' }
      ]
    },
    {
      key: 'nosotros_valores',
      label: 'Nuestros Valores',
      fields: [
        { key: 'valores_title', label: 'Título', type: 'text', placeholder: 'Valores que guían nuestra operación diaria' },
        { key: 'valores_subtitle', label: 'Descripción', type: 'text', placeholder: 'Principios éticos, técnicos y ambientales que rigen nuestras relaciones contractuales con el Estado colombiano y el sector privado.' },
        { key: 'items', label: 'Lista de Valores', type: 'values_list', fullWidth: true }
      ]
    },
    {
      key: 'nosotros_casos',
      label: 'Casos de Éxito',
      fields: [
        { key: 'badge_text', label: 'Etiqueta', type: 'text', placeholder: 'CASOS DE ÉXITO Y EXPERIENCIA' },
        { key: 'title', label: 'Título', type: 'text', placeholder: 'Proyectos Realizados que Impulsan el Desarrollo' },
        { key: 'subtitle', label: 'Descripción', type: 'textarea', placeholder: 'Conoce nuestras ejecuciones más destacadas en conectividad, energía solar e infraestructura inteligente en Colombia.' },
        { key: 'items', label: 'Lista de Proyectos', type: 'casos_exito_list', fullWidth: true }
      ]
    },
    {
      key: 'nosotros_ubicacion',
      label: 'Sedes y Ubicación',
      fields: [
        { key: 'title', label: 'Título', type: 'text', placeholder: 'Nuestras Sedes' },
        { key: 'description', label: 'Descripción', type: 'text', placeholder: 'Encuéntranos en nuestras oficinas principales.' },
        { key: 'address', label: 'Dirección (Sede Principal)', type: 'text', placeholder: 'Calle Falsa 123, Bogotá, Colombia' },
        { key: 'phone', label: 'Teléfono', type: 'text', placeholder: '+57 300 123 4567' },
        { key: 'email', label: 'Correo', type: 'text', placeholder: 'contacto@spectrump.com.co' },
        { key: 'hours', label: 'Horario', type: 'text', placeholder: 'Lunes a Viernes, 8:00 AM - 5:00 PM' },
        { key: 'info_mapa', label: 'Busca tu sede en Google Maps, haz clic derecho en el pin rojo y copia los números que aparecen. Pégalos aquí abajo.', type: 'info', fullWidth: true },
        { key: 'coordinates', label: 'Coordenadas del Mapa (Lat, Lng)', type: 'text', placeholder: 'Ej: 6.190538, -67.493708', fullWidth: true }
      ]
    },
    {
      key: 'nosotros_normativa',
      label: 'Normativa',
      fields: [
        { key: 'badge_text', label: 'Etiqueta', type: 'text', placeholder: 'DOCUMENTOS LEGALES' },
        { key: 'title', label: 'Título Principal', type: 'text', placeholder: 'Protección al Usuario y Normativa TIC' },
        { key: 'subtitle', label: 'Descripción Principal', type: 'textarea', placeholder: 'Consulta completa de los ejes normativos...' },
        { key: 'divider_mapa', label: 'Mapa Regulatorio', type: 'divider' },
        { key: 'bento_title', label: 'Título del Mapa Regulatorio', type: 'text', placeholder: 'Marco Regulatorio de Telecomunicaciones' },
        { key: 'bento_description', label: 'Descripción del Mapa Regulatorio', type: 'text', placeholder: 'SPECTRUMP COLOMBIA S.A.S. // Cumplimiento 100%' },
        { key: 'bento_badge', label: 'Etiqueta Secundaria del Mapa', type: 'text', placeholder: 'CRC & MinTIC' },
        { key: 'items_usuario', label: 'Protección al Usuario (Máx 7)', type: 'normativas_list', fullWidth: true },
        { key: 'items_normativa', label: 'Normativa (Máx 7)', type: 'normativas_list', fullWidth: true },
        { key: 'items_regulacion', label: 'Regulación Sector TIC (Máx 7)', type: 'normativas_list', fullWidth: true }
      ]
    },
    {
      key: 'nosotros_proteccion',
      label: 'Protección Infantil',
      fields: [
        { key: 'title', label: 'Título', type: 'text', placeholder: 'Protección a la Infancia' },
        { key: 'subtitle', label: 'Descripción', type: 'text', placeholder: 'Nuestro compromiso con el futuro.' },
        { key: 'divider_marco', label: 'Marco Legal y Preventivo', type: 'divider' },
        { key: 'image_url', label: 'Imagen Fondo', type: 'image' },
        { key: 'marco_title', label: 'Título del Marco', type: 'text', placeholder: 'Marco legal y preventivo' },
        { key: 'marco_badge', label: 'Etiqueta del Marco', type: 'text', placeholder: 'Ley 679 de 2001' },
        { key: 'marco_description', label: 'Descripción del Marco', type: 'textarea', placeholder: 'Descripción detallada...', fullWidth: true },
        { key: 'marco_features', label: 'Características (Máx 3)', type: 'features_list', fullWidth: true },
        { key: 'divider_canales', label: 'Canales de Denuncia', type: 'divider' },
        { key: 'canales_title', label: 'Título Canales', type: 'text', placeholder: 'Canales Oficiales de Denuncia' },
        { key: 'canales_subtitle', label: 'Descripción Canales', type: 'text', placeholder: 'Líneas de atención inmediata en Colombia' },
        { key: 'canales_list', label: 'Canales (Máx 6)', type: 'canales_list', fullWidth: true }
      ]
    }
  ],
  econecta: [
    {
      key: 'econecta_hero',
      label: 'Hero Econecta',
      fields: [
        { key: 'subtitle', label: 'Subtítulo (Admite HTML)', type: 'textarea', placeholder: 'Postes solares inteligentes para zonas rurales y urbanas.' },
        { key: 'primary_button_text', label: 'Botón Principal', type: 'text', placeholder: 'VER MODELOS' },
        { key: 'secondary_button_text', label: 'Botón Secundario', type: 'text', placeholder: 'CONTACTAR VENTAS' },
        { key: 'video_url', label: 'Video Fondo', type: 'video' }
      ]
    },
    {
      key: 'econecta_descripcion',
      label: 'Descripción (Problema/Solución)',
      fields: [
        { key: 'paragraph1', label: 'Párrafo 1', type: 'textarea', placeholder: 'La desconexión en zonas alejadas es un reto...' },
        { key: 'paragraph2', label: 'Párrafo 2', type: 'textarea', placeholder: 'Econecta soluciona esto mediante autonomía solar...' }
      ]
    },
    {
      key: 'econecta_modelos',
      label: 'Modelos Disponibles',
      fields: [
        { key: 'title', label: 'Título', type: 'text', placeholder: 'Modelos' },
        { key: 'subtitle', label: 'Subtítulo', type: 'text', placeholder: 'Elige el poste inteligente ideal para tu proyecto.' }
      ]
    },
    {
      key: 'econecta_cierre',
      label: 'Cierre',
      fields: [
        { key: 'paragraph', label: 'Párrafo de Cierre (Admite HTML)', type: 'textarea', placeholder: 'Únete a la revolución solar y mantente conectado.' },
        { key: 'video_url', label: 'URL de Video (Fondo)', type: 'video' }
      ]
    }
  ],
  contacto: [
    {
      key: 'contacto_hero',
      label: 'Hero Contacto',
      fields: [
        { key: 'title', label: 'Título (Admite HTML)', type: 'textarea', placeholder: 'Hablemos de tu próximo gran proyecto.' },
        { key: 'image_url', label: 'URL de Imagen (Fondo)', type: 'image' }
      ]
    },
    {
      key: 'contacto_formulario',
      label: 'Información de Contacto',
      fields: [
        { key: 'whatsapp', label: 'WhatsApp', type: 'text', placeholder: '+57 300 000 0000' },
        { key: 'pbx', label: 'Línea PBX', type: 'text', placeholder: '601 000 0000' },
        { key: 'email', label: 'Correo Electrónico', type: 'text', placeholder: 'comercial@spectrump.com.co' },
        { key: 'hours', label: 'Horario de Atención', type: 'text', placeholder: 'Lunes a Viernes, 8:00 AM a 5:00 PM' }
      ]
    },
    {
      key: 'contacto_faq',
      label: 'Preguntas Frecuentes (FAQ)',
      fields: [
        { key: 'title', label: 'Título', type: 'text', placeholder: 'Preguntas Frecuentes' },
        { key: 'subtitle', label: 'Subtítulo', type: 'textarea', placeholder: 'Resolvemos tus dudas más comunes.' }
      ]
    }
  ]
};

const ICON_OPTIONS = [
  { name: 'Zap', icon: Zap },
  { name: 'Shield', icon: Shield },
  { name: 'Globe', icon: Globe },
  { name: 'Cpu', icon: Cpu },
  { name: 'Wifi', icon: Wifi },
  { name: 'Battery', icon: Battery },
  { name: 'Server', icon: Server },
  { name: 'Cloud', icon: Cloud },
  { name: 'Activity', icon: Activity },
  { name: 'Award', icon: Award },
  { name: 'Briefcase', icon: Briefcase },
  { name: 'Settings', icon: Settings },
  { name: 'Wrench', icon: Wrench },
  { name: 'Lightbulb', icon: Lightbulb },
  { name: 'Sun', icon: Sun },
  { name: 'ShieldCheck', icon: ShieldCheck },
  { name: 'Monitor', icon: Monitor },
  { name: 'Leaf', icon: Leaf },
  { name: 'TrendingUp', icon: TrendingUp },
  { name: 'Headphones', icon: Headphones },
  { name: 'Target', icon: Target },
  { name: 'Compass', icon: Compass },
  { name: 'Users', icon: Users },
  { name: 'BookOpen', icon: BookOpen },
  { name: 'Radio', icon: Radio },
  { name: 'FileText', icon: FileText },
  { name: 'Gavel', icon: Gavel },
  { name: 'Network', icon: Network },
  { name: 'ClipboardList', icon: ClipboardList },
  { name: 'Scale', icon: Scale },
  { name: 'Landmark', icon: Landmark },
  { name: 'Receipt', icon: Receipt },
  { name: 'MapPin', icon: MapPin },
  { name: 'BarChart3', icon: BarChart3 },
  { name: 'Gauge', icon: Gauge },
  { name: 'Sliders', icon: Sliders },
  { name: 'FileCode', icon: FileCode },
  { name: 'FileCheck', icon: FileCheck },
  { name: 'Baby', icon: Baby },
];

function IconPicker({ value, onChange }: { value: string, onChange: (val: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const CurrentIcon = ICON_OPTIONS.find(o => o.name === value)?.icon || Zap;

  return (
    <div className="relative">
      <button 
        type="button" 
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 bg-white rounded-lg border border-slate-200 text-blue-600 shadow-sm hover:border-blue-400 hover:shadow-md transition-all flex items-center justify-center cursor-pointer"
        title="Cambiar icono"
      >
        <CurrentIcon className="w-5 h-5" />
      </button>
      
      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute top-full mt-2 left-0 sm:-left-12 z-50 bg-white border border-slate-200 rounded-xl shadow-xl p-3 w-64 grid grid-cols-4 gap-2 animate-in fade-in zoom-in-95 duration-200">
            {ICON_OPTIONS.map(opt => {
              const OptIcon = opt.icon;
              return (
                <button
                  key={opt.name}
                  type="button"
                  title={opt.name}
                  onClick={() => {
                    onChange(opt.name);
                    setIsOpen(false);
                  }}
                  className={`p-2 rounded-lg flex flex-col items-center justify-center transition-all hover:scale-110 ${value === opt.name ? 'bg-blue-50 text-blue-600 border border-blue-200 shadow-sm' : 'text-slate-500 hover:bg-slate-50 border border-transparent'}`}
                >
                  <OptIcon className="w-5 h-5" />
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export function PageEditor({ pageId, initialSections, initialItems }: { pageId: string, initialSections: any[], initialItems: any[] }) {
  const supabase = createClient();
  const router = useRouter();

  const handleBack = () => {
    if (hasChanges) {
      if (window.confirm("Tienes cambios sin guardar. ¿Seguro que quieres salir? Se perderán las modificaciones no guardadas.")) {
        router.push("/admin/pages");
      }
    } else {
      router.push("/admin/pages");
    }
  };
  
  // Transform array into an object mapping section_key -> content
  const [sectionsMap, setSectionsMap] = useState<Record<string, any>>(() => {
    const map: Record<string, any> = {};
    initialSections.forEach(s => {
      map[s.section_key] = s.content || {};
    });
    return map;
  });

  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const [currentContent, setCurrentContent] = useState<Record<string, any>>({});
  const [toastMessage, setToastMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (sectionKey: string) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionKey]: !prev[sectionKey]
    }));
  };

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (hasChanges) {
        e.preventDefault();
        e.returnValue = ''; // Required for Chrome/Firefox to show native dialog
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [hasChanges]);

  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{type: 'success' | 'error', text: string} | null>(null);

  const schema = PAGE_SCHEMAS[pageId] || [];

  const handleFieldChange = (sectionKey: string, fieldKey: string, value: string) => {
    setHasChanges(true);
    setSectionsMap(prev => ({
      ...prev,
      [sectionKey]: {
        ...(prev[sectionKey] || {}),
        [fieldKey]: value
      }
    }));
  };

  const handleSaveSections = async () => {
    setSaving(true);
    setMessage(null);
    try {
      for (const sectionSchema of schema) {
        const sectionKey = sectionSchema.key;
        const content = sectionsMap[sectionKey] || {};
        
        const { error } = await supabase.from('page_sections').upsert(
          { page_id: pageId, section_key: sectionKey, content },
          { onConflict: 'section_key' }
        );
        if (error) throw error;
      }
      setHasChanges(false);
      setMessage({ type: 'success', text: 'Secciones guardadas correctamente.' });
      setTimeout(() => setMessage(null), 3000);
    } catch (e: any) {
      setMessage({ type: 'error', text: e.message || 'Error al guardar secciones.' });
      setTimeout(() => setMessage(null), 5000);
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      {/* Header and Back Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-4">
          <button 
            onClick={handleBack}
            className="p-3 bg-white border border-slate-200 rounded-xl text-slate-500 hover:text-[#0052CC] hover:border-[#0052CC] hover:shadow-md transition-all group cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          </button>
          <div>
            <h1 className="text-3xl font-bold text-slate-900 capitalize">Editar Página: {pageId}</h1>
            <p className="text-slate-600 mt-2">Modifica los textos, imágenes y videos de cada sección.</p>
          </div>
        </div>
      </div>

      {message && (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 z-[100]">
          <div className={`animate-in slide-in-from-top-12 fade-in duration-300 px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 font-semibold ${message.type === 'success' ? 'bg-emerald-600 text-white' : 'bg-red-600 text-white'}`}>
            {message.type === 'success' ? <CheckCircle className="w-5 h-5" /> : <AlertTriangle className="w-5 h-5" />}
            <span>{message.text}</span>
          </div>
        </div>
      )}

      <div className="space-y-10">

      {schema.length === 0 && (
        <div className="bg-yellow-50 text-yellow-800 p-6 rounded-xl border border-yellow-200">
          Esta página no tiene secciones configurables o no se ha definido un esquema de edición para ella.
        </div>
      )}

      {schema.map((section) => {
        const currentContent = sectionsMap[section.key] || {};
        const isOpen = !!openSections[section.key];
        
        return (
          <div key={section.key} className="bg-white rounded-2xl shadow-sm border border-slate-200">
            <div 
              className={`p-5 bg-slate-50 flex items-center justify-between cursor-pointer hover:bg-slate-100 transition-colors ${isOpen ? 'rounded-t-2xl border-b border-slate-200' : 'rounded-2xl'}`}
              onClick={() => toggleSection(section.key)}
            >
              <div className="flex items-center gap-3">
                {isOpen ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                <h2 className="text-lg font-bold text-slate-800 select-none">{section.label}</h2>
              </div>
            </div>
            
            {isOpen && (
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 animate-in slide-in-from-top-2 fade-in duration-200 rounded-b-2xl">
                {section.fields.map(field => {
                const isTextarea = field.type === 'textarea';
                const isMedia = field.type === 'image' || field.type === 'video';
                const isCapabilities = field.type === 'capabilities';
                const isQualities = field.type === 'qualities';
                const isProjectList = field.type === 'project_list';
                const isAdvantages = field.type === 'advantages';
                const isValuesList = field.type === 'values_list';
                const isCasosExitoList = field.type === 'casos_exito_list';
                const isNormativasList = field.type === 'normativas_list';
                const isFeaturesList = field.type === 'features_list';
                const isCanalesList = field.type === 'canales_list';
                const isDivider = field.type === 'divider';
                const isInfo = field.type === 'info';
                const colSpan = (isDivider || isInfo || isTextarea || isMedia || isCapabilities || isQualities || isProjectList || isAdvantages || isValuesList || isCasosExitoList || isNormativasList || isFeaturesList || isCanalesList || field.fullWidth) ? 'md:col-span-2' : 'md:col-span-1';
                
                if (isDivider) {
                  return (
                    <div key={field.key} className={`pt-6 pb-2 border-b border-slate-200 ${colSpan}`}>
                      <h3 className="text-lg font-bold text-slate-800">{field.label}</h3>
                    </div>
                  );
                }

                if (isInfo) {
                  return (
                    <div key={field.key} className={`text-xs text-blue-600 bg-blue-50/50 p-3 rounded-lg border border-blue-100 flex items-center gap-2 ${colSpan}`}>
                      <Lightbulb className="w-4 h-4 flex-shrink-0" />
                      <span>{field.label}</span>
                    </div>
                  );
                }

                return (
                  <div key={field.key} className={`space-y-2 ${colSpan}`}>
                    <label className="flex items-center gap-2 text-sm font-bold text-slate-700">
                      {field.type === 'text' && <Type className="w-4 h-4 text-slate-400" />}
                      {isTextarea && <AlignLeft className="w-4 h-4 text-slate-400" />}
                      {field.type === 'image' && <ImageIcon className="w-4 h-4 text-slate-400" />}
                      {field.type === 'video' && <Video className="w-4 h-4 text-slate-400" />}
                      {field.label}
                    </label>
                    
                    {isCasosExitoList ? (
                      <div className="space-y-4">
                        <div className="text-xs text-blue-600 bg-blue-50/50 p-3 rounded-lg border border-blue-100 flex items-center gap-2">
                          <Lightbulb className="w-4 h-4 flex-shrink-0" />
                          <span><strong>Recomendación de Imagen:</strong> Para la máxima calidad visual en la galería expandible, sugerimos usar imágenes de alta resolución (mínimo 1200x800px). Se adaptarán automáticamente al espacio.</span>
                        </div>
                        {Array.isArray(currentContent[field.key]) && currentContent[field.key].map((item: any, index: number) => {
                          return (
                            <div key={index} className="flex gap-5 items-start p-5 bg-slate-50 border border-slate-200 rounded-xl relative group">
                              <div className="flex-shrink-0 w-32 h-40 bg-slate-200 rounded-lg overflow-hidden border border-slate-300 flex items-center justify-center relative">
                                {item.image ? (
                                  <img src={item.image} alt="preview" className="w-full h-full object-cover" />
                                ) : (
                                  <ImageIcon className="w-8 h-8 text-slate-400" />
                                )}
                                <CldUploadWidget
                                  signatureEndpoint="/api/cloudinary/sign"
                                  options={{ sources: ['local', 'url'], multiple: false, resourceType: 'image' }}
                                  onSuccess={(result: any) => {
                                    const url = result.info.secure_url;
                                    const optimizedUrl = url.replace('/upload/', '/upload/q_auto,f_auto/');
                                    const newItems = [...currentContent[field.key]];
                                    newItems[index].image = optimizedUrl;
                                    handleFieldChange(section.key, field.key, newItems as any);
                                  }}
                                >
                                  {({ open }) => (
                                    <button
                                      type="button"
                                      onClick={() => open()}
                                      className="absolute inset-0 w-full h-full bg-slate-950/50 opacity-0 hover:opacity-100 transition-opacity text-white flex flex-col items-center justify-center text-xs font-bold"
                                    >
                                      Cambiar
                                    </button>
                                  )}
                                </CldUploadWidget>
                              </div>
                              <div className="flex-1 space-y-3 mr-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                  <input
                                    type="text"
                                    placeholder="Título (ej. ENERGÍA SOLAR)"
                                    value={item.title || ''}
                                    onChange={(e) => {
                                      const newItems = [...currentContent[field.key]];
                                      newItems[index].title = e.target.value;
                                      handleFieldChange(section.key, field.key, newItems as any);
                                    }}
                                    className="w-full h-[42px] bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm font-semibold focus:ring-2 focus:ring-blue-500"
                                  />
                                  <input
                                    type="text"
                                    placeholder="Etiqueta (ej. Sistemas Fotovoltaicos)"
                                    value={item.badge || ''}
                                    onChange={(e) => {
                                      const newItems = [...currentContent[field.key]];
                                      newItems[index].badge = e.target.value;
                                      handleFieldChange(section.key, field.key, newItems as any);
                                    }}
                                    className="w-full h-[42px] bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500"
                                  />
                                </div>
                                <div>
                                  <textarea
                                    placeholder="Descripción completa del proyecto..."
                                    rows={2}
                                    value={item.description || ''}
                                    onChange={(e) => {
                                      const newItems = [...currentContent[field.key]];
                                      newItems[index].description = e.target.value;
                                      handleFieldChange(section.key, field.key, newItems as any);
                                    }}
                                    className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 resize-y"
                                  />
                                </div>
                                <div className="space-y-2">
                                  <label className="text-xs font-bold text-slate-500 uppercase">3 Características Clave</label>
                                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                                    {[0, 1, 2].map(i => (
                                      <input
                                        key={i}
                                        type="text"
                                        placeholder={`Característica ${i+1}`}
                                        value={(item.features && item.features[i]) || ''}
                                        onChange={(e) => {
                                          const newItems = [...currentContent[field.key]];
                                          const newFeatures = [...(newItems[index].features || ['', '', ''])];
                                          newFeatures[i] = e.target.value;
                                          newItems[index].features = newFeatures;
                                          handleFieldChange(section.key, field.key, newItems as any);
                                        }}
                                        className="w-full text-xs bg-white border border-slate-200 rounded-md px-3 py-1.5 focus:ring-2 focus:ring-blue-500"
                                      />
                                    ))}
                                  </div>
                                </div>
                              </div>
                              <button
                                type="button"
                                onClick={() => {
                                  const newItems = [...currentContent[field.key]];
                                  newItems.splice(index, 1);
                                  handleFieldChange(section.key, field.key, newItems as any);
                                }}
                                className="text-slate-400 hover:text-red-500 absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <Trash2 className="w-5 h-5" />
                              </button>
                            </div>
                          );
                        })}
                        {(!currentContent[field.key] || currentContent[field.key].length < 5) && (
                          <button
                            type="button"
                            onClick={() => {
                              const newItems = Array.isArray(currentContent[field.key]) ? [...currentContent[field.key]] : [];
                              newItems.push({ image: '', title: '', badge: '', description: '', features: ['', '', ''] });
                              handleFieldChange(section.key, field.key, newItems as any);
                            }}
                            className="w-full py-4 border-2 border-dashed border-slate-300 rounded-xl text-slate-500 font-semibold hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 transition-colors flex items-center justify-center gap-2"
                          >
                            <Plus className="w-5 h-5" /> Agregar proyecto
                          </button>
                        )}
                      </div>
                    ) : isNormativasList ? (
                      <div className="space-y-4">
                        {Array.isArray(currentContent[field.key]) && currentContent[field.key].map((item: any, index: number) => {
                          return (
                            <div key={index} className="flex gap-4 items-center p-4 bg-slate-50 border border-slate-200 rounded-xl relative group">
                              <div className="flex-shrink-0">
                                <IconPicker 
                                  value={item.icon || 'FileText'}
                                  onChange={(iconName) => {
                                    const newItems = [...currentContent[field.key]];
                                    newItems[index].icon = iconName;
                                    handleFieldChange(section.key, field.key, newItems as any);
                                  }}
                                />
                              </div>
                              <div className="flex-1 mr-6">
                                <input
                                  type="text"
                                  placeholder="Título de la normativa"
                                  value={item.title || ''}
                                  onChange={(e) => {
                                    const newItems = [...currentContent[field.key]];
                                    newItems[index].title = e.target.value;
                                    handleFieldChange(section.key, field.key, newItems as any);
                                  }}
                                  className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500"
                                />
                              </div>
                              <button
                                type="button"
                                onClick={() => {
                                  const newItems = [...currentContent[field.key]];
                                  newItems.splice(index, 1);
                                  handleFieldChange(section.key, field.key, newItems as any);
                                }}
                                className="text-slate-400 hover:text-red-500 absolute top-1/2 -translate-y-1/2 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <Trash2 className="w-5 h-5" />
                              </button>
                            </div>
                          );
                        })}
                        {(!currentContent[field.key] || currentContent[field.key].length < 7) && (
                          <button
                            type="button"
                            onClick={() => {
                              const newItems = Array.isArray(currentContent[field.key]) ? [...currentContent[field.key]] : [];
                              newItems.push({ icon: 'FileText', title: '' });
                              handleFieldChange(section.key, field.key, newItems as any);
                            }}
                            className="w-full py-4 border-2 border-dashed border-slate-300 rounded-xl text-slate-500 font-semibold hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 transition-colors flex items-center justify-center gap-2"
                          >
                            <Plus className="w-5 h-5" /> Agregar normativa ({(currentContent[field.key]?.length || 0)}/7)
                          </button>
                        )}
                      </div>
                    ) : isCanalesList ? (
                      <div className="space-y-4">
                        {Array.isArray(currentContent[field.key]) && currentContent[field.key].map((val: any, index: number) => {
                          return (
                            <div key={index} className="flex flex-col gap-4 p-4 bg-slate-50 border border-slate-200 rounded-xl relative group">
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mr-6">
                                <div>
                                  <label className="block text-xs font-semibold text-slate-500 mb-1">Nombre del Canal</label>
                                  <input
                                    type="text"
                                    placeholder="Ej. Te Protejo Colombia"
                                    value={val.title || ''}
                                    onChange={(e) => {
                                      const newVals = [...currentContent[field.key]];
                                      newVals[index].title = e.target.value;
                                      handleFieldChange(section.key, field.key, newVals as any);
                                    }}
                                    className="w-full h-[42px] bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm font-semibold focus:ring-2 focus:ring-blue-500"
                                  />
                                </div>
                                <div>
                                  <label className="block text-xs font-semibold text-slate-500 mb-1">Descripción corta</label>
                                  <input
                                    type="text"
                                    placeholder="Ej. Portal web oficial & App"
                                    value={val.description || ''}
                                    onChange={(e) => {
                                      const newVals = [...currentContent[field.key]];
                                      newVals[index].description = e.target.value;
                                      handleFieldChange(section.key, field.key, newVals as any);
                                    }}
                                    className="w-full h-[42px] bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500"
                                  />
                                </div>
                                <div>
                                  <label className="block text-xs font-semibold text-slate-500 mb-1">URL o Línea Telefónica</label>
                                  <input
                                    type="text"
                                    placeholder="Ej. https://teprotejo.org o Línea 141"
                                    value={val.url || ''}
                                    onChange={(e) => {
                                      const newVals = [...currentContent[field.key]];
                                      newVals[index].url = e.target.value;
                                      handleFieldChange(section.key, field.key, newVals as any);
                                    }}
                                    className="w-full h-[42px] bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm text-blue-600 font-medium focus:ring-2 focus:ring-blue-500"
                                  />
                                </div>
                              </div>
                              <button
                                type="button"
                                onClick={() => {
                                  const newVals = [...currentContent[field.key]];
                                  newVals.splice(index, 1);
                                  handleFieldChange(section.key, field.key, newVals as any);
                                }}
                                className="text-slate-400 hover:text-red-500 absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <Trash2 className="w-5 h-5" />
                              </button>
                            </div>
                          );
                        })}
                        {(!currentContent[field.key] || currentContent[field.key].length < 6) && (
                          <button
                            type="button"
                            onClick={() => {
                              const newVals = Array.isArray(currentContent[field.key]) ? [...currentContent[field.key]] : [];
                              newVals.push({ title: '', description: '', url: '' });
                              handleFieldChange(section.key, field.key, newVals as any);
                            }}
                            className="w-full py-4 border-2 border-dashed border-slate-300 rounded-xl text-slate-500 font-semibold hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 transition-colors flex items-center justify-center gap-2"
                          >
                            <Plus className="w-5 h-5" /> Agregar canal ({currentContent[field.key]?.length || 0}/6)
                          </button>
                        )}
                      </div>
                    ) : isFeaturesList ? (
                      <div className="space-y-4">
                        {Array.isArray(currentContent[field.key]) && currentContent[field.key].map((val: any, index: number) => {
                          return (
                            <div key={index} className="flex gap-4 items-start p-4 bg-slate-50 border border-slate-200 rounded-xl relative group">
                              <div className="flex-shrink-0">
                                <IconPicker 
                                  value={val.icon || 'ShieldCheck'}
                                  onChange={(iconName) => {
                                    const newVals = [...currentContent[field.key]];
                                    newVals[index].icon = iconName;
                                    handleFieldChange(section.key, field.key, newVals as any);
                                  }}
                                />
                              </div>
                              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 mr-6">
                                <div>
                                  <input
                                    type="text"
                                    placeholder="Nombre de la característica"
                                    value={val.title || ''}
                                    onChange={(e) => {
                                      const newVals = [...currentContent[field.key]];
                                      newVals[index].title = e.target.value;
                                      handleFieldChange(section.key, field.key, newVals as any);
                                    }}
                                    className="w-full h-[42px] bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm font-semibold focus:ring-2 focus:ring-blue-500"
                                  />
                                </div>
                                <div>
                                  <textarea
                                    placeholder="Descripción de la característica"
                                    value={val.description || ''}
                                    onChange={(e) => {
                                      const newVals = [...currentContent[field.key]];
                                      newVals[index].description = e.target.value;
                                      handleFieldChange(section.key, field.key, newVals as any);
                                    }}
                                    rows={3}
                                    className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 resize-y"
                                  />
                                </div>
                              </div>
                              <button
                                type="button"
                                onClick={() => {
                                  const newVals = [...currentContent[field.key]];
                                  newVals.splice(index, 1);
                                  handleFieldChange(section.key, field.key, newVals as any);
                                }}
                                className="text-slate-400 hover:text-red-500 absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <Trash2 className="w-5 h-5" />
                              </button>
                            </div>
                          );
                        })}
                        {(!currentContent[field.key] || currentContent[field.key].length < 3) && (
                          <button
                            type="button"
                            onClick={() => {
                              const newVals = Array.isArray(currentContent[field.key]) ? [...currentContent[field.key]] : [];
                              newVals.push({ icon: 'ShieldCheck', title: '', description: '' });
                              handleFieldChange(section.key, field.key, newVals as any);
                            }}
                            className="w-full py-4 border-2 border-dashed border-slate-300 rounded-xl text-slate-500 font-semibold hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 transition-colors flex items-center justify-center gap-2"
                          >
                            <Plus className="w-5 h-5" /> Agregar característica ({currentContent[field.key]?.length || 0}/3)
                          </button>
                        )}
                      </div>
                    ) : isValuesList ? (
                      <div className="space-y-4">
                        {Array.isArray(currentContent[field.key]) && currentContent[field.key].map((val: any, index: number) => {
                          return (
                            <div key={index} className="flex gap-4 items-start p-4 bg-slate-50 border border-slate-200 rounded-xl relative group">
                              <div className="flex-shrink-0">
                                <IconPicker 
                                  value={val.icon || 'Award'}
                                  onChange={(iconName) => {
                                    const newVals = [...currentContent[field.key]];
                                    newVals[index].icon = iconName;
                                    handleFieldChange(section.key, field.key, newVals as any);
                                  }}
                                />
                              </div>
                              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 mr-6">
                                <div>
                                  <input
                                    type="text"
                                    placeholder="Nombre del valor (ej. Calidad)"
                                    value={val.title || ''}
                                    onChange={(e) => {
                                      const newVals = [...currentContent[field.key]];
                                      newVals[index].title = e.target.value;
                                      handleFieldChange(section.key, field.key, newVals as any);
                                    }}
                                    className="w-full h-[42px] bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm font-semibold focus:ring-2 focus:ring-blue-500"
                                  />
                                </div>
                                <div>
                                  <textarea
                                    placeholder="Descripción del valor"
                                    value={val.description || ''}
                                    onChange={(e) => {
                                      const newVals = [...currentContent[field.key]];
                                      newVals[index].description = e.target.value;
                                      handleFieldChange(section.key, field.key, newVals as any);
                                    }}
                                    rows={3}
                                    className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 resize-y"
                                  />
                                </div>
                              </div>
                              <button
                                type="button"
                                onClick={() => {
                                  const newVals = [...currentContent[field.key]];
                                  newVals.splice(index, 1);
                                  handleFieldChange(section.key, field.key, newVals as any);
                                }}
                                className="text-slate-400 hover:text-red-500 absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <Trash2 className="w-5 h-5" />
                              </button>
                            </div>
                          );
                        })}
                        {(!currentContent[field.key] || currentContent[field.key].length < 4) && (
                          <button
                            type="button"
                            onClick={() => {
                              const newVals = Array.isArray(currentContent[field.key]) ? [...currentContent[field.key]] : [];
                              newVals.push({ icon: 'Award', title: '', description: '' });
                              handleFieldChange(section.key, field.key, newVals as any);
                            }}
                            className="w-full py-4 border-2 border-dashed border-slate-300 rounded-xl text-slate-500 font-semibold hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 transition-colors flex items-center justify-center gap-2"
                          >
                            <Plus className="w-5 h-5" /> Agregar valor
                          </button>
                        )}
                      </div>
                    ) : isAdvantages ? (
                      <div className="space-y-4">
                        {Array.isArray(currentContent[field.key]) && currentContent[field.key].map((adv: any, index: number) => {
                          return (
                            <div key={index} className="flex gap-4 items-start p-4 bg-slate-50 border border-slate-200 rounded-xl relative group">
                              <div className="flex-shrink-0">
                                <IconPicker 
                                  value={adv.icon || 'Zap'}
                                  onChange={(val) => {
                                    const newAdv = [...currentContent[field.key]];
                                    newAdv[index].icon = val;
                                    handleFieldChange(section.key, field.key, newAdv as any);
                                  }}
                                />
                              </div>
                              <div className="flex-1 space-y-3 mr-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                  <input
                                    type="text"
                                    placeholder="Etiqueta (ej. 100 GBPS MAX)"
                                    value={adv.topBadge || ''}
                                    onChange={(e) => {
                                      const newAdv = [...currentContent[field.key]];
                                      newAdv[index].topBadge = e.target.value;
                                      handleFieldChange(section.key, field.key, newAdv as any);
                                    }}
                                    className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm font-semibold focus:ring-2 focus:ring-blue-500"
                                  />
                                  <input
                                    type="text"
                                    placeholder="Pre-título (ej. [ ANCHO DE BANDA 1:1 ])"
                                    value={adv.tagline || ''}
                                    onChange={(e) => {
                                      const newAdv = [...currentContent[field.key]];
                                      newAdv[index].tagline = e.target.value;
                                      handleFieldChange(section.key, field.key, newAdv as any);
                                    }}
                                    className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm font-semibold focus:ring-2 focus:ring-blue-500"
                                  />
                                </div>
                                <input
                                  type="text"
                                  placeholder="Título (ej. Velocidad Ultrarrápida)"
                                  value={adv.title || ''}
                                  onChange={(e) => {
                                    const newAdv = [...currentContent[field.key]];
                                    newAdv[index].title = e.target.value;
                                    handleFieldChange(section.key, field.key, newAdv as any);
                                  }}
                                  className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm font-semibold focus:ring-2 focus:ring-blue-500"
                                />
                                <textarea
                                  placeholder="Descripción de la ventaja"
                                  value={adv.description || ''}
                                  onChange={(e) => {
                                    const newAdv = [...currentContent[field.key]];
                                    newAdv[index].description = e.target.value;
                                    handleFieldChange(section.key, field.key, newAdv as any);
                                  }}
                                  rows={2}
                                  className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 resize-y"
                                />
                              </div>
                              <button
                                type="button"
                                onClick={() => {
                                  const newAdv = [...currentContent[field.key]];
                                  newAdv.splice(index, 1);
                                  handleFieldChange(section.key, field.key, newAdv as any);
                                }}
                                className="text-slate-400 hover:text-red-500 absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <Trash2 className="w-5 h-5" />
                              </button>
                            </div>
                          );
                        })}
                        {(!currentContent[field.key] || currentContent[field.key].length < 4) && (
                          <button
                            type="button"
                            onClick={() => {
                              const newAdv = Array.isArray(currentContent[field.key]) ? [...currentContent[field.key]] : [];
                              newAdv.push({ icon: 'Zap', topBadge: '', tagline: '', title: '', description: '' });
                              handleFieldChange(section.key, field.key, newAdv as any);
                            }}
                            className="w-full py-4 border-2 border-dashed border-slate-300 rounded-xl text-slate-500 font-semibold hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 transition-colors flex items-center justify-center gap-2"
                          >
                            <Plus className="w-5 h-5" /> Agregar ventaja
                          </button>
                        )}
                      </div>
                    ) : isProjectList ? (
                      <div className="space-y-4">
                        <div className="text-xs text-blue-600 bg-blue-50/50 p-3 rounded-lg border border-blue-100 flex items-center gap-2">
                          <Lightbulb className="w-4 h-4 flex-shrink-0" />
                          <span><strong>Recomendación:</strong> Para evitar recortes en la página web, sube imágenes en formato horizontal (proporción 4:3, ej. 800x600px).</span>
                        </div>
                        {Array.isArray(currentContent[field.key]) && currentContent[field.key].map((proj: any, index: number) => {
                          return (
                            <div key={index} className="flex gap-4 items-start p-4 bg-slate-50 border border-slate-200 rounded-xl relative group">
                              <div className="flex-shrink-0 w-32 h-24 bg-slate-200 rounded-lg overflow-hidden border border-slate-300 flex items-center justify-center relative">
                                {proj.image ? (
                                  <img src={proj.image} alt="preview" className="w-full h-full object-cover" />
                                ) : (
                                  <ImageIcon className="w-6 h-6 text-slate-400" />
                                )}
                                <CldUploadWidget
                                  signatureEndpoint="/api/cloudinary/sign"
                                  options={{ sources: ['local', 'url'], multiple: false, resourceType: 'image' }}
                                  onSuccess={(result: any) => {
                                    const url = result.info.secure_url;
                                    const optimizedUrl = url.replace('/upload/', '/upload/q_auto,f_auto/');
                                    const newProj = [...currentContent[field.key]];
                                    newProj[index].image = optimizedUrl;
                                    handleFieldChange(section.key, field.key, newProj as any);
                                  }}
                                >
                                  {({ open }) => (
                                    <button
                                      type="button"
                                      onClick={() => open()}
                                      className="absolute inset-0 w-full h-full bg-slate-950/50 opacity-0 hover:opacity-100 transition-opacity text-white flex flex-col items-center justify-center text-xs font-bold"
                                    >
                                      Cambiar
                                    </button>
                                  )}
                                </CldUploadWidget>
                              </div>
                              <div className="flex-1 space-y-3 mr-6">
                                <div>
                                  <input
                                    type="text"
                                    placeholder="Descripción corta (ej. Energía Solar para Comunidades)"
                                    maxLength={80}
                                    value={proj.title || ''}
                                    onChange={(e) => {
                                      const newProj = [...currentContent[field.key]];
                                      newProj[index].title = e.target.value;
                                      handleFieldChange(section.key, field.key, newProj as any);
                                    }}
                                    className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm font-semibold focus:ring-2 focus:ring-blue-500"
                                  />
                                  <div className="text-right text-xs text-slate-400 mt-1 font-medium">
                                    {(proj.title || '').length} / 80
                                  </div>
                                </div>
                              </div>
                              <button
                                type="button"
                                onClick={() => {
                                  const newProj = [...currentContent[field.key]];
                                  newProj.splice(index, 1);
                                  handleFieldChange(section.key, field.key, newProj as any);
                                }}
                                className="text-slate-400 hover:text-red-500 absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <Trash2 className="w-5 h-5" />
                              </button>
                            </div>
                          );
                        })}
                        {(!currentContent[field.key] || currentContent[field.key].length < 3) && (
                          <button
                            type="button"
                            onClick={() => {
                              const newProj = Array.isArray(currentContent[field.key]) ? [...currentContent[field.key]] : [];
                              newProj.push({ image: '', title: '' });
                              handleFieldChange(section.key, field.key, newProj as any);
                            }}
                            className="w-full py-4 border-2 border-dashed border-slate-300 rounded-xl text-slate-500 font-semibold hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 transition-colors flex items-center justify-center gap-2"
                          >
                            <Plus className="w-5 h-5" /> Agregar proyecto
                          </button>
                        )}
                      </div>
                    ) : isQualities ? (
                      <div className="space-y-4">
                        {Array.isArray(currentContent[field.key]) && currentContent[field.key].map((cap: any, index: number) => {
                          return (
                            <div key={index} className="flex gap-4 items-start p-4 bg-slate-50 border border-slate-200 rounded-xl relative group">
                              <div className="flex-shrink-0">
                                <IconPicker 
                                  value={cap.icon || 'Sun'}
                                  onChange={(val) => {
                                    const newCaps = [...currentContent[field.key]];
                                    newCaps[index].icon = val;
                                    handleFieldChange(section.key, field.key, newCaps as any);
                                  }}
                                />
                              </div>
                              <div className="flex-1 space-y-3 mr-6">
                                <div>
                                  <input
                                    type="text"
                                    placeholder="Nombre de la cualidad"
                                    maxLength={45}
                                    value={cap.label || ''}
                                    onChange={(e) => {
                                      const newCaps = [...currentContent[field.key]];
                                      newCaps[index].label = e.target.value;
                                      handleFieldChange(section.key, field.key, newCaps as any);
                                    }}
                                    className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm font-semibold focus:ring-2 focus:ring-blue-500"
                                  />
                                  <div className="text-right text-xs text-slate-400 mt-1 font-medium">
                                    {(cap.label || '').length} / 45
                                  </div>
                                </div>
                              </div>
                              <button
                                type="button"
                                onClick={() => {
                                  const newCaps = [...currentContent[field.key]];
                                  newCaps.splice(index, 1);
                                  handleFieldChange(section.key, field.key, newCaps as any);
                                }}
                                className="text-slate-400 hover:text-red-500 absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <Trash2 className="w-5 h-5" />
                              </button>
                            </div>
                          );
                        })}
                        {(!currentContent[field.key] || currentContent[field.key].length < 5) && (
                          <button
                            type="button"
                            onClick={() => {
                              const newCaps = Array.isArray(currentContent[field.key]) ? [...currentContent[field.key]] : [];
                              newCaps.push({ icon: 'Sun', label: '' });
                              handleFieldChange(section.key, field.key, newCaps as any);
                            }}
                            className="w-full py-4 border-2 border-dashed border-slate-300 rounded-xl text-slate-500 font-semibold hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 transition-colors flex items-center justify-center gap-2"
                          >
                            <Plus className="w-5 h-5" /> Agregar cualidad
                          </button>
                        )}
                      </div>
                    ) : isCapabilities ? (
                      <div className="space-y-4">
                        {Array.isArray(currentContent[field.key]) && currentContent[field.key].map((cap: any, index: number) => {
                          return (
                            <div key={index} className="flex gap-4 items-start p-4 bg-slate-50 border border-slate-200 rounded-xl relative group">
                              <div className="flex-shrink-0">
                                <IconPicker 
                                  value={cap.icon || 'Zap'}
                                  onChange={(val) => {
                                    const newCaps = [...currentContent[field.key]];
                                    newCaps[index].icon = val;
                                    handleFieldChange(section.key, field.key, newCaps as any);
                                  }}
                                />
                              </div>
                              <div className="flex-1 space-y-3 mr-6">
                                <input
                                  type="text"
                                  placeholder="Título de la capacidad"
                                  value={cap.title || ''}
                                  onChange={(e) => {
                                    const newCaps = [...currentContent[field.key]];
                                    newCaps[index].title = e.target.value;
                                    handleFieldChange(section.key, field.key, newCaps as any);
                                  }}
                                  className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm font-semibold focus:ring-2 focus:ring-blue-500"
                                />
                                <div>
                                  <textarea
                                    placeholder="Descripción corta"
                                    rows={2}
                                    maxLength={93}
                                    value={cap.description || ''}
                                    onChange={(e) => {
                                      const newCaps = [...currentContent[field.key]];
                                      newCaps[index].description = e.target.value;
                                      handleFieldChange(section.key, field.key, newCaps as any);
                                    }}
                                    className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm resize-none focus:ring-2 focus:ring-blue-500"
                                  />
                                  <div className="text-right text-xs text-slate-400 mt-1 font-medium">
                                    {(cap.description || '').length} / 93
                                  </div>
                                </div>
                              </div>
                              <button
                                type="button"
                                onClick={() => {
                                  const newCaps = [...currentContent[field.key]];
                                  newCaps.splice(index, 1);
                                  handleFieldChange(section.key, field.key, newCaps as any);
                                }}
                                className="text-slate-400 hover:text-red-500 absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <Trash2 className="w-5 h-5" />
                              </button>
                            </div>
                          );
                        })}
                        {(!currentContent[field.key] || currentContent[field.key].length < 5) && (
                          <button
                            type="button"
                            onClick={() => {
                              const newCaps = Array.isArray(currentContent[field.key]) ? [...currentContent[field.key]] : [];
                              newCaps.push({ icon: 'Zap', title: '', description: '' });
                              handleFieldChange(section.key, field.key, newCaps as any);
                            }}
                            className="w-full py-4 border-2 border-dashed border-slate-300 rounded-xl text-slate-500 font-semibold hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 transition-colors flex items-center justify-center gap-2"
                          >
                            <Plus className="w-5 h-5" /> Agregar capacidad
                          </button>
                        )}
                      </div>
                    ) : isTextarea ? (
                      <textarea
                        rows={4}
                        placeholder={field.placeholder || ''}
                        value={currentContent[field.key] || ''}
                        onChange={(e) => handleFieldChange(section.key, field.key, e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all resize-none placeholder:text-slate-400"
                      />
                    ) : isMedia ? (
                      <div className="space-y-2">
                        {currentContent[field.key] ? (
                          <div className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-xl px-4 py-3">
                            <div className="flex items-center gap-3 overflow-hidden">
                              <div className="bg-blue-100 text-blue-600 p-2 rounded-lg">
                                {field.type === 'video' ? <Video className="w-5 h-5" /> : <ImageIcon className="w-5 h-5" />}
                              </div>
                              <div className="flex flex-col truncate">
                                <span className="text-sm font-bold text-slate-800 truncate">
                                  {currentContent[`${field.key}_filename`] || 'Archivo multimedia'}
                                </span>
                                <span className="text-xs text-slate-500 truncate">
                                  {currentContent[field.key]}
                                </span>
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={() => {
                                const publicId = currentContent[`${field.key}_public_id`];
                                if (!publicId) {
                                  // Legacy file without public_id, just clear it
                                  handleFieldChange(section.key, field.key, '');
                                  return;
                                }
                                fetch('/api/cloudinary/delete', {
                                  method: 'POST',
                                  headers: { 'Content-Type': 'application/json' },
                                  body: JSON.stringify({ public_id: publicId, resource_type: field.type === 'video' ? 'video' : 'image' })
                                }).then(() => {
                                  handleFieldChange(section.key, field.key, '');
                                  handleFieldChange(section.key, `${field.key}_public_id`, '');
                                  handleFieldChange(section.key, `${field.key}_filename`, '');
                                });
                              }}
                              className="flex-shrink-0 text-red-500 hover:text-red-700 hover:bg-red-50 px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors ml-4"
                            >
                              Eliminar
                            </button>
                          </div>
                        ) : (
                          <CldUploadWidget 
                            signatureEndpoint="/api/cloudinary/sign"
                            options={{
                              sources: ['local', 'url'],
                              multiple: false,
                              resourceType: field.type === 'video' ? 'video' : 'image',
                              ...(field.allowedFormats ? { clientAllowedFormats: field.allowedFormats } : {})
                            }}
                            onSuccess={(result: any) => {
                              if (field.allowedFormats && !field.allowedFormats.includes(result.info.format?.toLowerCase())) {
                                alert(`Error: Formato no válido. Sólo se permiten los siguientes formatos: ${field.allowedFormats.join(', ').toUpperCase()}`);
                                fetch('/api/cloudinary/delete', {
                                  method: 'POST',
                                  headers: { 'Content-Type': 'application/json' },
                                  body: JSON.stringify({ 
                                    publicId: result.info.public_id, 
                                    resourceType: field.type === 'video' ? 'video' : 'image' 
                                  })
                                });
                                return;
                              }

                              const url = result.info.secure_url;
                              const optimizedUrl = field.type === 'image' && result.info.format !== 'svg'
                                ? url.replace('/upload/', '/upload/q_auto,f_auto/')
                                : url;
                                
                              handleFieldChange(section.key, field.key, optimizedUrl);
                              handleFieldChange(section.key, `${field.key}_public_id`, result.info.public_id);
                              handleFieldChange(section.key, `${field.key}_filename`, `${result.info.original_filename}.${result.info.format}`);
                            }}
                          >
                            {({ open }) => (
                              <button
                                type="button"
                                onClick={() => open()}
                                className="w-full border-2 border-dashed border-slate-300 hover:border-[#0052CC] bg-slate-50 hover:bg-blue-50/50 text-slate-600 hover:text-[#0052CC] py-6 rounded-xl text-sm font-bold transition-all flex flex-col items-center gap-2"
                              >
                                {field.type === 'video' ? <Video className="w-6 h-6" /> : <ImageIcon className="w-6 h-6" />}
                                Subir {field.type === 'video' ? 'Video' : 'Imagen'}
                              </button>
                            )}
                          </CldUploadWidget>
                        )}
                      </div>
                    ) : (
                      <input
                        type="text"
                        placeholder={field.placeholder || ''}
                        value={currentContent[field.key] || ''}
                        onChange={(e) => handleFieldChange(section.key, field.key, e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all placeholder:text-slate-400"
                      />
                    )}
                  </div>
                );
              })}
            </div>
            )}
          </div>
        );
      })}

      {schema.length > 0 && (
        <div className="sticky bottom-8 z-10 flex justify-end">
          <button 
            onClick={handleSaveSections}
            disabled={saving}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all flex items-center gap-3 disabled:opacity-50"
          >
            <Save className="w-5 h-5" />
            {saving ? 'Guardando...' : 'Guardar Todos los Cambios'}
          </button>
        </div>
      )}

      </div>
    </>
  );
}
