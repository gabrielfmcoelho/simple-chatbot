import { create } from "zustand";
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
  themes: {
    light: "light",
    dark: "dark"
  },
  fontFamily: {
    inter: "Inter",
    roboto: "Roboto",
    montserrat: "Montserrat",
    poppins: "Poppins",
    "overpass-mono": "Overpass Mono"
  },
  shadow: {
    none: "0 1px 2px 0 rgb(0 0 0 / 0.01)",
    lg: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);",
    xl: "25px 50px -12px rgb(0,0,0,0.25)"
  }
} as const;

export const defaultTheme: Partial<SettingsState> = {
  theme: "light",
  layout: "vertical",
  fontFamily: "inter",
  colorScheme: "stone",
  direction: "ltr",
  sidebarLayout: "default",
  rounded: 0.5,
  shadow: themeSettings.shadow.none,
  contentContainer: false
};

export type ThemeType = keyof typeof themeSettings.themes;
export type ThemeColorSchemeType = keyof typeof themeColors;
export type ThemeFontFamilyType = keyof typeof themeSettings.fontFamily;
export type ThemeDirectionType = "ltr" | "rtl";
export type ShadowType = "none" | "lg" | "xl";

interface SettingsState {
  theme: ThemeType;
  fontFamily: ThemeFontFamilyType;
  colorScheme: ThemeColorSchemeType;
  layout: "vertical" | "horizontal";
  direction: ThemeDirectionType;
  sidebarLayout: "default" | "rtl";
  contentContainer: boolean;
  rounded: number;
  shadow: string;
  setTheme: (theme: ThemeType) => void;
  setColorScheme: (colorScheme: ThemeColorSchemeType) => void;
  setFontFamily: (fontFamily: ThemeFontFamilyType) => void;
  setRounded: (rounded: number) => void;
  setDirection: (direction: ThemeDirectionType) => void;
  setContentContainer: (contentContainer: boolean) => void;
  setShadow: (shadow: ShadowType) => void;
  resetTheme: () => void;
}

const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      theme: "light",
      fontFamily: "inter",
      colorScheme: "stone",
      layout: "vertical",
      direction: "ltr",
      sidebarLayout: "default",
      contentContainer: false,
      rounded: 0.5,
      shadow: themeSettings.shadow.none,
      setTheme: (theme) => set(() => ({ theme })),
      setColorScheme: (colorScheme) => set(() => ({ colorScheme })),
      setFontFamily: (fontFamily) => set(() => ({ fontFamily })),
      setRounded: (rounded) => set(() => ({ rounded })),
      setDirection: (direction) => set(() => ({ direction })),
      setContentContainer: (contentContainer) => set(() => ({ contentContainer })),
      setShadow: (shadow) => set(() => ({ shadow })),
      resetTheme: () => set(() => ({ ...defaultTheme }))
    }),
    {
      name: "settings-storage"
    }
  )
);

export default useSettingsStore;
