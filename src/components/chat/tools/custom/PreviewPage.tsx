import Link from "next/link";
import React from "react";

export interface PreviewPageProps {
  url: string | null;
}

export const PreviewPage: React.FC<PreviewPageProps> = ({ url }) => {
  if (!url) {
    return;
  }

  return (
    <code>
      <Link href={url} target="_blank" className="underline font-mono">
        {url}
      </Link>
    </code>
  );
};
