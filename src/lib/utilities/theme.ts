import { writable } from "svelte/store";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";

  const saved = localStorage.getItem("theme") as Theme | null;
  if (saved) return saved;

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export const theme = writable<Theme>(getInitialTheme());

if (typeof window !== "undefined") {
  theme.subscribe((value) => {
    document.documentElement.classList.toggle("dark", value === "dark");
    localStorage.setItem("theme", value);
  });
}