import { generateMeta } from "@/lib/utils";
import path from "path";
import { promises as fs } from "fs";
import { ChatItemProps, UserPropsTypes } from "./types";

import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ActionDropdown, ChatList, ChatContent } from "@/app/dashboard/(auth)/apps/chat/components";

export async function generateMetadata() {
  return generateMeta({
    title: "Chat App",
    description:
      "A template to create chat and messaging apps for your customers or users. Built with shadcn/ui, Next.js and Tailwind CSS.",
    canonical: "/apps/chat"
  });
}

async function getChats() {
  const data = await fs.readFile(
    path.join(process.cwd(), "app/dashboard/(auth)/apps/chat/data/chats.json")
  );
  return JSON.parse(data.toString());
}

async function getChatUser(id: number) {
  const data = await fs.readFile(
    path.join(process.cwd(), "app/dashboard/(auth)/apps/chat/data/contacts.json")
  );

  return JSON.parse(data.toString()).find((item: UserPropsTypes) => item.id === id);
}

export default async function Page() {
  const chats = await getChats();

  const chats_with_user = await Promise.all(
    chats.map(async (item: ChatItemProps) => {
      item.user = await getChatUser(item.user_id);
      return item;
    })
  );
  // h-[calc(100vh-6rem)]
  return (
    <div className="lg:flex">
      <Card className="w-full pb-0 lg:w-96">
        <CardHeader>
          <CardTitle className="text-xl">Chats</CardTitle>
          <CardAction>
            <ActionDropdown />
          </CardAction>
        </CardHeader>
        <CardContent className="p-0">
          <ChatList chats={chats_with_user} />
        </CardContent>
      </Card>
      <div className="grow">
        <ChatContent />
      </div>
    </div>
  );
}
