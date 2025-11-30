<script lang="ts">
  import ThemeSelector from "./ThemeSelector.svelte";

  let showThemeSelector = $state(false);

  function handleBackdropClick(e: MouseEvent) {
    if (e.target === e.currentTarget) {
      showThemeSelector = false;
    }
  }

  function handleBackdropKeydown(e: KeyboardEvent) {
    if (e.key === "Escape") {
      showThemeSelector = false;
    }
  }
</script>

<nav class="mb-8">
  <div class="flex items-center justify-between">
    <div class="flex items-center gap-1.5 text-sm font-mono">
      <a href="/" class="accent hover:underline font-bold">~</a>
      <span class="text-ctp-subtext0 font-bold">/</span>
      <span class="cursor"></span>
    </div>

    <button
      onclick={() => (showThemeSelector = !showThemeSelector)}
      class="text-sm font-mono text-ctp-subtext0 hover:text-ctp-text transition-colors px-2 py-1 rounded hover:bg-ctp-surface0/30 hover:cursor-pointer"
      title="Change theme"
    >
      <span class="font-bold">[</span>theme<span class="font-bold">]</span>
    </button>
  </div>

  {#if showThemeSelector}
    <div
      class="fixed inset-0 bg-ctp-crust/50 backdrop-blur-sm flex items-center justify-center z-50"
      role="dialog"
      aria-modal="true"
      aria-label="Theme selector"
      onclick={handleBackdropClick}
      onkeydown={handleBackdropKeydown}
      tabindex="-1"
    >
      <div class="m-4">
        <ThemeSelector />
      </div>
    </div>
  {/if}
</nav>
