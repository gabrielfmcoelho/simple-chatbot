"use client";

import { Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import useSettingsStore, {
  FontFamily,
  themeSettings,
  ContentLayout
} from "@/store/themeSettingsStore";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useSidebar } from "@/components/ui/sidebar";
import { ThemeSelector } from "@/components/theme-selector";

function ThemeCustomizerPanel() {
  const { theme, setTheme } = useTheme();
  const {
    resetTheme,
    fontFamily,
    setFontFamily,
    roundedCorner,
    setRoundedCorner,
    contentLayout,
    setContentLayout
  } = useSettingsStore((state) => state);
  const { toggleSidebar, open: sidebarOpen } = useSidebar();

  function resetThemeHandle() {
    resetTheme();
    setTheme("light");
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size="icon"
          className="fixed right-6 bottom-6/12 z-50 animate-spin rounded-full lg:right-10 lg:bottom-10 lg:size-14">
          <Settings className="size-4! md:size-6!" />
          <span className="sr-only">Open theme customizer</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col overflow-auto">
        <SheetHeader>
          <SheetTitle>Customize Theme</SheetTitle>
        </SheetHeader>
        <div className="grow">
          <div className="grid gap-4 space-y-4 px-6">
            <ThemeSelector />

            {/*Font family*/}
            <div className="flex flex-col gap-4">
              <Label>Font family</Label>
              <Select
                value={fontFamily}
                onValueChange={(value: FontFamily) => setFontFamily(value)}>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select font" />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(themeSettings.fontFamily).map((key) => {
                    const item = themeSettings.fontFamily[key as FontFamily];
                    return (
                      <SelectItem key={key} value={key}>
                        {item}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>

            {/*Corner softness*/}
            <div className="flex flex-col gap-4">
              <Label htmlFor="roundedCorner">Corner softness</Label>
              <Slider
                id="roundedCorner"
                min={0}
                max={1.5}
                step={0.3}
                value={[roundedCorner]}
                onValueChange={([value]) => setRoundedCorner(value)}
                className="col-span-3"
              />
            </div>

            {/*Dark/Light*/}
            <div>
              <RadioGroup
                value={theme}
                onValueChange={(value) => setTheme(value)}
                className="grid grid-cols-2 gap-4">
                <div>
                  <RadioGroupItem
                    value="light"
                    id="light"
                    className="peer sr-only"
                    aria-label="light"
                  />
                  <Label
                    htmlFor="light"
                    className="border-border flex cursor-pointer flex-col items-center justify-between rounded-md border p-1 peer-data-[state=checked]:border-gray-500!">
                    <div className="w-full items-center rounded">
                      <div className="space-y-2 rounded-sm bg-[#ecedef] p-2">
                        <div className="space-y-2 rounded-md bg-white p-2 shadow-xs">
                          <div className="h-2 w-[80px] rounded-md bg-[#ecedef]" />
                          <div className="h-2 w-[100px] rounded-md bg-[#ecedef]" />
                        </div>
                        <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-xs">
                          <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                          <div className="h-2 w-[100px] rounded-md bg-[#ecedef]" />
                        </div>
                      </div>
                    </div>
                    <span className="block w-full p-2 text-center font-normal">Light</span>
                  </Label>
                </div>
                <div>
                  <RadioGroupItem
                    value="dark"
                    id="dark"
                    className="peer sr-only"
                    aria-label="dark"
                  />
                  <Label
                    htmlFor="dark"
                    className="border-border flex cursor-pointer flex-col items-center justify-between rounded-md border p-1 peer-data-[state=checked]:border-gray-500!">
                    <div className="w-full items-center rounded">
                      <div className="space-y-2 rounded-sm bg-slate-950 p-2">
                        <div className="space-y-2 rounded-md bg-slate-800 p-2 shadow-xs">
                          <div className="h-2 w-[80px] rounded-md bg-slate-400" />
                          <div className="h-2 w-[100px] rounded-md bg-slate-400" />
                        </div>
                        <div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-xs">
                          <div className="h-4 w-4 rounded-full bg-slate-400" />
                          <div className="h-2 w-[100px] rounded-md bg-slate-400" />
                        </div>
                      </div>
                    </div>
                    <span className="block w-full p-2 text-center font-normal">Dark</span>
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/*Content layout…*/}
            <div className="hidden flex-col gap-4 lg:flex">
              <Label>Content layout</Label>
              <RadioGroup
                value={contentLayout}
                onValueChange={(value: ContentLayout) => setContentLayout(value)}
                className="grid grid-cols-2 gap-4">
                <div>
                  <RadioGroupItem
                    value="full"
                    id="full"
                    className="peer sr-only"
                    aria-label="full"
                  />
                  <Label
                    htmlFor="full"
                    className="hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary flex flex-col items-center justify-between rounded-md border bg-transparent p-4">
                    Full
                  </Label>
                </div>
                <div>
                  <RadioGroupItem
                    value="centered"
                    id="centered"
                    className="peer sr-only"
                    aria-label="centered"
                  />
                  <Label
                    htmlFor="centered"
                    className="hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary flex flex-col items-center justify-between rounded-md border bg-transparent p-4">
                    Centered
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/*Sidebar style*/}
            <div className="hidden flex-col gap-4 lg:flex">
              <Label>Sidebar style</Label>
              <RadioGroup
                // value={contentLayout}
                onValueChange={() => toggleSidebar()}
                className="grid grid-cols-2 gap-4">
                <div>
                  <RadioGroupItem
                    value="default"
                    id="sidebar-default"
                    className="peer sr-only"
                    aria-label="sidebar-default"
                  />
                  <Label
                    htmlFor="sidebar-default"
                    className={cn(
                      "hover:bg-muted peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary flex flex-col items-center justify-between rounded-md border bg-transparent p-4",
                      { "border-primary": sidebarOpen }
                    )}>
                    Default
                  </Label>
                </div>
                <div>
                  <RadioGroupItem
                    value="icon"
                    id="sidebar-icon"
                    className="peer sr-only"
                    aria-label="sidebar-icon"
                  />
                  <Label
                    htmlFor="sidebar-icon"
                    className={cn(
                      "hover:bg-muted peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary flex flex-col items-center justify-between rounded-md border bg-transparent p-4",
                      { "border-primary": !sidebarOpen }
                    )}>
                    Icon
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
        <div className="px-6 pb-4">
          <Button variant="destructive" className="w-full" onClick={resetThemeHandle}>
            Reset to Default
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default ThemeCustomizerPanel;
