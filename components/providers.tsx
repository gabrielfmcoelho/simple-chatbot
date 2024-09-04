"use client";

import { useState } from "react";
import { ThemeProvider } from "next-themes";
import { SelectedChatContext } from "./contexts";
import { ChatItemProps } from "@/app/dashboard/apps/chat/types";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [selectedChat, setSelectedChat] = useState<ChatItemProps | null>(null);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <SelectedChatContext.Provider value={{ selectedChat, setSelectedChat }}>
        {children}
      </SelectedChatContext.Provider>
    </ThemeProvider>
  );
}
