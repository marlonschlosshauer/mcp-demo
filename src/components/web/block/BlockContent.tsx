import React from "react";
import { BlockText, BlockTextData } from "./blocks/text/BlockText";
import { BlockImage, BlockImageData } from "./blocks/image/BlockImage";

export interface BlockContentProps {
  data: BlockTextData | BlockImageData | null;
}

export const BlockContent: React.FC<BlockContentProps> = ({ data }) => {
  if (!data) {
    return;
  }

  switch (data.component) {
    case "text": {
      return <BlockText {...data} />;
    }
    case "image": {
      return <BlockImage {...data} />;
    }
  }
};
