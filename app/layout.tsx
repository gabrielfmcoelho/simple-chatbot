import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import GoogleAnalyticsInit from "@/components/ga";
import NextTopLoader from "nextjs-toploader";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark2" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <NextTopLoader color="hsl(var(--primary))" height={2} shadow="none" />
          <div className="flex h-screen">
            <Sidebar />
            <div className="w-full lg:ps-[280px]">
              <Header />
              <main className="container mx-auto p-4">{children}</main>
            </div>
          </div>

          {process.env.NODE_ENV === "production" ? <GoogleAnalyticsInit /> : null}
        </ThemeProvider>
      </body>
    </html>
  );
}
