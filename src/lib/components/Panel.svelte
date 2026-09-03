<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    /** Controls pinned above the scrolling content. */
    header?: Snippet;
    children: Snippet;
  }

  let { header, children }: Props = $props();
</script>

<!--
  Pure layout. The backdrop is scrimmed evenly, so copy sits straight on the
  painting with nothing behind it.
-->
<div class="flex h-full flex-col">
  {#if header}
    <div class="shrink-0 px-5 pt-5 sm:px-10 sm:pt-8">
      {@render header()}
    </div>
  {/if}

  <div class="sheet-scroll flex-1 overflow-y-auto px-5 pb-16 pt-6 sm:px-10 sm:pb-24">
    {@render children()}
  </div>
</div>
