"use client";

import NextTopLoader from "nextjs-toploader";
import Header from "./layout/header";
import Sidebar from "./layout/sidebar";
import ThemeCustomizer from "./theme-customizer";
import GoogleAnalyticsInit from "@/lib/ga";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NextTopLoader color="hsl(var(--primary))" showSpinner={false} height={2} shadow="none" />
      <div className="flex h-screen grow">
        <Sidebar />
        <div className="w-full">
          <Header />
          <main className="min-h-full p-4">{children}</main>
        </div>
        <ThemeCustomizer />
      </div>
      {process.env.NODE_ENV === "production" ? <GoogleAnalyticsInit /> : null}
    </>
  );
}
