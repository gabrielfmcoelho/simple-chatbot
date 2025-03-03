import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { messages, type Message } from "./data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ClockIcon, MailIcon } from "lucide-react";

export default function Messages() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="sm" variant="link" className="relative text-foreground">
          <MailIcon className="!size-5" />
          <Badge className="absolute bottom-[calc(100%-10px)] left-[calc(100%-12px)] h-4 w-4 items-center justify-center rounded-full p-0 text-[8px] font-semibold">
            3
          </Badge>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="z-50 p-0 lg:w-80">
        <DropdownMenuLabel className="p-0">
          <div className="flex justify-between border-b px-6 py-4">
            <div className="font-medium">Messages</div>
            <div className="text-default-800 text-xs md:text-right">
              <Button variant="link" className="h-auto p-0" asChild>
                <Link href="#">View all</Link>
              </Button>
            </div>
          </div>
        </DropdownMenuLabel>
        <div className="h-[300px] xl:h-[350px]">
          <ScrollArea className="h-full">
            {messages.map((item: Message, index: number) => (
              <DropdownMenuItem
                key={`inbox-${index}`}
                className="group flex cursor-pointer gap-9 px-4 py-2">
                <div className="flex flex-1 items-start gap-2">
                  <div className="flex-none">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src={`${process.env.DASHBOARD_BASE_URL}/images/avatars/${item.image}`}
                      />
                      <AvatarFallback> {item.title.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex flex-1 flex-col gap-1">
                    <div className="dark:group-hover:text-default-800 truncate text-sm font-normal">
                      {item.title}
                    </div>
                    <div className="dark:group-hover:text-default-700 line-clamp-1 text-xs font-light text-muted-foreground">
                      {item.desc}
                    </div>
                    <div className="dark:group-hover:text-default-500 flex items-center gap-1 text-xs text-muted-foreground">
                      <ClockIcon className="!size-3" />
                      {item.date}
                    </div>
                  </div>
                </div>
                {item.hasnotifaction && (
                  <div className="flex-0">
                    <span className="dark:border-default-400 inline-block h-[10px] w-[10px] rounded-full border border-destructive-foreground bg-destructive" />
                  </div>
                )}
              </DropdownMenuItem>
            ))}
          </ScrollArea>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
