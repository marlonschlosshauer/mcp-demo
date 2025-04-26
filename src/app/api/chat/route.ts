import { getSDK } from "@/lib/sdk";
import { getContentfulMcp } from "@/lib/tools/contentful";
import { getCustomTools } from "@/lib/tools/custom";
import { getUnsplashMcp } from "@/lib/tools/unsplash";
import { streamText } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages, model } = await req.json();

  const contentfulClient = await getContentfulMcp();
  const unsplashClient = await getUnsplashMcp();

  const contentfulTools = await contentfulClient.tools();
  const unsplashTools = await unsplashClient.tools();
  const customTools = await getCustomTools();

  const tools = {
    ...contentfulTools,
    ...unsplashTools,
    ...customTools,
  };

  const sdk = getSDK(model);

  const result = streamText({
    model: sdk,
    messages,
    tools,
    onFinish: async () => {
      await contentfulClient.close();
      await unsplashClient.close();
    },
  });

  return result.toDataStreamResponse();
}
