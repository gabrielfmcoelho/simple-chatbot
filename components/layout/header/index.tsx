import ThemeSwitch from "./theme-switch";
import Notifications from "./notifications";
import UserMenu from "./user-menu";
import Messages from "./messages";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Search from "@/components/layout/header/search";

export default function Header() {
  return (
    <div className="sticky top-0 z-10 flex flex-col">
      <header className="flex h-14 items-center gap-2 px-4 backdrop-blur-lg lg:h-[60px]">
        <SidebarTrigger className="block *:size-5 md:hidden lg:block" />
        <Search />
        <Messages />
        <Notifications />
        <ThemeSwitch />
        <UserMenu />
      </header>
    </div>
  );
}
