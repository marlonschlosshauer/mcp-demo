import { Document } from "@contentful/rich-text-types";

export type ContentfulEntrySysLink = {
  sys: {
    type: "Link";
    linkType: string;
    id: string;
  };
};

export type ContentfulEntrySys = {
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  publishedVersion: number;
  publishedAt: string;
  firstPublishedAt: string;
  publishedCounter: number;
  version: number;
  contentType: ContentfulEntrySysLink;
  environment: ContentfulEntrySysLink;
  space: ContentfulEntrySysLink;
  createdBy: ContentfulEntrySysLink;
  updatedBy: ContentfulEntrySysLink;
  publishedBy: ContentfulEntrySysLink;
};

export type ContentfulEntryFields = Record<
  string,
  Record<string, string | Document>
>;

export type ContentfulTypeFields = {
  id: string;
  name: string;
  type: string;
  localized: boolean;
  required: boolean;
  validations: any[];
  disabled: boolean;
  omitted: boolean;
}[];

export type ContentfulEntry = {
  sys: ContentfulEntrySys;
  fields: ContentfulEntryFields;
};

export type ContentfulType = {
  sys: ContentfulEntrySys;
  displayField: string;
  name: string;
  description: string;
  fields: Record<string, string>[];
};

export type ContentfulArray = {
  sys: {
    type: "Array";
  };
  total: number;
  skip: number;
  limit: number;
};

export type ContentfulEntryArray = ContentfulArray & {
  items: ContentfulEntry[];
};

export type ContentfulTypeArray = ContentfulArray & {
  items: ContentfulType[];
};
