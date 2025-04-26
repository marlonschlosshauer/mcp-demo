import { getClient } from "@/api/contentful/client";
import { normalizeBlock } from "@/api/contentful/normalize/blocks";
import {
  BlockImageSkeleton,
  BlockTextSkeleton,
  PageSkeleton,
} from "@/types/contentful";
import { z } from "zod";

export const getCustomTools = async () => {
  const client = getClient(true);

  return {
    preview_page: {
      description: "Preview a page from Contentful",
      parameters: z.object({
        id: z.string().describe("The id of the page entry"),
      }),
      execute: async ({ id }: { id: string }) => {
        const base = { url: null };

        try {
          const data = await client.getEntry<PageSkeleton>(id);

          if (!data) {
            return base;
          }

          const { fields } = data;

          if (!fields) {
            return base;
          }

          const { slug } = fields;

          if (!slug) {
            return base;
          }

          return {
            url: slug,
          };
        } catch {
          return base;
        }
      },
    },
    preview_block: {
      description: "Preview a block from Contentful",
      parameters: z.object({
        id: z.string().describe("The id of the block entry"),
      }),
      execute: async ({ id }: { id: string }) => {
        const data = await client.getEntry<
          BlockImageSkeleton | BlockTextSkeleton
        >(id);

        if (!data) {
          return {};
        }

        const normalizedData = normalizeBlock(data);

        if (!normalizedData) {
          return {};
        }

        return normalizedData;
      },
    },
  };
};
