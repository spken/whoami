<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();
</script>

<div class="relative">
  <!-- Vertical line -->
  <div
    class="absolute left-5 top-0 bottom-0 w-0.5 bg-ctp-surface2"
    aria-hidden="true"
  ></div>

  <!-- Timeline items -->
  <div class="space-y-8">
    {@render children()}
  </div>
</div>
