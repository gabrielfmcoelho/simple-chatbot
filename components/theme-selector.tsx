"use client";

import { THEMES } from "@/lib/themes";
import { useThemeConfig } from "@/components/active-theme";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

export function ThemeSelector() {
  const { activeTheme, setActiveTheme } = useThemeConfig();

  return (
    <Select value={activeTheme} onValueChange={setActiveTheme}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a theme" />
      </SelectTrigger>
      <SelectContent align="end">
        {THEMES.map((theme) => (
          <SelectItem key={theme.name} value={theme.value}>
            <div className="flex shrink-0 gap-1">
              {theme.colors.map((color, key) => (
                <span
                  key={key}
                  className="size-2 rounded-full"
                  style={{ backgroundColor: color }}></span>
              ))}
            </div>
            {theme.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
