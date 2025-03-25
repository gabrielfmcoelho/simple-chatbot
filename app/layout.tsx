import React from "react";
import { cookies } from "next/headers";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "next-themes";
import { getThemeScript } from "@/lib/theme-scripts";
import GoogleAnalyticsInit from "@/lib/ga";
import { fontVariables } from "@/lib/fonts";
import NextTopLoader from "nextjs-toploader";

import "./globals.css";

import { Toaster } from "@/components/ui/toaster";
import { ActiveThemeProvider } from "@/components/active-theme";

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const activeThemeValue = cookieStore.get("active_theme")?.value;

  return (
    <html lang="en" suppressHydrationWarning className="group" data-content-layout="full">
      <head>
        <script dangerouslySetInnerHTML={{ __html: getThemeScript() }} />
      </head>
      <body
        suppressHydrationWarning
        className={cn(
          "bg-background font-sans",
          activeThemeValue ? `theme-${activeThemeValue}` : "",
          fontVariables
        )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange>
          <ActiveThemeProvider initialTheme={activeThemeValue}>
            {children}
            <Toaster />
            <NextTopLoader
              color="hsl(var(--primary))"
              showSpinner={false}
              height={2}
              shadow-sm="none"
            />
            {process.env.NODE_ENV === "production" ? <GoogleAnalyticsInit /> : null}
          </ActiveThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
