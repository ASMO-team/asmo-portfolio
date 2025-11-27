// hooks/useTheme.ts
"use client";

import { useTheme as useNextTheme } from "next-themes";
import { useEffect, useState } from "react";

export function useTheme() {
  const { theme, setTheme, systemTheme } = useNextTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Возвращаем undefined до монтирования
  return {
    theme: mounted ? (theme === "system" ? systemTheme : theme) : undefined,
    toggleTheme,
    mounted,
  };
}