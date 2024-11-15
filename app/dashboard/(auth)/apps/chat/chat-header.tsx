"use client";

import { MoreVertical, Phone, Search, Video } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "../../../../../components/ui/avatar";
import { Button } from "../../../../../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "../../../../../components/ui/dropdown-menu";
import { Input } from "../../../../../components/ui/input";

export function ChatHeader() {
  return (
    <div className="flex h-14 items-center justify-between border-b px-4">
      <div className="flex items-center space-x-4">
        <Avatar>
          <AvatarImage src="/images/avatars/4.png" />
          <AvatarFallback>MP</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium leading-none">Mark P.</p>
          <p className="text-sm text-muted-foreground">Last seen 2 hours ago</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <form>
          <Input
            type="search"
            placeholder="Search..."
            className="h-9 md:w-[300px] lg:w-[400px]"
          />
        </form>
        <Button size="icon" variant="ghost">
          <Phone className="h-4 w-4" />
          <span className="sr-only">Call</span>
        </Button>
        <Button size="icon" variant="ghost">
          <Video className="h-4 w-4" />
          <span className="sr-only">Video call</span>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-4 w-4" />
              <span className="sr-only">More options</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>View profile</DropdownMenuItem>
            <DropdownMenuItem>Clear messages</DropdownMenuItem>
            <DropdownMenuItem>Block user</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
