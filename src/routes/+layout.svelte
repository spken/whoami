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
    const color = accentColors[themeStore.accent] || accentColors.red;
    const iconSvg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none'><rect x='2' y='2' width='20' height='20' rx='2' fill='#1e1e1e'/><rect x='2' y='2' width='20' height='20' rx='2' stroke='#3d3d3d' stroke-width='0.5' fill='none'/><rect x='2' y='2' width='20' height='4' fill='#2d2d2d'/><circle cx='4.5' cy='4' r='0.8' fill='#ff5f56'/><circle cx='6.5' cy='4' r='0.8' fill='#ffbd2e'/><circle cx='8.5' cy='4' r='0.8' fill='#27c93f'/><path d='M 6 10 L 10 13 L 6 16' stroke='${color}' stroke-width='1.2' stroke-linecap='round' stroke-linejoin='round'/><rect x='11' y='12' width='2' height='3' fill='${color}'/></svg>`;
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
