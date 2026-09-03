<script lang="ts">
  import type { Snippet } from "svelte";
  import { designMode } from "$lib/designMode.svelte";

  interface Props {
    title: string;
    children: Snippet;
  }

  let { title, children }: Props = $props();

  let mode = $derived(designMode());

  // The page sits on a photo backdrop, so each variant solves legibility
  // differently: a solid panel, text-level shading, or a shared glass sheet.
  let shell = $derived(
    {
      1: "rounded-xl border border-ctp-surface0/70 bg-ctp-base/85 backdrop-blur-xl shadow-lg shadow-ctp-crust/25 p-5 sm:p-7",
      2: "design-plain",
      3: "p-5 sm:p-7",
    }[mode],
  );
</script>

<section class={shell}>
  <h2
    class="flex items-center gap-2.5 mb-6 text-xs font-mono uppercase tracking-[0.2em] text-ctp-subtext0"
  >
    <span class="size-1.5 rounded-full accent-color bg-current" aria-hidden="true"></span>
    {title}
  </h2>

  {@render children()}
</section>
