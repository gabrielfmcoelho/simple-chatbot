"use client";

import { memo, useCallback, useState } from "react";
import { Settings } from "lucide-react";
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
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Checkbox } from "./ui/checkbox";
import useSettingsStore, {
  defaultTheme,
  ShadowType,
  themeColors,
  ThemeColorSchemeType,
  ThemeDirectionType,
  ThemeFontFamilyType,
  themeSettings,
  ThemeType
} from "@/store/useThemeStore";
import { Label } from "./ui/label";

function ThemeCustomizer() {
  const [isOpen, setIsOpen] = useState(false);
  const {
    colorScheme,
    setColorScheme,
    resetTheme,
    setTheme,
    theme,
    fontFamily,
    setFontFamily,
    direction,
    setDirection,
    rounded,
    setRounded,
    shadow,
    setShadow,
    contentContainer,
    setContentContainer
  } = useSettingsStore((state) => state);

  const setThemeHandle = (value: ThemeType) => {
    setTheme(value);

    if (value === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const setDirectionHandle = (value: ThemeDirectionType) => {
    setDirection(value);

    if (value === "rtl") {
      document.documentElement.setAttribute("dir", "rtl");
    } else {
      document.documentElement.setAttribute("dir", "ltr");
    }
  };

  const setFontFamilyHandle = (value: ThemeFontFamilyType) => {
    setFontFamily(value);
    document.body.style.setProperty("font-family", `var(--font-${value})`);
  };

  const setColorSchemeHandle = (value: ThemeColorSchemeType) => {
    setColorScheme(value);
    document.documentElement.style.setProperty("--primary", themeColors[value]);
  };

  const setRoundedHandle = (value: number) => {
    setRounded(value);
    document.documentElement.style.setProperty("--radius", value + "rem");
  };

  const resetThemeHandle = useCallback(() => {
    resetTheme();
    document.documentElement.classList.remove("dark");
    document.body.style.setProperty("font-family", `var(--font-${defaultTheme.fontFamily})`);
    if (defaultTheme.colorScheme) {
      document.documentElement.style.setProperty(
        "--primary",
        themeColors[defaultTheme.colorScheme]
      );
    }
    document.documentElement.style.setProperty("--radius", defaultTheme.rounded + "rem");
    if (defaultTheme.direction) {
      document.documentElement.setAttribute("dir", defaultTheme.direction);
    }
  }, [colorScheme, rounded]);

  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            className="fixed bottom-2/4 right-0 rounded-full rounded-br-none rounded-tr-none py-6 shadow-lg">
            <Settings className="h-6 w-6 animate-spin" />
            <span className="sr-only">Open theme customizer</span>
          </Button>
        </SheetTrigger>
        <SheetContent className="overflow-auto">
          <SheetHeader>
            <SheetTitle>Customize Theme</SheetTitle>
          </SheetHeader>
          <div className="grid gap-4 space-y-4 py-6">
            <div className="flex flex-col gap-4">
              <Label>Font Family</Label>
              <Select
                value={fontFamily}
                onValueChange={(value: ThemeFontFamilyType) => setFontFamilyHandle(value)}>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select primary color" />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(themeSettings.fontFamily).map((key) => {
                    const item = themeSettings.fontFamily[key as ThemeFontFamilyType];
                    return (
                      <SelectItem key={key} value={key}>
                        {item}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-4">
              <Label>Primary Color</Label>
              <Select
                value={colorScheme.toString()}
                onValueChange={(value: ThemeColorSchemeType) => setColorSchemeHandle(value)}>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select primary color" />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(themeColors).map((key, value) => {
                    return (
                      <SelectItem key={key} value={key}>
                        <div className="flex items-center gap-3 capitalize">
                          <span
                            className="inline-block h-4 w-4 rounded-full"
                            style={{ backgroundColor: `hsl(${themeColors[key]})` }}></span>{" "}
                          {key}
                        </div>
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-4">
              <Label htmlFor="rounded">Border Radius</Label>
              <Slider
                id="rounded"
                min={0}
                max={1.5}
                step={0.3}
                value={[rounded]}
                onValueChange={([value]) => setRoundedHandle(value)}
                className="col-span-3"
              />
            </div>
            <RadioGroup
              value={theme}
              onValueChange={(value: ThemeType) => setThemeHandle(value)}
              className="grid grid-cols-2 gap-4">
              <div>
                {" "}
                <RadioGroupItem
                  value="light"
                  id="light"
                  className="peer sr-only"
                  aria-label="light"
                />
                <Label
                  htmlFor="light"
                  className="flex flex-col items-center justify-between rounded-md border border-muted bg-transparent p-1 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                  <div className="w-full items-center rounded">
                    <div className="space-y-2 rounded-sm bg-[#ecedef] p-2">
                      <div className="space-y-2 rounded-md bg-white p-2 shadow-sm">
                        <div className="h-2 w-[80px] rounded-lg bg-[#ecedef]" />
                        <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                      </div>
                      <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                        <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                        <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                      </div>
                    </div>
                  </div>
                  <span className="block w-full p-2 text-center font-normal">Light</span>
                </Label>
              </div>
              <div>
                <RadioGroupItem value="dark" id="dark" className="peer sr-only" aria-label="dark" />
                <Label
                  htmlFor="dark"
                  className="flex flex-col items-center justify-between rounded-md border border-muted bg-transparent p-1 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                  <div className="w-full items-center rounded">
                    <div className="space-y-2 rounded-sm bg-slate-950 p-2">
                      <div className="space-y-2 rounded-md bg-slate-800 p-2 shadow-sm">
                        <div className="h-2 w-[80px] rounded-lg bg-slate-400" />
                        <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
                      </div>
                      <div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm">
                        <div className="h-4 w-4 rounded-full bg-slate-400" />
                        <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
                      </div>
                    </div>
                  </div>
                  <span className="block w-full p-2 text-center font-normal">Dark</span>
                </Label>
              </div>
            </RadioGroup>

            <div className="flex flex-col gap-4">
              <Label>Direction</Label>
              <RadioGroup
                value={direction}
                onValueChange={(value: ThemeDirectionType) => setDirectionHandle(value)}
                className="grid grid-cols-2 gap-4">
                <div>
                  <RadioGroupItem value="ltr" id="ltr" className="peer sr-only" aria-label="ltr" />
                  <Label
                    htmlFor="ltr"
                    className="flex flex-col items-center justify-between rounded-md border border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                    LTR
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="rtl" id="rtl" className="peer sr-only" aria-label="rtl" />
                  <Label
                    htmlFor="rtl"
                    className="flex flex-col items-center justify-between rounded-md border border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                    RTL
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* <div className="flex flex-col gap-4">
              <Label>Shadow {shadow}</Label>
              <RadioGroup
                defaultValue={shadow}
                onValueChange={(value: ShadowType) => setShadow(value)}
                className="grid grid-cols-3 gap-4">
                {Object.keys(themeSettings.shadow).map((key) => {
                  const item = themeSettings.shadow[key as ShadowType];
                  return (
                    <div key={key}>
                      <RadioGroupItem
                        value={item}
                        id={key}
                        className="peer sr-only"
                        aria-label={key}
                      />
                      <Label
                        htmlFor={key}
                        className="flex flex-col items-center justify-between rounded-md border border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                        {key}
                      </Label>
                    </div>
                  );
                })}
              </RadioGroup>
            </div>
            <div className="flex flex-col gap-4">
              <Label htmlFor="primary">Layout</Label>
              <Select value="Vertical">
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select primary color" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Vertical">Vertical</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-4">
              <Label htmlFor="primary">Sidebar</Label>
              <Select value="Vertical">
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select primary color" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Vertical">Default</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={contentContainer}
                onCheckedChange={(checked: boolean) => setContentContainer(checked)}
              />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Content container
              </label>
            </div> */}
          </div>
          <div className="mt-4 flex justify-between">
            <Button variant="destructive" className="w-full" onClick={resetThemeHandle}>
              Reset to Default
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default memo(ThemeCustomizer);
