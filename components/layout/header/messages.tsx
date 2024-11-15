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
import { messages } from "./data";

export function Messages() {
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
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          <span className="sr-only">Toggle messages</span>
          <div className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-600" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[440px]" align="end" forceMount>
        <DropdownMenuLabel>Messages</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="grid gap-4 p-4">
          {messages.map((item, index) => (
            <DropdownMenuItem key={index} className="grid grid-cols-[25px_1fr] items-start p-0">
              <Avatar className="mt-1">
                <AvatarImage src={`/images/avatars/${item.avatar}`} />
                <AvatarFallback>M</AvatarFallback>
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
