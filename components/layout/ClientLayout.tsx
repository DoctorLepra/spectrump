"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export function ClientLayout({ children, navbarData }: { children: React.ReactNode, navbarData?: any }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  return (
    <>
      {!isAdmin && <Navbar data={navbarData} />}
      <main className="flex-1 flex flex-col">{children}</main>
      {!isAdmin && <Footer />}
    </>
  );
}
