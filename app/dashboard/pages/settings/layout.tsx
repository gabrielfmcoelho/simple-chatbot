import { Separator } from "@/components/ui/separator";
import { SidebarNav } from "./components/sidebar-nav";

export async function generateMetadata() {
  return {
    title: "Settings Page - Shadcn UI Kit",
    description:
      "Example of settings page and form created using react-hook-form and Zod validator. Built with Tailwind CSS and React.",
    metadataBase: new URL(`${process.env.BASE_URL}`),
    alternates: {
      canonical: "/dashboard/pages/settings"
    },
    openGraph: {
      images: [`${process.env.DASHBOARD_BASE_URL}/seo.jpg`]
    }
  };
}

const sidebarNavItems = [
  {
    title: "Profile",
    href: "/dashboard/pages/settings"
  },
  {
    title: "Account",
    href: "/dashboard/pages/settings/account"
  },
  {
    title: "Appearance",
    href: "/dashboard/pages/settings/appearance"
  },
  {
    title: "Notifications",
    href: "/dashboard/pages/settings/notifications"
  },
  {
    title: "Display",
    href: "/dashboard/pages/settings/display"
  }
];

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <>
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">
          Manage your account settings and set e-mail preferences.
        </p>
      </div>
      <Separator className="my-6" />
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="-mx-4 lg:w-1/5">
          <SidebarNav items={sidebarNavItems} />
        </aside>
        <div className="flex-1 lg:max-w-2xl">{children}</div>
      </div>
    </>
  );
}
