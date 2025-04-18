import React from "react";
import { BlockDraft } from "./BlockDraft";
import { BlockLive } from "./BlockLive";
import { getClient } from "@/api/contentful/client";
import { BlockImageSkeleton, BlockTextSkeleton } from "@/types/contentful";
import { normalizeBlock } from "@/api/contentful/normalize/blocks";

export interface BlockProps {
  preview?: boolean;
  blockId?: string;
}

export const Block: React.FC<BlockProps> = async (props) => {
  const { preview, blockId } = props;

  if (!blockId) {
    return;
  }

  const client = getClient(!!preview);

  const data = await client.getEntry<BlockTextSkeleton | BlockImageSkeleton>(
    blockId,
  );

  if (!data) {
    return;
  }

  const normalizedData = normalizeBlock(data);

  if (!normalizedData) {
    return;
  }

  if (preview) {
    return <BlockDraft data={normalizedData} />;
  }

  return <BlockLive data={normalizedData} />;
};
