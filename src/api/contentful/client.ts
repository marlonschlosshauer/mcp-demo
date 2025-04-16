import { createClient } from "contentful";

export const getClient = (preview: boolean) => {
  return createClient({
    space: process.env.CONTENTFUL_SPACE_ID ?? "",
    accessToken:
      (preview
        ? process.env.CONTENTFUL_PREVIEW_API_ACCESS_TOKEN
        : process.env.CONTENTFUL_DELIVERY_API_ACCESS_TOKEN) ?? "",
    host: preview ? "preview.contentful.com" : "cdn.contentful.com",
    environment: process.env.CONTNETFUL_ENVIRONMENT_ID ?? "master",
  });
};
