import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "SPRECTRUMP COLOMBIA | Conectividad y Energía para el Futuro",
    template: "%s | SPRECTRUMP COLOMBIA",
  },
  description:
    "Empresa colombiana de telecomunicaciones especializada en venta de internet por licitación para el sector empresarial y gubernamental, e instalaciones de sistemas de energía solar.",
  keywords: [
    "Telecomunicaciones Colombia",
    "Internet por Licitación",
    "Energía Solar",
    "SPRECTRUMP COLOMBIA",
    "SECOP II",
    "Conectividad Empresarial",
    "MINTIC",
    "Energías Renovables",
  ],
  authors: [{ name: "SPRECTRUMP COLOMBIA S.A.S. E.S.P." }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${fontSans.variable} ${fontMono.variable} dark`}
      suppressHydrationWarning
    >
      <body className="bg-black text-white antialiased min-h-screen font-sans flex flex-col selection:bg-[#00D4FF]/25 selection:text-[#00D4FF]">
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
