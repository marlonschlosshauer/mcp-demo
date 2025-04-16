"use client";

import React from "react";
import { BlockContent, BlockContentProps } from "./BlockContent";
import { useContentfulLiveUpdates } from "@contentful/live-preview/react";

export const BlockDraft: React.FC<BlockContentProps> = (props) => {
  const liveProps = useContentfulLiveUpdates(props);

  return <BlockContent {...liveProps} />;
};
