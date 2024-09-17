"use client";

import NextTopLoader from "nextjs-toploader";
import Sidebar from "./layout/sidebar";
import Header from "./layout/header";
import GoogleAnalyticsInit from "./ga";
import { useContext } from "react";
import { ThemeOptionsContext, ThemeOptionsContextType } from "./contexts";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { themeOptions, setThemeOptions } = useContext(
    ThemeOptionsContext
  ) as ThemeOptionsContextType;

  /*   useEffect(() => {
    if (pathname)
      setThemeOptions((prevState) => ({ ...prevState, container: !pathname.includes("chat") }));
  }, [pathname]); */

  return (
    <>
      <NextTopLoader color="hsl(var(--primary))" showSpinner={false} height={2} shadow="none" />
      <div className="flex h-screen">
        <Sidebar />
        <div className="w-full lg:ps-[--sidebar-width]">
          <Header />
          <main
            className={cn("p-4 lg:pb-14", {
              "container2 mx-auto2": themeOptions.containerContent
            })}>
            {children}
          </main>
        </div>
      </div>
      {process.env.NODE_ENV === "production" ? <GoogleAnalyticsInit /> : null}
    </>
  );
}
