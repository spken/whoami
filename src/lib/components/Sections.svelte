<script lang="ts">
  import type { Snippet } from "svelte";
  import { designMode } from "$lib/designMode.svelte";

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();

  let mode = $derived(designMode());

  let group = $derived(
    {
      1: "space-y-6",
      2: "space-y-12",
      3: "rounded-xl border border-ctp-surface0/60 bg-ctp-base/55 backdrop-blur-2xl shadow-xl shadow-ctp-crust/25 divide-y divide-ctp-surface0/60",
    }[mode],
  );
</script>

<div class={group}>
  {@render children()}
</div>
