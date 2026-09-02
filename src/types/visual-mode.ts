export const VISUAL_MODES = [
  "base",
  "noir",
  "illustrated",
] as const;

export type VisualMode =
  (typeof VISUAL_MODES)[number];