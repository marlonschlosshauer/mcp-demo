import { getClient } from "@/api/contentful/client";
import { Block } from "@/components/web/block/Block";
import { normalizeSlug } from "@/lib/slug";
import { PageSkeleton } from "@/types/contentful";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slugs: string[] }>;
}

export async function generateStaticParams() {
  const client = getClient(false);

  const data = await client.getEntries<PageSkeleton>({
    content_type: "page",
  });

  const pages: { slugs: string[] }[] = [];

  data.items.forEach((item) => {
    const slug = item.fields.slug;

    if (!slug || typeof slug !== "string") {
      return;
    }

    pages.push({ slugs: slug.split("/").filter((slug) => !!slug) });
  });

  return pages;
}

export const dynamicParams = true;

export default async function Page({ params }: PageProps) {
  const { slugs } = await params;
  const draft = await draftMode();

  const normalizedSlug = normalizeSlug(slugs);
  const preview = draft.isEnabled;

  const client = getClient(preview);

  const data = await client.getEntries<PageSkeleton>({
    content_type: "page",
    "fields.slug": normalizedSlug,
    limit: 1,
  });

  if (!data) {
    notFound();
  }

  const { items } = data;

  if (!items) {
    notFound();
  }

  const [item] = items;

  if (!item) {
    notFound();
  }

  const { fields } = item;

  if (!fields) {
    notFound();
  }

  const { blocks } = fields;

  return (
    <div className="flex flex-col gap-4">
      {blocks?.map((block, key) => (
        <Block key={key} preview={preview} blockId={block.sys.id} />
      ))}
    </div>
  );
}
