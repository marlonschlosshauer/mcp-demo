import React, { PropsWithChildren } from "react";
import { Card } from "@contentful/f36-components";
import Link from "next/link";

export const ContentType: React.FC<any> = ({ name, fields, sys }) => {
  if (!name) {
    return;
  }

  return (
    <ContentTypeLink sys={sys}>
      <Card>
        <div className="flex flex-row gap-2">
          {name} {fields && <span>(Fields: {fields.length})</span>}
        </div>
      </Card>
    </ContentTypeLink>
  );
};

export const ContentTypeLink: React.FC<PropsWithChildren<any>> = ({
  sys,
  children,
}) => {
  return (
    <Link
      href={`https://app.contentful.com/spaces/${sys.space.sys.id}/content_types/${sys.id}/fields`}
      target="_blank"
    >
      {children}
    </Link>
  );
};
