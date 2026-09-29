import type { Metadata } from "next";
import localFont from "next/font/local";
import { ChunkErrorHandler } from "@/components/shared/ChunkErrorHandler";
import { ClientLayout } from "@/components/layout/ClientLayout";
import { createClient } from "@/lib/supabase/server";
import { JsonLd, generateOrganizationSchema, generateWebSiteSchema } from "@/components/seo/JsonLd";
import "./globals.css";

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://spectrumpcolombia.com";

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
  metadataBase: new URL(baseUrl),
  title: {
    default: "SPECTRUMP Colombia | Ingeniería, Telecomunicaciones y Energía Solar",
    template: "%s | SPECTRUMP Colombia",
  },
  description:
    "Soluciones integrales de ingeniería, conectividad rural, telecomunicaciones, energía solar fotovoltaica y la innovadora infraestructura ECONECTA® en Colombia.",
  applicationName: "SPECTRUMP COLOMBIA SAS",
  keywords: [
    "Telecomunicaciones Colombia",
    "SPECTRUMP COLOMBIA SAS",
    "Energía Solar Fotovoltaica",
    "Infraestructura Inteligente",
    "ECONECTA",
    "Conectividad Rural",
    "Proyectos de Ingeniería Colombia",
    "Torres de Telecomunicaciones",
    "Sistemas Fotovoltaicos Autónomos",
    "SECOP II",
    "Licitaciones Públicas Colombia",
  ],
  authors: [{ name: "SPECTRUMP COLOMBIA S.A.S.", url: baseUrl }],
  creator: "SPECTRUMP COLOMBIA S.A.S.",
  publisher: "SPECTRUMP COLOMBIA S.A.S.",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: baseUrl,
    siteName: "SPECTRUMP COLOMBIA SAS",
    title: "SPECTRUMP Colombia | Ingeniería, Telecomunicaciones y Energía Solar",
    description:
      "Soluciones integrales de ingeniería, conectividad rural, telecomunicaciones, energía solar fotovoltaica e infraestructura ECONECTA® en Colombia.",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "SPECTRUMP COLOMBIA SAS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SPECTRUMP Colombia | Ingeniería, Telecomunicaciones y Energía Solar",
    description:
      "Soluciones integrales de ingeniería, conectividad rural, telecomunicaciones, energía solar fotovoltaica e infraestructura ECONECTA® en Colombia.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

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
      <head>
        <JsonLd data={[generateOrganizationSchema(baseUrl), generateWebSiteSchema(baseUrl)]} />
      </head>
      <body className="bg-white text-slate-900 antialiased min-h-screen font-sans flex flex-col">
        <ChunkErrorHandler />
        <ClientLayout navbarData={navbarData?.content}>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
