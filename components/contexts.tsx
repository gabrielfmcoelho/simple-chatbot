"use client";

import { SelectedChatContextType, UserProfileContextType } from "@/app/dashboard/apps/chat/types";
import { createContext } from "react";

export const UserProfileContext = createContext<UserProfileContextType | false>(false);

export const SelectedChatContext = createContext<SelectedChatContextType | null>(null);
