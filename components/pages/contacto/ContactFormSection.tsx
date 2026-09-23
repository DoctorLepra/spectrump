"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Building,
  User,
  MessageSquare,
} from "lucide-react";
import { FadeContent } from "@/components/react-bits/fade-content";

// WhatsApp Official SVG Icon
function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
    </svg>
  );
}

export function ContactFormSection({ data }: { data?: any }) {
  const whatsapp = data?.whatsapp || "+57 300 912 1798";
  const whatsappClean = whatsapp.replace(/\D/g, "");
  const pbx = data?.pbx || "+57 (601) 745-8900";
  const pbxLink = pbx.replace(/[^\d+]/g, "");
  const email = data?.email || "contacto@spectrump.com.co";
  const hours = data?.hours || "Lunes a Viernes: 8:00 AM - 5:30 PM";

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    organizacion: "",
    tipoEntidad: "empresa-privada",
    servicio: "licitaciones",
    mensaje: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleWhatsAppDirect = () => {
    const message = encodeURIComponent(
      `Hola SPECTRUMP COLOMBIA, me gustaría recibir asesoría sobre soluciones de conectividad, energía solar o ECONECTA®. Mi nombre es ${formData.nombre || "un interesado"}.`
    );
    window.open(`https://wa.me/${whatsappClean}?text=${message}`, "_blank");
  };

  return (
    <section className="py-20 sm:py-28 bg-slate-50 relative overflow-hidden" id="formulario">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Direct Channels & Office Info */}
          <div className="lg:col-span-5 space-y-8">
            <FadeContent delay={0.1} duration={0.8}>
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-sans tracking-tight leading-tight">
                  Estamos a tu disposición para atender tus requerimientos técnicos
                </h2>
                <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed">
                  Comunícate directamente con nuestro equipo de ingenieros y especialistas comerciales a través de cualquiera de nuestros canales oficiales.
                </p>
              </div>
            </FadeContent>

            <FadeContent delay={0.2} duration={0.8}>
              <div className="space-y-4">
                {/* WhatsApp Direct Card */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#16A34A]/50 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-emerald-50 text-[#16A34A] border border-emerald-100 flex-shrink-0">
                      <WhatsAppIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <strong className="block text-xs font-bold text-slate-400 uppercase tracking-wider">
                        WhatsApp Comercial
                      </strong>
                      <span className="text-base font-bold text-slate-900 leading-snug">
                        {whatsapp}
                      </span>
                      <span className="text-xs text-emerald-600 font-medium block">Respuesta Rápida</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="bg-[#16A34A] hover:bg-[#15803D] text-white text-xs font-bold uppercase px-4 py-2.5 rounded-xl shadow-sm transition-colors flex items-center gap-1.5 cursor-pointer w-full sm:w-auto justify-center"
                  >
                    <span>Escribir</span>
                  </button>
                </div>

                {/* PBX Line */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-blue-50 text-[#0052CC] border border-blue-100 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Línea PBX Nacional
                    </strong>
                    <a
                      href={`tel:${pbxLink}`}
                      className="text-base font-bold text-slate-900 hover:text-[#0052CC] transition-colors leading-snug block"
                    >
                      {pbx}
                    </a>
                    <span className="text-xs text-slate-500">Atención telefónica empresarial</span>
                  </div>
                </div>

                {/* Email Direct */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-blue-50 text-[#0052CC] border border-blue-100 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Correo Electrónico
                    </strong>
                    <a
                      href={`mailto:${email}`}
                      className="text-base font-bold text-slate-900 hover:text-[#0052CC] transition-colors leading-snug block"
                    >
                      {email}
                    </a>
                    <span className="text-xs text-slate-500">Licitaciones y requerimientos</span>
                  </div>
                </div>

                {/* Hours & Location */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-slate-100 text-slate-700 border border-slate-200 flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Horario de Atención
                    </strong>
                    <span className="text-sm font-bold text-slate-900 leading-snug block">
                      {hours}
                    </span>
                    <span className="text-xs text-slate-500">Hora Colombia (GMT-5)</span>
                  </div>
                </div>
              </div>
            </FadeContent>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <FadeContent delay={0.2} duration={0.8}>
              <div className="bg-white rounded-3xl p-7 sm:p-10 border border-slate-200/90 shadow-xl">
                {isSubmitted ? (
                  <div className="py-12 text-center space-y-5 animate-in fade-in duration-300">
                    <div className="w-16 h-16 bg-emerald-100 text-[#16A34A] rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-extrabold text-slate-900 font-sans">
                        ¡Mensaje Enviado con Éxito!
                      </h3>
                      <p className="text-slate-600 font-sans text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                        Gracias por comunicarte con SPECTRUMP COLOMBIA. Un asesor especializado revisará tu solicitud y se pondrá en contacto en breve.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          nombre: "",
                          email: "",
                          telefono: "",
                          organizacion: "",
                          tipoEntidad: "empresa-privada",
                          servicio: "licitaciones",
                          mensaje: "",
                        });
                      }}
                      className="bg-[#0052CC] hover:bg-[#0040A8] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-xl transition-all"
                    >
                      Enviar otro mensaje
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="border-b border-slate-100 pb-4">
                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-sans tracking-tight">
                        Envíanos un Mensaje
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 font-sans mt-1">
                        Diligencia el formulario y te responderemos a la mayor brevedad.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Full Name */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-slate-700 font-sans uppercase tracking-wider">
                          Nombre Completo *
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            required
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            placeholder="Ej. Carlos Mendoza"
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0052CC] focus:bg-white transition-all font-sans"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-slate-700 font-sans uppercase tracking-wider">
                          Correo Institucional *
                        </label>
                        <input
                          type="email"
                          required
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="carlos@empresa.com"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0052CC] focus:bg-white transition-all font-sans"
                        />
                      </div>

                      {/* Phone */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-slate-700 font-sans uppercase tracking-wider">
                          Teléfono o WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          name="telefono"
                          value={formData.telefono}
                          onChange={handleChange}
                          placeholder="+57 300 123 4567"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0052CC] focus:bg-white transition-all font-sans"
                        />
                      </div>

                      {/* Organization Name */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-slate-700 font-sans uppercase tracking-wider">
                          Empresa / Entidad
                        </label>
                        <input
                          type="text"
                          name="organizacion"
                          value={formData.organizacion}
                          onChange={handleChange}
                          placeholder="Nombre de la institución"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0052CC] focus:bg-white transition-all font-sans"
                        />
                      </div>

                      {/* Entity Type */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-slate-700 font-sans uppercase tracking-wider">
                          Tipo de Entidad
                        </label>
                        <select
                          name="tipoEntidad"
                          value={formData.tipoEntidad}
                          onChange={handleChange}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0052CC] focus:bg-white transition-all font-sans cursor-pointer"
                        >
                          <option value="empresa-privada">Empresa Privada</option>
                          <option value="sector-publico">Sector Público / Licitación</option>
                          <option value="alcaldia-gobernacion">Alcaldía / Gobernación</option>
                          <option value="comunidad-rural">Comunidad / Proyecto Social</option>
                          <option value="persona-natural">Persona Natural / Consultor</option>
                        </select>
                      </div>

                      {/* Service of Interest */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-slate-700 font-sans uppercase tracking-wider">
                          Servicio de Interés
                        </label>
                        <select
                          name="servicio"
                          value={formData.servicio}
                          onChange={handleChange}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0052CC] focus:bg-white transition-all font-sans cursor-pointer"
                        >
                          <option value="licitaciones">Internet por Licitación</option>
                          <option value="energia-solar">Energía Solar Fotovoltaica</option>
                          <option value="econecta">Estructuras Inteligentes ECONECTA®</option>
                          <option value="infraestructura">Infraestructura y Redes</option>
                          <option value="catalogo-equipos">Suministro de Equipos / Catálogo</option>
                          <option value="otro">Otro Requerimiento Especial</option>
                        </select>
                      </div>
                    </div>

                    {/* Message Area */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700 font-sans uppercase tracking-wider">
                        Detalles del Proyecto o Requerimiento *
                      </label>
                      <textarea
                        required
                        rows={4}
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        placeholder="Describe el alcance de tu proyecto, ubicación geográfica, requerimientos de conectividad o energía..."
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0052CC] focus:bg-white transition-all font-sans resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#0052CC] hover:bg-[#0040A8] text-white font-sans text-xs sm:text-sm font-bold uppercase tracking-wider py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 active:scale-98 disabled:opacity-75 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <span>Enviando mensaje...</span>
                        ) : (
                          <>
                            <span>ENVIAR MENSAJE</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-[11px] text-slate-400 font-sans text-center">
                      Tus datos son tratados de acuerdo con nuestra política de protección de datos personales de Colombia.
                    </p>
                  </form>
                )}
              </div>
            </FadeContent>
          </div>
        </div>
      </div>
    </section>
  );
}
