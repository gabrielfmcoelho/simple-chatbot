import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

export default function UserMenu() {
  return (
    <div className="ms-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <figure className="cursor-pointer">
            <img
              src={`${process.env.DASHBOARD_BASE_URL}/images/avatars/1.png`}
              className="h-10 w-10"
              alt="..."
            />
          </figure>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
