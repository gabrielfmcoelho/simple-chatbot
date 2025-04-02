import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
  PresetSelector,
  SidebarModeSelector,
  ThemeScaleSelector,
  ColorModeSelector,
  ContentLayoutSelector,
  ThemeRadiusSelector,
  FontSelector,
  ResetThemeButton,
  ChartPresetSelector
} from "@/components/theme-customizer/index";

export function ThemeCustomizerPanel() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="fixed right-6 bottom-6/12 z-50 lg:right-10 lg:bottom-10">
          <Button size="icon" className="animate-spin rounded-full lg:size-14">
            <Settings className="size-4! md:size-6!" />
            <span className="sr-only">Open theme customizer</span>
          </Button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-72 p-4 shadow-xl" align="end">
        <div className="grid space-y-4">
          <PresetSelector />
          <ChartPresetSelector />
          <ThemeScaleSelector />
          <ThemeRadiusSelector />
          <FontSelector />
          <ColorModeSelector />
          <ContentLayoutSelector />
          <SidebarModeSelector />
        </div>
        <ResetThemeButton />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
