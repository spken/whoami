/**
 * Backdrops for the page. Every canvas is public domain, pulled from
 * Wikimedia Commons and resampled to a 1600px long edge.
 *
 * Each one is landscape at roughly 1.5:1 or wider, so a cover fit against a
 * desktop viewport crops the frame rather than blowing the painting up.
 *
 * The layout runs copy down the left of the viewport under a scrim, so each
 * entry carries its own framing: where to crop, how far to zoom, and how hard
 * to push the subject clear of the text column. Bright canvases also ask for a
 * heavier scrim than the dark ones.
 */
import type { Asset } from "$app/types";

export interface Painting {
  id: string;
  title: string;
  artist: string;
  year: string;
  /** Path under `static/`; resolve with `asset()` before use. */
  src: Asset;
  /** Crop anchor for the cover fit. */
  position: string;
  /** Zoom on top of the cover fit. */
  scale: number;
  /** Nudge right, in % of the element, moving the subject out from under the copy. */
  shiftX: number;
  /** Scrim strength, 0-1. Bright canvases need more of it. */
  scrim: number;
}

export const paintings: Painting[] = [
  {
    id: "socrates",
    title: "The Death of Socrates",
    artist: "Jacques-Louis David",
    year: "1787",
    src: "/paintings/socrates.jpg",
    position: "center",
    scale: 1.06,
    shiftX: 5,
    scrim: 0.9,
  },
  {
    id: "caesar",
    title: "The Death of Caesar",
    artist: "Jean-Léon Gérôme",
    year: "1867",
    src: "/paintings/caesar.jpg",
    position: "center 55%",
    scale: 1.04,
    shiftX: 6,
    scrim: 0.84,
  },
  {
    id: "desolation",
    title: "The Course of Empire: Desolation",
    artist: "Thomas Cole",
    year: "1836",
    src: "/paintings/desolation.jpg",
    position: "center 45%",
    scale: 1.06,
    shiftX: 12,
    scrim: 0.88,
  },
  {
    id: "twilight",
    title: "Twilight in the Wilderness",
    artist: "Frederic Edwin Church",
    year: "1860",
    src: "/paintings/twilight.jpg",
    position: "center 40%",
    scale: 1.02,
    shiftX: 4,
    scrim: 0.8,
  },
  {
    id: "monk",
    title: "The Monk by the Sea",
    artist: "Caspar David Friedrich",
    year: "1810",
    src: "/paintings/monk.jpg",
    position: "center 60%",
    scale: 1.08,
    shiftX: 12,
    scrim: 0.9,
  },
  {
    id: "wrath",
    title: "The Great Day of His Wrath",
    artist: "John Martin",
    year: "1853",
    src: "/paintings/wrath.jpg",
    position: "center 45%",
    scale: 1.04,
    shiftX: 8,
    scrim: 0.82,
  },
];

export type PaintingId = (typeof paintings)[number]["id"];

export const defaultPainting = paintings[0];

export function findPainting(id: string | null | undefined): Painting {
  return paintings.find((p) => p.id === id) ?? defaultPainting;
}
