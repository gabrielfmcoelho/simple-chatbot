import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import GoogleAnalyticsInit from "@/components/ga";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark2">
      <body className={inter.className}>
        <div className="flex h-screen">
          <Sidebar />
          <div className="w-full lg:ps-[280px]">
            <Header />
            <main className="container mx-auto p-4">{children}</main>
          </div>
        </div>

        {process.env.NODE_ENV === "production" ? <GoogleAnalyticsInit /> : null}
      </body>
    </html>
  );
}
