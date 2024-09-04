import { Inter } from "next/font/google";
import "./globals.scss";

import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import GoogleAnalyticsInit from "@/components/ga";
import NextTopLoader from "nextjs-toploader";
import Providers from "@/components/providers";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <NextTopLoader color="hsl(var(--primary))" height={2} shadow="none" />
          <div className="flex h-screen">
            <Sidebar />
            <div className="w-full lg:ps-[280px]">
              <Header />
              <main className="container2 mx-auto p-4">{children}</main>
            </div>
          </div>
          {process.env.NODE_ENV === "production" ? <GoogleAnalyticsInit /> : null}
        </Providers>
      </body>
    </html>
  );
}
