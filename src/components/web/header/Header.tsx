import { ImageProps } from "@/components/shared/image/Image";
import { Rte, RteProps } from "@/components/shared/rte/Rte";
import React from "react";

export interface HeaderProps {
  overline?: string;
  headline?: string;
  description?: RteProps;
  image: ImageProps;
}

export const Header: React.FC<HeaderProps> = ({
  overline,
  headline,
  description,
  image,
}) => {
  return (
    <header
      className="relative w-full min-h-[800px] max-h-[80vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${image.src})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
        {overline && (
          <span className="text-sm uppercase tracking-wide mb-2">
            {overline}
          </span>
        )}
        {headline && (
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{headline}</h1>
        )}
        {description && (
          <div className="text-lg md:text-xl max-w-2xl">
            <Rte {...description} />
          </div>
        )}
      </div>
    </header>
  );
};
