import * as Contentful from "contentful";

export type BlockTextSkeleton = {
  contentTypeId: "blockText";
  fields: {
    name: Contentful.EntryFieldTypes.Text;
    overline: Contentful.EntryFieldTypes.Text;
    headline: Contentful.EntryFieldTypes.Text;
    description: Contentful.EntryFieldTypes.RichText;
  };
};

export type BlockImageSkeleton = {
  contentTypeId: "blockImage";
  fields: {
    name: Contentful.EntryFieldTypes.Text;
    headline: Contentful.EntryFieldTypes.Text;
    image: Contentful.EntryFieldTypes.AssetLink;
  };
};

export type PageHeaderSkeleton = {
  contentTypeId: "pageHeader";
  fields: {
    name: Contentful.EntryFieldTypes.Text;
    overline: Contentful.EntryFieldTypes.Text;
    headline: Contentful.EntryFieldTypes.Text;
    description: Contentful.EntryFieldTypes.RichText;
    image: Contentful.EntryFieldTypes.AssetLink;
  };
};

export type PageSeoSkeleton = {
  contentTypeId: "pageSeo";
  fields: {
    name: Contentful.EntryFieldTypes.Text;
    title: Contentful.EntryFieldTypes.Text;
    description: Contentful.EntryFieldTypes.Text;
    thumbnail: Contentful.EntryFieldTypes.AssetLink;
  };
};

export type PageSkeleton = {
  contentTypeId: "page";
  fields: {
    name: Contentful.EntryFieldTypes.Text;
    slug: Contentful.EntryFieldTypes.Text;
    header: Contentful.EntryFieldTypes.EntryLink<PageHeaderSkeleton>;
    seo: Contentful.EntryFieldTypes.EntryLink<PageSeoSkeleton>;
    blocks: Contentful.EntryFieldTypes.Array<
      Contentful.EntryFieldTypes.EntryLink<
        BlockTextSkeleton | BlockImageSkeleton
      >
    >;
  };
};
