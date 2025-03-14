import React from "react";

import { Inter, Roboto, Montserrat, Poppins, Overpass_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes";
import NextTopLoader from "nextjs-toploader";
import { getThemeScript } from "@/lib/theme-scripts";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto"
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-montserrat"
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins"
});

const overpass_mono = Overpass_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-overpass-mono"
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="group">
      <head>
        <script dangerouslySetInnerHTML={{ __html: getThemeScript() }} />
      </head>
      <body
        suppressHydrationWarning
        className={`${inter.className} ${inter.variable} ${roboto.variable} ${montserrat.variable} ${poppins.variable} ${overpass_mono.variable}`}>
        <NextTopLoader color="hsl(var(--primary))" showSpinner={false} height={2} shadow="none" />
        <ThemeProvider attribute="class" enableSystem={false}>
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
