import React from "react";
import { EntityList } from "@contentful/f36-components";
import { Entry } from "@/components/contentful/Entry";

export const CreateEntry: React.FC<any> = (props) => {
  return (
    <EntityList>
      <Entry {...props} />
    </EntityList>
  );
};
