import { HeaderProps } from "@/components/web/header/Header";
import { PageHeaderSkeleton } from "@/types/contentful";
import { Entry } from "contentful";

export const normalizePageHeader = (
  data: Entry<PageHeaderSkeleton>,
): HeaderProps | null => {
  if (!data) {
    return null;
  }

  const { fields } = data;

  if (!fields) {
    return null;
  }

  const { image, headline, overline, description } = fields;

  if (
    typeof overline !== "string" ||
    typeof headline !== "string" ||
    typeof description !== "object" ||
    typeof image !== "object"
  ) {
    return null;
  }

  return {
    component: "text",
    overline,
    headline,
    /* @ts-ignore */
    description,
    /* @ts-ignore */
    image,
  };
};
