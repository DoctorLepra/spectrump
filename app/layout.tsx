import type { Metadata } from "next";
import localFont from "next/font/local";
import { ChunkErrorHandler } from "@/components/shared/ChunkErrorHandler";
import { ClientLayout } from "@/components/layout/ClientLayout";
import "./globals.css";

const fontSans = localFont({
  src: "../public/fonts/inter-latin-wght-normal.woff2",
  variable: "--font-sans",
  display: "swap",
  weight: "100 900",
});

const fontMono = localFont({
  src: "../public/fonts/jetbrains-mono-latin-wght-normal.woff2",
  variable: "--font-mono",
  display: "swap",
  weight: "100 800",
});

export const metadata: Metadata = {
  title: {
    default: "SPECTRUMP COLOMBIA SAS | Tecnología que conecta, energía que transforma",
    template: "%s | SPECTRUMP COLOMBIA",
  },
  description:
    "Soluciones integrales de ingeniería, conectividad, energía y tecnología para proyectos que generan impacto y construyen un futuro más sostenible en Colombia.",
  keywords: [
    "Telecomunicaciones Colombia",
    "SPECTRUMP COLOMBIA SAS",
    "Energía Solar Fotovoltaica",
    "Infraestructura Inteligente",
    "ECONECTA",
    "Conectividad Rural",
    "Proyectos de Ingeniería",
  ],
  authors: [{ name: "SPECTRUMP COLOMBIA S.A.S." }],
};

import { createClient } from "@/lib/supabase/server";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = createClient();
  const { data: navbarData } = await supabase
    .from('page_sections')
    .select('content')
    .eq('section_key', 'productos_navbar')
    .single();

  return (
    <html
      lang="es"
      className={`${fontSans.variable} ${fontMono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-white text-slate-900 antialiased min-h-screen font-sans flex flex-col">
        <ChunkErrorHandler />
        <ClientLayout navbarData={navbarData?.content}>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
