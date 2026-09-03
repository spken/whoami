<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    title: string;
    children: Snippet;
  }

  let { title, children }: Props = $props();
</script>

<!--
  Frosted panel. The page sits on a photo backdrop, so long-form content needs
  its own opaque-ish ground to stay legible instead of competing with the image.
-->
<section
  class="rounded-xl border border-ctp-surface0/70 bg-ctp-base/80 backdrop-blur-xl shadow-lg shadow-ctp-crust/20 p-5 sm:p-7"
>
  <h2
    class="flex items-center gap-2.5 mb-6 text-xs font-mono uppercase tracking-[0.2em] text-ctp-subtext0"
  >
    <span class="size-1.5 rounded-full accent-color bg-current" aria-hidden="true"></span>
    {title}
  </h2>

  {@render children()}
</section>
