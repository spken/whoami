<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    /** Controls pinned to the top of the sheet, above the content. */
    header?: Snippet;
    children: Snippet;
  }

  let { header, children }: Props = $props();
</script>

<!--
  A bounded sheet on top of the painting: viewport-height, scrolling its own
  content, so the image stays fully visible around it instead of being covered.
-->
<div
  class="flex h-full flex-col rounded-2xl overflow-hidden bg-ctp-base/95 border border-ctp-surface0/80 shadow-2xl shadow-ctp-crust/50"
>
  {#if header}
    <div class="shrink-0 px-5 pt-5 sm:px-12 sm:pt-8">
      {@render header()}
    </div>
  {/if}

  <div class="sheet-scroll flex-1 overflow-y-auto px-5 pb-10 pt-6 sm:px-12 sm:pb-16">
    {@render children()}
  </div>
</div>
