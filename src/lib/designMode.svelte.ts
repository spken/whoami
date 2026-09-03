import { page } from "$app/state";

export type DesignMode = 1 | 2 | 3;

/**
 * Temporary A/B switch for the three section treatments, driven by ?design=N.
 *   1 - narrow column, painting owns the margins
 *   2 - no boxes, ground applied at text level
 *   3 - one continuous glass sheet
 * Delete this module once a direction is chosen.
 */
export function designMode(): DesignMode {
  const raw = Number(page.url.searchParams.get("design"));
  return raw === 1 || raw === 2 || raw === 3 ? raw : 3;
}
