/**
 * Backdrops for the page. Every canvas is public domain, pulled from
 * Wikimedia Commons and resampled to a 1600px long edge.
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
    scale: 1.12,
    shiftX: 5,
    scrim: 0.9,
  },
  {
    id: "marat",
    title: "The Death of Marat",
    artist: "Jacques-Louis David",
    year: "1793",
    src: "/paintings/marat.jpg",
    position: "center 62%",
    scale: 1.15,
    shiftX: 14,
    scrim: 0.84,
  },
  {
    id: "meditation",
    title: "Philosopher in Meditation",
    artist: "Rembrandt",
    year: "1632",
    src: "/paintings/meditation.jpg",
    position: "center",
    scale: 1.1,
    shiftX: 6,
    scrim: 0.82,
  },
  {
    id: "orrery",
    title: "A Philosopher Lecturing on the Orrery",
    artist: "Joseph Wright of Derby",
    year: "1766",
    src: "/paintings/orrery.jpg",
    position: "center",
    scale: 1.1,
    shiftX: 8,
    scrim: 0.86,
  },
  {
    id: "athens",
    title: "The School of Athens",
    artist: "Raphael",
    year: "1511",
    src: "/paintings/athens.jpg",
    position: "center 55%",
    scale: 1.2,
    shiftX: 12,
    scrim: 0.92,
  },
  {
    id: "wanderer",
    title: "Wanderer above the Sea of Fog",
    artist: "Caspar David Friedrich",
    year: "1818",
    src: "/paintings/wanderer.jpg",
    position: "center 45%",
    scale: 1.1,
    shiftX: 16,
    scrim: 0.9,
  },
];

export type PaintingId = (typeof paintings)[number]["id"];

export const defaultPainting = paintings[0];

export function findPainting(id: string | null | undefined): Painting {
  return paintings.find((p) => p.id === id) ?? defaultPainting;
}
