import { promises as fs } from "fs";
import path from "path";
import { generateMeta } from "@/lib/utils";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ActionDropdown from "./action-dropdown";
import { ChatItemProps, UserPropsTypes } from "./types";
import ChatList from "./chat-list";
import ChatContent from "./chat-content";

export async function generateMetadata() {
  return generateMeta({
    title: "Chat App",
    description:
      "This chat app template is perfect for listing and reading messages. Built with reusable and customizable components. It is fully mobile responsive.",
    canonical: "/apps/chat"
  });
}

async function getChats() {
  const data = await fs.readFile(
    path.join(process.cwd(), "app/dashboard/apps/chat/data/chats.json")
  );

  return JSON.parse(data.toString());
}

async function getChatUser(id: number) {
  const data = await fs.readFile(
    path.join(process.cwd(), "app/dashboard/apps/chat/data/contacts.json")
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

  return (
    <div className="gap-8 lg:flex">
      <div className="w-full lg:w-96">
        <Card>
          <CardHeader className="py-4 lg:py-6">
            <div className="flex items-center justify-between">
              <CardTitle className="font-bold">Chats</CardTitle>
              <ActionDropdown />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <ChatList chats={chats_with_user} />
          </CardContent>
        </Card>
      </div>
      <div className="flex-grow">
        <ChatContent />
      </div>
    </div>
  );
}
