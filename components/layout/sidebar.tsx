import { ScrollArea } from "@/components/ui/scroll-area";
import { icons } from "lucide-react";
import Link from "next/link";
import { page_routes } from "@/lib/routes-config";
import Anchor from "../anchor";
import Logo from "./logo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

type SidebarNavLinkProps = {
  item: {
    title: string;
    href: string;
    icon?: string;
  };
};

export const SidebarNavLink: React.FC<SidebarNavLinkProps> = ({ item }: SidebarNavLinkProps) => {
  // @ts-expect-error
  const LucideIcon = icons[item.icon];

  return (
    <Anchor
      href={item.href}
      key={item.title + item.href}
      activeClassName="!bg-primary text-primary-foreground">
      {item.icon && <LucideIcon className="h-4 w-4" />}
      {item.title}
    </Anchor>
  );
};

export default function Sidebar() {
  return (
    <div className="fixed hidden h-screen lg:block">
      <ScrollArea className="h-full w-[280px] border-r px-4">
        <Logo />
        {page_routes.map((route) => (
          <>
            <div className="px-2 py-4 font-medium">{route.title}</div>
            <nav className="*:flex *:items-center *:gap-3 *:rounded-lg *:px-3 *:py-2 *:transition-all hover:*:bg-muted">
              {route.items.map((item, key) => (
                <SidebarNavLink key={key} item={item} />
              ))}
            </nav>
          </>
        ))}
        <div className="mt-10">
          <Card>
            <CardHeader>
              <CardTitle>Get Shadcn UI Kit</CardTitle>
              <CardDescription>
                Unlock all features and get unlimited lifetime access.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="sm" className="w-full" asChild>
                <Link href={`${process.env.BASE_URL}/#pricing`}>Buy Now</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </ScrollArea>
    </div>
  );
}
