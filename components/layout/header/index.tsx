"use client";

import { Search } from "lucide-react";

import { Input } from "../../ui/input";
import { Messages } from "./messages";
import { Notifications } from "./notifications";
import { UserMenu } from "./user-menu";

export function Header() {
  return (
    <div className="flex h-16 items-center justify-between border-b px-4">
      <form>
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="h-9 pl-8 md:w-[300px] lg:w-[400px]"
          />
        </div>
      </form>
      <div className="flex items-center gap-4">
        <Messages />
        <Notifications />
        <UserMenu />
      </div>
    </div>
  );
}
