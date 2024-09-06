"use client";

import { createContext } from "react";
import { SelectedChatContextType, UserProfileContextType } from "@/app/dashboard/apps/chat/types";
import { ThemeOptionsProps } from "@/types/theme";

export const UserProfileContext = createContext<UserProfileContextType | false>(false); // after

export const SelectedChatContext = createContext<SelectedChatContextType | null>(null);

export type ThemeOptionsContextType = {
  themeOptions: ThemeOptionsProps;
  setThemeOptions: React.Dispatch<React.SetStateAction<ThemeOptionsProps>>;
};

export const ThemeOptionsContext = createContext<ThemeOptionsContextType | null>(null);
