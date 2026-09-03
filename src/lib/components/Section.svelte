<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    title: string;
    children: Snippet;
  }

  let { title, children }: Props = $props();
</script>

<section>
  <!-- Quiet label plus a hairline that runs to the edge of the column. -->
  <div class="flex items-center gap-4 mb-7">
    <h2 class="text-xs font-mono uppercase tracking-[0.18em] text-ctp-subtext0 whitespace-nowrap">
      {title}
    </h2>
    <span class="h-px flex-1 bg-ctp-surface0" aria-hidden="true"></span>
  </div>

  {@render children()}
</section>
