import { getContentfulMcp } from "@/lib/tools/contentful";
import { getUnsplashMcp } from "@/lib/tools/unsplash";
import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const contentfulClient = await getContentfulMcp();
  const unsplashClient = await getUnsplashMcp();

  const contentfulTools = await contentfulClient.tools();
  const unsplashTools = await unsplashClient.tools();

  const tools = {
    ...contentfulTools,
    ...unsplashTools,
  };

  const result = streamText({
    model: openai("gpt-4o", {
      parallelToolCalls: true,
    }),
    messages,
    tools,
    onFinish: async () => {
      await contentfulClient.close();
    },
  });

  return result.toDataStreamResponse();
}
