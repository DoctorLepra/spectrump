import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ChunkErrorHandler } from "@/components/shared/ChunkErrorHandler";
import { ClientLayout } from "@/components/layout/ClientLayout";
import "./globals.css";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const fontMono = Inter({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${fontSans.variable} ${fontMono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-white text-slate-900 antialiased min-h-screen font-sans flex flex-col">
        <ChunkErrorHandler />
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
