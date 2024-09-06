"use client";

import { useState } from "react";
import { ThemeProvider } from "next-themes";
import { SelectedChatContext, ThemeOptionsContext } from "./contexts";
import { ChatItemProps } from "@/app/dashboard/apps/chat/types";
import { ThemeOptionsProps } from "@/types/theme";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [selectedChat, setSelectedChat] = useState<ChatItemProps | null>(null);
  const [themeOptions, setThemeOptions] = useState<ThemeOptionsProps>({
    container: true,
    themeColor: "black",
    rtl: false,
    layout: "vertical"
  });

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <ThemeOptionsContext.Provider value={{ themeOptions, setThemeOptions }}>
        <SelectedChatContext.Provider value={{ selectedChat, setSelectedChat }}>
          {children}
        </SelectedChatContext.Provider>
      </ThemeOptionsContext.Provider>
    </ThemeProvider>
  );
}
