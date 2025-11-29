<script lang="ts">
  import Navigation from "$lib/components/Navigation.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import ThemeSelector from "$lib/components/ThemeSelector.svelte";
</script>

<div class="container mx-auto px-6 py-8 max-w-6xl">
  <Navigation />

  <Hero
    name="Matias Varela"
    description="I'm currently working as a Junior SWE @ <a href='https://www.ubs.com' target='_blank' rel='noopener noreferrer' class='accent underline'>UBS AG</a>. Specializing in AI execution and enablement, I've had the opportunity to work on numerous projects including AI-driven vulnerability management systems using Autogen and LangGraph, SOC incident handling workflows, and more. Being able to work on software that protects enterprises at scale is what strengthens my drive to keep building, and learning."
  />

  <div class="mt-8">
    <h2 class="text-lg font-semibold mb-4 accent">Theme</h2>
    <ThemeSelector />
  </div>
</div>
