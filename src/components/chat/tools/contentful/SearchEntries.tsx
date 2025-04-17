import { Entry } from "@/components/contentful/Entry";
import { ContentfulEntryArray } from "@/types/mcp/contentful";
import { EntityList } from "@contentful/f36-components";
import React from "react";

export type SearchEntriesProps = ContentfulEntryArray;

export const SearchEntries: React.FC<SearchEntriesProps> = ({ items }) => {
  if (!items) {
    return;
  }

  return (
    <EntityList>
      {items.map((entry, key) => (
        <Entry key={key} {...entry} />
      ))}
    </EntityList>
  );
};
