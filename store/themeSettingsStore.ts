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

/*export const themeColors = Object.fromEntries(
  Object.entries(tailwindColors)
    .filter(
      ([color, values]) =>
        typeof values === "object" && values["700"] && includeColors.includes(color)
    )
    .map(([color, values]) => [color, getHSLValue(values["700"])])
);*/

export const themeSettings = {
  fontFamily: {
    inter: "Inter",
    roboto: "Roboto",
    montserrat: "Montserrat",
    poppins: "Poppins",
    "overpass-mono": "Overpass Mono"
  }
} as const;

export type FontFamily = keyof typeof themeSettings.fontFamily;
export type ContentLayout = "full" | "centered";

interface SettingsState {
  fontFamily: FontFamily;
  themeColor: { name: string; primary: string; foreground: string };
  layout: "vertical" | "horizontal";
  contentLayout: ContentLayout;
  sidebarLayout: "default" | "rtl";
  roundedCorner: number;
  setThemeColor: (name: string, primary: string, foreground: string) => void;
  setContentLayout: (contentLayout: ContentLayout) => void;
  setFontFamily: (fontFamily: FontFamily) => void;
  setRoundedCorner: (rounded: number) => void;
  resetTheme: () => void;
}

const themeColorInitialValue = {
  name: "default",
  primary: "24 9.8% 10%",
  foreground: "60 9.1% 97.8%"
};

const initialState: Omit<
  SettingsState,
  | "setThemeColor"
  | "setContentLayout"
  | "setFontFamily"
  | "setRoundedCorner"
  | "setContentContainer"
  | "resetTheme"
> = {
  fontFamily: "inter",
  themeColor: themeColorInitialValue,
  layout: "vertical",
  contentLayout: "full",
  sidebarLayout: "default",
  roundedCorner: 0.5
};

const updateCSSVariable = (property: string, value: string) => {
  document.documentElement.style.setProperty(property, value);
  if (property === "font-family") {
    document.body.style.setProperty(property, value);
  } else if (property === "content-layout") {
    document.documentElement.setAttribute(`data-${property}`, value);
  } else {
    document.documentElement.style.setProperty(property, value);
  }
};

const themeSettingsStore: StateCreator<SettingsState> = (set) => {
  const updateState = <K extends keyof SettingsState>(key: K, value: SettingsState[K]) =>
    set({ [key]: value });

  return {
    ...initialState,
    setThemeColor: (name, primary, foreground) => {
      updateState("themeColor", { name, primary, foreground });
      updateCSSVariable("--primary", primary);
      updateCSSVariable("--primary-foreground", foreground);
    },
    setFontFamily: (fontFamily) => {
      updateState("fontFamily", fontFamily);
      updateCSSVariable("font-family", `var(--font-${fontFamily})`);
    },
    setRoundedCorner: (roundedCorner) => {
      updateState("roundedCorner", roundedCorner);
      updateCSSVariable("--radius", `${roundedCorner}rem`);
    },
    setContentLayout: (contentLayout) => {
      updateState("contentLayout", contentLayout);
      updateCSSVariable("content-layout", contentLayout);
    },
    resetTheme: () => {
      set(initialState);
      updateCSSVariable("--primary", "");
      updateCSSVariable("--primary-foreground", "");
      updateCSSVariable("font-family", "");
      updateCSSVariable("--radius", "");
      updateCSSVariable("content-layout", "");
    }
  };
};

const useThemeSettingsStore = create(
  persist(themeSettingsStore, { name: "shadcn-theme-settings" })
);

export default useThemeSettingsStore;
