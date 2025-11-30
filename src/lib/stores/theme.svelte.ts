export type CatppuccinFlavor = "latte" | "frappe" | "macchiato" | "mocha";
export type AccentColor =
  | "rosewater"
  | "flamingo"
  | "pink"
  | "mauve"
  | "red"
  | "maroon"
  | "peach"
  | "yellow"
  | "green"
  | "teal"
  | "sky"
  | "sapphire"
  | "blue"
  | "lavender";

interface ThemeState {
  current: CatppuccinFlavor;
  accent: AccentColor;
}

function createThemeStore() {
  const state = $state<ThemeState>({
    current:
      (typeof window !== "undefined"
        ? (localStorage.getItem("catppuccin-theme") as CatppuccinFlavor)
        : "frappe") || "frappe",
    accent:
      (typeof window !== "undefined"
        ? (localStorage.getItem("catppuccin-accent") as AccentColor)
        : "mauve") || "mauve",
  });

  return {
    get current() {
      return state.current;
    },
    get accent() {
      return state.accent;
    },
    setFlavor(flavor: CatppuccinFlavor) {
      state.current = flavor;
      if (typeof window !== "undefined") {
        localStorage.setItem("catppuccin-theme", flavor);
        document.documentElement.setAttribute("data-theme", flavor);
      }
    },
    setAccent(accent: AccentColor) {
      state.accent = accent;
      if (typeof window !== "undefined") {
        localStorage.setItem("catppuccin-accent", accent);
        document.documentElement.setAttribute("data-accent", accent);
      }
    },
    initialize() {
      if (typeof window !== "undefined") {
        const savedFlavor = localStorage.getItem(
          "catppuccin-theme",
        ) as CatppuccinFlavor;
        const savedAccent = localStorage.getItem(
          "catppuccin-accent",
        ) as AccentColor;
        if (savedFlavor) {
          state.current = savedFlavor;
        }
        if (savedAccent) {
          state.accent = savedAccent;
        }
        document.documentElement.setAttribute("data-theme", state.current);
        document.documentElement.setAttribute("data-accent", state.accent);
      }
    },
  };
}

export const themeStore = createThemeStore();
