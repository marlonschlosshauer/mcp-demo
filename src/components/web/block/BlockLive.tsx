import React from "react";
import { BlockContent, BlockContentProps } from "./BlockContent";

export const BlockLive: React.FC<BlockContentProps> = (props) => {
  return <BlockContent {...props} />;
};
