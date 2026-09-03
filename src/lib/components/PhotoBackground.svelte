<script lang="ts">
  interface Props {
    /** Image used as the page backdrop. */
    src?: string;
    /** Opacity of the photo layer, 0-1. */
    opacity?: number;
    /** Softening blur in px. 0 keeps the painting sharp. */
    blur?: number;
    /** Tint colour laid over the photo with a soft-light blend. */
    tint?: string;
    /** Strength of that tint, 0-1. */
    tintOpacity?: number;
    /** Corner darkening, 0-1. */
    vignette?: number;
  }

  let {
    src = "/socrates.jpg",
    opacity = 0.9,
    blur = 0,
    tint = "#d8b46a",
    tintOpacity = 0.35,
    vignette = 0.35,
  }: Props = $props();
</script>

<div class="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
  <!-- Photo. Scaled up slightly so the blur doesn't feather in at the edges. -->
  <div
    class="absolute -inset-8 bg-cover bg-center"
    style:background-image="url({src})"
    style:filter="grayscale(0.15) contrast(1.05) blur({blur}px)"
    style:opacity
  ></div>

  <!-- Accent tint. -->
  <div
    class="absolute inset-0 mix-blend-soft-light"
    style:background-color={tint}
    style:opacity={tintOpacity}
  ></div>

  <!-- Vignette: pulls the eye inward and keeps edge copy legible. -->
  <div
    class="absolute inset-0"
    style:background="radial-gradient(ellipse at center, transparent 25%, rgba(0,0,0,{vignette}) 100%)"
  ></div>
</div>
