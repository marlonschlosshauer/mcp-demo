import React from "react";
import { EntityList } from "@contentful/f36-components";
import Link from "next/link";
import {
  ContentfulEntryFields,
  ContentfulEntrySys,
} from "@/types/mcp/contentful";

export interface EntryProps {
  sys: ContentfulEntrySys;
  fields: ContentfulEntryFields;
}

export const Entry: React.FC<EntryProps> = ({ sys, fields }) => {
  if (!sys || !fields) {
    return;
  }

  const title =
    fields.name && typeof fields.name === "string" ? fields.name : "-";

  return (
    <Link
      href={`https://app.contentful.com/spaces/${sys.space.sys.id}/entries/${sys.id}`}
      target="_blank"
    >
      <EntityList.Item
        title={title}
        description={sys.id}
        contentType={sys.contentType.sys.id}
        status={!sys.publishedCounter ? "draft" : "published"}
      />
    </Link>
  );
};
