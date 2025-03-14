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
  Object.entries(tailwindColors)
    .filter(
      ([color, values]) =>
        typeof values === "object" && values["600"] && includeColors.includes(color)
    )
    .map(([color, values]) => [color, getHSLValue(values["600"])])
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

export type FontFamily = keyof typeof themeSettings.fontFamily;
export type ContentLayout = "full" | "centered";

interface SettingsState {
  fontFamily: FontFamily;
  themeColor: { name: string; value: string };
  layout: "vertical" | "horizontal";
  contentLayout: ContentLayout;
  sidebarLayout: "default" | "rtl";
  roundedCorner: number;
  setThemeColor: (name: string, value: string) => void;
  setContentLayout: (contentLayout: ContentLayout) => void;
  setFontFamily: (fontFamily: FontFamily) => void;
  setRoundedCorner: (rounded: number) => void;
  resetTheme: () => void;
}

const themeColorInitialValue = { name: "default", value: "24 9.8% 10%" };

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
    setThemeColor: (name, value) => {
      updateState("themeColor", { name, value });
      updateCSSVariable("--primary", value);
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
      updateCSSVariable("--primary", themeColorInitialValue.value);
      updateCSSVariable("font-family", `var(--font-inter)`);
      updateCSSVariable("--radius", "0.5rem");
      updateCSSVariable("content-layout", "full");
    }
  };
};

const useThemeSettingsStore = create(persist(themeSettingsStore, { name: "settings-storage" }));

export default useThemeSettingsStore;
