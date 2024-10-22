"use client";

import NextTopLoader from "nextjs-toploader";
import GoogleAnalyticsInit from "./ga";
import { usePathname } from "next/navigation";
import Header from "./layout/header";
import Sidebar from "./layout/header/mobile-sidebar";
import ThemeCustomizer from "./theme-customizer";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <NextTopLoader color="hsl(var(--primary))" showSpinner={false} height={2} shadow="none" />
      <div className="flex h-screen">
        <Sidebar />
        <div className="w-full lg:ps-[--sidebar-width]">
          <Header />
          <main className="min-h-full p-4">{children}</main>
        </div>
        <ThemeCustomizer />
      </div>
      {process.env.NODE_ENV === "production" ? <GoogleAnalyticsInit /> : null}
    </>
  );
}
