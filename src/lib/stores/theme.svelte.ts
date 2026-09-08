import { defaultPainting, findPainting } from "$lib/paintings";

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
  backdrop: string;
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
        : "red") || "red",
    backdrop:
      (typeof window !== "undefined"
        ? findPainting(localStorage.getItem("backdrop-painting")).id
        : defaultPainting.id) || defaultPainting.id,
  });

  return {
    get current() {
      return state.current;
    },
    get accent() {
      return state.accent;
    },
    get backdrop() {
      return state.backdrop;
    },
    setFlavor(flavor: CatppuccinFlavor) {
      state.current = flavor;
      if (typeof window !== "undefined") {
        localStorage.setItem("catppuccin-theme", flavor);
        document.documentElement.classList.remove(
          "latte",
          "frappe",
          "macchiato",
          "mocha",
        );
        document.documentElement.classList.add(flavor);
      }
    },
    setAccent(accent: AccentColor) {
      state.accent = accent;
      if (typeof window !== "undefined") {
        localStorage.setItem("catppuccin-accent", accent);
        document.documentElement.setAttribute("data-accent", accent);
      }
    },
    setBackdrop(id: string) {
      state.backdrop = findPainting(id).id;
      if (typeof window !== "undefined") {
        localStorage.setItem("backdrop-painting", state.backdrop);
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
        state.backdrop = findPainting(
          localStorage.getItem("backdrop-painting"),
        ).id;
        document.documentElement.classList.remove(
          "latte",
          "frappe",
          "macchiato",
          "mocha",
        );
        document.documentElement.classList.add(state.current);
        document.documentElement.setAttribute("data-accent", state.accent);
      }
    },
  };
}

export const themeStore = createThemeStore();
