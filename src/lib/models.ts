export const MODELS = [
  "gpt-4o-mini",
  "gpt-4o",
  "Claude 3.7",
  "Claude 3.5",
] as const;

export const DEFAULT_MODEL = MODELS[0];

export type Models = (typeof MODELS)[number];
