import { ScrollArea } from "@/components/ui/scroll-area";
import { icons } from "lucide-react";
import Link from "next/link";
import { page_routes } from "@/lib/routes-config";
import Anchor from "../anchor";
import Logo from "./logo";

type SidebarNavLinkProps = {
  item: {
    title: string;
    href: string;
    icon?: string;
  };
};

export default function Sidebar() {
  const SidebarNavLink: React.FC<SidebarNavLinkProps> = ({ item }) => {
    // @ts-expect-error
    const LucideIcon = icons[item.icon];

    return (
      <Anchor
        href={item.href}
        key={item.title + item.href}
        activeClassName="!bg-primary text-primary-foreground"
      >
        {item.icon && <LucideIcon className="h-4 w-4" />}
        {item.title}
      </Anchor>
    );
  };

  return (
    <div className="fixed h-screen">
      <Logo />
      <ScrollArea className="h-full w-[280px] border-r px-4">
        {page_routes.map((route) => (
          <>
            <div className="px-2 py-4 text-sm font-medium">{route.title}</div>
            <nav className="*:flex *:items-center *:gap-3 *:rounded-lg *:px-3 *:py-2 *:text-sm *:transition-all hover:*:bg-muted">
              {route.items.map((item, key) => (
                <SidebarNavLink key={key} item={item} />
              ))}
            </nav>
          </>
        ))}
      </ScrollArea>
    </div>
  );
}
