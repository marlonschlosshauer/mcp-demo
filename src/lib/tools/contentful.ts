import { createTransport } from "@smithery/sdk/transport.js";
import { experimental_createMCPClient } from "ai";

export const getContentfulMcp = async () => {
  const transport = createTransport(
    "https://server.smithery.ai/@arjunkmrm/contentful-mcp/mcp",
    {
      contentfulManagementAccessToken: process.env.CONTENTFUL_CMA_TOKEN ?? "",
    },
    process.env.SMITHERY_API_KEY ?? "",
  );

  return await experimental_createMCPClient({
    transport,
  });
};
