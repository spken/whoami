<script lang="ts">
  import Navigation from "$lib/components/Navigation.svelte";
  import TerminalWindow from "$lib/components/TerminalWindow.svelte";
  import Hero from "$lib/components/Hero.svelte";
</script>

<div class="h-dvh p-3 sm:p-6 lg:p-10 flex justify-center">
  <div class="w-full max-w-3xl">
    <TerminalWindow>
      {#snippet titlebar()}
        <Navigation />
      {/snippet}

      <Hero />
    </TerminalWindow>
  </div>
</div>
