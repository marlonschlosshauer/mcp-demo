import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  if (!slug || Array.isArray(slug)) {
    return new Response("Invalid slug", { status: 400 });
  }

  const draft = await draftMode();
  draft.enable();

  redirect(slug);
}
