"use client";

import React from "react";
import { Search } from "lucide-react";
import useChatStore from "@/store/useChatStore";
import { ChatItemProps } from "@/app/dashboard/(auth)/apps/chat/types";

import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChatListItem } from "@/app/dashboard/(auth)/apps/chat/components/chat-list-item";

export function ChatList({ chats }: { chats: ChatItemProps[] }) {
  const { selectedChat } = useChatStore();
  const [filteredChats, setFilteredChats] = React.useState(chats);

  const changeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.trim();

    const filteredItems = chats.filter((chat) =>
      chat.user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredChats(filteredItems);
  };

  return (
    <>
      <div className="relative flex items-center px-6">
        <Search className="text-muted-foreground absolute start-10 h-4 w-4" />
        <Input
          type="text"
          className="ps-10"
          placeholder="Chats search..."
          onChange={changeHandle}
        />
      </div>
      <div className="lg:pt-4">
        <ScrollArea className="h-[calc(100vh-13.5rem)] md:h-[calc(100vh-13.5rem)]">
          <div className="block min-w-0 divide-y">
            {filteredChats.length ? (
              filteredChats.map((chat, key) => (
                <ChatListItem
                  chat={chat}
                  key={key}
                  active={selectedChat && selectedChat.id === chat.id}
                />
              ))
            ) : (
              <div className="text-muted-foreground mt-4 text-center text-sm">No chat found</div>
            )}
          </div>
        </ScrollArea>
      </div>
    </>
  );
}
