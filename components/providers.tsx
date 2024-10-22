"use client";

import { useEffect, useState } from "react";
import { SelectedChatContext, ThemeOptionsContext } from "./contexts";
import { ThemeOptionsProps } from "@/types/theme";
import { ChatItemProps } from "@/app/dashboard/(auth)/apps/chat/types";
import { themeSettingsRender } from "./layout/theme-settings-render";
import { themeColors } from "@/store/useThemeStore";

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

  useEffect(() => {
    const storagedTheme = JSON.parse(localStorage.getItem("settings-storage"))?.state;
    if (storagedTheme) {
      document.documentElement.style.setProperty(
        "--primary",
        themeColors[storagedTheme.colorScheme]
      );
    }
  }, []);

  return (
    <ThemeOptionsContext.Provider value={{ themeOptions, setThemeOptions }}>
      <SelectedChatContext.Provider value={{ selectedChat, setSelectedChat }}>
        {children}
      </SelectedChatContext.Provider>
    </ThemeOptionsContext.Provider>
  );
}
