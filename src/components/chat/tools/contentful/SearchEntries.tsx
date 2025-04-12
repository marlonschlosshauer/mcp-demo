import { Entry } from "@/components/contentful/Entry";
import { EntityList } from "@contentful/f36-components";
import React from "react";

export const SearchEntries: React.FC<any> = ({ items }) => {
  if (!items) {
    return;
  }

  return (
    <EntityList>
      {items.map((entry: any, key: number) => (
        <Entry key={key} {...entry} />
      ))}
    </EntityList>
  );
};
