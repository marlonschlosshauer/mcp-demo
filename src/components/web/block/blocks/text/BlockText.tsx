import React from "react";

export interface BlockTextProps {
  topline?: string;
  headline?: string;
  description?: string;
}

export interface BlockTextData extends BlockTextProps {
  component: "text";
}

export const BlockText: React.FC<BlockTextProps> = ({
  topline,
  headline,
  description,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="flex flex-col gap-2">
        {topline && <span className="text-sm">{topline}</span>}
        {headline && <span className="text-xl font-bold">{headline}</span>}
      </h2>
      {description && <div className="text-base">{description}</div>}
    </div>
  );
};
