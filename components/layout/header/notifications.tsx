"use client";

import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { Button } from "../../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "../../ui/dropdown-menu";
import { notifications } from "./data";

export function Notifications() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4">
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
          </svg>
          <span className="sr-only">Toggle notifications</span>
          <div className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-600" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[440px]" align="end" forceMount>
        <DropdownMenuLabel>Notifications</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="grid gap-4 p-4">
          {notifications.map((item, index) => (
            <DropdownMenuItem key={index} className="grid grid-cols-[25px_1fr] items-start p-0">
              <Avatar className="mt-1">
                <AvatarImage src={`/images/avatars/${item.avatar}`} />
                <AvatarFallback>N</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium leading-none">{item.title}</p>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  {item.desc}
                </p>
                <p className="line-clamp-2 text-xs text-muted-foreground/80">{item.time}</p>
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
