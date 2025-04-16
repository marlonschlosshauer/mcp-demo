export const normalizeSlug = (slugs: string[] | string) =>
  `/${Array.isArray(slugs) ? slugs.join("/") : slugs}`;
