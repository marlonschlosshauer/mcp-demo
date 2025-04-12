import { getContentfulMcp } from "@/lib/tools/contentful";
import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const contentfulClient = await getContentfulMcp();

  const contentfulTools = await contentfulClient.tools();

  const tools = {
    ...contentfulTools,
  };

  const result = streamText({
    model: openai("gpt-4o"),
    messages,
    tools,
    onFinish: async () => {
      await contentfulClient.close();
    },
  });

  return result.toDataStreamResponse();
}
