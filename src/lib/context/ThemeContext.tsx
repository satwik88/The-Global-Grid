"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const updateTheme = () => {
      const storedTheme = sessionStorage.getItem("theme");
      if (storedTheme) {
        const isDark = storedTheme === "dark";
        setTheme(isDark ? "dark" : "light");
        document.documentElement.classList.toggle("dark", isDark);
      } else {
        const currentHour = new Date().getHours();
        const isDark = currentHour >= 18 || currentHour < 6;
        setTheme(isDark ? "dark" : "light");
        document.documentElement.classList.toggle("dark", isDark);
      }
    };

    updateTheme();

    const intervalId = setInterval(updateTheme, 1800000);
    return () => clearInterval(intervalId);
  }, []);

  const toggleTheme = () => {

    const css = document.createElement("style");
    css.appendChild(
      document.createTextNode(
        "* { -webkit-transition: none !important; -moz-transition: none !important; -o-transition: none !important; -ms-transition: none !important; transition: none !important; }"
      )
    );
    document.head.appendChild(css);

    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    sessionStorage.setItem("theme", newTheme);

    setTimeout(() => {
      document.head.removeChild(css);
    }, 10);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
