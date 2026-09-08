<script lang="ts">
  import { fade } from "svelte/transition";
  import { defaultPainting, type Painting } from "$lib/paintings";

  interface Props {
    /** Canvas used as the page backdrop, with its own framing and scrim. */
    painting?: Painting;
    /** Tint colour laid over the photo with a soft-light blend. */
    tint?: string;
    /** Strength of that tint, 0-1. */
    tintOpacity?: number;
    /** Viewport % where the scrim starts giving way to the painting. */
    fadeStart?: number;
    /** Viewport % where the scrim has fully cleared. */
    fadeEnd?: number;
  }

  let {
    painting = defaultPainting,
    tint = "#d8b46a",
    tintOpacity = 0.14,
    fadeStart = 56,
    fadeEnd = 80,
  }: Props = $props();

  const crust = (alpha: number) =>
    `color-mix(in srgb, var(--catppuccin-color-crust) ${Math.round(alpha * 100)}%, transparent)`;

  /*
   * Dense and flat across the column, then a long fall to nothing. The right
   * of the viewport carries no scrim at all, so the painting reads at full
   * strength exactly where no copy sits on it.
   */
  let scrimGradient = $derived(
    `linear-gradient(to right,
      ${crust(painting.scrim)} 0%,
      ${crust(painting.scrim)} ${fadeStart}%,
      ${crust(painting.scrim * 0.45)} ${(fadeStart + fadeEnd) / 2}%,
      ${crust(0)} ${fadeEnd}%)`,
  );

  /* Narrow viewports have no clear zone to give away — copy spans the width. */
  let flatScrim = $derived(crust(painting.scrim * 0.92));
</script>

<div
  class="photo-bg pointer-events-none fixed inset-0 z-0 overflow-hidden"
  aria-hidden="true"
  style:--scrim-gradient={scrimGradient}
  style:--scrim-flat={flatScrim}
>
  <!-- The painting, full strength and sharp. Framed per canvas so the subject
       lands in the uncovered half rather than under the column. A swap
       crossfades rather than snapping. -->
  {#key painting.id}
    <div
      class="absolute inset-0 bg-cover"
      style:background-image="url({painting.src})"
      style:background-position={painting.position}
      style:filter="contrast(1.02)"
      style:transform="scale({painting.scale}) translateX({painting.shiftX}%)"
      transition:fade={{ duration: 400 }}
    ></div>
  {/key}

  <div class="scrim absolute inset-0"></div>

  <!-- Accent tint, tying the backdrop to the active theme. -->
  <div
    class="absolute inset-0 mix-blend-soft-light"
    style:background-color={tint}
    style:opacity={tintOpacity}
  ></div>
</div>

<style>
  .scrim {
    background-image: var(--scrim-gradient);
  }

  @media (max-width: 1023px) {
    .scrim {
      background-image: none;
      background-color: var(--scrim-flat);
    }
  }
</style>
