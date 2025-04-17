import React from "react";
import { EntityList } from "@contentful/f36-components";
import { Entry } from "@/components/contentful/Entry";
import { ContentfulEntry } from "@/types/mcp/contentful";

export type GetEntryProps = ContentfulEntry;

export const GetEntry: React.FC<GetEntryProps> = (props) => {
  return (
    <EntityList>
      <Entry {...props} />
    </EntityList>
  );
};
