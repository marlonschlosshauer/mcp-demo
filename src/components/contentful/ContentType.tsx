import React, { PropsWithChildren } from "react";
import { Card } from "@contentful/f36-components";
import Link from "next/link";
import { ContentfulEntrySys } from "@/types/mcp/contentful";

export interface ContentTypeProps extends ContentTypeLinkProps {
  name: string;
}

export const ContentType: React.FC<ContentTypeProps> = ({ name, ...props }) => {
  if (!name) {
    return;
  }

  return (
    <ContentTypeLink {...props}>
      <Card>
        <div className="flex flex-row gap-2">{name}</div>
      </Card>
    </ContentTypeLink>
  );
};

export interface ContentTypeLinkProps {
  sys: ContentfulEntrySys;
}

export const ContentTypeLink: React.FC<
  PropsWithChildren<ContentTypeLinkProps>
> = ({ sys, children }) => {
  return (
    <Link
      href={`https://app.contentful.com/spaces/${sys.space.sys.id}/content_types/${sys.id}/fields`}
      target="_blank"
    >
      {children}
    </Link>
  );
};
