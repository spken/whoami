<script lang="ts">
  import "../app.css";
  import { themeStore } from "$lib/stores/theme.svelte";
  import { onMount } from "svelte";

  let { children } = $props();

  const accentColors: Record<string, string> = {
    rosewater: "#f5e0dc",
    flamingo: "#f2cdcd",
    pink: "#f5c2e7",
    mauve: "#cba6f7",
    red: "#f38ba8",
    maroon: "#eba0ac",
    peach: "#fab387",
    yellow: "#f9e2af",
    green: "#a6e3a1",
    teal: "#94e2d5",
    sky: "#89dceb",
    sapphire: "#74c7ec",
    blue: "#89b4fa",
    lavender: "#b4befe",
  };

  let faviconUrl = $derived.by(() => {
    const color = accentColors[themeStore.accent] || accentColors.mauve;
    const iconSvg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='${color}' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><circle cx='12' cy='12' r='10'/><path d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/><path d='M12 17h.01'/></svg>`;
    return `data:image/svg+xml,${encodeURIComponent(iconSvg)}`;
  });

  onMount(() => {
    themeStore.initialize();
  });
</script>

<svelte:head>
  <title>whoami: Matias Varela</title>
  <link rel="icon" href={faviconUrl} />
</svelte:head>

<div
  class="min-h-screen bg-ctp-base text-ctp-text transition-colors duration-300"
>
  {@render children()}
</div>
