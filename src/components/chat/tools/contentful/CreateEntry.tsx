import React from "react";
import { EntityList } from "@contentful/f36-components";
import Link from "next/link";

export const CreateEntry: React.FC<any> = ({ sys, fields }) => {
  return (
    <EntityList>
      <Link
        href={`https://app.contentful.com/spaces/${sys.space.sys.id}/entries/${sys.id}`}
        target="_blank"
      >
        <EntityList.Item
          title={`"${fields.name}"`}
          description={sys.id}
          contentType={sys.contentType.sys.id}
          status={!sys.publishedCounter ? "draft" : "published"}
        />
      </Link>
    </EntityList>
  );
};
