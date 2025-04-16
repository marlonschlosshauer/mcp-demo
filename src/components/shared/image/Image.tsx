import React from "react";
import Base from "next/image";

export interface ImageProps {
  src?: string;
  alt?: string;
}

export const Image: React.FC<ImageProps> = ({ src, alt }) => (
  <div className="flex flex-col gap-2">
    {src && alt && <Base src={src} alt={alt} width={400} height={400} />}
    {alt && (
      <pre>
        <i className="text-sm">{alt}</i>
      </pre>
    )}
  </div>
);
