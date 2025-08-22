import { useEffect, useMemo, useState } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";

// chave única do localStorage
const STORAGE_KEY = "theme-preference";

function getSystemPrefersDark() {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
}

function getInitialTheme() {
  if (typeof window === "undefined") return "light";
  // 1) tenta restaurar do localStorage
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === "light" || saved === "dark") return saved;
  // 2) fallback: tema do sistema
  return getSystemPrefersDark() ? "dark" : "light";
}

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  // aplica/remover classe no <html> e persiste
  useEffect(() => {
    const root = document.documentElement; // <html>
    root.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  // opcional: reagir quando o usuário muda o tema do sistema
  useEffect(() => {
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e) => {
      setTheme(e.matches ? "dark" : "light");
    };
    mql.addEventListener?.("change", handler);
    return () => mql.removeEventListener?.("change", handler);
  }, []);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme: () => setTheme((t) => (t === "dark" ? "light" : "dark")),
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
