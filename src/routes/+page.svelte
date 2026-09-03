<script lang="ts">
  import Navigation from "$lib/components/Navigation.svelte";
  import Panel from "$lib/components/Panel.svelte";
  import Hero from "$lib/components/Hero.svelte";
</script>

<div class="h-dvh p-3 sm:p-6 lg:p-10 flex justify-center">
  <div class="w-full max-w-3xl">
    <Panel>
      {#snippet header()}
        <Navigation />
      {/snippet}

      <Hero />
    </Panel>
  </div>
</div>
