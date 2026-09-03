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
  No card, no edges. A soft field of base colour sits under the text and fades
  out in every direction, so the content dissolves into the painting rather
  than sitting on a plate over it.
-->
<div class="relative h-full">
  <div class="sheet-ground" aria-hidden="true"></div>

  <div class="relative flex h-full flex-col">
    {#if header}
      <div class="shrink-0 px-5 pt-5 sm:px-10 sm:pt-8">
        {@render header()}
      </div>
    {/if}

    <div class="sheet-scroll flex-1 overflow-y-auto px-5 pb-16 pt-6 sm:px-10 sm:pb-24">
      {@render children()}
    </div>
  </div>
</div>
