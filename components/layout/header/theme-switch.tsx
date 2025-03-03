"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      size="sm"
      variant="link"
      className="text-foreground"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? <SunIcon className="!size-5" /> : <MoonIcon className="!size-5" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
