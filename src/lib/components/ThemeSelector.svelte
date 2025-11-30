<script lang="ts">
  import {
    themeStore,
    type CatppuccinFlavor,
    type AccentColor,
  } from "$lib/stores/theme.svelte";

  const themes: { name: CatppuccinFlavor; label: string }[] = [
    { name: "latte", label: "Latte" },
    { name: "frappe", label: "Frappé" },
    { name: "macchiato", label: "Macchiato" },
    { name: "mocha", label: "Mocha" },
  ];

  const accentColors: { name: AccentColor; label: string }[] = [
    { name: "rosewater", label: "Rosewater" },
    { name: "flamingo", label: "Flamingo" },
    { name: "pink", label: "Pink" },
    { name: "mauve", label: "Mauve" },
    { name: "red", label: "Red" },
    { name: "maroon", label: "Maroon" },
    { name: "peach", label: "Peach" },
    { name: "yellow", label: "Yellow" },
    { name: "green", label: "Green" },
    { name: "teal", label: "Teal" },
    { name: "sky", label: "Sky" },
    { name: "sapphire", label: "Sapphire" },
    { name: "blue", label: "Blue" },
    { name: "lavender", label: "Lavender" },
  ];
</script>

<div
  class="flex flex-col gap-4 p-6 rounded-lg bg-ctp-surface0/30 border border-ctp-surface1"
>
  <!-- Header -->
  <div class="flex items-center gap-1.5 text-sm font-mono mb-2">
    <a
      href="/"
      class="accent font-bold hover:opacity-80 transition-opacity hover:underline"
      >~</a
    >
    <span class="text-ctp-subtext0 font-bold">/</span>
    <span class="text-ctp-text">theme</span>
    <span class="text-ctp-subtext0 font-bold">/</span>
    <span class="cursor"></span>
  </div>

  <!-- Theme Controls -->
  <div class="flex flex-col gap-3">
    <div class="flex items-center gap-2">
      <span class="text-xs font-medium text-ctp-subtext0">Theme:</span>
      <div class="flex gap-1">
        {#each themes as theme (theme.name)}
          <button
            onclick={() => themeStore.setFlavor(theme.name)}
            class="px-2 py-1 text-xs rounded transition-all {theme.name} bg-ctp-base text-ctp-text hover:cursor-pointer"
            class:ring-2={themeStore.current === theme.name}
            class:ring-ctp-blue={themeStore.current === theme.name}
            title={theme.label}
          >
            {theme.label}
          </button>
        {/each}
      </div>
    </div>

    <div class="flex flex-col gap-2">
      <span class="text-xs font-medium text-ctp-subtext0">Accent:</span>
      <div class="grid grid-cols-7 gap-1.5">
        {#each accentColors as color (color.name)}
          <button
            onclick={() => themeStore.setAccent(color.name)}
            class="w-7 h-7 rounded transition-all hover:scale-110 hover:cursor-pointer"
            class:ring-2={themeStore.accent === color.name}
            class:ring-offset-2={themeStore.accent === color.name}
            class:ring-offset-ctp-base={themeStore.accent === color.name}
            class:ring-ctp-text={themeStore.accent === color.name}
            style="background-color: var(--catppuccin-color-{color.name})"
            title={color.label}
          >
          </button>
        {/each}
      </div>
    </div>
  </div>

  <!-- Preview -->
  <div
    class="flex flex-col gap-2 p-4 rounded-lg bg-ctp-base border border-ctp-surface1"
  >
    <p class="accent">Oooh, that's a cool color!</p>
    <p class="text-ctp-text">Catppuccin is great :)</p>
  </div>
</div>
