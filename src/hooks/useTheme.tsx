import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const isDarkMode = matchMedia("(prefers-color-scheme: dark)");

    if (isDarkMode.matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  return theme;
}
