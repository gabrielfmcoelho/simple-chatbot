"use client";

import { useState } from "react";
import { SelectedChatContext, ThemeOptionsContext } from "./contexts";
import { ThemeOptionsProps } from "@/types/theme";
import { ChatItemProps } from "@/app/dashboard/(auth)/apps/chat/types";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [selectedChat, setSelectedChat] = useState<ChatItemProps | null>(null);
  const [themeOptions, setThemeOptions] = useState<ThemeOptionsProps>({
    containerContent: false,
    colorSchema: "white",
    gradientStyle: true,
    fontFamily: "Inter",
    direction: "ltr",
    layout: "vertical",
    sidebar: "classic",
    navbar: "sticky",
    rounded: "lg",
    shadow: "none"
  });

  return (
    <ThemeOptionsContext.Provider value={{ themeOptions, setThemeOptions }}>
      <SelectedChatContext.Provider value={{ selectedChat, setSelectedChat }}>
        {children}
      </SelectedChatContext.Provider>
    </ThemeOptionsContext.Provider>
  );
}
