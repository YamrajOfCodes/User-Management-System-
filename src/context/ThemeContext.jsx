import React, { createContext, useContext, useState, useEffect } from "react";
import lightTheme from "../themes/light";
import darkTheme from "../themes/dark";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const theme = mode === "light" ? lightTheme : darkTheme;

  useEffect(() => {
    localStorage.setItem("theme", mode);

    Object.entries(theme).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--${key}`, value);
    });
  }, [mode, theme]);

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
