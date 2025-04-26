import { createTransport } from "@smithery/sdk/transport.js";
import { experimental_createMCPClient } from "ai";

export const getContentfulMcp = async () => {
  const transport = createTransport(
    "https://server.smithery.ai/@ivotoby/contentful-management-mcp-server/mcp",
    {
      host: "https://api.contentful.com",
      spaceId: process.env.CONTENTFUL_SPACE_ID ?? "",
      environmentId: process.env.CONTENTFUL_ENVIRONMENT_ID ?? "",
      managementToken: process.env.CONTENTFUL_CMA_TOKEN ?? "",
    },
    process.env.SMITHERY_API_KEY ?? "",
  );

  return await experimental_createMCPClient({
    transport,
  });
};
