import { BlockImageData } from "@/components/web/block/blocks/image/BlockImage";
import { BlockTextData } from "@/components/web/block/blocks/text/BlockText";
import { BlockImageSkeleton, BlockTextSkeleton } from "@/types/contentful";
import { Entry } from "contentful";

export const normalizeBlock = (
  data: Entry<BlockTextSkeleton | BlockImageSkeleton>,
) => {
  switch (data.sys.contentType.sys.id) {
    case "blockText":
      /* @ts-ignore */
      return normalizeBlockText(data);
    case "blockImage":
      /* @ts-ignore */
      return normalizeBlockImage(data);
  }
};

export const normalizeBlockText = (
  data: Entry<BlockTextSkeleton>,
): BlockTextData | null => {
  if (!data) {
    return null;
  }

  const { fields } = data;

  if (!fields) {
    return null;
  }

  const { overline, headline, description } = fields;

  return {
    component: "text",
    /* @ts-ignore */
    overline,
    /* @ts-ignore */
    headline,
    /* @ts-ignore */
    description,
  };
};

export const normalizeBlockImage = (
  data: Entry<BlockImageSkeleton>,
): BlockImageData | null => {
  if (!data) {
    return null;
  }

  const { fields } = data;

  if (!fields) {
    return null;
  }

  const { image, headline } = fields;

  if (!image) {
    return null;
  }

  /* @ts-ignore */
  const { fields: imageFields } = image;

  if (!imageFields) {
    return null;
  }

  const { file, title } = imageFields;

  if (!file) {
    return null;
  }

  const { url } = file;

  if (!url || !title) {
    return null;
  }

  const normalizedImage = {
    src: `https:${url}`,
    alt: title,
  };

  return {
    component: "image",
    /* @ts-ignore */
    headline,
    /* @ts-ignore */
    image: normalizedImage,
  };
};
