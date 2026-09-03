<script lang="ts">
  import Navigation from "$lib/components/Navigation.svelte";
  import TerminalWindow from "$lib/components/TerminalWindow.svelte";
  import Hero from "$lib/components/Hero.svelte";
</script>

<div class="container mx-auto px-3 sm:px-6 py-4 sm:py-10 max-w-5xl">
  <TerminalWindow>
    {#snippet titlebar()}
      <Navigation />
    {/snippet}

    <Hero />
  </TerminalWindow>
</div>
