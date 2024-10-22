"use client";

import { useEffect, useState } from "react";
import { SelectedChatContext, ThemeOptionsContext } from "./contexts";
import { ThemeOptionsProps } from "@/types/theme";
import { ChatItemProps } from "@/app/dashboard/(auth)/apps/chat/types";
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
    const store = localStorage.getItem("settings-storage");
    const storagedTheme = store ? JSON.parse(store)?.state : null;
    if (storagedTheme) {
      document.documentElement.style.setProperty(
        "--primary",
        themeColors[storagedTheme.colorScheme]
      );
      document.addEventListener("DOMContentLoaded", function () {
        if (storagedTheme.fontFamily) {
          const v = "var(--font-" + storagedTheme.fontFamily + ")";
          document.body.style.setProperty("font-family", v);
        }

        if (storagedTheme.contentContainer) {
          document.querySelector("main")?.classList.add("container", "mx-auto");
        }
      });
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
