import { BlockContentProps } from "@/components/web/block/BlockContent";
import { BlockLive } from "@/components/web/block/BlockLive";
import React from "react";

export type PreviewBlockProps = BlockContentProps["data"];

export const PreviewBlock: React.FC<PreviewBlockProps> = (props) => {
  return (
    <div className="p-4 border border-dashed border-indigo-500 rounded-md">
      <BlockLive data={props} />
    </div>
  );
};
