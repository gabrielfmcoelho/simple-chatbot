"use client";

import { createContext } from "react";
import { ThemeOptionsProps } from "@/types/theme";
import {
  SelectedChatContextType,
  UserProfileContextType
} from "@/app/dashboard/(auth)/apps/chat/types";

export const UserProfileContext = createContext<UserProfileContextType | false>(false); // after

export const SelectedChatContext = createContext<SelectedChatContextType | null>(null);

export type ThemeOptionsContextType = {
  themeOptions: ThemeOptionsProps;
  setThemeOptions: React.Dispatch<React.SetStateAction<ThemeOptionsProps>>;
};

export const ThemeOptionsContext = createContext<ThemeOptionsContextType | null>(null);
