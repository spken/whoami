<script lang="ts">
  interface Props {
    /** Image used as the page backdrop. */
    src?: string;
    /** Tint colour laid over the photo with a soft-light blend. */
    tint?: string;
    /** Strength of that tint, 0-1. */
    tintOpacity?: number;
    /** Strength of the flat scrim that makes the page readable, 0-1. */
    scrim?: number;
  }

  let {
    src = "/socrates.jpg",
    tint = "#d8b46a",
    tintOpacity = 0.18,
    scrim = 0.74,
  }: Props = $props();
</script>

<div class="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
  <!-- The painting, full strength and sharp. -->
  <div
    class="absolute inset-0 bg-cover bg-center"
    style:background-image="url({src})"
    style:filter="saturate(0.9) contrast(1.02)"
  ></div>

  <!--
    One flat, uniform scrim across the whole image. Uniform is the point: it
    drops the painting's contrast far enough for copy to sit directly on it,
    with no panel, no edge and no seam anywhere on the page.
  -->
  <div
    class="absolute inset-0"
    style:background-color="var(--catppuccin-color-crust)"
    style:opacity={scrim}
  ></div>

  <!-- Accent tint, tying the backdrop to the active theme. -->
  <div
    class="absolute inset-0 mix-blend-soft-light"
    style:background-color={tint}
    style:opacity={tintOpacity}
  ></div>
</div>
