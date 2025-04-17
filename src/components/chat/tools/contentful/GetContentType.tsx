import React from "react";
import { ContentType } from "@/components/contentful/ContentType";
import { ContentfulType } from "@/types/mcp/contentful";

export type GetContentTypeProps = ContentfulType;

export const GetContentType: React.FC<GetContentTypeProps> = (props) => {
  return <ContentType {...props} />;
};
