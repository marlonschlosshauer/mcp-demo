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
    system: `
		Use the spaceId "${process.env.CONTENTFUL_SPACE_ID}" and the environmentId "${process.env.CONTENTFUL_ENVIRONMENT_ID}".
		If the user is talking getting imagse, assume they mean Unsplash.
		If you call a Contentful tool, do not echo out the result.
		For "create_entry" and "update_entry" tool calls, use the "list_content_type" & "get_content_type" tools first to understand the required fields for the entry - make sure you fill the fields with generated (or user specified) data! 
    `,
    messages,
    tools,
    onFinish: async () => {
      await contentfulClient.close();
      await unsplashClient.close();
    },
  });

  return result.toDataStreamResponse();
}
