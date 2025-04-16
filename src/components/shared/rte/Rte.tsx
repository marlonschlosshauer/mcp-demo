import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";

export interface RteProps {
  text: Document;
}

export const Rte: React.FC<RteProps> = ({ text }) => {
  return documentToReactComponents(text);
};
