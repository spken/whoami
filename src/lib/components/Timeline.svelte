<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();
</script>

<div class="relative">
  <!-- Vertical line with gradient -->
  <div
    class="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-ctp-overlay0/30 via-ctp-overlay1/60 to-ctp-overlay0/30"
    aria-hidden="true"
  ></div>

  <!-- Timeline items -->
  <div class="space-y-8">
    {@render children()}
  </div>
</div>
