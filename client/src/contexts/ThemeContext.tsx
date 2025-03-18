import { createContext, useContext, useState, type ReactNode } from "react";
import defaultTheme from "../../../theme.json";

type Theme = {
  name: string;
  primary: string;
  chart1: string;
  chart2: string;
  chart3: string;
  chart4: string;
  chart5: string;
};

interface ThemeContextType {
  currentTheme: string;
  setTheme: (themeName: string) => void;
  themes: Record<string, Theme>;
  customTheme: Theme | null;
  setCustomTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState("default");
  const [customTheme, setCustomTheme] = useState<Theme | null>(null);

  const setTheme = (themeName: string) => {
    setCurrentTheme(themeName);
    const theme = themeName === "custom" ? customTheme : defaultTheme.themes[themeName];
    if (theme) {
      document.documentElement.style.setProperty("--primary", theme.primary);
      document.documentElement.style.setProperty("--chart-1", theme.chart1);
      document.documentElement.style.setProperty("--chart-2", theme.chart2);
      document.documentElement.style.setProperty("--chart-3", theme.chart3);
      document.documentElement.style.setProperty("--chart-4", theme.chart4);
      document.documentElement.style.setProperty("--chart-5", theme.chart5);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        setTheme,
        themes: defaultTheme.themes,
        customTheme,
        setCustomTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}