<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    title: string;
    children: Snippet;
  }

  let { title, children }: Props = $props();
</script>

<section>
  <!-- Headings read as shell prompts, matching the window the page sits in. -->
  <h2 class="mb-6 text-sm font-mono lowercase tracking-tight">
    <span class="accent font-bold">~</span>
    <span class="text-ctp-overlay1">$</span>
    <span class="text-ctp-text font-semibold">{title}</span>
  </h2>

  {@render children()}
</section>
