import { create, StateCreator } from "zustand";
import { persist } from "zustand/middleware";
import * as tailwindColors from "tailwindcss/colors";
import { getHSLValue } from "@/lib/utils";

const includeColors = [
  "stone",
  "amber",
  "lime",
  "emerald",
  "sky",
  "indigo",
  "purple",
  "fuchsia",
  "rose"
];

export const themeColors = Object.fromEntries(
  Object.entries(tailwindColors).reduce<[string, string][]>((acc, [color, values]) => {
    if (typeof values === "object" && values["600"] && includeColors.includes(color)) {
      acc.push([color, getHSLValue(values["600"])]);
    }
    return acc;
  }, [])
);

export const themeSettings = {
  fontFamily: {
    inter: "Inter",
    roboto: "Roboto",
    montserrat: "Montserrat",
    poppins: "Poppins",
    "overpass-mono": "Overpass Mono"
  }
} as const;

export type ThemeColor = keyof typeof themeColors;
export type FontFamily = keyof typeof themeSettings.fontFamily;
export type ThemeDirection = "ltr" | "rtl";

interface SettingsState {
  fontFamily: FontFamily;
  themeColor: ThemeColor | "default";
  layout: "vertical" | "horizontal";
  direction: ThemeDirection;
  sidebarLayout: "default" | "rtl";
  contentContainer: boolean;
  roundedCorner: number;
  setThemeColor: (colorScheme: ThemeColor) => void;
  setFontFamily: (fontFamily: FontFamily) => void;
  setRoundedCorner: (rounded: number) => void;
  setDirection: (direction: ThemeDirection) => void;
  setContentContainer: (contentContainer: boolean) => void;
  resetTheme: () => void;
}

const themeSettingsStore: StateCreator<SettingsState> = (set) => ({
  fontFamily: "inter",
  themeColor: "default",
  layout: "vertical",
  direction: "ltr",
  sidebarLayout: "default",
  contentContainer: false,
  roundedCorner: 0.5,
  setThemeColor: (themeColor) => set({ themeColor }),
  setFontFamily: (fontFamily) => set({ fontFamily }),
  setRoundedCorner: (roundedCorner) => set({ roundedCorner }),
  setDirection: (direction) => set({ direction }),
  setContentContainer: (contentContainer) => set({ contentContainer }),
  resetTheme: () =>
    set({
      layout: "vertical",
      fontFamily: "inter",
      themeColor: "default",
      direction: "ltr",
      sidebarLayout: "default",
      roundedCorner: 0.5,
      contentContainer: false
    })
});

const useThemeSettingsStore = create(
  persist(themeSettingsStore, {
    name: "settings-storage"
  })
);

export default useThemeSettingsStore;
