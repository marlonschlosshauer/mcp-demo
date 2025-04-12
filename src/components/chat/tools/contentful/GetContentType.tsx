import React from "react";
import { Caption, Card } from "@contentful/f36-components";

export const GetContentType: React.FC<any> = ({
  name,
  displayField: fields,
}) => {
  if (!name) {
    return;
  }

  return (
    <Card>
      <div className="flex flex-row gap-2">
        {name}
        {fields && <Caption>({fields.length})</Caption>}
      </div>
    </Card>
  );
};
