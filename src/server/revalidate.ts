"use server";
import { getClient } from "@/api/contentful/client";
import { Entry, EntrySkeletonType } from "contentful";
import { revalidatePath } from "next/cache";

export const revalidate = async (id: string) => {
  if (!id || Array.isArray(id)) {
    return [];
  }

  const client = getClient(false);

  const initial = await client.getEntry(id);

  const dig = async (
    entry: Entry<EntrySkeletonType, undefined, string>,
  ): Promise<string[]> => {
    if (!entry) {
      return [];
    }

    const { sys, fields } = entry;

    if (!sys?.contentType?.sys?.id) {
      return [];
    }

    const name = sys.contentType.sys.id;

    if (name === "page") {
      const slug = fields.slug;

      if (!slug || typeof slug !== "string") {
        return [];
      }

      return [slug];
    }

    const id = entry?.sys?.id;

    if (!id) {
      return [];
    }

    const parents = await client.getEntries({
      links_to_entry: id,
    });

    return Promise.all(parents.items.map(dig)).then((data) => data.flat());
  };

  const paths = await dig(initial);

  paths.forEach((path) => revalidatePath(path));

  return paths;
};
