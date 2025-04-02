export const DEFAULT_THEME = {
  preset: "default",
  radius: "default",
  scale: "none",
  font: "default",
  chartPreset: "default",
  contentLayout: "full"
} as const;

export type ThemeType = typeof DEFAULT_THEME;

export const THEMES = [
  {
    name: "Default",
    value: "default",
    colors: ["oklch(0.33 0 0)"]
  },
  {
    name: "Desert Heat",
    value: "desert-heat",
    colors: ["oklch(0.54 0.08 60.8)"]
  },
  {
    name: "Lake view",
    value: "lake-view",
    colors: ["oklch(0.54 0.08 60.8)"]
  },
  {
    name: "Sunset Glow",
    value: "sunset-glow",
    colors: ["oklch(0.47 0.15 24.94)"]
  },
  {
    name: "Forest Whisper",
    value: "forest-whisper",
    colors: ["oklch(0.52 0.13 144.17)"]
  },
  {
    name: "Ocean Breeze",
    value: "ocean-breeze",
    colors: ["oklch(0.59 0.20 277.12)"]
  },
  {
    name: "Lavender Dream",
    value: "lavender-dream",
    colors: ["oklch(0.71 0.16 293.54)"]
  },
  {
    name: "Retro",
    value: "retro",
    colors: ["oklch(0.59 0.20 355.89)"]
  }
  /*{
    name: "Neutral",
    value: "neutral",
    colors: {
      light: "oklch(1 0 0)",
      dark: "oklch(0.145 0 0)"
    }
  },
  {
    name: "Stone",
    value: "stone",
    colors: {
      light: "oklch(1 0 0)",
      dark: "oklch(0.147 0.004 49.25)"
    }
  },
  {
    name: "Zinc",
    value: "zinc",
    colors: {
      light: "oklch(1 0 0)",
      dark: "oklch(0.141 0.005 285.823)"
    }
  },
  {
    name: "Gray",
    value: "gray",
    colors: {
      light: "oklch(1 0 0)",
      dark: "oklch(0.13 0.028 261.692)"
    }
  },
  {
    name: "Slate",
    value: "slate",
    colors: {
      light: "oklch(1 0 0)",
      dark: "oklch(0.129 0.042 264.695)"
    }
  },
  {
    name: "Blue",
    value: "blue",
    colors: {
      light: "oklch(20.488 0.243 264.376)",
      dark: "oklch(20.488 20.243 264.376)"
    }
  },
  {
    name: "Lime",
    value: "lime",
    colors: {
      light: "oklch(0.532 0.157 131.589)",
      dark: "oklch(0.532 0.157 131.589)"
    }
  },
  {
    name: "Small",
    value: "small",
    colors: {
      light: "oklch(1 0 0)",
      dark: "oklch(0.145 0 0)"
    }
  }*/
];

export type Theme = (typeof THEMES)[number];

export const CHART_THEMES = [
  {
    name: "Default",
    value: "default",
    colors: ["oklch(0.33 0 0)"]
  },
  {
    name: "Cyan",
    value: "cyan",
    colors: ["oklch(0.609 0.126 221.723)"]
  },
  {
    name: "Amber",
    value: "amber",
    colors: ["oklch(0.666 0.179 58.318)"]
  },
  {
    name: "Green",
    value: "green",
    colors: ["oklch(0.627 0.194 149.214)"]
  },
  {
    name: "Indigo",
    value: "indigo",
    colors: ["oklch(0.511 0.262 276.966)"]
  },
  {
    name: "Fuchsia",
    value: "fuchsia",
    colors: ["oklch(0.591 0.293 322.896)"]
  }
];

export const THEME_FONTS = [
  { value: "inter", name: "Inter" },
  { value: "roboto", name: "Roboto" },
  { value: "montserrat", name: "Montserrat" },
  { value: "poppins", name: "Poppins" },
  { value: "overpass-mono", name: "Overpass Mono" },
  { value: "pt-sans", name: "PT Sans" }
];
