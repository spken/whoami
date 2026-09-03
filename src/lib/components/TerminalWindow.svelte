<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    /** Text shown in the middle of the title bar. */
    title?: string;
    /** Controls docked into the title bar, e.g. path and theme switch. */
    titlebar?: Snippet;
    children: Snippet;
  }

  let { title = "whoami — matias varela", titlebar, children }: Props = $props();
</script>

<!--
  The painting runs full strength behind the page, so content lives inside a
  window sitting on top of it rather than directly on the image.
-->
<div
  class="rounded-xl overflow-hidden border border-ctp-surface1/70 shadow-2xl shadow-ctp-crust/60 backdrop-blur-sm"
>
  <header
    class="relative flex items-center gap-4 h-11 px-4 bg-ctp-mantle/95 border-b border-ctp-surface0"
  >
    <div class="flex items-center gap-2" aria-hidden="true">
      <span class="size-3 rounded-full bg-ctp-red"></span>
      <span class="size-3 rounded-full bg-ctp-yellow"></span>
      <span class="size-3 rounded-full bg-ctp-green"></span>
    </div>

    {#if titlebar}
      {@render titlebar()}
    {/if}

    <span
      class="hidden sm:block absolute left-1/2 -translate-x-1/2 text-xs font-mono text-ctp-overlay1 pointer-events-none"
    >
      {title}
    </span>
  </header>

  <div class="bg-ctp-base/95 px-5 py-8 sm:px-10 sm:py-12">
    {@render children()}
  </div>
</div>
