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
    const LucideIcon = icons[item.icon];

    return (
      <Anchor
        href={item.href}
        key={item.title + item.href}
        activeClassName="!bg-primary text-primary-foreground"
      >
        {item.icon && <LucideIcon className="w-4 h-4" />}
        {item.title}
      </Anchor>
    );
  };

  return (
    <div className="h-screen fixed">
      <Logo/>
      <ScrollArea className="h-full w-[280px] border-r px-4">
        {page_routes.map((route) => (
          <>
            <div className="text-sm px-2 py-4 font-medium">{route.title}</div>
            <nav className="*:flex *:items-center *:gap-3 *:text-sm *:rounded-lg *:px-3 *:py-2 *:transition-all hover:*:bg-muted">
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
