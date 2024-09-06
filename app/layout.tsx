import { Inter } from "next/font/google";
import "./globals.scss";

import Providers from "@/components/providers";
import MainLayout from "@/components/main-layout";

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
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
}
