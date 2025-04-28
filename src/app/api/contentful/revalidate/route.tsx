import { revalidate } from "@/server/revalidate";
import { revalidatePath } from "next/cache";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id || Array.isArray(id)) {
    return new Response("Invalid id", { status: 400 });
  }

  const paths = await revalidate(id);

  if (!paths || !paths.length) {
    return new Response("Could not find path with id", { status: 404 });
  }

  paths.forEach((path) => revalidatePath(path));

  return new Response("Revalidated ${paths.length} paths.", { status: 200 });
}
