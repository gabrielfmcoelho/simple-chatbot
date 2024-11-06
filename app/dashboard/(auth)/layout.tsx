import { cookies } from "next/headers";

import Providers from "@/components/providers";
import MainLayout from "@/components/main-layout";
import { SidebarProvider } from "@/components/ui/sidebar";

export default async function AuthLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true";

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <Providers>
        <MainLayout>{children}</MainLayout>
      </Providers>
    </SidebarProvider>
  );
}
