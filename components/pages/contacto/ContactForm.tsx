"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  AlertCircle,
  Send,
  Loader2,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { SERVICE_OPTIONS } from "@/lib/data/contactData";
import { Button } from "@/components/shared/Button";
import { Badge } from "@/components/shared/Badge";

interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  empresa: string;
  servicio: string;
  mensaje: string;
  aceptaTerminos: boolean;
}

interface FormErrors {
  nombre?: string;
  email?: string;
  telefono?: string;
  empresa?: string;
  servicio?: string;
  mensaje?: string;
  aceptaTerminos?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    servicio: "conectividad-institucional",
    mensaje: "",
    aceptaTerminos: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Validation function
  const validateField = (name: keyof FormData, value: any): string | undefined => {
    switch (name) {
      case "nombre":
        if (!value || value.trim().length < 3) {
          return "Ingrese su nombre completo (mínimo 3 caracteres).";
        }
        break;
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value || !emailRegex.test(value)) {
          return "Ingrese un correo institucional válido (ej: nombre@entidad.gov.co).";
        }
        break;
      case "telefono":
        const cleanPhone = value ? value.replace(/\D/g, "") : "";
        if (!cleanPhone || cleanPhone.length < 7) {
          return "Ingrese un número de teléfono o celular válido (mínimo 7 dígitos).";
        }
        break;
      case "empresa":
        if (!value || value.trim().length < 2) {
          return "Especifique el nombre de la entidad pública o empresa.";
        }
        break;
      case "servicio":
        if (!value) {
          return "Seleccione el tipo de servicio requerido.";
        }
        break;
      case "mensaje":
        if (!value || value.trim().length < 10) {
          return "Describa brevemente el alcance del requerimiento (mínimo 10 caracteres).";
        }
        break;
      case "aceptaTerminos":
        if (!value) {
          return "Debe autorizar el tratamiento de datos personales (Ley 1581 de 2012).";
        }
        break;
      default:
        break;
    }
    return undefined;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    const val = type === "checkbox" ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: val,
    }));

    if (touched[name]) {
      const error = validateField(name as keyof FormData, val);
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    const val = type === "checkbox" ? checked : value;

    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    const error = validateField(name as keyof FormData, val);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all as touched
    const allTouched = {
      nombre: true,
      email: true,
      telefono: true,
      empresa: true,
      servicio: true,
      mensaje: true,
      aceptaTerminos: true,
    };
    setTouched(allTouched);

    // Validate all
    const newErrors: FormErrors = {};
    let hasError = false;

    (Object.keys(formData) as Array<keyof FormData>).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
        hasError = true;
      }
    });

    setErrors(newErrors);

    if (hasError) return;

    // Simulation submission
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="p-8 sm:p-10 rounded-2xl bg-[#111111] border border-[#222222] relative overflow-hidden shadow-2xl">
      {/* Background glow */}
      <div
        className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#00D4FF]/10 via-[#0066FF]/5 to-transparent blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10">
        <div className="mb-8">
          <Badge variant="cyan" size="sm" dot className="mb-3">
            FORMULARIO INSTITUCIONAL
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-bold font-sans text-white">
            Estructure su Requerimiento
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-zinc-400 font-mono">
            Diligencie la información para cotizaciones SECOP II, estudios previos o asesoría técnica solar.
          </p>
        </div>

        {isSubmitted ? (
          <div className="py-12 px-6 rounded-xl bg-[#0a0a0a] border border-emerald-500/40 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold font-sans text-white">
              ¡Requerimiento recibido con éxito!
            </h3>
            <p className="text-sm text-zinc-300 font-sans max-w-md mx-auto leading-relaxed">
              Un ingeniero comercial especializado en el sector asignado se comunicará con su entidad en un plazo máximo de <strong>2 horas hábiles</strong>.
            </p>
            <div className="pt-4 font-mono text-xs text-zinc-500">
              <span>Código de Radicado Temporal: #SPT-{Math.floor(100000 + Math.random() * 900000)}</span>
            </div>
            <div className="pt-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    nombre: "",
                    email: "",
                    telefono: "",
                    empresa: "",
                    servicio: "licitacion-internet",
                    mensaje: "",
                    aceptaTerminos: false,
                  });
                  setTouched({});
                  setErrors({});
                }}
              >
                Enviar Otro Requerimiento
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            {/* Grid 2 Cols: Nombre y Correo */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Nombre Completo */}
              <div>
                <label
                  htmlFor="nombre"
                  className="block text-xs font-mono font-medium text-zinc-300 mb-2 uppercase tracking-wide"
                >
                  Nombre Completo <span className="text-[#00D4FF]">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Dra. Carolina Méndez"
                    className={`w-full px-4 py-3 rounded-lg bg-[#0a0a0a] text-white text-sm border font-sans placeholder-zinc-600 transition-all focus:outline-none ${
                      touched.nombre && errors.nombre
                        ? "border-red-500 focus:ring-1 focus:ring-red-500"
                        : touched.nombre && !errors.nombre
                        ? "border-emerald-500/60 focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF]"
                        : "border-[#222222] focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF]"
                    }`}
                  />
                  {touched.nombre && !errors.nombre && formData.nombre && (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
                  )}
                </div>
                {touched.nombre && errors.nombre && (
                  <p className="text-xs font-mono text-red-400 mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{errors.nombre}</span>
                  </p>
                )}
              </div>

              {/* Correo Electrónico */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-mono font-medium text-zinc-300 mb-2 uppercase tracking-wide"
                >
                  Correo Institucional / Corporativo <span className="text-[#00D4FF]">*</span>
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="carolina.mendez@entidad.gov.co"
                    className={`w-full px-4 py-3 rounded-lg bg-[#0a0a0a] text-white text-sm border font-sans placeholder-zinc-600 transition-all focus:outline-none ${
                      touched.email && errors.email
                        ? "border-red-500 focus:ring-1 focus:ring-red-500"
                        : touched.email && !errors.email
                        ? "border-emerald-500/60 focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF]"
                        : "border-[#222222] focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF]"
                    }`}
                  />
                  {touched.email && !errors.email && formData.email && (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
                  )}
                </div>
                {touched.email && errors.email && (
                  <p className="text-xs font-mono text-red-400 mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Grid 2 Cols: Teléfono y Empresa */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Teléfono / Celular */}
              <div>
                <label
                  htmlFor="telefono"
                  className="block text-xs font-mono font-medium text-zinc-300 mb-2 uppercase tracking-wide"
                >
                  Teléfono / Celular de Contacto <span className="text-[#00D4FF]">*</span>
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="+57 (310) 555-0199"
                    className={`w-full px-4 py-3 rounded-lg bg-[#0a0a0a] text-white text-sm border font-sans placeholder-zinc-600 transition-all focus:outline-none ${
                      touched.telefono && errors.telefono
                        ? "border-red-500 focus:ring-1 focus:ring-red-500"
                        : touched.telefono && !errors.telefono
                        ? "border-emerald-500/60 focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF]"
                        : "border-[#222222] focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF]"
                    }`}
                  />
                  {touched.telefono && !errors.telefono && formData.telefono && (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
                  )}
                </div>
                {touched.telefono && errors.telefono && (
                  <p className="text-xs font-mono text-red-400 mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{errors.telefono}</span>
                  </p>
                )}
              </div>

              {/* Empresa o Entidad */}
              <div>
                <label
                  htmlFor="empresa"
                  className="block text-xs font-mono font-medium text-zinc-300 mb-2 uppercase tracking-wide"
                >
                  Empresa o Entidad Pública <span className="text-[#00D4FF]">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Gobernación / Corporación S.A."
                    className={`w-full px-4 py-3 rounded-lg bg-[#0a0a0a] text-white text-sm border font-sans placeholder-zinc-600 transition-all focus:outline-none ${
                      touched.empresa && errors.empresa
                        ? "border-red-500 focus:ring-1 focus:ring-red-500"
                        : touched.empresa && !errors.empresa
                        ? "border-emerald-500/60 focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF]"
                        : "border-[#222222] focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF]"
                    }`}
                  />
                  {touched.empresa && !errors.empresa && formData.empresa && (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
                  )}
                </div>
                {touched.empresa && errors.empresa && (
                  <p className="text-xs font-mono text-red-400 mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{errors.empresa}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Tipo de Servicio */}
            <div>
              <label
                htmlFor="servicio"
                className="block text-xs font-mono font-medium text-zinc-300 mb-2 uppercase tracking-wide"
              >
                Tipo de Servicio de Interés <span className="text-[#00D4FF]">*</span>
              </label>
              <select
                id="servicio"
                name="servicio"
                value={formData.servicio}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full px-4 py-3 rounded-lg bg-[#0a0a0a] text-white text-sm border border-[#222222] font-sans focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] focus:outline-none"
              >
                {SERVICE_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value} className="bg-[#111111] text-white py-2">
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Mensaje / Alcance */}
            <div>
              <label
                htmlFor="mensaje"
                className="block text-xs font-mono font-medium text-zinc-300 mb-2 uppercase tracking-wide"
              >
                Mensaje o Alcance del Requerimiento <span className="text-[#00D4FF]">*</span>
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={4}
                value={formData.mensaje}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Describa brevemente el número de sedes, ancho de banda estimado, ubicación o requerimiento solar fotovoltaico..."
                className={`w-full px-4 py-3 rounded-lg bg-[#0a0a0a] text-white text-sm border font-sans placeholder-zinc-600 transition-all focus:outline-none resize-none ${
                  touched.mensaje && errors.mensaje
                    ? "border-red-500 focus:ring-1 focus:ring-red-500"
                    : touched.mensaje && !errors.mensaje
                    ? "border-emerald-500/60 focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF]"
                    : "border-[#222222] focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF]"
                }`}
              />
              {touched.mensaje && errors.mensaje && (
                <p className="text-xs font-mono text-red-400 mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{errors.mensaje}</span>
                </p>
              )}
            </div>

            {/* Checkbox Aceptación Ley 1581 */}
            <div>
              <label className="flex items-start gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  id="aceptaTerminos"
                  name="aceptaTerminos"
                  checked={formData.aceptaTerminos}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="mt-1 w-4 h-4 rounded border-[#222222] bg-[#0a0a0a] text-[#00D4FF] focus:ring-[#00D4FF] focus:ring-offset-black accent-[#00D4FF]"
                />
                <span className="text-xs font-mono text-zinc-400 leading-relaxed">
                  Autorizo de manera previa, expresa e informada el tratamiento de mis datos personales conforme a la <strong>Ley 1581 de 2012 (Habeas Data)</strong> y la política de privacidad de SPRECTRUMP COLOMBIA.
                </span>
              </label>
              {touched.aceptaTerminos && errors.aceptaTerminos && (
                <p className="text-xs font-mono text-red-400 mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{errors.aceptaTerminos}</span>
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <Button
                type="submit"
                variant="gradient"
                size="lg"
                disabled={isSubmitting}
                className="w-full justify-center font-mono text-xs uppercase tracking-wider font-semibold shadow-glow-cyan-md py-4"
                rightIcon={
                  isSubmitting ? (
                    <Loader2 className="w-4 h-4 animate-spin ml-2" />
                  ) : (
                    <Send className="w-4 h-4 ml-2" />
                  )
                }
              >
                {isSubmitting ? "Enviando requerimiento..." : "Enviar Solicitud de Cotización"}
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
