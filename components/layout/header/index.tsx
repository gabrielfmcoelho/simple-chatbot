import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SidebarNavLink } from "./mobile-sidebar";
import { page_routes } from "@/lib/routes-config";
import ThemeSwitch from "./theme-switch";
import { Fragment } from "react";
import Notifications from "./notifications";
import UserMenu from "./user-menu";
import Messages from "./messages";
import Search from "./search";
import Logo from "../logo";

export default function Header() {
  return (
    <div className="sticky top-0 z-50 flex flex-col">
      <header className="flex h-14 items-center gap-2 border-b bg-background px-4 lg:h-[60px]">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="shrink-0 lg:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col overflow-auto">
            <Logo className="px-0" />
            <nav className="grid gap-2 text-lg font-medium">
              {page_routes.map((route) => (
                <Fragment key={route.title}>
                  <div className="px-2 py-4 font-medium">{route.title}</div>
                  <nav className="*:flex *:items-center *:gap-3 *:rounded-lg *:px-3 *:py-2 *:transition-all hover:*:bg-muted">
                    {route.items.map((item, key) => (
                      <SidebarNavLink key={key} item={item} />
                    ))}
                  </nav>
                </Fragment>
              ))}
            </nav>
            <div className="mt-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Upgrade to Pro</CardTitle>
                  <CardDescription>
                    Unlock all features and get unlimited access to our support team.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button size="sm" className="w-full">
                    Upgrade
                  </Button>
                </CardContent>
              </Card>
            </div>
          </SheetContent>
        </Sheet>
        <div className="w-full flex-1">
          <Search />
        </div>
        <Messages />
        <Notifications />
        <ThemeSwitch />
        <UserMenu />
      </header>
    </div>
  );
}
