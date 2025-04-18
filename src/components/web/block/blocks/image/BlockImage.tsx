import { Image, ImageProps } from "@/components/shared/image/Image";
import React from "react";

export interface BlockImageProps {
  headline?: string;
  image?: ImageProps;
}

export interface BlockImageData extends BlockImageProps {
  component: "image";
}

export const BlockImage: React.FC<BlockImageProps> = ({ headline, image }) => {
  return (
    <div className="flex flex-col gap-4">
      {headline && <h2 className="text-lg font-medium">{headline}</h2>}
      {image && <Image alt="" {...image} />}
    </div>
  );
};
