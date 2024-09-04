import { cn } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback, AvatarIndicator } from "./ui/avatar";
import { UserAvatarProps } from "@/app/dashboard/apps/chat/types";

export default function UserAvatar({ image, indicator, fallback, className }: UserAvatarProps) {
  return (
    <Avatar className={cn("h-12 w-12", className)}>
      <AvatarImage src={image} alt="avatar image" />
      <AvatarIndicator variant={indicator} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  );
}
